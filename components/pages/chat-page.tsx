"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Search } from "lucide-react"

const conversations = [
  {
    id: 1,
    name: "Priya Sharma",
    image: "/young-indian-woman-smiling.png",
    lastMessage: "Hey! How was your day?",
    time: "2m ago",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Rahul Patel",
    image: "/young-indian-man-casual.png",
    lastMessage: "That sounds amazing! 😊",
    time: "1h ago",
    unread: 0,
    online: false,
  },
  {
    id: 3,
    name: "Ananya Singh",
    image: "/artistic-indian-woman.png",
    lastMessage: "Would love to meet up sometime",
    time: "3h ago",
    unread: 1,
    online: true,
  },
]

const messages = [
  {
    id: 1,
    sender: "them",
    message: "Hey! How was your day?",
    time: "2:30 PM",
  },
  {
    id: 2,
    sender: "me",
    message: "It was great! Just finished work. How about you?",
    time: "2:32 PM",
  },
  {
    id: 3,
    sender: "them",
    message: "Same here! Want to grab coffee sometime this week?",
    time: "2:35 PM",
  },
]

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(conversations[0])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage("")
    }
  }

  return (
    <div className="max-w-6xl mx-auto h-[calc(100vh-200px)]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages</h1>
        <p className="text-gray-600">Chat with your matches</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        {/* Chat List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search conversations..." className="pl-10" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`p-4 cursor-pointer hover:bg-gray-50 border-b ${
                    selectedChat.id === conversation.id ? "bg-red-50" : ""
                  }`}
                  onClick={() => setSelectedChat(conversation)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={conversation.image || "/placeholder.svg"} alt={conversation.name} />
                        <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      {conversation.online && (
                        <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-sm truncate">{conversation.name}</h3>
                        <span className="text-xs text-gray-500">{conversation.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                        {conversation.unread > 0 && (
                          <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {conversation.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Window */}
        <Card className="lg:col-span-2 flex flex-col">
          <CardHeader className="border-b">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={selectedChat.image || "/placeholder.svg"} alt={selectedChat.name} />
                <AvatarFallback>{selectedChat.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{selectedChat.name}</h3>
                <p className="text-sm text-gray-600">{selectedChat.online ? "Online" : "Offline"}</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === "me" ? "bg-red-500 text-white" : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="text-sm">{message.message}</p>
                    <p className={`text-xs mt-1 ${message.sender === "me" ? "text-red-100" : "text-gray-500"}`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} className="bg-red-500 hover:bg-red-600">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
