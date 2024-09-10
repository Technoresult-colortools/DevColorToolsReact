import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeDropper, faTag, faImage, faHashtag, faPalette, faSliders, faPrint, faDroplet, faSun, faMicrochip } from '@fortawesome/free-solid-svg-icons'

const tools = [
  { name: 'Image Color Picker', icon: faEyeDropper },
  { name: 'Color Name Generator', icon: faTag },
  { name: 'Image Color Extractor', icon: faImage },
  { name: 'Hex to RGBA Converter', icon: faHashtag },
  { name: 'RGBA to Hex Converter', icon: faPalette },
  { name: 'HSV to RGB Converter', icon: faSliders },
  { name: 'RGB to HSV Converter', icon: faSliders },
  { name: 'CMYK to RGB Converter', icon: faPrint },
  { name: 'Color Mixer', icon: faDroplet },
  { name: 'Color Shades Generator', icon: faSun },
  { name: 'RGB to CMYK Converter', icon: faPrint },
  { name: 'HSL to RGB Converter', icon: faSliders },
  { name: 'HSL to HEX Converter', icon: faHashtag },
  { name: 'HSV to Hex Converter', icon: faHashtag },
  { name: 'RGB to HSL Converter', icon: faSliders },
  { name: 'AI Color Palette Generator', icon: faMicrochip },
  { name: 'Color Wheel', icon: faPalette },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Color Tools Categories</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.name}
              href={`/tool/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <FontAwesomeIcon icon={tool.icon} className="text-4xl text-blue-400 mb-4" />
                <h2 className="text-xl font-bold text-white mb-2">{tool.name}</h2>
                <p className="text-gray-400 mb-4">Explore and utilize our powerful {tool.name.toLowerCase()} tool.</p>
              </div>
              <span className="text-blue-400 font-semibold hover:text-blue-300 inline-flex items-center mt-2">
                Try it now
                <ChevronRight size={20} className="ml-1" />
              </span>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}