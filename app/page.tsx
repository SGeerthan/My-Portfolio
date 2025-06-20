"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Moon,
  Sun,
  Code,
  Palette,
  Database,
  Globe,
  Smartphone,
  Server,
  ChevronDown,
  Send,
  MapPin,
  Phone,
} from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const projects = [
  {
    id: 1,
    title: "Bridal Vision Studio",
    description:
      "An e-commerce website with virtual try-on feature for jewelry and AI-powered skin detection system to suggest personalized dress recommendations, enhancing the shopping experience with interactive and tailored suggestions.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["MERN Stack", "Python", "AI/ML", "Virtual Try-On"],
    category: "Full Stack",
    github: "https://github.com/SGeerthan",
    live: "#",
  },
  {
    id: 2,
    title: "Tech-Hostel",
    description:
      "A user-friendly online hostel management web application with responsive design. Features secure payment processing via e-wallet, ensuring a trustworthy platform for financial transactions.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["ReactJS", "MongoDB", "ExpressJS", "NodeJS", "CSS"],
    category: "Full Stack",
    github: "https://github.com/SGeerthan",
    live: "#",
  },
  {
    id: 3,
    title: "MealMatch",
    description:
      "A platform connecting restaurants with surplus food to orphanages and students in need. Promotes sustainability by reducing food waste while addressing hunger, aligning with UN's Zero Hunger SDG.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React Native", "NodeJS", "ExpressJS", "MongoDB", "Firebase"],
    category: "Mobile",
    github: "https://github.com/SGeerthan",
    live: "#",
  },
  {
    id: 4,
    title: "Faster Eats",
    description:
      "A scalable microservices-based food delivery app using Docker for containerization and Kubernetes for orchestration, with OpenStreetMap API and PayHere Payment gateway integration.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["MERN Stack", "Docker", "Kubernetes", "OpenStreetMap API", "PayHere"],
    category: "Full Stack",
    github: "https://github.com/SGeerthan",
    live: "#",
  },
  {
    id: 5,
    title: "Lankan Medical",
    description:
      "A full-stack web application with responsive design, featuring authentication and authorization functionalities to improve user and administrator interaction within the system.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    category: "Full Stack",
    github: "https://github.com/SGeerthan",
    live: "#",
  },
  {
    id: 6,
    title: "REST Countries API",
    description:
      "A responsive React app using REST Countries API with country search, filtering, and an interactive flag game with user authentication and score tracking.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Tailwind CSS", "Firebase", "REST API"],
    category: "Frontend",
    github: "https://github.com/SGeerthan",
    live: "#",
  },
  {
    id: 7,
    title: "Expenses Management",
    description:
      "Android app with onboarding screen and functionality to add and view expenses with basic CRUD operations using Room library as database. Includes expense sum calculation feature.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Kotlin", "Room Database", "Android"],
    category: "Mobile",
    github: "https://github.com/SGeerthan",
    live: "#",
  },
]

const skills = [
  { name: "JavaScript", level: 90, icon: Code },
  { name: "React", level: 88, icon: Code },
  { name: "Node.js", level: 85, icon: Server },
  { name: "MongoDB", level: 82, icon: Database },
  { name: "Python", level: 80, icon: Code },
  { name: "Java", level: 78, icon: Code },
  { name: "C++", level: 75, icon: Code },
  { name: "SQL", level: 80, icon: Database },
  { name: "React Native", level: 75, icon: Smartphone },
  { name: "Docker", level: 70, icon: Server },
  { name: "Kubernetes", level: 65, icon: Server },
  { name: "Figma", level: 72, icon: Palette },
]

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-4 right-4 z-50"
    >
      {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </Button>
  )
}

function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <h1 className="text-2xl font-bold">Sivananthan Sangeerthan</h1>
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {["About", "Experience", "Education", "Projects", "Skills", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-primary transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  )
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <Image
              src="/mypic.jpg?height=500&width=400"
              alt="Profile"
              width={300}
              height={300}
              className="rounded-full mx-auto mb-8 border-4 border-primary/20"
            />
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6">
            Sivananthan Sangeerthan
          </motion.h1>

          <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl text-primary mb-6">
            Software Engineering Undergraduate
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A self-motivated, highly passionate, and hardworking software engineering student with a strong foundation
            in software development, particularly in the MERN stack, seeking opportunities to create fluid, responsive
            user interfaces.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="w-full sm:w-auto">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <a href="/Sangeerthan_Sivananthan_CV.pdf" download>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex justify-center space-x-6 mt-8">
            {[
              { icon: Github, href: "https://github.com/SGeerthan" },
              { icon: Linkedin, href: "https://linkedin.com/in/sivananthan-sangeerthan-106786250" },
              { icon: Mail, href: "mailto:sangeesivananthan@gmail.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate Software Engineering undergraduate at SLIIT with a strong foundation in the MERN stack
                and modern web technologies. Currently working as a Software Engineer Intern at Clevonex, where I
                contribute to full-stack development and collaborate in Agile teams.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                My experience spans across developing REST APIs, implementing user authentication, and creating
                responsive user interfaces. I'm particularly interested in AI/ML integration and sustainable technology
                solutions that make a positive impact.
              </p>
              <div className="flex flex-wrap gap-2">
                {["MERN Stack", "Problem Solving", "Agile Development", "API Development", "Mobile Development"].map(
                  (trait) => (
                    <Badge key={trait} variant="secondary">
                      {trait}
                    </Badge>
                  ),
                )}
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Clean Code</h3>
                      <p className="text-sm text-muted-foreground">Writing maintainable, scalable code</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Palette className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">User Experience</h3>
                      <p className="text-sm text-muted-foreground">Creating intuitive, beautiful interfaces</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Performance</h3>
                      <p className="text-sm text-muted-foreground">Optimizing for speed and efficiency</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Projects() {
  const [filter, setFilter] = useState("All")
  const categories = ["All", "Frontend", "Backend", "Full Stack", "Mobile"]

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover transition-transform hover:scale-105"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge>{project.category}</Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                        <Button size="sm" asChild>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <skill.icon className="h-5 w-5 text-primary" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        className="bg-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's work together</h3>
              <p className="text-lg text-muted-foreground mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>sangeesivananthan@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+94 768015057</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Kaduwela, Sri Lanka</span>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Sivananthan Sangeerthan. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {[
              { icon: Github, href: "https://github.com/SGeerthan" },
              { icon: Linkedin, href: "https://linkedin.com/in/sivananthan-sangeerthan-106786250" },
              { icon: Mail, href: "mailto:sangeesivananthan@gmail.com" },
            ].map((social, index) => (
              <a key={index} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
