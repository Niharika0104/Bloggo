'use client';
import axios from "axios";
import { useState } from "react";
import ReactMarkdown from 'react-markdown';

interface Message {
    type: 'user' | 'ai';
    text: string;
}

export default function ChatAssistant() {
    const [query, setQuery] = useState<string>("");
    const [conversation, setConversation] = useState<Message[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async () => {
        if (query.trim() === "") return;
        
        // Add user query to conversation
        setConversation(prev => [...prev, { type: 'user', text: query }]);
        setLoading(true);
        
        try {
            const response = await axios.post('/api/ai/data', {
                query: query
            });
            console.log(response.data.response[0].output);
            // Add AI response to conversation
            setConversation(prev => [...prev, { type: 'ai', text: response.data.response[0].output }]);
        } catch (error) {
            console.error("Error fetching AI response:", error);
            setConversation(prev => [...prev, { type: 'ai', text: "Error fetching response" }]);
        } finally {
            setQuery("");
            setLoading(false);
        }
    };

    const UserMessage = ({ text }: { text: string }) => (
        <div className="flex justify-end bg-transparent">
        <div className="inline-block rounded-lg px-5 py-3 mb-4 bg-blue-100 border border-blue-300">
            <p>{text}</p>
        </div>
    </div>
    );

    const AIMessage = ({ text }: { text: string }) => (
        <div className="rounded-lg px-5 py-3 mb-4 max-w-max bg-gray-100 border border-gray-300 self-start">
            <ReactMarkdown>{text}</ReactMarkdown>
        </div>
    );

    return (
        <div className="w-[70%] mx-auto h-screen flex flex-col">
            <div className=" p-4 mt-5">
                {conversation.length === 0 && (
                    <div className="flex rounded-lg px-5 py-3 bg-gray-100 border border-gray-300 mb-4">
                        <p>Hello! I'm your blog writing assistant. I can help you craft beautiful blog posts. How can I assist you today?</p>
                    </div>
                )}

                {conversation.map((msg, index) => (
                    msg.type === 'user' ? (
                        <UserMessage key={index} text={msg.text} />
                    ) : (
                        <AIMessage key={index} text={msg.text} />
                    )
                ))}

                {loading && (
                    <div className="rounded-lg px-5 py-3 mb-4 max-w-max bg-gray-100 border border-gray-300 self-start">
                        <p>Loading...</p>
                    </div>
                )}
            </div>

            <div className="fixed bottom-0   left-0 w-full flex justify-center bg-white border-t border-gray-300 p-3">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter your prompt here"
                    className="flex-1 p-2 border border-gray-300 rounded-lg placeholder:text-gray-500"
                />
                <button
                    className="bg-indigo-600 px-4 py-2 text-white rounded-lg ml-3 disabled:bg-gray-200 cursor-pointer disabled:text-gray-600 disabled:cursor-not-allowed"
                    disabled={query.length === 0 || loading}
                    onClick={handleSubmit}
                >
                    Send
                </button>
            </div>
        </div>
    );
}
