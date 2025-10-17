"use client"

import { useState, useEffect, useRef } from "react"
import { MobileHeader } from "@/components/layout/mobile-header"
import { useSwipeNavigation } from "@/lib/hooks/useSwipeNavigation"

// Fonction pour détecter si on est sur mobile/tablette
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 1024)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return isMobile
}

export default function CoProductionsPage() {
  const isMobile = useIsMobile()
  const [isLandscape, setIsLandscape] = useState(false)
  
  // Hooks pour le lecteur audio
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const { containerRef, isSwiping } = useSwipeNavigation()
  const textRef = useRef<HTMLDivElement>(null)
  const [mediaHeight, setMediaHeight] = useState<number | undefined>(undefined)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    const checkOrientation = () => setIsLandscape(window.innerWidth > window.innerHeight)
    checkOrientation()
    window.addEventListener('resize', checkOrientation)
    window.addEventListener('orientationchange', checkOrientation)
    return () => {
      window.removeEventListener('resize', checkOrientation)
      window.removeEventListener('orientationchange', checkOrientation)
    }
  }, [])

  const isMobileLandscape = isMobile && isLandscape

  useEffect(() => {
    const measure = () => {
      if (isMobileLandscape && textRef.current) setMediaHeight(textRef.current.offsetHeight)
      else setMediaHeight(undefined)
    }
    measure()
    window.addEventListener('resize', measure)
    window.addEventListener('orientationchange', measure)
    return () => {
      window.removeEventListener('resize', measure)
      window.removeEventListener('orientationchange', measure)
    }
  }, [isMobileLandscape])

  const coProductions = [
    {
      id: 1,
      image: "/images/co-prod/1-marmaduke-atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-la-serre-aux-papillons.webp",
      title: "Marmaduke",
      subtitle: "SUBSTANCE",
      spotifyUrl: "https://open.spotify.com/playlist/1pIR2Ey52U2TkTa9FF7qJk?si=86763451f7484fb9&nd=1&dlsi=8a7b96862c404370"
    },
    {
      id: 2,
      image: "/images/co-prod/2-95ANTNY-atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-la-serre-aux-papillons.webp",
      title: "95ANTNY",
      subtitle: "UNDER THE SUN",
      spotifyUrl: "https://open.spotify.com/playlist/1pIR2Ey52U2TkTa9FF7qJk?si=86763451f7484fb9&nd=1&dlsi=d4266c1a1e734db7"
    },
    {
      id: 3,
      image: "/images/co-prod/3-MARCO-TIMOSSI-atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-la-serre-aux-papillons.webp",
      title: "Marco Timossi",
      subtitle: "Kiusi",
      spotifyUrl: "https://open.spotify.com/playlist/1pIR2Ey52U2TkTa9FF7qJk?si=86763451f7484fb9&nd=1&dlsi=1a4e5c87c3164b88"
    },
    {
      id: 4,
      image: "/images/co-prod/4-Mike-Nasa-Dexter-Eliot-Klara-atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-la-serre-aux-papillons.webp",
      title: "Mike Nasa, Dexter Eliot, Klara Zangerl",
      subtitle: "Call Me Back (Keep it Steady)",
      spotifyUrl: "https://open.spotify.com/playlist/1pIR2Ey52U2TkTa9FF7qJk?si=86763451f7484fb9&nd=1&dlsi=1270ef2a1201471c"
    },
    {
      id: 5,
      image: "/images/co-prod/5-DEPLORE-NOAMLE-atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-la-serre-aux-papillons.webp",
      title: "DEPLORE NOAMLE",
      subtitle: "New Release",
      spotifyUrl: "https://open.spotify.com/playlist/1pIR2Ey52U2TkTa9FF7qJk?si=86763451f7484fb9&nd=1&dlsi=82f4f4ebd6674f7a"
    }
  ]

  return (
    <div 
      ref={containerRef}
      style={{
        padding: '0',
        margin: '0',
        minHeight: '100vh',
        cursor: isSwiping ? 'grabbing' : 'grab'
      }}>
    
      {/* Header Mobile - visible seulement sur mobile/tablette */}
      {isMobile && <MobileHeader />}
      
      <div className="responsive-grid" style={{ 
        display: 'grid',
        gridTemplateColumns: isMobileLandscape ? '1fr 1fr' : (isMobile ? '1fr' : '18% 41% 41%'),
        gridTemplateRows: isMobileLandscape ? 'auto' : (isMobile ? 'auto auto' : 'auto'),
        height: isMobile ? 'auto' : '95vh',
        gap: isMobile ? '6px' : '0',
        minHeight: isMobile ? 'auto' : '95vh',
        padding: '0'
      }}>

        {/* Colonne 1 - Rouge - visible seulement sur desktop */}
        <div style={{ 
            padding: '0', 
            height: '90vh',
            borderRadius: '0',
            position: 'relative',
            display: isMobile ? 'none' : 'block'
          }} className="mobile-auto-height">
            {/* Logo ATN SOUL */}
            <a href="/" style={{ textDecoration: 'none' }}>
              <img 
                src="/atn-soul-website-typo-producer-paris-ultra-soul-ultrasoul.png" 
                alt="ATN SOUL" 
                style={{ width: '92.4%', height: 'auto', marginBottom: '46px', marginLeft: '0%' }}
              />
            </a>
            
            {/* Navigation */}
            <div className="desktop-navigation" style={{ marginBottom: '20px', fontFamily: 'Lucida Console, monospace', fontSize: '0.81rem', marginLeft: '10px' }}>
              <a href="/" style={{ color: 'black', textDecoration: 'none', marginBottom: '17px', display: 'block', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ed002a'} onMouseLeave={(e) => e.currentTarget.style.color = 'black'}>About</a>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <a href="/la-serre-aux-papillons" style={{ color: 'black', textDecoration: 'none' }}>
                  La Serre aux Papillons (Film)
                </a>
                <a href="/nyc-sessions" style={{ color: 'black', textDecoration: 'none' }}>
                  NYC Sessions (Performance)
                </a>
                <a href="/amarela" style={{ color: 'black', textDecoration: 'none' }}>
                  Amarela (LP)
                </a>
                <a href="/co-productions" style={{ color: '#ed002a', textDecoration: 'none' }}>
                  Co-Productions
                </a>
              </div>
            </div>
            
            {/* Lecteur Audio + Spotify */}
            <div style={{ marginTop: '26px' }}>
              <audio ref={audioRef} src="/audio/atnsoul-track.mp3" />
              <div style={{ 
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                {/* Bouton Play/Pause Audio */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ 
                    color: '#ed002a', 
                    fontFamily: 'Lucida Console, monospace',
                    fontSize: '0.85rem',
                    marginRight: '-5px',
                    WebkitTextStroke: '0.5px black',
                    textStroke: '0.5px black'
                  }}>
                    unreleased
                  </span>
                  <button 
                    onClick={togglePlay}
                    style={{ 
                      padding: '5px 10px', 
                      backgroundColor: 'transparent', 
                      color: '#ed002a', 
                      border: 'none', 
                      cursor: 'pointer',
                      fontSize: '16px',
                      transition: 'color 0.3s ease',
                      WebkitTextStroke: '0.5px black',
                      textStroke: '0.5px black'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'black'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#ed002a'}
                  >
                    {isPlaying ? '⏸' : '▶'}
                  </button>
                </div>
                
              </div>
            </div>

            {/* Liens streaming en bas à gauche */}
            <div style={{ 
              position: 'absolute', 
              bottom: '20px', 
              left: '0', 
              fontFamily: 'Lucida Console, monospace', 
              fontSize: '0.72rem',
              textAlign: 'left',
              marginLeft: '10px'
            }}>
              <div style={{ color: '#0066cc', marginBottom: '5px' }}>Stream now</div>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-start' }}>
                <a href="https://music.apple.com/fr/artist/atn-soul/1455380348" target="_blank" style={{ color: '#0066cc', textDecoration: 'none' }}>
                  Apple Music
                </a>
                <span style={{ color: '#0066cc' }}>|</span>
                <a href="https://open.spotify.com" target="_blank" style={{ color: '#0066cc', textDecoration: 'none' }}>
                  Spotify
                </a>
              </div>
              {/* Réseaux sociaux */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                <a href="https://www.tiktok.com/@atnsoul" target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', display: 'inline-flex', transition: 'color 0.3s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'black')} onMouseLeave={(e) => (e.currentTarget.style.color = '#0066cc')} aria-label="TikTok">
                  <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" style={{ display: 'block' }}>
                    <path fill="currentColor" d="M12.5 3h2.2c.3 1.8 1.5 3.3 3.2 4v2.2c-1.2-.02-2.4-.37-3.4-1v5.5c0 3-2.4 5.4-5.4 5.4S4 16.7 4 13.7c0-2.9 2.2-5.2 5.1-5.4v2.3c-1.6.2-2.8 1.6-2.8 3.2 0 1.8 1.5 3.3 3.3 3.3s3.3-1.5 3.3-3.3V3z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/atnsoul/" target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', display: 'inline-flex', transition: 'color 0.3s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'black')} onMouseLeave={(e) => (e.currentTarget.style.color = '#0066cc')} aria-label="Instagram">
                  <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" style={{ display: 'block' }}>
                    <rect x="3.5" y="3.5" width="17" height="17" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="17.5" cy="6.5" r="1.4" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        {/* Colonne 2 - Contenu Co-Productions - Desktop */}
        {!isMobile && (
          <div style={{
            padding: '50px 20px 20px 20px',
            height: '87vh',
            borderRadius: '0',
            overflow: 'auto'
          }} className="mobile-auto-height">
            <h1 style={{ color: 'black', fontSize: '2.2rem', marginBottom: '0px', fontWeight: 'bold', fontFamily: 'Helvetica Neue LT Std, sans-serif' }}>
              co-productions
            </h1>

            <div style={{ color: 'black', lineHeight: '1.6', fontFamily: 'Lucida Console, monospace', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <p style={{ fontSize: '0.97rem', margin: 0, color: '#00ff00' }}>
                  role : producer & bassist
                </p>
              </div>
              
              <p style={{ marginBottom: '15px' }}>
                a collection of songs I've collaborated on, as a producer, a bassist ...
              </p>
              
              
            </div>

          </div>
        )}

        {/* Grille albums - Desktop sous les colonnes (2/4) */}
        {!isMobile && (
          <div style={{ gridColumn: '2 / 4', padding: '0 20px 20px 20px', marginTop: '-560px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {coProductions.map((item) => (
                <a key={item.id} href={item.spotifyUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black', display: 'block' }}>
                  <div style={{ width: '100%', aspectRatio: '1', borderRadius: '0px', overflow: 'hidden', boxShadow: '0 3px 6px rgba(0, 0, 0, 0.12)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer', willChange: 'transform', transform: 'translateZ(0)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.18)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 3px 6px rgba(0, 0, 0, 0.12)' }}
                  >
                    <img src={item.image} alt={item.title} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ marginTop: '10px', textAlign: 'center', fontFamily: 'Lucida Console, monospace', fontSize: '0.8rem' }}>
                    <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>{item.title}</p>
                    <p style={{ margin: '0', color: '#666' }}>{item.subtitle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}



        {/* Contenu Mobile */}
        {isMobile && (
          <div ref={textRef} style={{
            padding: '50px 20px 20px 20px',
            height: 'auto',
            borderRadius: '0',
            overflow: 'auto',
            boxSizing: 'border-box'
          }} className="mobile-auto-height">
            <h1 style={{ color: 'black', fontSize: '1.8rem', marginBottom: '0px', fontWeight: 'bold', fontFamily: 'Helvetica Neue LT Std, sans-serif' }}>
              co-productions
            </h1>

            <div style={{ color: 'black', lineHeight: '1.6', fontFamily: 'Lucida Console, monospace', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <p style={{ fontSize: '0.97rem', margin: 0, color: '#00ff00' }}>
                  role : producer & bassist
                </p>
              </div>
              
              <p style={{ marginBottom: '15px' }}>
                a collection of songs I've collaborated on, as a producer, a bassist ...
              </p>
              
              
            </div>
          </div>
        )}

        {/* Pochettes Vinyl Mobile */}
        {isMobile && (
          <div style={{
            padding: isMobileLandscape ? '20px 20px' : '0px 20px 20px 20px',
            marginTop: isMobileLandscape ? undefined : '-16px',
            height: isMobileLandscape ? (mediaHeight ? `${mediaHeight}px` : 'auto') : 'auto',
            borderRadius: '0',
            overflow: 'auto',
            boxSizing: 'border-box'
          }} className="mobile-auto-height">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '15px',
              padding: isMobileLandscape ? '20px 0' : '5px 0'
            }}>
              {coProductions.map((item) => (
                <a
                  key={item.id}
                  href={item.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    display: 'block'
                  }}
                >
                  <div style={{
                    width: '100%',
                    aspectRatio: '1',
                    borderRadius: '0px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.10)',
                    transition: 'transform 0.2s ease',
                    cursor: 'pointer',
                    willChange: 'transform',
                    transform: 'translateZ(0)'
                  }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div style={{
                    marginTop: '10px',
                    textAlign: 'center',
                    fontFamily: 'Lucida Console, monospace',
                    fontSize: '0.75rem'
                  }}>
                    <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>{item.title}</p>
                    <p style={{ margin: '0', color: '#666' }}>{item.subtitle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  )
}
