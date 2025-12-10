"use client"

import { Facebook, Twitter, Instagram } from "lucide-react"
import { FiStar } from "react-icons/fi"

const teamMembers = [
  {
    id: 1,
    name: "John Peterson",
    title: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  },
  {
    id: 2,
    name: "William Lan",
    title: "General Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
  },
  {
    id: 3,
    name: "Sebastian",
    title: "General Manager",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
  },
  {
    id: 4,
    name: "Peter Morgan",
    title: "General Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  },
]

export default function TeamSection() {
  return (
    <div className="w-full px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center text-center">
          {/* Star Icon */}
          <div className="w-10 h-10 rounded-full border border-[#C38154] flex items-center justify-center mb-4">
            <FiStar className="text-[#C38154] text-lg stroke-1" />
          </div>

          {/* Label */}
          <p className="text-base text-[#C38154] tracking-wider font-normal mb-6">
            <span className="font-bold">Our Team</span>
          </p>

          {/* Main Heading */}
          <div className="pb-0 px-4">
            <h2 className="font-gilda text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-6">
              Passionate Experts, Exceptional Service
            </h2>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col overflow-hidden">
              {/* Image Container with Social Icons */}
              <div className="relative w-full overflow-hidden bg-gray-200">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="aspect-[4/4.5] w-full object-cover"
                />

                {/* Social Media Icons */}
                <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-3">
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D2A07F] text-white transition-transform hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D2A07F] text-white transition-transform hover:scale-110"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D2A07F] text-white transition-transform hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>

              {/* Name and Title Section */}
              <div className="bg-[#0F4D2F] px-6 py-4 text-center text-white">
                <h3 className="font-serif text-xl font-normal">{member.name}</h3>
                <p className="mt-2 text-sm font-light text-gray-300 font-roboto">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
