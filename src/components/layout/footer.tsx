"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function Footer() {
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 1024)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  // Toujours afficher le footer global

  return (
    <div style={{
      height: '10px',
      backgroundColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '10px',
      fontFamily: 'Lucida Console, monospace',
      fontSize: '10.1px',
      color: '#ed002a',
      marginTop: isMobile ? '0px' : '-26px'
    }}>
      Powered by {" "}
      <a
        href="https://joseph-studio-creative.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#ed002a', textDecoration: 'none', fontWeight: 'bold', marginLeft: '5px' }}
      >
        JOSEPH-STUDIO.COM
      </a>
      <span style={{ margin: '0 6px', color: '#ed002a' }}>—</span>
      <span style={{ color: '#ed002a' }}>Mgmt : </span>
      <a
        href="https://www.instagram.com/danatts/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#ed002a', textDecoration: 'none', fontWeight: 'bold', marginLeft: '4px' }}
      >
        DANATTS
      </a>
      {/* Icônes réseaux — déplacées après DANATTS */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginLeft: '10px' }}>
        {/* TikTok favicon — rouge par défaut, noir au survol */}
        <a
          href="https://www.tiktok.com/@atnsoul"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center' }}
          aria-label="TikTok"
        >
          <img
            src="https://www.tiktok.com/favicon.ico"
            alt="TikTok"
            width={11}
            height={11}
            style={{ display: 'block', filter: 'grayscale(1) invert(23%) sepia(93%) saturate(3557%) hue-rotate(341deg) brightness(98%) contrast(113%)' }}
            onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(1) brightness(0)')}
            onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(1) invert(23%) sepia(93%) saturate(3557%) hue-rotate(341deg) brightness(98%) contrast(113%)')}
          />
        </a>
        {/* Instagram — rouge par défaut, noir au survol */}
        <a
          href="https://www.instagram.com/atnsoul/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#ed002a', display: 'inline-flex', alignItems: 'center', transition: 'color 0.3s ease' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'black')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#ed002a')}
          aria-label="Instagram"
        >
          <svg width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" style={{ display: 'block' }}>
            <rect x="3.5" y="3.5" width="17" height="17" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="17.5" cy="6.5" r="1.4" fill="currentColor" />
          </svg>
        </a>
      </div>
    </div>
  )
}
