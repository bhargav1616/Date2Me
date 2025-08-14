"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, MessageCircle, Star } from "lucide-react"
import AuthModal from "@/components/auth-modal"
import MainApp from "@/components/main-app"
import { useAuth } from "@/contexts/auth-context"

export default function HomePage() {
  const [showAuth, setShowAuth] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "signup">("login")
  const { isAuthenticated } = useAuth()

  const handleAuthClick = (mode: "login" | "signup") => {
    setAuthMode(mode)
    setShowAuth(true)
  }

  if (isAuthenticated) {
    return <MainApp />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">Date2Me</h1>
          </div>
          <div className="space-x-4">
            <Button variant="outline" onClick={() => handleAuthClick("login")}>
              Log In
            </Button>
            <Button onClick={() => handleAuthClick("signup")} className="bg-red-500 hover:bg-red-600">
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Find Your Perfect Match</h2>
          <p className="text-xl text-gray-600 mb-8">
            Connect with amazing people, make new friends, and find meaningful relationships on date2meaa
          </p>
          <Button
            size="lg"
            onClick={() => handleAuthClick("signup")}
            className="bg-red-500 hover:bg-red-600 text-lg px-8 py-3"
          >
            Start Your Journey
          </Button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <CardTitle>Meet New People</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Discover amazing people in your area and expand your social circle</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <MessageCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <CardTitle>Chat & Connect</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Start meaningful conversations and build lasting connections</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Star className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <CardTitle>Find Your Match</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Use our smart matching system to find people who share your interests</CardDescription>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Auth Modal */}
      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} mode={authMode} onModeChange={setAuthMode} />
    </div>
  )
}
