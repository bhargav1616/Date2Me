"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Camera, Edit, Save, X } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export default function ProfilePage() {
  const { user, updateProfile } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || "",
    bio: user?.bio || "Tell people about yourself...",
    age: user?.age || "",
    location: user?.location || "",
  })

  const interests = ["Travel", "Photography", "Music", "Fitness", "Cooking", "Reading"]
  const [selectedInterests, setSelectedInterests] = useState<string[]>(["Travel", "Photography"])

  const handleSave = () => {
    updateProfile({
      name: formData.name,
      bio: formData.bio,
      age: formData.age ? Number(formData.age) : undefined,
      location: formData.location,
    })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setFormData({
      name: user?.name || "",
      bio: user?.bio || "Tell people about yourself...",
      age: user?.age?.toString() || "",
      location: user?.location || "",
    })
    setIsEditing(false)
  }

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) => (prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
        <p className="text-gray-600">Manage your profile information</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Profile Picture & Basic Info */}
        <Card className="lg:col-span-1">
          <CardContent className="p-6 text-center">
            <div className="relative inline-block mb-4">
              <Avatar className="h-32 w-32">
                <AvatarImage src={user?.avatar || "/placeholder.svg"} alt={user?.name} />
                <AvatarFallback className="text-2xl">{user?.name?.charAt(0)}</AvatarFallback>
              </Avatar>
              <Button
                size="sm"
                className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0 bg-transparent"
                variant="outline"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <h2 className="text-xl font-semibold mb-2">{user?.name}</h2>
            <p className="text-gray-600 mb-4">{user?.email}</p>

            {!isEditing ? (
              <Button onClick={() => setIsEditing(true)} className="w-full">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            ) : (
              <div className="space-y-2">
                <Button onClick={handleSave} className="w-full bg-red-500 hover:bg-red-600">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
                <Button onClick={handleCancel} variant="outline" className="w-full bg-transparent">
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Profile Details */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                disabled={!isEditing}
                placeholder="Enter your city"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                disabled={!isEditing}
                rows={4}
                placeholder="Tell people about yourself..."
              />
            </div>

            <div className="space-y-3">
              <Label>Interests</Label>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <Badge
                    key={interest}
                    variant={selectedInterests.includes(interest) ? "default" : "outline"}
                    className={`cursor-pointer ${
                      selectedInterests.includes(interest) ? "bg-red-500 hover:bg-red-600" : "hover:bg-gray-100"
                    } ${!isEditing ? "cursor-default" : ""}`}
                    onClick={() => isEditing && toggleInterest(interest)}
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
