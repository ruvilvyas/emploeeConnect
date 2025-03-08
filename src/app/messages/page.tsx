'use client';

import React, { useState } from 'react';
import { useSession } from 'next-auth/react';

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  receiverId: string;
  content: string;
  timestamp: Date;
}

interface Chat {
  userId: string;
  name: string;
  lastMessage: string;
  unread: number;
  imageUrl: string;
}

export default function MessagesPage() {
  const { data: session } = useSession();
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState('');

  // Mock data - In a real app, this would come from your database
  const chats: Chat[] = [
    {
      userId: '1',
      name: 'John Doe',
      lastMessage: 'Hey, how are you?',
      unread: 2,
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
    },
    {
      userId: '2',
      name: 'Jane Smith',
      lastMessage: 'The project meeting is at 3 PM',
      unread: 0,
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane'
    },
  ];

  const messages: Message[] = [
    {
      id: '1',
      senderId: '1',
      senderName: 'John Doe',
      receiverId: 'current-user',
      content: 'Hey, how are you?',
      timestamp: new Date()
    },
    // Add more mock messages as needed
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;
    
    // In a real app, this would send the message to your backend
    console.log('Sending message:', messageInput);
    setMessageInput('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex h-[600px] bg-white rounded-lg shadow-lg">
        {/* Chat List */}
        <div className="w-1/3 border-r">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">Messages</h2>
          </div>
          <div className="overflow-y-auto h-[calc(100%-4rem)]">
            {chats.map((chat) => (
              <div
                key={chat.userId}
                className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                  selectedChat === chat.userId ? 'bg-gray-50' : ''
                }`}
                onClick={() => setSelectedChat(chat.userId)}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={chat.imageUrl}
                    alt={chat.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold">{chat.name}</h3>
                      {chat.unread > 0 && (
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 truncate">
                      {chat.lastMessage}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col">
          {selectedChat ? (
            <>
              <div className="p-4 border-b">
                <div className="flex items-center space-x-3">
                  <img
                    src={chats.find(c => c.userId === selectedChat)?.imageUrl}
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                  <h2 className="text-lg font-semibold">
                    {chats.find(c => c.userId === selectedChat)?.name}
                  </h2>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.senderId === 'current-user'
                        ? 'justify-end'
                        : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        message.senderId === 'current-user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100'
                      }`}
                    >
                      <p>{message.content}</p>
                      <p className="text-xs mt-1 opacity-70">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="p-4 border-t">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Send
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              Select a chat to start messaging
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 