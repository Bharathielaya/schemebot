import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, MicOff, MoreVertical, Bot, User } from 'lucide-react';
import { useLanguage } from '../App';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  typing?: boolean;
}

const ChatbotInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m SchemeBot, your AI assistant for government schemes. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'I understand you\'re looking for information about government schemes. Based on your query, I can help you with scheme recommendations, eligibility criteria, and application processes. Would you like me to check your profile for personalized recommendations?',
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const quickPrompts = [
    'Show me schemes for women entrepreneurs',
    'What are education schemes available?',
    'Help me with health benefits',
    'Employment opportunities for women'
  ];

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-4rem)] flex flex-col">
      {/* Chat Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">SchemeBot AI</h2>
            <p className="text-sm text-emerald-600">Online • Ready to help</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
            {language === 'hi' ? 'हिंदी' : 'English'}
          </div>
          <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className="flex items-end space-x-2 max-w-xs sm:max-w-md lg:max-w-lg">
              {message.sender === 'bot' && (
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}
              
              <div
                className={`px-4 py-2 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-emerald-600 text-white rounded-br-sm'
                    : 'bg-white text-gray-900 shadow-sm border border-gray-100 rounded-bl-sm'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-emerald-100' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              
              {message.sender === 'user' && (
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-end space-x-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white px-4 py-2 rounded-2xl rounded-bl-sm shadow-sm border border-gray-100">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts */}
      <div className="px-4 py-2 bg-white border-t border-gray-200">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {quickPrompts.map((prompt, index) => (
            <button
              key={index}
              onClick={() => setInputText(prompt)}
              className="flex-shrink-0 px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-end space-x-2">
          <div className="flex-1 min-w-0">
            <div className="relative flex items-end bg-gray-100 rounded-2xl">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message about government schemes..."
                className="flex-1 resize-none bg-transparent px-4 py-3 placeholder-gray-500 focus:outline-none max-h-32"
                rows={1}
                style={{ minHeight: '44px' }}
              />
              
              <button
                onClick={toggleRecording}
                className={`p-2 m-2 rounded-full transition-colors ${
                  isRecording
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'text-gray-500 hover:bg-gray-200'
                }`}
              >
                {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim()}
            className={`p-3 rounded-full transition-colors ${
              inputText.trim()
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        
        <p className="text-xs text-gray-500 mt-2 text-center">
          SchemeBot can make mistakes. Please verify important information.
        </p>
      </div>
    </div>
  );
};

export default ChatbotInterface;