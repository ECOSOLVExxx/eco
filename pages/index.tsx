import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Leaf, Truck } from "lucide-react";
import { motion } from "framer-motion";

export default function EcoSolveShredding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-100 p-6 text-gray-800">
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold text-green-700">Eco Solve Shredding</h1>
        <p className="mt-4 text-xl">Secure. Eco-Friendly. Paper Shredding That Cares.</p>
      </header>

      <section className="grid md:grid-cols-3 gap-6 py-10">
        <Card className="shadow-xl rounded-2xl p-4 bg-white">
          <CardContent className="flex flex-col items-center text-center">
            <ShieldCheck className="text-green-600 h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold">100% Secure</h3>
            <p>Confidential document destruction with full compliance & peace of mind.</p>
          </CardContent>
        </Card>
        <Card className="shadow-xl rounded-2xl p-4 bg-white">
          <CardContent className="flex flex-col items-center text-center">
            <Leaf className="text-green-600 h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold">Eco-Driven</h3>
            <p>We recycle every shredded piece — good for you, great for the planet.</p>
          </CardContent>
        </Card>
        <Card className="shadow-xl rounded-2xl p-4 bg-white">
          <CardContent className="flex flex-col items-center text-center">
            <Truck className="text-green-600 h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold">We Come to You</h3>
            <p>On-site shredding available. Fast, local, and hassle-free pickup service.</p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Get Started in 3 Easy Steps</h2>
          <p className="mb-6">Contact us, schedule your pickup, and watch your worries disappear.</p>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg rounded-xl shadow-md">
            Book a Pickup
          </Button>
        </motion.div>
      </section>

      {/* Placeholder Sections */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        {/* Contact form integration goes here */}
      </section>

      <section className="py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Pricing</h2>
        {/* Pricing table or cards go here */}
      </section>

      <section className="py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Find Us</h2>
        {/* Google Maps embed goes here */}
      </section>

      <section className="py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Book a Time</h2>
        {/* Booking calendar integration goes here */}
      </section>

      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} Eco Solve Shredding. All rights reserved.
      </footer>
    </div>
  );
}
