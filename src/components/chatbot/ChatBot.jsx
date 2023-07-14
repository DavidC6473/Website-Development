import React, { useState, useEffect, useRef } from 'react';
import './chatbot.css';
import responses from './responses.json';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [collapsed, setCollapsed] = useState(true);
  const messageContainerRef = useRef(null);

  const renderers = {
    link: (props) => (
      <a href={props.href} target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
        {props.children}
      </a>
    ),
  };

  useEffect(() => {
    const storedMessages = localStorage.getItem('chatMessages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    } else {
      const initialBotMessage =
        "Hi, I'm a ChatBot created by David. Ask me about David's skills and experience, and I will do my best to answer!";
      addMessage(initialBotMessage, 'bot');
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      const messages = Array.from(messageContainerRef.current.getElementsByClassName('user'));
      if (messages.length > 0) {
        const latestUserMessage = messages[messages.length - 1];
        latestUserMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    if (userMessage.trim() === '') {
      return;
    }

    setUserMessage('');

    addMessage(userMessage, 'user');

    const botMessage = await getBotMessage(userMessage);

    addMessage(botMessage, 'bot');
  };

  const addMessage = (message, sender) => {
    const newMessage = {
      text: message,
      sender: sender,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const getBotMessage = async (message) => {
    const url = `https://api.wit.ai/message?v=20220618&q=${encodeURIComponent(
      message
    )}`;

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: 'Bearer MHQJU42RLTXYQU7YD7O6ZNBDJYQP7HDI',
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      const intent = data.intents && data.intents[0] && data.intents[0].name;
      const entities =
        data.entities &&
        Object.keys(data.entities)
          .map((entityName) => data.entities[entityName][0].name)
          .join(', ');

      const botMessage = getResponse(intent, entities);
      return botMessage;
    } catch (error) {
      console.error('Error communicating with wit.ai:', error);
      return "I'm sorry, I'm having trouble understanding you at the moment.";
    }
  };

  const getResponse = (intent, entities) => {
    console.log('Intent:', intent);
    console.log('Entities:', entities);
  
    if (entities) {
      const entityNames = entities.split(', ');
  
      for (const entityName of entityNames) {
        const entityData = responses.entities && responses.entities[entityName];
  
        if (entityData && entityData.responses && entityData.responses.length > 0) {
          return entityData.responses[0].replace(
            /\[GitHub Link\]\((.*?)\)/g,
            '<a href="$1" target="_blank" rel="noopener noreferrer" style="color: #b2a89f; text-decoration: underline; text-decoration-color: #f06a00; font-weight: bold;">Here</a>'
          );
        }
      }
    }
  
    if (intent) {
      const intentData = responses.intents && responses.intents[intent];
  
      if (intentData && intentData.responses && intentData.responses.length > 0) {
        return intentData.responses[0].replace(
          /\[GitHub Link\]\((.*?)\)/g,
          '<a href="$1" target="_blank" rel="noopener noreferrer" style="color: #b2a89f; text-decoration: underline; text-decoration-color: #f06a00; font-weight: bold;">Here</a>'
        );
      }
    }
  
    return "I'm sorry, I'm not sure how to respond to that.";
  };
  
  const toggleCollapsed = () => {
    setCollapsed((prevState) => !prevState);
  };

  const renderMessages = () => {
    return messages.map((message, index) => (
      <div key={index} className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}>
        {message.sender === 'user' ? (
          message.text
        ) : (
          <div dangerouslySetInnerHTML={{ __html: message.text }}></div>
        )}
      </div>
    ));
  };

  return (
    <div
      className={`chatbot-container ${collapsed ? 'collapsed' : ''}`}
      style={{ width: collapsed ? 'fit-content' : '400px' }}
    >
      <div className="chatbot-header" onClick={toggleCollapsed}>
        <div className="collapse-button-container">
          <button className="collapse-button">{collapsed ? '+' : '-'}</button>
          {collapsed && <div className="chatbot-text">ChatBot</div>}
        </div>
      </div>
      {!collapsed && (
        <div className="chatbot-messages" ref={messageContainerRef}>
          {renderMessages()}
        </div>
      )}
      {!collapsed && (
        <form onSubmit={sendMessage}>
          <input
            className='your-message'
            type="text"
            placeholder="Type your message..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
          <button className='submit-button' type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default ChatBot;







