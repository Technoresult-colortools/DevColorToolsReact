import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Unleash the Power of <span className="text-blue-400">Color</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover a suite of powerful color tools designed to enhance your creative workflow and bring your designs to life.
          </p>
          <Link
            href="/categories"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 inline-flex items-center"
          >
            Explore Tools
            <ChevronRight size={20} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Image Color Picker', 'Image Color Extractor', 'Color Shades Generator'].map((tool) => (
            <div key={tool} className="bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <h2 className="text-xl font-bold text-blue-400 mb-4">{tool}</h2>
              <p className="text-gray-300 mb-4">Unlock the power of color with our intuitive and powerful {tool.toLowerCase()}.</p>
              <Link
                href={`/tool/${tool.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-blue-400 font-semibold hover:text-blue-300 inline-flex items-center"
              >
                Try it now
                <ChevronRight size={20} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}