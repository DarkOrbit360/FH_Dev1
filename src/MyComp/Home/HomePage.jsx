import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaSearch, FaPlus, FaSignInAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white via-indigo-50 to-gray-100 text-gray-900 px-4 animate-gradient">
      {/* Logo / Brand */}
      <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
        <span className="text-indigo-600">FleeHy</span>
      </h1>
      <p className="text-md md:text-lg text-indigo-500 mb-6 font-medium">
        Your gateway to authentic travel experiences
      </p>
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl text-center">
        Discover and host unforgettable travel trips with ease.<br/> Friendly, Affordable and authentic.
      </p>

      {/* Search Bar */}
      <div className="flex w-full max-w-md items-center gap-2 mb-6">
        <Input type="text" placeholder="Search trips, destinations..." className="flex-1" />
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-2">
          <FaSearch />
          Search
        </Button>
      </div>

      {/* Call to Action */}
      <div className="flex gap-4 mb-10">
        <Button variant="default" className="bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-2">
          <FaPlus />
          Create a Trip
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <FaSignInAlt />
          Sign In
        </Button>
      </div>

      {/* Featured Destinations */}
      <div className="w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
          Featured Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Placeholder cards */}
          {["Paris", "Tokyo", "New York"].map((city) => (
            <div key={city} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <FaMapMarkerAlt className="text-indigo-400 text-2xl mb-2" />
              <span className="font-bold text-lg">{city}</span>
              <span className="text-gray-500 text-sm">Explore trips</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}