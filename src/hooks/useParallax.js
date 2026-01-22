import { useEffect, useRef, useState } from 'react'

export function useParallax(speed = 0.5) {
  const [offset, setOffset] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      
      const elementTop = ref.current.getBoundingClientRect().top
      const scrolled = window.pageYOffset
      const rate = scrolled * speed
      
      setOffset(rate)
    }

    // Use requestAnimationFrame for better performance
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])

  return [ref, offset]
}

// Hook for elements that should move based on their position in viewport
export function useParallaxElement(speed = 0.3) {
  const [offset, setOffset] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      
      const rect = ref.current.getBoundingClientRect()
      const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
      const movement = scrollPercent * 100 * speed
      
      setOffset(movement)
    }

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])

  return [ref, offset]
}