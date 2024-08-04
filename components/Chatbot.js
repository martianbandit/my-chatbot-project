import { useState } from 'react';

export default function Chatbot() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    const res = await fetch('/api/chat/generateResponse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <div>
      <h1>Chatbot</h1>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message" />
      <button onClick={sendMessage}>Send</button>
      <p>{response}</p>
    </div>
  );
}