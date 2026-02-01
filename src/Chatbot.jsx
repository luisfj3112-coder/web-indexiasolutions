import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState([
        { text: "¡Hola! Soy el asistente IA de Idexia Solutions. ¿En qué puedo ayudarte hoy?", isBot: true }
    ]);
    const scrollRef = useRef(null);

    const webhookUrl = "https://n-n8n.ywrumf.easypanel.host/webhook/a3e76cac-51b0-4e93-9639-e45668f9ce3e/chat";

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        const userMessage = inputValue.trim();
        setInputValue('');
        setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
        setIsLoading(true);

        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage })
            });

            if (!response.ok) throw new Error('Error en el servidor');

            const data = await response.json();
            // Assuming the webhook returns text in a field like 'output' or 'response'
            // If it returns a simple string or a specific object, adjust here.
            const botResponse = data.output || data.response || data.text || "Lo siento, hubo un problema al procesar tu mensaje.";

            setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
        } catch (error) {
            console.error("Error connecting to webhook:", error);
            setMessages(prev => [...prev, { text: "Lo siento, ha ocurrido un error al conectar con mi cerebro digital.", isBot: true }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={`chatbot-wrapper ${isOpen ? 'open' : ''}`}>
            <button className={`chat-toggle-btn ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <span className="icon">{isOpen ? '↓' : '💬'}</span>
                {!isOpen && <span className="pulse"></span>}
            </button>

            {isOpen && (
                <div className="chat-window glass">
                    <div className="chat-header">
                        <h4>Idexia <span className="text-gradient">Asistente</span></h4>
                        <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
                    </div>

                    <div className="chat-messages" ref={scrollRef}>
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`message ${msg.isBot ? 'bot' : 'user'}`}>
                                {msg.text}
                            </div>
                        ))}
                        {isLoading && (
                            <div className="message bot loading">
                                <span className="dot">.</span><span className="dot">.</span><span className="dot">.</span>
                            </div>
                        )}
                    </div>

                    <form className="chat-input-area" onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            placeholder="Escribe tu mensaje..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            disabled={isLoading}
                        />
                        <button type="submit" disabled={isLoading || !inputValue.trim()}>
                            {isLoading ? '...' : '→'}
                        </button>
                    </form>

                    <div className="chat-footer">
                        <button className="minimize-link" onClick={() => setIsOpen(false)}>Minimizar Chat</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
