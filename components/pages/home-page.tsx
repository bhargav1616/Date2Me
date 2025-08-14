"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, X, MapPin } from "lucide-react"

const suggestedProfiles = [
  {
    id: 1,
    name: "Priya Sharma",
    age: 25,
    location: "Mumbai",
    bio: "Love traveling and photography. Looking for someone to explore the world with!",
    image: "/young-indian-woman-smiling.png",
    interests: ["Travel", "Photography", "Food"],
  },
  {
    id: 2,
    name: "Rahul Patel",
    age: 28,
    location: "Ahmedabad",
    bio: "Software engineer who loves hiking and cooking. Let's create beautiful memories together!",
    image: "/young-indian-man-casual.png",
    interests: ["Hiking", "Cooking", "Technology"],
  },
  {
    id: 3,
    name: "Ananya Singh",
    age: 24,
    location: "Delhi",
    bio: "Artist and dancer. Passionate about music and creative expression.",
    image: "/artistic-indian-woman.png",
    interests: ["Art", "Dance", "Music"],
  },
]

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover People</h1>
        <p className="text-gray-600">Find your perfect match from our community</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {suggestedProfiles.map((profile) => (
          <Card key={profile.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img src={profile.image || "/placeholder.svg"} alt={profile.name} className="w-full h-64 object-cover" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <h3 className="font-semibold text-lg">
                    {profile.name}, {profile.age}
                  </h3>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    {profile.location}
                  </div>
                </div>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="text-sm text-gray-600 mb-3">{profile.bio}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {profile.interests.map((interest) => (
                  <span key={interest} className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                    {interest}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <X className="h-4 w-4 mr-2" />
                  Pass
                </Button>
                <Button size="sm" className="flex-1 bg-red-500 hover:bg-red-600">
                  <Heart className="h-4 w-4 mr-2" />
                  Like
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
