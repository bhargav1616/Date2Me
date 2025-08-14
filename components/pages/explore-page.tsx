"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Filter } from "lucide-react"

const allProfiles = [
  {
    id: 1,
    name: "Kavya Reddy",
    age: 26,
    location: "Bangalore",
    bio: "Tech enthusiast and yoga lover",
    image: "/young-indian-professional.png",
    interests: ["Technology", "Yoga", "Reading"],
    distance: "2 km away",
  },
  {
    id: 2,
    name: "Arjun Mehta",
    age: 29,
    location: "Pune",
    bio: "Fitness trainer and adventure seeker",
    image: "/young-indian-man-fitness.png",
    interests: ["Fitness", "Adventure", "Sports"],
    distance: "5 km away",
  },
  {
    id: 3,
    name: "Sneha Gupta",
    age: 23,
    location: "Hyderabad",
    bio: "Medical student with a passion for helping others",
    image: "/young-indian-woman-medical-student.png",
    interests: ["Medicine", "Volunteering", "Books"],
    distance: "8 km away",
  },
  {
    id: 4,
    name: "Vikram Joshi",
    age: 31,
    location: "Chennai",
    bio: "Chef and food blogger",
    image: "/young-indian-chef.png",
    interests: ["Cooking", "Food", "Travel"],
    distance: "12 km away",
  },
]

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredProfiles, setFilteredProfiles] = useState(allProfiles)

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    const filtered = allProfiles.filter(
      (profile) =>
        profile.name.toLowerCase().includes(term.toLowerCase()) ||
        profile.location.toLowerCase().includes(term.toLowerCase()) ||
        profile.interests.some((interest) => interest.toLowerCase().includes(term.toLowerCase())),
    )
    setFilteredProfiles(filtered)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore</h1>
        <p className="text-gray-600">Discover people in your area and beyond</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search by name, location, or interests..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProfiles.map((profile) => (
          <Card key={profile.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <div className="relative">
              <img src={profile.image || "/placeholder.svg"} alt={profile.name} className="w-full h-48 object-cover" />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-1">
                {profile.name}, {profile.age}
              </h3>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                {profile.location}
              </div>
              <p className="text-sm text-gray-600 mb-3">{profile.bio}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {profile.interests.slice(0, 2).map((interest) => (
                  <Badge key={interest} variant="secondary" className="text-xs">
                    {interest}
                  </Badge>
                ))}
                {profile.interests.length > 2 && (
                  <Badge variant="secondary" className="text-xs">
                    +{profile.interests.length - 2}
                  </Badge>
                )}
              </div>
              <p className="text-xs text-gray-500">{profile.distance}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProfiles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No profiles found matching your search.</p>
        </div>
      )}
    </div>
  )
}
