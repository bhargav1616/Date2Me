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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 md:h-8 md:w-8 text-red-500" />
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">date2meaa</h1>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <span className="text-xs md:text-sm text-gray-600 hidden sm:block">Welcome, {user?.name}</span>
              <Button variant="outline" size="sm" onClick={logout} className="text-xs md:text-sm bg-transparent">
                <LogOut className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Logout</span>
                <span className="sm:hidden">Exit</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 md:flex-row flex-col">
        {/* Desktop Sidebar Navigation - Hidden on mobile */}
        <nav className="hidden md:block w-64 bg-white shadow-sm">
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
        <main className="flex-1 p-4 md:p-6 pb-20 md:pb-6">{renderPage()}</main>
      </div>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                className={`flex flex-col items-center justify-center h-16 w-16 rounded-none ${
                  currentPage === item.id ? "text-red-500 bg-red-50" : "text-gray-600"
                }`}
                onClick={() => setCurrentPage(item.id as PageType)}
              >
                <Icon className="h-5 w-5 mb-1" />
                <span className="text-xs">{item.label}</span>
              </Button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
