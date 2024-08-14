import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Message {
    sender: string;
    content: string;
}

const Chat = ({ userId }) => {
    const { roomId } = useParams<{ roomId: string }>();
    const [messages, setMessages] = useState<Message[]>([]);
    const [message, setMessage] = useState('');
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const newSocket = new WebSocket(`ws://localhost:8000/ws/chat/${roomId}/`);
        setSocket(newSocket);

        newSocket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, { sender: 'User', content: data.message }]);
        };

        return () => {
            newSocket.close();
        };
    }, [roomId]);

    const sendMessage = () => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({
                'message': message,
                'sender_id': userId
            }));
            setMessage('');
        } else {
            console.error('Socket is not open');
        }
    };

    return (
        <div>
            <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid black', padding: '10px' }}>
                {messages.map((msg, index) => (
                    <div key={index}><strong>{msg.sender}:</strong> {msg.content}</div>
                ))}
            </div>
            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
