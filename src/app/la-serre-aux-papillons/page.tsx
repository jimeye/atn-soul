"use client"

import { useState, useEffect, useRef } from "react"
import { MobileHeader } from "@/components/layout/mobile-header"

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

export default function LaSerrePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const isMobile = useIsMobile()
  const [isHovered, setIsHovered] = useState(false)
  const [isLandscape, setIsLandscape] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)
  const [mediaHeight, setMediaHeight] = useState<number | undefined>(undefined)
  
  // Hooks pour le lecteur audio
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

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

  // Défilement automatique toutes les 2 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % portraitImages.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const checkOrientation = () => {
      setIsLandscape(window.innerWidth > window.innerHeight)
    }
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
      if (isMobileLandscape && textRef.current) {
        setMediaHeight(textRef.current.offsetHeight)
      } else {
        setMediaHeight(undefined)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    window.addEventListener('orientationchange', measure)
    return () => {
      window.removeEventListener('resize', measure)
      window.removeEventListener('orientationchange', measure)
    }
  }, [isMobileLandscape])

  const portraitImages = [
    "/images/atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-1.jpg",
    "/images/atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-2.jpg",
    "/images/atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-3.jpg"
  ]

  return (
    <div style={{
      padding: '0',
      margin: '0',
      minHeight: '100vh'
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

        {/* Colonne 1 - Navigation - visible seulement sur desktop */}
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
                              <a href="/la-serre-aux-papillons" style={{ color: '#ed002a', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ed002a'} onMouseLeave={(e) => e.currentTarget.style.color = '#ed002a'}>
                  La Serre aux Papillons (Film)
                </a>
                <a href="/nyc-sessions" style={{ color: 'black', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ed002a'} onMouseLeave={(e) => e.currentTarget.style.color = 'black'}>
                  NYC Sessions (Performance)
                </a>
                <a href="/amarela" style={{ color: 'black', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ed002a'} onMouseLeave={(e) => e.currentTarget.style.color = 'black'}>
                  Amarela (LP)
                </a>
                <a href="/co-productions" style={{ color: 'black', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ed002a'} onMouseLeave={(e) => e.currentTarget.style.color = 'black'}>
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
                  marginRight: '-5px'
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
                    transition: 'color 0.3s ease'
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

        {/* Colonne 2 - Contenu La Serre aux Papillons */}
        {!isMobile && (
          <div style={{
            padding: '50px 20px 20px 20px',
            height: '90vh',
            borderRadius: '0',
            overflow: 'auto'
          }} className="mobile-auto-height">
            <h1 translate="no" className="notranslate" style={{ color: 'black', fontSize: '1.8rem', marginBottom: '0px', fontWeight: 'bold', fontFamily: 'Helvetica Neue LT Std, sans-serif' }}>
              la serre aux papillons - eva wang
            </h1>

            <div style={{ color: 'black', lineHeight: '1.6', fontFamily: 'Lucida Console, monospace', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <p style={{ fontSize: '0.97rem', margin: 0, color: '#0024cc' }}>
                  role : composer & sound designer
                </p>
              </div>
              
              <p style={{ marginBottom: '15px' }}>
                The Butterfly House by Paris-based filmmaker Eva Wang is a film about metamorphosis, and the transition from adolescence to adulthood.
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                It invites viewers to immerse themselves in its imagery and poetry, inviting them to explore the unspoken depths of the human experience.
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                Wang says : "Ethan skillfully paced La Serre aux Papillons by creating various soundscapes. Drawing from references, words, and colors, he masterfully crafted captivating melodies."
              </p>
              
              <p style={{ marginBottom: '15px', fontWeight: 'bold' }}>
                Tracklist :
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                0:12 - 0:38 La Valse de la Mort (Prélude)
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                1:09 - 1:55 Eveil
              </p>
              
                          <p style={{ marginBottom: '15px' }}>
              2:50 - 4:08 La Valse de la Mort
            </p>
          </div>
        </div>
        )}

        {/* Colonne 3 - Image La Serre aux Papillons (Desktop uniquement) */}
        {!isMobile && (
          <div 
            style={{
              padding: '20px',
              height: '87vh',
              borderRadius: '0',
              position: 'relative',
              overflow: 'hidden'
            }} 
            className="mobile-auto-height"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="/images/atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-la-serre-aux-papillons.webp"
              alt="La Serre aux Papillons"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '0'
              }}
            />
            
            {/* Bulle au survol */}
            {isHovered && (
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                padding: '15px 20px',
                borderRadius: '8px',
                fontFamily: 'Lucida Console, monospace',
                fontSize: '0.9rem',
                zIndex: 10,
                cursor: 'pointer',
                transition: 'opacity 0.3s ease'
              }}
              onClick={() => window.open('https://www.girlsinfilm.net/videos/the-butterfly-house', '_blank')}
              >
                distributed through Girls In Film
              </div>
            )}
          </div>
        )}

        {/* Colonne 2 - Contenu La Serre aux Papillons - Mobile (placé avant l'image) */}
        {isMobile && (
          <div ref={textRef} style={{
            padding: '50px 20px 20px 20px',
            height: 'auto',
            borderRadius: '0',
            overflow: 'auto',
            boxSizing: 'border-box',
            gridColumn: isMobileLandscape ? '1 / 2' : undefined
          }} className="mobile-auto-height">
            <h1 translate="no" className="notranslate" style={{ color: 'black', fontSize: '1.8rem', marginBottom: '0px', fontWeight: 'bold', fontFamily: 'Helvetica Neue LT Std, sans-serif' }}>
              la serre aux papillons - eva wang
            </h1>

            <div style={{ color: 'black', lineHeight: '1.6', fontFamily: 'Lucida Console, monospace', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <p style={{ fontSize: '0.97rem', margin: 0, color: '#0024cc' }}>
                  role : composer & sound designer
                </p>
              </div>
              
              <p style={{ marginBottom: '15px' }}>
                The Butterfly House by Paris-based filmmaker Eva Wang is a film about metamorphosis, and the transition from adolescence to adulthood.
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                It invites viewers to immerse themselves in its imagery and poetry, inviting them to explore the unspoken depths of the human experience.
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                Wang says : "Ethan skillfully paced La Serre aux Papillons by creating various soundscapes. Drawing from references, words, and colors, he masterfully crafted captivating melodies."
              </p>
              
              <p style={{ marginBottom: '15px', fontWeight: 'bold' }}>
                Tracklist :
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                0:12 - 0:38 La Valse de la Mort (Prélude)
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                1:09 - 1:55 Eveil
              </p>
              
                          <p style={{ marginBottom: '15px' }}>
              2:50 - 4:08 La Valse de la Mort
            </p>
          </div>
        </div>
        )}

        {/* Image La Serre aux Papillons - Mobile (après le texte) */}
        {isMobile && (
          <div 
            style={{
              padding: '20px 20px',
              height: isMobileLandscape ? (mediaHeight ? `${mediaHeight}px` : 'auto') : 'auto',
              borderRadius: '0',
              position: 'relative',
              overflow: 'hidden',
              boxSizing: 'border-box',
              gridColumn: isMobileLandscape ? '2 / 3' : undefined
            }} 
            className="mobile-auto-height"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="/images/atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-la-serre-aux-papillons.webp"
              alt="La Serre aux Papillons"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '0'
              }}
            />
          </div>
        )}

      </div>

      {/* Vidéo Vimeo - Mobile */}
      {isMobile && (
        <div style={{
          marginTop: '20px',
          marginBottom: '20px',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)'
        }}>
          <iframe
            src="https://player.vimeo.com/video/937228313?h=1234567890abcdef"
            width="100%"
            height="300"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{
              width: '100%',
              borderRadius: '0'
            }}
          ></iframe>
        </div>
      )}

      {/* Vidéo Vimeo - Desktop */}
      {!isMobile && (
        <div style={{
          marginTop: '20px',
          marginBottom: '20px',
          padding: '0 20px',
          textAlign: 'left'
        }}>
          <iframe
            src="https://player.vimeo.com/video/937228313?h=1234567890abcdef"
            width="122%"
            height="488"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{
              width: '122%',
              borderRadius: '0'
            }}
          ></iframe>
        </div>
      )}



    </div>
  )
}
