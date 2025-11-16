"use client";

import { Warp } from "@paper-design/shaders-react"
import { useState } from 'react'

export default function PinkyNewsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setMessage('Merci ! Vous êtes maintenant inscrit à notre newsletter.')
    setEmail('')
    setIsSubmitting(false)
    
    setTimeout(() => setMessage(''), 5000)
  }

  return (
    <main className="relative min-h-[500px]">
      <div className="relative z-10 min-h-[500px] flex items-center justify-center px-8">
        <div className="max-w-2xl w-full text-center space-y-8">
          <h1 className="text-white text-6xl md:text-7xl font-sans font-light italic">Coming Soon</h1>

          {/* Email input with submit button */}
          <form onSubmit={handleSubmit} className="relative z-50" style={{ position: "relative", zIndex: 100 }}>
            <div className="relative" style={{ position: "relative", zIndex: 100 }}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 pr-20 text-lg bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 relative z-50"
                style={{ position: "relative", zIndex: 100, pointerEvents: "auto" }}
                required
                disabled={isSubmitting}
                tabIndex={0}
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 group disabled:opacity-50 disabled:cursor-not-allowed z-50"
                style={{ position: "absolute", zIndex: 101, pointerEvents: "auto" }}
              >
                <svg
                  className="w-5 h-5 text-gray-800 group-hover:translate-x-0.5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </form>
          
          {message && (
            <p className="text-white/90 text-sm mt-4">{message}</p>
          )}

          {/* Description text */}
          <p className="text-white/90 text-lg font-sans font-light leading-relaxed">
            Don't miss out on the latest news and special content!
            <br />
            Sign up for our newsletter now and stay in the loop with every update.
          </p>
        </div>
      </div>
    </main>
  )
}

