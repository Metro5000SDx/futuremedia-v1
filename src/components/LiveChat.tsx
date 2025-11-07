'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Minimize2, Maximize2, Phone, Mail, User } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'agent' | 'system';
  content: string;
  timestamp: Date;
  sender?: string;
}

const quickResponses = [
  'I need information about advertising rates',
  'I want to request a media kit',
  'I\'d like to schedule a consultation',
  'What are your audience demographics?'
];

const agents = [
  { name: 'Sarah K.', status: 'online', role: 'Advertising Specialist' },
  { name: 'John M.', status: 'online', role: 'Media Consultant' },
  { name: 'Lisa D.', status: 'away', role: 'Account Manager' }
];

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'system',
      content: 'Welcome to Future Media! How can we help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentAgent, setCurrentAgent] = useState(agents[0]);

  useEffect(() => {
    // Simulate agent assignment
    const timer = setTimeout(() => {
      setMessages(prev => [...prev, {
        id: '2',
        type: 'agent',
        content: `Hi! I'm ${currentAgent.name}, ${currentAgent.role}. I'm here to help you with any questions about our advertising solutions.`,
        timestamp: new Date(),
        sender: currentAgent.name
      }]);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate agent response
    setTimeout(() => {
      setIsTyping(false);
      const agentResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'agent',
        content: getAutomatedResponse(inputMessage),
        timestamp: new Date(),
        sender: currentAgent.name
      };
      setMessages(prev => [...prev, agentResponse]);
    }, 1500);
  };

  const getAutomatedResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('rate') || lowerMessage.includes('price')) {
      return 'Our advertising rates start from N$ 2,500 for basic radio packages. For detailed pricing, I can send you our complete rate card or connect you with a sales representative. Would you like me to do that?';
    }
    if (lowerMessage.includes('media kit')) {
      return "I'd be happy to send you our media kit! It includes detailed audience demographics, advertising rates, and case studies. What's the best email address to send it to?";
    }
    if (lowerMessage.includes('consultation') || lowerMessage.includes('schedule')) {
      return 'Great! I can schedule a free 30-minute consultation with one of our advertising specialists. What day and time works best for you?';
    }
    if (lowerMessage.includes('audience') || lowerMessage.includes('demographic')) {
      return 'We reach over 2 million Namibians across our 6 radio stations and digital platforms. Our primary demographic is 25-44 year olds, with strong reach across all age groups. Would you like specific demographic data for a particular station?';
    }
    return 'Thank you for your message! I\'ll be happy to help you with information about our advertising solutions. Could you tell me more about what you\'re looking for?';
  };

  const handleQuickResponse = (response: string) => {
    setInputMessage(response);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`fixed bottom-6 right-6 z-50 bg-background rounded-2xl shadow-2xl border ${
              isMinimized ? 'w-80' : 'w-96 h-[600px]'
            }`}
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-primary-foreground ${
                    currentAgent.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
                  }`} />
                </div>
                <div>
                  <div className="font-semibold">{currentAgent.name}</div>
                  <div className="text-xs opacity-90">{currentAgent.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="h-[400px] overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[80%] ${
                        message.type === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted'
                      } rounded-2xl px-4 py-2`}>
                        {message.sender && (
                          <div className="text-xs opacity-70 mb-1">{message.sender}</div>
                        )}
                        <div className="text-sm">{message.content}</div>
                        <div className="text-xs opacity-70 mt-1">
                          {formatTime(message.timestamp)}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-muted rounded-2xl px-4 py-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Quick Responses */}
                <div className="px-4 pb-2">
                  <div className="flex flex-wrap gap-2">
                    {quickResponses.map((response) => (
                      <Button
                        key={response}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickResponse(response)}
                        className="text-xs h-7"
                      >
                        {response}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Type your message..."
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={sendMessage} size="icon">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-4 rounded-full shadow-lg premium-shadow"
            size="lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Live Chat
          </Button>
        </motion.div>
      )}
    </>
  );
}