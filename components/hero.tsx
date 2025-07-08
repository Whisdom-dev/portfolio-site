import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-white relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gray-200 rotate-45 opacity-30"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-black opacity-5 rotate-12"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-gray-300 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-gray-100 rotate-45"></div>

        {/* Floating lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent animate-float"></div>
        <div
          className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-6 py-2 border border-gray-300 rounded-full text-sm font-medium mb-8 bg-white shadow-sm">
            <div className="w-2 h-2 bg-black rounded-full mr-3 animate-pulse"></div>
            Available for new opportunities
          </div>

          <h1 className="text-5xl sm:text-4xl lg:text-6xl font-bold mb-8 tracking-tight">
            Hi, I'm{" "}
            <span className="relative">
              Whisdom Ukaegbu
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-black"></div>
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 font-light mb-6 tracking-wide">
            Full Stack Developer & UI/UX Designer
          </p>

          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            I create beautiful, functional, and user-centered digital experiences. Passionate about clean code, modern
            design, and solving complex problems with elegant solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-800 border-0 px-8 py-3 text-base font-medium tracking-wide transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 px-8 py-3 text-base font-medium tracking-wide hover:scale-105 bg-transparent"
              asChild
            >
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>

          <div className="flex justify-center space-x-8 mb-16">
            <Link
              href="https://github.com/Whisdom-dev"
              className="p-4 border border-gray-300 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300 group"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/whisdom-ukaegbu-a02b79280"
              className="p-4 border border-gray-300 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300 group"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:whisdomdaniel@gmail.com"
              className="p-4 border border-gray-300 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300 group"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>

          <Link
            href="#about"
            className="inline-flex flex-col items-center text-gray-400 hover:text-black transition-colors duration-300"
          >
            <span className="text-sm font-medium mb-2 tracking-wide">SCROLL DOWN</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  )
}
