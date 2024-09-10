'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Slider from "@/components/ui/Slider";
import { Copy, RefreshCw, Download, Image as ImageIcon } from 'lucide-react';
import { toast } from 'react-hot-toast';

// Mock AI generation function (replace with actual AI integration)
function generateAIPalette(prompt: string, count: number): string[] {
  const palette = [];
  for (let i = 0; i < count; i++) {
    palette.push(`#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`);
  }
  return palette;
}

function hexToRgb(hex: string) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgb(${r}, ${g}, ${b})`;
}

function hexToHsl(hex: string) {
  let r = parseInt(hex.slice(1, 3), 16) / 255;
  let g = parseInt(hex.slice(3, 5), 16) / 255;
  let b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}

export default function AIPaletteGenerator() {
  const [prompt, setPrompt] = useState('');
  const [colorCount, setColorCount] = useState(5);
  const [palette, setPalette] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      const newPalette = generateAIPalette(prompt, colorCount);
      setPalette(newPalette);
      setLoading(false);
    }, 1500); // Simulating AI processing time
  };

  const handleCopyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    toast.success(`Copied ${color} to clipboard`);
  };

  const handleDownloadPalette = () => {
    const paletteText = palette.join('\n');
    const blob = new Blob([paletteText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ai_generated_palette.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Palette downloaded successfully');
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Here you would typically send the image to your backend for processing
      // For this example, we'll just set a mock prompt
      setPrompt(`Colors from ${file.name}`);
      toast.success('Image uploaded successfully');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">AI Color Palette Generator</h1>

        <div className="bg-gray-800 rounded-xl shadow-lg p-8 max-w-4xl mb-2 mx-auto">
          <div className="mb-6">
            <label htmlFor="prompt-input" className="block text-lg font-medium text-gray-200 mb-2">
              Describe your desired palette:
            </label>
            <div className="flex items-center">
              <Input
                id="prompt-input"
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="E.g., Sunset on a tropical beach"
                className="flex-grow mr-2 bg-gray-700 text-white border-gray-600"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <ImageIcon className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="color-count" className="block text-lg font-medium text-gray-200 mb-2">
              Number of colors: {colorCount}
            </label>
            <Slider
              id="color-count"
              min={3}
              max={10}
              step={1}
              value={colorCount}
              onChange={(value) => setColorCount(value)}
              className="w-full"
            />
          </div>

          <Button
            onClick={handleGenerate}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate Palette'}
          </Button>
        </div>

        {palette.length > 0 && (
          <div className="bg-gray-800 rounded-xl shadow-lg p-8 max-w-4xl mb-2 mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-4">Generated Palette</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {palette.map((color, index) => (
                <div key={index} className="bg-gray-700 shadow-md rounded-lg p-4">
                  <div
                    className="w-full h-20 rounded-lg mb-2 relative group"
                    style={{ backgroundColor: color }}
                  >
                    <Button
                      onClick={() => handleCopyColor(color)}
                      className="absolute top-1 right-1 bg-white/10 hover:bg-white/20 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p className="text-white">Hex: {color}</p>
                    <p className="text-white">RGB: {hexToRgb(color)}</p>
                    <p className="text-white">HSL: {hexToHsl(color)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              <Button onClick={handleGenerate} className="bg-green-600 hover:bg-green-700 text-white">
                <RefreshCw className="h-5 w-5 mr-2" />
                Regenerate
              </Button>
              <Button onClick={handleDownloadPalette} className="bg-purple-600 hover:bg-purple-700 text-white">
                <Download className="h-5 w-5 mr-2" />
                Download Palette
              </Button>
            </div>
          </div>
        )}

        <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">About AI Color Palette Generator</h2>
              <p className="text-white">
                This tool uses AI to generate color palettes based on your text descriptions or uploaded images. It's perfect for finding inspiration for your design projects.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">How to Use</h2>
              <p className="text-white">
                1. Enter a description of the palette you want or upload an image for inspiration.<br />
                2. Choose the number of colors you want in your palette.<br />
                3. Click "Generate Palette" to create your AI-powered color scheme.<br />
                4. Copy individual colors or download the entire palette.<br />
                5. Regenerate or adjust your input for different results.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Tips</h2>
              <p className="text-white">
                - Be specific in your descriptions for more accurate results.<br />
                - Try uploading images of scenes or objects that inspire you.<br />
                - Experiment with different color counts to find the perfect palette size.<br />
                - Use the regenerate feature to explore variations on your theme.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}