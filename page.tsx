"use client"

import { motion } from "framer-motion"
import { Shield, Recycle, Clock, Award, Phone, Mail, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { BookingModal } from "@/components/booking-modal"
import { ThemeToggle } from "@/components/theme-toggle"

export default function EcoSolveShredding() {
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

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white dark:bg-secondary-dark-50">
      {/* Header */}
      <header className="bg-white dark:bg-secondary-dark-100 shadow-lg dark:shadow-metallic-dark border-b-2 border-primary-100 dark:border-primary-dark-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
              
                  src="/images/ecosolve-logo.jpg"
                  alt="EcoSolve Secure Document Shredding"
                  className="h-10 w-10 rounded-full shadow-eco dark:shadow-eco-dark"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-eco dark:bg-gradient-eco-dark opacity-20"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-eco dark:bg-gradient-eco-dark bg-clip-text text-transparent">
                EcoSolve Shredding
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-secondary-700 dark:text-secondary-dark-700 hover:text-primary-600 dark:hover:text-primary-dark-600 transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-secondary-700 dark:text-secondary-dark-700 hover:text-primary-600 dark:hover:text-primary-dark-600 transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-secondary-700 dark:text-secondary-dark-700 hover:text-primary-600 dark:hover:text-primary-dark-600 transition-colors font-medium"
              >
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <Button
                className="bg-gradient-eco dark:bg-gradient-eco-dark hover:shadow-eco dark:hover:shadow-eco-dark text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsBookingModalOpen(true)}
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 dark:from-secondary-dark-100 dark:via-primary-dark-100 dark:to-accent-dark-100 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-metallic dark:bg-gradient-metallic-dark opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center" initial="initial" animate="animate" variants={staggerContainer}>
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-secondary-800 dark:text-secondary-dark-800 mb-8"
              variants={fadeInUp}
            >
              Secure & Eco-Friendly
              <span className="bg-gradient-eco dark:bg-gradient-eco-dark bg-clip-text text-transparent block mt-2">
                Document Shredding
              </span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-dark-600 mb-10 max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Protect your sensitive information while protecting the environment. Professional document destruction
              with 100% recycling guarantee.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-6 justify-center" variants={fadeInUp}>
              <Button
                size="lg"
                className="bg-gradient-eco dark:bg-gradient-eco-dark hover:shadow-eco dark:hover:shadow-eco-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg"
                onClick={() => setIsBookingModalOpen(true)}
              >
                Schedule Pickup
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-600 dark:border-primary-dark-600 text-primary-600 dark:text-primary-dark-600 hover:bg-primary-50 dark:hover:bg-primary-dark-100 font-bold px-8 py-4 rounded-xl transition-all duration-300 text-lg"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-metallic-light dark:from-secondary-dark-50 dark:to-secondary-dark-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 dark:text-secondary-dark-800 mb-6">
              Why Choose EcoSolve?
            </h2>
            <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-dark-600 max-w-3xl mx-auto">
              We combine industry-leading security with environmental responsibility
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                icon: Shield,
                title: "100% Secure",
                description: "NAID AAA certified destruction with chain of custody documentation",
                color: "text-primary-600 dark:text-primary-dark-600",
                bgColor: "bg-primary-100 dark:bg-primary-dark-100",
              },
              {
                icon: Recycle,
                title: "Eco-Friendly",
                description: "All shredded materials are recycled into new paper products",
                color: "text-accent-600 dark:text-accent-dark-600",
                bgColor: "bg-accent-100 dark:bg-accent-dark-100",
              },
              {
                icon: Clock,
                title: "Fast Service",
                description: "Same-day and next-day pickup options available",
                color: "text-secondary-600 dark:text-secondary-dark-600",
                bgColor: "bg-secondary-100 dark:bg-secondary-dark-100",
              },
              {
                icon: Award,
                title: "Certified",
                description: "Fully licensed, bonded, and insured for your peace of mind",
                color: "text-primary-700 dark:text-primary-dark-700",
                bgColor: "bg-primary-50 dark:bg-primary-dark-50",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full hover:shadow-eco dark:hover:shadow-eco-dark transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-primary-200 dark:hover:border-primary-dark-200 dark:bg-secondary-dark-200 dark:border-secondary-dark-300">
                  <CardHeader className="pb-4">
                    <div
                      className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
                    >
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-secondary-800 dark:text-secondary-dark-800">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-secondary-600 dark:text-secondary-dark-600 text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-dark-200 dark:to-primary-dark-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 dark:text-secondary-dark-800 mb-6">
              Our Services
            </h2>
            <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-dark-600 max-w-3xl mx-auto">
              Comprehensive document destruction solutions for businesses and individuals
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                title: "On-Site Shredding",
                description: "Watch your documents being destroyed at your location",
                features: ["Mobile shredding trucks", "Witness destruction", "Immediate certificate"],
                gradient: "from-primary-500 to-primary-600 dark:from-primary-dark-500 dark:to-primary-dark-600",
              },
              {
                title: "Off-Site Shredding",
                description: "Secure pickup and destruction at our facility",
                features: ["Locked containers", "Chain of custody", "Cost-effective"],
                gradient: "from-accent-500 to-accent-600 dark:from-accent-dark-500 dark:to-accent-dark-600",
              },
              {
                title: "Hard Drive Destruction",
                description: "Complete destruction of electronic storage devices",
                features: ["Physical destruction", "Data wiping", "Certificate of destruction"],
                gradient: "from-secondary-500 to-secondary-600 dark:from-secondary-dark-500 dark:to-secondary-dark-600",
              },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-eco dark:hover:shadow-eco-dark transition-all duration-300 transform hover:scale-105 overflow-hidden dark:bg-secondary-dark-200 dark:border-secondary-dark-300">
                  <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-secondary-800 dark:text-secondary-dark-800">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-secondary-600 dark:text-secondary-dark-600 text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-secondary-700 dark:text-secondary-dark-700"
                        >
                          <CheckCircle className="h-5 w-5 text-primary-600 dark:text-primary-dark-600 mr-3 flex-shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-gradient-to-b from-white to-metallic-light dark:from-secondary-dark-50 dark:to-secondary-dark-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 dark:text-secondary-dark-800 mb-8">
                Protecting Information,
                <span className="bg-gradient-eco dark:bg-gradient-eco-dark bg-clip-text text-transparent block">
                  Preserving Environment
                </span>
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-dark-600 mb-6 leading-relaxed">
                For over 15 years, EcoSolve Shredding has been the trusted partner for businesses and individuals who
                need secure document destruction without compromising their environmental values.
              </p>
              <p className="text-lg text-secondary-600 dark:text-secondary-dark-600 mb-10 leading-relaxed">
                Every document we shred is recycled into new paper products, preventing thousands of tons of waste from
                entering landfills while ensuring your sensitive information is completely destroyed.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-dark-100 dark:to-primary-dark-200 rounded-xl">
                  <div className="text-4xl font-bold bg-gradient-eco dark:bg-gradient-eco-dark bg-clip-text text-transparent">
                    15+
                  </div>
                  <div className="text-secondary-600 dark:text-secondary-dark-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-dark-100 dark:to-accent-dark-200 rounded-xl">
                  <div className="text-4xl font-bold bg-gradient-eco dark:bg-gradient-eco-dark bg-clip-text text-transparent">
                    100%
                  </div>
                  <div className="text-secondary-600 dark:text-secondary-dark-600 font-medium">Recycled</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="bg-gradient-metallic dark:bg-gradient-metallic-dark rounded-2xl p-12 h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-accent-100/50 dark:from-primary-dark-200/30 dark:to-accent-dark-200/30"></div>
                <img
                  src="/images/ecosolve-logo.jpg"
                  alt="EcoSolve Secure Document Shredding"
                  className="h-56 w-56 rounded-full shadow-eco dark:shadow-eco-dark relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-secondary-50 via-primary-50 to-accent-50 dark:from-secondary-dark-200 dark:via-primary-dark-50 dark:to-accent-dark-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 dark:text-secondary-dark-800 mb-6">
              Get Started Today
            </h2>
            <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-dark-600 max-w-3xl mx-auto">
              Contact us for a free quote or to schedule your secure shredding service
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
              <Card className="shadow-eco dark:shadow-eco-dark border-2 border-primary-100 dark:border-primary-dark-200 dark:bg-secondary-dark-200">
                <CardHeader className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-dark-100 dark:to-accent-dark-100">
                  <CardTitle className="text-secondary-800 dark:text-secondary-dark-800 text-xl">
                    Send us a message
                  </CardTitle>
                  <CardDescription className="text-secondary-600 dark:text-secondary-dark-600">
                    We'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name"
                      className="border-2 border-primary-200 focus:border-primary-500 dark:border-primary-dark-300 dark:focus:border-primary-dark-500 dark:bg-secondary-dark-100"
                    />
                    <Input
                      placeholder="Last Name"
                      className="border-2 border-primary-200 focus:border-primary-500 dark:border-primary-dark-300 dark:focus:border-primary-dark-500 dark:bg-secondary-dark-100"
                    />
                  </div>
                  <Input
                    placeholder="Email"
                    type="email"
                    className="border-2 border-primary-200 focus:border-primary-500 dark:border-primary-dark-300 dark:focus:border-primary-dark-500 dark:bg-secondary-dark-100"
                  />
                  <Input
                    placeholder="Phone"
                    type="tel"
                    className="border-2 border-primary-200 focus:border-primary-500 dark:border-primary-dark-300 dark:focus:border-primary-dark-500 dark:bg-secondary-dark-100"
                  />
                  <Textarea
                    placeholder="Tell us about your shredding needs"
                    rows={4}
                    className="border-2 border-primary-200 focus:border-primary-500 dark:border-primary-dark-300 dark:focus:border-primary-dark-500 dark:bg-secondary-dark-100"
                  />
                  <Button className="w-full bg-gradient-eco dark:bg-gradient-eco-dark hover:shadow-eco dark:hover:shadow-eco-dark text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-secondary-800 dark:text-secondary-dark-800 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-white dark:bg-secondary-dark-200 rounded-lg shadow-sm">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-dark-200 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary-600 dark:text-primary-dark-600" />
                    </div>
                    <span className="text-secondary-700 dark:text-secondary-dark-700 font-medium">063 024 0749</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-white dark:bg-secondary-dark-200 rounded-lg shadow-sm">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-dark-200 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary-600 dark:text-primary-dark-600" />
                    </div>
                    <span className="text-secondary-700 dark:text-secondary-dark-700 font-medium">065 745 5694</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-white dark:bg-secondary-dark-200 rounded-lg shadow-sm">
                    <div className="w-10 h-10 bg-accent-100 dark:bg-accent-dark-200 rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-accent-600 dark:text-accent-dark-600" />
                    </div>
                    <span className="text-secondary-700 dark:text-secondary-dark-700 font-medium">
                      info@ecosolveshredding.com
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-secondary-dark-200 p-6 rounded-xl shadow-sm">
                <h4 className="text-lg font-semibold text-secondary-800 dark:text-secondary-dark-800 mb-4">
                  Business Hours
                </h4>
                <div className="space-y-3 text-secondary-600 dark:text-secondary-dark-600">
                  <div className="flex justify-between items-center py-2 border-b border-primary-100 dark:border-primary-dark-200">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-primary-600 dark:text-primary-dark-600 font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-primary-100 dark:border-primary-dark-200">
                    <span className="font-medium">Saturday</span>
                    <span className="text-primary-600 dark:text-primary-dark-600 font-semibold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Sunday</span>
                    <span className="text-secondary-400 dark:text-secondary-dark-400">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-blue-gray dark:bg-gradient-metallic-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/images/ecosolve-logo.jpg"
                  alt="EcoSolve Secure Document Shredding"
                  className="h-8 w-8 rounded-full shadow-lg"
                />
                <span className="text-xl font-bold">EcoSolve Shredding</span>
              </div>
              <p className="text-metallic-dark dark:text-metallic-light leading-relaxed">
                Secure document destruction with environmental responsibility.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Services</h4>
              <ul className="space-y-3 text-metallic-dark dark:text-metallic-light">
                <li className="hover:text-white transition-colors cursor-pointer">On-Site Shredding</li>
                <li className="hover:text-white transition-colors cursor-pointer">Off-Site Shredding</li>
                <li className="hover:text-white transition-colors cursor-pointer">Hard Drive Destruction</li>
                <li className="hover:text-white transition-colors cursor-pointer">Recycling Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Company</h4>
              <ul className="space-y-3 text-metallic-dark dark:text-metallic-light">
                <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-white transition-colors cursor-pointer">Certifications</li>
                <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Contact</h4>
              <ul className="space-y-3 text-metallic-dark dark:text-metallic-light">
                <li>063 024 0749</li>
                <li>065 745 5694</li>
                <li>info@ecosolveshredding.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-secondary-600 dark:border-secondary-dark-600 mt-12 pt-8 text-center text-metallic-dark dark:text-metallic-light">
            <p>&copy; 2024 EcoSolve Shredding. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  )
}
