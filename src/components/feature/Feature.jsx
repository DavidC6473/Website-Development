import React, { useState, useEffect } from 'react';
import './feature.css';
import responses from './responses.json';

const Feature = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  useEffect(() => {
    // Add initial bot message when component mounts
    const initialBotMessage = "Hi, I'm David's personal ChatBot. Ask me about David's skills and experience!";
    addMessage(initialBotMessage, 'bot');
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (userMessage.trim() === '') {
      return;
    }

    // Clear the input field
    setUserMessage('');

    // Add user message to the chat
    addMessage(userMessage, 'user');

    // Send user message to wit.ai and get bot response
    const botMessage = await getBotMessage(userMessage);

    // Add bot message to the chat
    addMessage(botMessage, 'bot');
  };

  const addMessage = (message, sender) => {
    const newMessage = {
      text: message,
      sender: sender
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const getBotMessage = async (message) => {
    const url = `https://api.wit.ai/message?v=20220618&q=${encodeURIComponent(message)}`;

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: 'Bearer ZLLZJLYOAQR7X5462HBE7T34LG7ZZXIT',
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();

      const intent = data.intents && data.intents[0] && data.intents[0].name;
      const botMessage = getResponse(intent);
      return botMessage;
    } catch (error) {
      console.error('Error communicating with wit.ai:', error);
      return "Sorry, I couldn't understand your message.";
    }
  };

  const getResponse = (intent) => {
    const intentData = responses.intents.find((item) => item.name === intent);
    return intentData ? getRandomMessage(intentData.messages) : "Sorry, I couldn't understand your message.";
  };

  const getRandomMessage = (messages) => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
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
