"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Home, Compass, MessageCircle, User, LogOut } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import HomePage from "@/components/pages/home-page"
import ExplorePage from "@/components/pages/explore-page"
import LikesPage from "@/components/pages/likes-page"
import ChatPage from "@/components/pages/chat-page"
import ProfilePage from "@/components/pages/profile-page"

type PageType = "home" | "explore" | "likes" | "chat" | "profile"

export default function MainApp() {
  const [currentPage, setCurrentPage] = useState<PageType>("home")
  const { user, logout } = useAuth()

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />
      case "explore":
        return <ExplorePage />
      case "likes":
        return <LikesPage />
      case "chat":
        return <ChatPage />
      case "profile":
        return <ProfilePage />
      default:
        return <HomePage />
    }
  }

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "explore", label: "Explore", icon: Compass },
    { id: "likes", label: "Likes", icon: Heart },
    { id: "chat", label: "Chat", icon: MessageCircle },
    { id: "profile", label: "Profile", icon: User },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-red-500" />
              <h1 className="text-2xl font-bold text-gray-900">Date2Me</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {user?.name}</span>
              <Button variant="outline" size="sm" onClick={logout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <nav className="w-64 bg-white shadow-sm min-h-screen">
          <div className="p-4">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.id}>
                    <Button
                      variant={currentPage === item.id ? "default" : "ghost"}
                      className={`w-full justify-start ${
                        currentPage === item.id ? "bg-red-500 hover:bg-red-600 text-white" : ""
                      }`}
                      onClick={() => setCurrentPage(item.id as PageType)}
                    >
                      <Icon className="h-5 w-5 mr-3" />
                      {item.label}
                    </Button>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6">{renderPage()}</main>
      </div>
    </div>
  )
}
