import React, { useEffect, useState } from 'react'
import { AlertCircleIcon, HomeIcon, ArrowRightIcon } from 'lucide-react'
import '../styles/index.css'
const NotFound = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      const glitchElement = document.querySelector('.glitch-effect')
      if (glitchElement) {
        glitchElement.classList.add('active')
        setTimeout(() => {
          glitchElement.classList.remove('active')
        }, 200)
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      {/* Animated circles */}
      <div
        className={`absolute h-64 w-64 rounded-full bg-blue-500/10 blur-3xl transition-all duration-1000 ease-in-out ${mounted ? 'opacity-70' : 'opacity-0 scale-50'}`}
        style={{
          top: '20%',
          left: '15%',
        }}
      ></div>
      <div
        className={`absolute h-80 w-80 rounded-full bg-purple-500/10 blur-3xl transition-all duration-1000 ease-in-out delay-300 ${mounted ? 'opacity-70' : 'opacity-0 scale-50'}`}
        style={{
          bottom: '10%',
          right: '15%',
        }}
      ></div>
      {/* Main content */}
      <div className="relative z-10 max-w-2xl px-4 text-center">
        <div
          className={`glitch-effect transition-all duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}
        >
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
            404
          </h1>
        </div>
        <div
          className={`mb-8 transition-all duration-700 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <div className="flex items-center justify-center mb-4">
            <AlertCircleIcon className="text-red-400 mr-2" size={24} />
            <h2 className="text-xl font-light tracking-wider">
              PAGE NOT FOUND
            </h2>
          </div>
          <p className="text-gray-400 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved to
            another dimension.
          </p>
        </div>
        {/* Action buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}
        >
          <button className="group px-6 py-3 bg-transparent border border-blue-500 rounded-full flex items-center justify-center transition-all hover:bg-blue-500/10">
            <HomeIcon size={18} className="mr-2" />
            <span>Return Home</span>
          </button>
          <button className="group px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center transition-all hover:brightness-110">
            <span>Report Issue</span>
            <ArrowRightIcon
              size={18}
              className="ml-2 transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
      {/* Decorative elements */}
      <div
        className={`absolute bottom-8 left-0 right-0 flex justify-center transition-all duration-1000 delay-700 ${mounted ? 'opacity-50' : 'opacity-0'}`}
      >
        <div className="text-xs text-gray-500 tracking-wider">
          SYSTEM ERROR • ROUTE NOT FOUND • ERROR CODE 404
        </div>
      </div>
      <style jsx>{`
        .bg-grid {
          background-image: linear-gradient(
              to right,
              rgba(55, 65, 81, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(55, 65, 81, 0.1) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
        }
        .glitch-effect.active {
          animation: glitch 0.2s linear;
        }
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-5px, 5px);
          }
          40% {
            transform: translate(-5px, -5px);
          }
          60% {
            transform: translate(5px, 5px);
          }
          80% {
            transform: translate(5px, -5px);
          }
          100% {
            transform: translate(0);
          }
        }
      `}</style>
    </div>
  )
}
export default NotFound