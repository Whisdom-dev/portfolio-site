import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Supabase, and Stripe integration. Features include user authentication, product management, and order processing.",
      image: "/image.png?height=300&width=500",
      technologies: ["React", "Supabase", "PostgreSQL", "Stripe", "Tailwind CSS"],
      githubUrl: "https://github.com/Whisdom-dev/E-Grocery",
      liveUrl: "https://e-groceries.vercel.app/",
    },
    {
      title: "Bolt Booking Platform",
      description:
        "Bolt Booking Platform is a fast and intuitive booking solution built with React and Supabase. It allows users to book appointments, manage schedules, and receive real-time notifications. The platform features user authentication, calendar integration, analytics dashboard, and a responsive UI for seamless booking experiences.",
      image: "/imf.png?height=300&width=500",
      technologies: ["React", "Supabase", "Tailwind CSS", "TypeScript"],
      githubUrl: "https://github.com/Whisdom-dev/bolt-booking",
      liveUrl: "https://bolt-booking.vercel.app/",
    },
    {
      title: "Rental Platform",
      description:
        "A modern rental platform enabling users to list, discover, and book properties. Built with Next.js, Supabase for authentication and data, and styled with Tailwind CSS. Features include property search, booking management, and secure payments.",
      image: "/img.png?height=300&width=500",
      technologies: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
      githubUrl: "https://github.com/Whisdom-dev/rent-direct",
      liveUrl: "https://rent-dyrrect.netlify.app/",
    },
    {
      title: "Sermon Downloading Website",
      description:
        "A platform for discovering and downloading sermons, built with Next.js, Supabase, and PostgreSQL. Features include advanced search, user authentication, and high-speed downloads. Designed for churches and ministries to share audio and video sermons with a global audience.",
      image: "/ime.png?height=300&width=500",
      technologies: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
      githubUrl: "https://github.com/Whisdom-dev/sermon-hug",
      liveUrl: "https://sermon-downloads.vercel.app/",
    },
    {
      title: "Modern E-Commerce Site",
      description:
        "A scalable e-commerce platform built with React and Stripe integration. Supports product listings, secure checkout, and order management. Features a modern UI, responsive design, and seamless payment processing.",
      image: "/imm.png?height=300&width=500",
      technologies: ["React", "Stripe", "Tailwind CSS", "TypeScript"],
      githubUrl: "https://github.com/Whisdom-dev/auto-graph",
      liveUrl: "https://modern-ecommerce.vercel.app/",
    },
    {
      title: "AI Text Processor",
      description:
        "An advanced AI-powered text processing platform built with Next.js, Supabase, Tailwind CSS, and the OpenAI API. Users can generate, summarize, and analyze text with real-time feedback. Features include user authentication, document history, and a modern, responsive UI for seamless text manipulation.",
      image: "/igg.png?height=300&width=500",
      technologies: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript", "OpenAI API"],
      githubUrl: "https://github.com/Whisdom-dev/ai-text-processor",
      liveUrl: "https://ai-text-processor.vercel.app/",
    },
  ]

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">Featured Projects</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for creating exceptional digital experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-500 tracking-wide">
                      PROJECT {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="w-8 h-px bg-gray-300"></div>
                  </div>
                  <CardTitle className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="pb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-gray-300 text-gray-600 text-xs hover:bg-gray-100 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-4 border-t border-gray-100">
                  <div className="flex gap-3 w-full">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-200 bg-transparent"
                      asChild
                    >
                      <Link href={project.githubUrl}>
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-black text-white hover:bg-gray-800 transition-all duration-200"
                      asChild
                    >
                      <Link href={project.liveUrl}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
