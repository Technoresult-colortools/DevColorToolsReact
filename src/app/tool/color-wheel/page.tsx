'use client';

import React, { useState, useEffect, useRef } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Copy, Download } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';

const colorHarmonies = [
  { name: 'Complementary', angle: 180 },
  { name: 'Analogous', angle: 30 },
  { name: 'Triadic', angle: 120 },
  { name: 'Split-Complementary', angle: 150 },
  { name: 'Tetradic', angle: 90 },
];

function hslToHex(h: number, s: number, l: number) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function hexToHsl(hex: string) {
  let r = parseInt(hex.slice(1, 3), 16) / 255;
  let g = parseInt(hex.slice(3, 5), 16) / 255;
  let b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s=0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 50)];
}

function generateHarmony(baseColor: string, harmony: { name: string; angle: number }) {
  const [h, s, l] = hexToHsl(baseColor);
  const colors = [baseColor];

  switch (harmony.name) {
    case 'Complementary':
      colors.push(hslToHex((h + 180) % 360, s, l));
      break;
    case 'Analogous':
      colors.push(hslToHex((h + 30) % 360, s, l));
      colors.push(hslToHex((h + 330) % 360, s, l));
      break;
    case 'Triadic':
      colors.push(hslToHex((h + 120) % 360, s, l));
      colors.push(hslToHex((h + 240) % 360, s, l));
      break;
    case 'Split-Complementary':
      colors.push(hslToHex((h + 150) % 360, s, l));
      colors.push(hslToHex((h + 210) % 360, s, l));
      break;
    case 'Tetradic':
      colors.push(hslToHex((h + 90) % 360, s, l));
      colors.push(hslToHex((h + 180) % 360, s, l));
      colors.push(hslToHex((h + 270) % 360, s, l));
      break;
  }

  return colors;
}

