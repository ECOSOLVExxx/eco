"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { LayoutDashboard, Calendar, User, Settings, LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import { BookingProvider } from "@/contexts/booking-context"
import { ThemeToggle } from "@/components/theme-toggle"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, logout, isLoading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Redirect if not logged in
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-secondary-dark-100 dark:to-primary-dark-100">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary-200 dark:border-primary-dark-300"></div>
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary-600 dark:border-primary-dark-600 absolute top-0 left-0"></div>
        </div>
      </div>
    )
  }

  if (!user) {
    return null // Will redirect in useEffect
  }

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/dashboard/bookings", label: "My Bookings", icon: Calendar },
    { href: "/dashboard/profile", label: "Profile", icon: User },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
  ]

  return (
    <BookingProvider>
      <div className="min-h-screen bg-gradient-to-br from-metallic-light to-primary-50 dark:from-secondary-dark-100 dark:to-secondary-dark-50">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white dark:bg-secondary-dark-200 shadow-eco dark:shadow-eco-dark border-b-2 border-primary-100 dark:border-primary-dark-200 sticky top-0 z-50">
          <div className="px-4 py-3 flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center space-x-3">
              <img
                src="/images/ecosolve-logo.jpg"
                alt="EcoSolve"
                className="h-8 w-8 rounded-full shadow-eco dark:shadow-eco-dark"
              />
              <span className="font-bold text-lg bg-gradient-eco dark:bg-gradient-eco-dark bg-clip-text text-transparent">
                EcoSolve
              </span>
            </Link>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-secondary-600 dark:text-secondary-dark-600 hover:text-primary-600 dark:hover:text-primary-dark-600"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </header>

        <div className="flex">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:flex flex-col w-64 bg-white dark:bg-secondary-dark-200 border-r-2 border-primary-100 dark:border-primary-dark-200 h-screen sticky top-0 shadow-eco dark:shadow-eco-dark">
            <div className="p-6 border-b border-primary-100 dark:border-primary-dark-200 flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3">
                <img
                  src="/images/ecosolve-logo.jpg"
                  alt="EcoSolve"
                  className="h-8 w-8 rounded-full shadow-eco dark:shadow-eco-dark"
                />
                <span className="font-bold text-xl bg-gradient-eco dark:bg-gradient-eco-dark bg-clip-text text-transparent">
                  EcoSolve
                </span>
              </Link>
              <ThemeToggle />
            </div>
            <nav className="flex-1 px-4 py-6 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-eco dark:bg-gradient-eco-dark text-white shadow-eco dark:shadow-eco-dark"
                        : "text-secondary-700 dark:text-secondary-dark-700 hover:bg-primary-50 dark:hover:bg-primary-dark-100 hover:text-primary-700 dark:hover:text-primary-dark-700"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )
              })}
            </nav>
            <div className="p-4 border-t border-primary-100 dark:border-primary-dark-200">
              <div className="flex items-center space-x-3 mb-4 p-3 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-dark-100 dark:to-accent-dark-100 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-gradient-eco dark:bg-gradient-eco-dark flex items-center justify-center text-white font-bold text-lg shadow-eco dark:shadow-eco-dark">
                  {user.firstName.charAt(0)}
                  {user.lastName.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm text-secondary-800 dark:text-secondary-dark-800">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-xs text-secondary-600 dark:text-secondary-dark-600">{user.email}</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full flex items-center justify-center space-x-2 border-2 border-secondary-200 dark:border-secondary-dark-300 text-secondary-700 dark:text-secondary-dark-700 hover:bg-secondary-50 dark:hover:bg-secondary-dark-100 hover:border-secondary-300 dark:hover:border-secondary-dark-400 transition-all duration-200"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" />
                <span className="font-medium">Log Out</span>
              </Button>
            </div>
          </aside>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden fixed inset-0 z-40 bg-white dark:bg-secondary-dark-200"
            >
              <div className="pt-16 pb-6 px-4 space-y-6">
                <div className="flex items-center space-x-3 mb-6 p-4 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-dark-100 dark:to-accent-dark-100 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-gradient-eco dark:bg-gradient-eco-dark flex items-center justify-center text-white font-bold shadow-eco dark:shadow-eco-dark">
                    {user.firstName.charAt(0)}
                    {user.lastName.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-800 dark:text-secondary-dark-800">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="text-sm text-secondary-600 dark:text-secondary-dark-600">{user.email}</p>
                  </div>
                </div>

                <nav className="space-y-2">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                          isActive
                            ? "bg-gradient-eco dark:bg-gradient-eco-dark text-white shadow-eco dark:shadow-eco-dark"
                            : "text-secondary-700 dark:text-secondary-dark-700 hover:bg-primary-50 dark:hover:bg-primary-dark-100 hover:text-primary-700 dark:hover:text-primary-dark-700"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <item.icon className="h-5 w-5" />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    )
                  })}
                  <button
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-secondary-700 dark:text-secondary-dark-700 hover:bg-secondary-50 dark:hover:bg-secondary-dark-100 hover:text-secondary-900 dark:hover:text-secondary-dark-900 transition-all duration-200"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-5 w-5" />
                    <span className="font-medium">Log Out</span>
                  </button>
                </nav>
              </div>
            </motion.div>
          )}

          {/* Main Content */}
          <main className="flex-1 min-h-screen">
            <div className="max-w-7xl mx-auto py-8 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </BookingProvider>
  )
}
