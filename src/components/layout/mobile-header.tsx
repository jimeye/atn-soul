"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const [isHidden, setIsHidden] = useState(false)
  const [isStreamOpen, setIsStreamOpen] = useState(false)
  const streamBtnRef = useRef<HTMLButtonElement | null>(null)
  const [menuPos, setMenuPos] = useState<{ left: number; top: number }>({ left: 0, top: 0 })

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) setIsStreamOpen(false)
  }

  const updateStreamMenuPosition = () => {
    if (!streamBtnRef.current) return
    const rect = streamBtnRef.current.getBoundingClientRect()
    setMenuPos({ left: Math.round(rect.left), top: Math.round(rect.bottom + 6) })
  }

  useEffect(() => {
    let lastY = typeof window !== 'undefined' ? window.scrollY : 0
    const threshold = 10
    const onScroll = () => {
      // Fermer l'overlay et le sous-menu Stream au scroll
      if (isMenuOpen) setIsMenuOpen(false)
      if (isStreamOpen) setIsStreamOpen(false)
      const currentY = window.scrollY
      if (currentY > lastY + threshold) {
        setIsHidden(true)
      } else if (currentY < lastY - threshold) {
        setIsHidden(false)
      }
      lastY = currentY
      // Si on veut suivre la position au scroll sans fermer, on mettrait:
      // if (isStreamOpen) updateStreamMenuPosition()
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isMenuOpen, isStreamOpen])

  useEffect(() => {
    if (!isStreamOpen) return
    updateStreamMenuPosition()
    const onResize = () => updateStreamMenuPosition()
    window.addEventListener('resize', onResize)
    window.addEventListener('orientationchange', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('orientationchange', onResize)
    }
  }, [isStreamOpen])

  return (
    <div className="mobile-header">
      {/* Header fixe en haut */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: 'transparent',
        padding: '5px 15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transform: isHidden ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.25s ease'
      }}>
        {/* Logo */}
        <a href="/" style={{ textDecoration: 'none' }}>
          <img 
            src="/atn-soul-website-typo-producer-paris-ultra-soul-ultrasoul.png" 
            alt="ATN SOUL" 
            style={{ 
              width: '120px', 
              height: 'auto'
            }}
          />
        </a>

        {/* Navigation mobile (masquée sur About) */}
        {pathname !== '/' && (
          <div style={{
            display: 'flex',
            gap: '6px',
            alignItems: 'center',
            fontFamily: 'Lucida Console, monospace',
            fontSize: '0.68rem'
          }}>
            {pathname !== '/' && (
              <a href="/" style={{ color: '#ed002a', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'black'} onMouseLeave={(e) => e.currentTarget.style.color = '#ed002a'}>
                About
              </a>
            )}
            {pathname !== '/la-serre-aux-papillons' && (
              <a href="/la-serre-aux-papillons" style={{ color: '#ed002a', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'black'} onMouseLeave={(e) => e.currentTarget.style.color = '#ed002a'}>
                Film
              </a>
            )}
            {pathname !== '/nyc-sessions' && (
              <a href="/nyc-sessions" style={{ color: '#ed002a', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'black'} onMouseLeave={(e) => e.currentTarget.style.color = '#ed002a'}>
                NYC
              </a>
            )}
            {pathname !== '/amarela' && (
              <a href="/amarela" style={{ color: '#ed002a', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'black'} onMouseLeave={(e) => e.currentTarget.style.color = '#ed002a'}>
                LP
              </a>
            )}
            {pathname !== '/co-productions' && (
              <a href="/co-productions" style={{ color: '#ed002a', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'black'} onMouseLeave={(e) => e.currentTarget.style.color = '#ed002a'}>
                Co-Prod
              </a>
            )}
            {/* Stream avec sous-menu */}
            <button
              ref={streamBtnRef}
              onClick={() => {
                const next = !isStreamOpen
                setIsStreamOpen(next)
                if (next) updateStreamMenuPosition()
              }}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                margin: 0,
                color: '#ed002a',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '0.68rem'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'black')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#ed002a')}
            >
              Stream ▾
            </button>
          </div>
        )}

        {/* Bouton menu hamburger */}
        <button
          onClick={toggleMenu}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '5px',
            color: '#ed002a',
            marginLeft: '-10px',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'black'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#ed002a'}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Sous-menu Stream (header) */}
      {isStreamOpen && !isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: menuPos.top,
            left: menuPos.left,
            zIndex: 1001,
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            borderRadius: 0,
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            minWidth: '140px',
            fontSize: '0.64rem'
          }}
        >
          <a
            href="https://open.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ed002a', textDecoration: 'none', padding: '2px 0', transition: 'color 0.3s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'black')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#ed002a')}
            onClick={() => setIsStreamOpen(false)}
          >
            Spotify
          </a>
          <a
            href="https://music.apple.com/fr/artist/atn-soul/1455380348"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ed002a', textDecoration: 'none', padding: '2px 0', transition: 'color 0.3s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'black')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#ed002a')}
            onClick={() => setIsStreamOpen(false)}
          >
            Apple Music
          </a>
        </div>
      )}

      {/* Menu de navigation */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: isHidden ? 0 : 96,
          left: 0,
          right: 0,
          backgroundColor: '#ffffff',
          borderBottom: 'none',
          zIndex: 900, // inférieur au header (1000) pour rester dessous
          padding: '20px',
          boxShadow: 'none'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0px',
            fontFamily: 'Lucida Console, monospace',
            fontSize: '1rem'
          }}>
            <a 
              className="shooting-underline-parent"
              href="/" 
              style={{ 
                color: 'black', 
                textDecoration: 'none',
                padding: '5px 0',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ed002a')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'black')}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="shooting-underline">About</span>
            </a>
            <a 
              className="shooting-underline-parent"
              href="/la-serre-aux-papillons" 
              style={{ 
                color: 'black', 
                textDecoration: 'none',
                padding: '5px 0',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ed002a')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'black')}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="shooting-underline">La Serre aux Papillons (Film)</span>
            </a>
            <a 
              className="shooting-underline-parent"
              href="/nyc-sessions" 
              style={{ 
                color: 'black', 
                textDecoration: 'none',
                padding: '5px 0',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ed002a')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'black')}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="shooting-underline">NYC Sessions (Performance)</span>
            </a>
            <a 
              className="shooting-underline-parent"
              href="/amarela" 
              style={{ 
                color: 'black', 
                textDecoration: 'none',
                padding: '5px 0',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ed002a')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'black')}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="shooting-underline">Amarela (LP)</span>
            </a>
            <a 
              className="shooting-underline-parent"
              href="/co-productions" 
              style={{ 
                color: 'black', 
                textDecoration: 'none',
                padding: '5px 0',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ed002a')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'black')}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="shooting-underline">Co-Productions</span>
            </a>

            {/* Séparateur */}
            <div style={{
              margin: '10px 0',
              paddingTop: '10px'
            }}>
              <div style={{
                color: '#0066cc',
                fontSize: '0.9rem',
                marginBottom: '5px',
                fontWeight: 'bold'
              }}>
                Stream now
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px'
              }}>
                <a 
                  className="shooting-underline"
                  href="https://music.apple.com/fr/artist/atn-soul/1455380348" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'black', textDecoration: 'none', padding: '3px 0', fontSize: '0.95rem', transition: 'color 0.3s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ed002a')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'black')}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Apple Music
                </a>
                <a 
                  className="shooting-underline"
                  href="https://open.spotify.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'black', textDecoration: 'none', padding: '3px 0', fontSize: '0.95rem', transition: 'color 0.3s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ed002a')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'black')}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Spotify
                </a>
                {/* Réseaux sociaux minimalistes */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
                  {/* TikTok - favicon officiel, NB par défaut, rouge au survol */}
                  <a
                    href="https://www.tiktok.com/@atnsoul"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
                  >
                    <img
                      src="https://www.tiktok.com/favicon.ico"
                      alt="TikTok"
                      width={18}
                      height={18}
                      style={{ display: 'block', filter: 'grayscale(1)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(1) invert(23%) sepia(93%) saturate(3557%) hue-rotate(341deg) brightness(98%) contrast(113%)')}
                      onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(1)')}
                    />
                  </a>
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/atnsoul/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'black', display: 'inline-flex', alignItems: 'center', textDecoration: 'none', transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ed002a')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'black')}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" style={{ display: 'block' }}>
                      <rect x="3.5" y="3.5" width="17" height="17" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                      <circle cx="17.5" cy="6.5" r="1.4" fill="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Espace pour compenser le header fixe */}
      <div style={{ height: '40px' }}></div>
    </div>
  )
}
