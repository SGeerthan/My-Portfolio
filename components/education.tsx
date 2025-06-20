"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export function Education() {
  const certificates = [
    "Generative AI Concepts - Microsoft",
    "Dev-Town Bootcamp - Microsoft & Google",
    "Machine Learning and AI Concepts - SLIIT",
    "Web Development for Full Stack - University of Moratuwa",
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education & Certifications</h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Education */}
            <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2 flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2" />
                        BSc Hons in Information Technology
                      </CardTitle>
                      <CardDescription className="text-lg">Specialization in Software Engineering</CardDescription>
                      <CardDescription className="mt-1">
                        Sri Lanka Institute of Information Technology (SLIIT)
                      </CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        September 2022 – Present
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <MapPin className="h-4 w-4 mr-2" />
                        Malabe, Sri Lanka
                      </div>
                      <Badge variant="outline" className="mt-1">
                        CGPA: 3.21
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl mb-4 flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {certificates.map((cert, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
