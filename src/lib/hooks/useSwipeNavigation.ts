"use client"

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

interface SwipeNavigationConfig {
  threshold?: number // Distance minimale pour déclencher la navigation
  velocity?: number // Vitesse minimale pour déclencher la navigation
}

export function useSwipeNavigation(config: SwipeNavigationConfig = {}) {
  const { threshold = 100, velocity = 0.3 } = config
  const router = useRouter()
  const [isSwiping, setIsSwiping] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startY, setStartY] = useState(0)
  const [startTime, setStartTime] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [currentY, setCurrentY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Configuration des pages et leur ordre
  const pages = [
    '/',
    '/la-serre-aux-papillons',
    '/nyc-sessions',
    '/amarela',
    '/co-productions'
  ]

  const getCurrentPageIndex = () => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname
      return pages.indexOf(path)
    }
    return 0
  }

  const navigateToPage = (direction: 'next' | 'prev') => {
    const currentIndex = getCurrentPageIndex()
    let nextIndex: number

    if (direction === 'next') {
      nextIndex = currentIndex < pages.length - 1 ? currentIndex + 1 : 0
    } else {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : pages.length - 1
    }

    const nextPage = pages[nextIndex]
    if (nextPage && nextPage !== window.location.pathname) {
      router.push(nextPage)
    }
  }

  const handleTouchStart = (e: TouchEvent | MouseEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY

    setStartX(clientX)
    setStartY(clientY)
    setCurrentX(clientX)
    setCurrentY(clientY)
    setStartTime(Date.now())
    setIsSwiping(true)
  }

  const handleTouchMove = (e: TouchEvent | MouseEvent) => {
    if (!isSwiping) return

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY

    setCurrentX(clientX)
    setCurrentY(clientY)
  }

  const handleTouchEnd = () => {
    if (!isSwiping) return

    const deltaX = currentX - startX
    const deltaY = currentY - startY
    const deltaTime = Date.now() - startTime
    const velocityX = Math.abs(deltaX) / deltaTime

    // Vérifier si le mouvement est principalement horizontal
    const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY)

    if (isHorizontalSwipe && Math.abs(deltaX) > threshold && velocityX > velocity) {
      if (deltaX > 0) {
        // Glissement vers la droite -> page précédente
        navigateToPage('prev')
      } else {
        // Glissement vers la gauche -> page suivante
        navigateToPage('next')
      }
    }

    setIsSwiping(false)
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Événements tactiles
    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchmove', handleTouchMove, { passive: true })
    container.addEventListener('touchend', handleTouchEnd, { passive: true })

    // Événements souris (pour le développement)
    container.addEventListener('mousedown', handleTouchStart, { passive: true })
    container.addEventListener('mousemove', handleTouchMove, { passive: true })
    container.addEventListener('mouseup', handleTouchEnd, { passive: true })

    return () => {
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)
      container.removeEventListener('mousedown', handleTouchStart)
      container.removeEventListener('mousemove', handleTouchMove)
      container.removeEventListener('mouseup', handleTouchEnd)
    }
  }, [isSwiping, startX, startY, currentX, currentY, startTime])

  return { containerRef, isSwiping }
}
