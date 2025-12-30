import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js","React Native", "Flutter", "TypeScript", "Tailwind CSS", "Vue.js", "HTML5", "CSS3", "JavaScript"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Supabase", "Express.js", "FastAPI", "PostgreSQL", "MongoDB", "Firebase",],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Vercel", "Figma", "Jest",],
    },
  ]

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className={`bg-white border-2 border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg group ${
                  index === 1 ? "md:scale-105" : ""
                }`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-black">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