export default function ColorWheelTheory() {
  const [baseColor, setBaseColor] = useState('#1ecbe1');
  const [selectedHarmony, setSelectedHarmony] = useState(colorHarmonies[0]);
  const [harmonyColors, setHarmonyColors] = useState<string[]>([]);
  const wheelRef = useRef<HTMLDivElement>(null);
  const [activeDotIndex, setActiveDotIndex] = useState<number | null>(null);

  useEffect(() => {
    setHarmonyColors(generateHarmony(baseColor, selectedHarmony));
  }, [baseColor, selectedHarmony]);

  const handleBaseColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBaseColor(e.target.value);
  };

  const handleHarmonyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const harmony = colorHarmonies.find(h => h.name === e.target.value);
    if (harmony) {
      setSelectedHarmony(harmony);
    }
  };

  const handleCopyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    toast.success(`Copied ${color} to clipboard`);
  };

  const handleDownloadPalette = () => {
    const paletteText = harmonyColors.join('\n');
    const blob = new Blob([paletteText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'color_harmony_palette.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Palette downloaded successfully');
  };

  const handleColorSelection = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (wheelRef.current && activeDotIndex !== null) {
      const rect = wheelRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      let clientX, clientY;

      if ('touches' in e) {
        clientX = e.touches[0].clientX - rect.left;
        clientY = e.touches[0].clientY - rect.top;
      } else {
        clientX = e.clientX - rect.left;
        clientY = e.clientY - rect.top;
      }

      const x = clientX - centerX;
      const y = clientY - centerY;
      const angle = Math.atan2(y, x);
      const distance = Math.min(Math.sqrt(x * x + y * y), rect.width / 2);
      const radius = rect.width / 2;

      const hue = ((angle + Math.PI) / (2 * Math.PI)) * 360;
      const saturation = (distance / radius) * 100;
      const newColor = hslToHex(hue, saturation, 50);

      const newHarmonyColors = [...harmonyColors];
      newHarmonyColors[activeDotIndex] = newColor;

      if (activeDotIndex === 0) {
        setBaseColor(newColor);
      } else {
        setHarmonyColors(newHarmonyColors);
      }
    }
  };

  const handleMouseDown = (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setActiveDotIndex(index);
  };

  const handleMouseUp = () => {
    setActiveDotIndex(null);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (activeDotIndex !== null) {
      handleColorSelection(e);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setActiveDotIndex(null);
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('touchend', handleGlobalMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Color Wheel</h1>

        <div className="bg-gray-800 shadow-lg rounded-lg p-6 mb-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Color Wheel</h2>
            <div 
              ref={wheelRef}
              className="relative w-64 h-64 mx-auto cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchMove={handleColorSelection}
              onTouchEnd={handleMouseUp}
            >
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div
                  className="w-full h-full"
                  style={{
                    background: 'conic-gradient(from 0deg, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%))',
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle, white, transparent)',
                  }}
                />
              </div>
              {harmonyColors.map((color, index) => {
                const [h, s, l] = hexToHsl(color);
                const angle = (h * Math.PI) / 180;
                const distance = (s / 100) * 32;
                const x = Math.cos(angle) * distance + 32;
                const y = Math.sin(angle) * distance + 32;
                return (
                  <div
                    key={index}
                    className="absolute w-6 h-6 rounded-full border-2 border-white cursor-move"
                    style={{
                      backgroundColor: color,
                      top: `${y * 3}px`,
                      left: `${x * 3}px`,
                      transform: 'translate(-50%, -50%)',
                      zIndex: activeDotIndex === index ? 10 : 1,
                    }}
                    onMouseDown={handleMouseDown(index)}
                    onTouchStart={() => setActiveDotIndex(index)}
                  />
                );
              })}
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="base-color" className="block text-lg font-medium text-gray-200 mb-2">
              1. Pick a color:
            </label>
            <div className="flex items-center">
              <div 
                className="w-10 h-10 rounded-full mr-2"
                style={{ backgroundColor: baseColor }}
              />
              <Input
                id="base-color"
                type="text"
                value={baseColor}
                onChange={handleBaseColorChange}
                className="flex-grow bg-gray-700 text-white border-gray-600"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="harmony-select" className="block text-lg font-medium text-gray-200 mb-2">
              2. Choose a color combination:
            </label>
            <select
              id="harmony-select"
              value={selectedHarmony.name}
              onChange={handleHarmonyChange}
              className="w-full bg-gray-700 text-white border-gray-600 rounded-md p-2"
            >
              {colorHarmonies.map((harmony) => (
                <option key={harmony.name} value={harmony.name}>
                  {harmony.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Harmony Colors</h2>
            <div className="flex flex-wrap gap-4">
              {harmonyColors.map((color, index) => (
                <div key={index} className="flex-1 min-w-[100px]">
                  <div
                    className="w-full h-20 rounded-lg mb-2 relative group"
                    style={{ backgroundColor: color }}
                  >
                    <Button
                      onClick={() => handleCopyColor(color)}
                      className="absolute top-1 right-1 bg-white/10 hover:bg-white/20 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Copy className="h-4 w-4" />
                      <Toaster position="bottom-right" />
                    </Button>
                  </div>
                  <p className="text-white text-center">{color}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button onClick={handleDownloadPalette} className="bg-purple-600 hover:bg-purple-700 text-white">
              <Download className="h-5 w-5 mr-2" />
              Download Palette
            </Button>
          </div>
        </div>

        <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">About Color Wheel Theory</h2>
              <p className="text-white">
                Color Wheel Theory is a fundamental concept in color design that helps create harmonious color combinations. This tool allows you to explore different color harmonies based on a selected base color.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">How to Use</h2>
              <p className="text-white">
                1. Click and drag the color dots on the wheel to select colors.<br />
                2. Choose a color harmony from the dropdown menu.<br />
                3. The color wheel will update with your selected colors.<br />
                4. Copy individual colors or download the entire palette.<br />
                5. Experiment with different base colors and harmonies to find the perfect combination.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Color Harmonies</h2>
              <p className="text-white">
                - Complementary: Colors opposite each other on the color wheel.<br />
                - Analogous: Colors adjacent to each other on the color wheel.<br />
                - Triadic: Three colors evenly spaced around the color wheel.<br />
                - Split-Complementary: A base color and two colors adjacent to its complement.<br />
                - Tetradic: Four colors arranged into two complementary pairs.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      
    </div>
  );
}