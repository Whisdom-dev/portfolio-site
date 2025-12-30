import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">About Me</h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate full-stack developer with over 2 years of experience creating digital solutions that
                makes a difference. I specialize in modern web technologies, mobile application development and love turning complex problems into
                simple, beautiful designs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying the great outdoors with my camera in hand.
              </p>

              <div className="pt-6">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-2xl font-bold text-black mb-2">20+</h4>
                    <p className="text-gray-600">Projects Completed</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-black mb-2">2+</h4>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-black">Quick Facts</h3>
                <ul className="space-y-4">

                  <li className="flex items-center text-gray-700 border-b border-gray-100 pb-3">
                    <div className="w-2 h-2 bg-black rounded-full mr-4"></div>
                    <span>Based in Owerri, Imo state, Nigeria</span>
                  </li>
                  <li className="flex items-center text-gray-700 border-b border-gray-100 pb-3">
                    <div className="w-2 h-2 bg-black rounded-full mr-4"></div>
                    <span>AI Ethusiast</span>
                  </li>
                  <li className="flex items-center text-gray-700 border-b border-gray-100 pb-3">
                    <div className="w-2 h-2 bg-black rounded-full mr-4"></div>
                    <span>Javascript Nerd</span>
                  </li>
                  <li className="flex items-center text-gray-700 border-b border-gray-100 pb-3">
                    <div className="w-2 h-2 bg-black rounded-full mr-4"></div>
                    <span>Open Source Contributor</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-black rounded-full mr-4"></div>
                    <span>Minimalist Design Lover</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
