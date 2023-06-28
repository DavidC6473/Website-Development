import React, { useState, useEffect, useRef } from 'react';
import './feature.css';
import responses from './responses.json';

const Feature = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const messageContainerRef = useRef(null);

  useEffect(() => {
    const initialBotMessage =
      "Hi, I'm a ChatBot created by David. Ask me about David's skills and experience, and I will do my best to answer!";
    addMessage(initialBotMessage, 'bot');
  }, []);

  useEffect(() => {
    scrollToBottom();
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
      const entities = data.entities && Object.keys(data.entities).map(entityName => data.entities[entityName][0].name).join(', ');

      const botMessage = getResponse(intent, entities);
      return botMessage;
    } catch (error) {
      console.error('Error communicating with wit.ai:', error);
      return "I'm sorry, I'm having trouble understanding you at the moment.";
    }
  };

  const getResponse = (intent, entities) => {
    console.log("Intent:", intent);
    console.log("Entities:", entities);

    if (entities) {
      const entityNames = entities.split(', ');

      for (const entityName of entityNames) {
        const entityData = responses.entities && responses.entities[entityName];

        if (entityData && entityData.responses && entityData.responses.length > 0) {
          return entityData.responses[0];
        }
      }
    }

    if (intent) {
      const intentData = responses.intents && responses.intents[intent];

      if (intentData && intentData.responses && intentData.responses.length > 0) {
        return intentData.responses[0];
      }
    }

    return "I'm sorry, I'm not sure how to respond to that.";
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages" ref={messageContainerRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Type your message..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Feature;
