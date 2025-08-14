"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle, UserPlus } from "lucide-react"

const likedYou = [
  {
    id: 1,
    name: "Riya Sharma",
    age: 24,
    image: "/young-indian-woman-smiling.png",
    mutualFriends: 3,
  },
  {
    id: 2,
    name: "Karan Singh",
    age: 27,
    image: "/young-indian-man-casual.png",
    mutualFriends: 1,
  },
]

const yourLikes = [
  {
    id: 3,
    name: "Pooja Patel",
    age: 25,
    image: "/young-indian-professional.png",
    status: "pending",
  },
  {
    id: 4,
    name: "Amit Kumar",
    age: 28,
    image: "/young-indian-businessman.png",
    status: "pending",
  },
]

const matches = [
  {
    id: 5,
    name: "Neha Agarwal",
    age: 26,
    image: "/young-indian-woman-happy.png",
    matchedAt: "2 hours ago",
    lastMessage: "Hey! Thanks for the like 😊",
  },
  {
    id: 6,
    name: "Rohit Verma",
    age: 29,
    image: "/young-indian-man-friendly.png",
    matchedAt: "1 day ago",
    lastMessage: "Would love to chat more!",
  },
]

export default function LikesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Likes & Matches</h1>
        <p className="text-gray-600">See who likes you and manage your connections</p>
      </div>

      <Tabs defaultValue="liked-you" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="liked-you">Liked You ({likedYou.length})</TabsTrigger>
          <TabsTrigger value="your-likes">Your Likes ({yourLikes.length})</TabsTrigger>
          <TabsTrigger value="matches">Matches ({matches.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="liked-you" className="mt-6">
          <div className="grid md:grid-cols-2 gap-4">
            {likedYou.map((person) => (
              <Card key={person.id}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={person.image || "/placeholder.svg"} alt={person.name} />
                      <AvatarFallback>{person.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold">
                        {person.name}, {person.age}
                      </h3>
                      <p className="text-sm text-gray-600">{person.mutualFriends} mutual connections</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" className="flex-1 bg-red-500 hover:bg-red-600">
                      <Heart className="h-4 w-4 mr-2" />
                      Like Back
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="your-likes" className="mt-6">
          <div className="grid md:grid-cols-2 gap-4">
            {yourLikes.map((person) => (
              <Card key={person.id}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={person.image || "/placeholder.svg"} alt={person.name} />
                      <AvatarFallback>{person.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold">
                        {person.name}, {person.age}
                      </h3>
                      <p className="text-sm text-gray-600 capitalize">{person.status}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      View Profile
                    </Button>
                    <Button variant="outline" size="sm">
                      <UserPlus className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="matches" className="mt-6">
          <div className="space-y-4">
            {matches.map((match) => (
              <Card key={match.id}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={match.image || "/placeholder.svg"} alt={match.name} />
                      <AvatarFallback>{match.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold">
                        {match.name}, {match.age}
                      </h3>
                      <p className="text-sm text-gray-600">Matched {match.matchedAt}</p>
                      <p className="text-sm text-gray-800 mt-1">{match.lastMessage}</p>
                    </div>
                    <Button size="sm" className="bg-red-500 hover:bg-red-600">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
