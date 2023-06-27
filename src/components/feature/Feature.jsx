import React, { useState, useEffect } from 'react';
import './feature.css';
import responses from './responses.json';

const Feature = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  useEffect(() => {
    const initialBotMessage =
      "Hi, I'm a ChatBot created by David. Ask me about David's skills and experience, and I will do my best to answer!";
    addMessage(initialBotMessage, 'bot');
  }, []);

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
      const entities = data.entities && data.entities;
  
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
  
    if (entities && Object.keys(entities).length > 0) {
      const intentData = responses.intents[intent];
      if (intentData && intentData.entities) {
        for (const entityName in entities) {
          const entityData = intentData.entities[entityName];
          if (entityData) {
            const entityValue = entities[entityName][0].value;
            const entityResponse = entityData[entityValue] && entityData[entityValue].responses[0];
            if (entityResponse) {
              const githubLink = entityData[entityValue].githubLink;
              if (githubLink) {
                return `${entityResponse}\nGithub Link: ${githubLink}`;
              } else {
                return entityResponse;
              }
            }
          }
        }
      }
    }
  
    // If entities are not present or no entity-specific response is found,
    // fallback to intent-specific response
    const intentData = responses.intents[intent];
    if (intentData && intentData.responses.length > 0) {
      return intentData.responses[0];
    }
  
    return "I'm sorry, I'm not sure how to respond to that.";
  };
  
  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
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
