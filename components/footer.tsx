import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Whisdom Ukaegbu</h3>
              <p className="text-gray-400 leading-relaxed">
                Full Stack Developer & UI/UX Designer creating beautiful digital experiences.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                <Link href="#about" className="block text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="#skills" className="block text-gray-400 hover:text-white transition-colors">
                  Skills
                </Link>
                <Link href="#projects" className="block text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
                <Link href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </nav>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-gray-400">
                <p>whisdomdaniel@gmail.com</p>
                <p>+234 813-6844-993</p>
                <p>Owerri, Nigeria</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">© 2024 Whisdom Ukaegbu. All rights reserved.</div>
            <div className="text-gray-400 text-sm">Designed & Built with ❤️</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
