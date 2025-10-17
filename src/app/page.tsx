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

const portraitImages = [
  { id: 1, src: "/images/atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-1.jpg", alt: "Portrait 1" },
  { id: 2, src: "/images/atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-2.jpg", alt: "Portrait 2" },
  { id: 3, src: "/images/atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-3.jpg", alt: "Portrait 3" },
]

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isSpotifyPlaying, setIsSpotifyPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const spotifyRef = useRef<HTMLIFrameElement>(null)
  const spotifyWindowRef = useRef<Window | null>(null)
  const isMobile = useIsMobile()
  const { containerRef, isSwiping } = useSwipeNavigation()
  const textRef = useRef<HTMLDivElement>(null)
  const [sliderHeight, setSliderHeight] = useState<number | undefined>(undefined)
  const [isLandscape, setIsLandscape] = useState(false)

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

  // Défilement automatique toutes les 2 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % portraitImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const measure = () => {
      if (isMobileLandscape && textRef.current) {
        setSliderHeight(textRef.current.offsetHeight)
      } else {
        setSliderHeight(undefined)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    window.addEventListener('orientationchange', measure)
    return () => {
      window.removeEventListener('resize', measure)
      window.removeEventListener('orientationchange', measure)
    }
  }, [isMobileLandscape, currentImageIndex])

  const togglePlay = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        try {
          await audioRef.current.play()
          setIsPlaying(true)
        } catch (error) {
          console.log('Erreur lors de la lecture audio:', error)
          setIsPlaying(false)
        }
      }
    }
  }

  const toggleSpotifyPlay = () => {
    if (isSpotifyPlaying) {
      // Arrêter la musique
      if (spotifyRef.current) {
        spotifyRef.current.src = "about:blank"
      }
      setIsSpotifyPlaying(false)
    } else {
      // Essayer avec Apple Music
      if (spotifyRef.current) {
        spotifyRef.current.src = "https://embed.music.apple.com/fr/artist/atn-soul/1455380348?app=music&autoplay=1"
      }
      setIsSpotifyPlaying(true)
    }
  }
  return (
      <div 
            ref={containerRef}
            style={{ 
        padding: '0', 
        margin: '0', 
        minHeight: '100vh',
        overflowX: 'hidden',
        width: '100%',
        cursor: isSwiping ? 'grabbing' : 'grab'
      }}>
      
        {/* Header Mobile - visible seulement sur mobile/tablette */}
        {isMobile && <MobileHeader />}
        
        <div className="responsive-grid" style={{ 
        display: 'grid',
        gridTemplateColumns: isMobileLandscape ? '1fr 1fr' : (isMobile ? '1fr' : '18% 41% 41%'),
        gridTemplateRows: 'auto',
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
                <a href="/la-serre-aux-papillons" style={{ color: 'black', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ed002a'} onMouseLeave={(e) => e.currentTarget.style.color = 'black'}>
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
                <a
                  href="https://www.tiktok.com/@atnsoul"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0066cc', display: 'inline-flex', transition: 'color 0.3s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'black')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#0066cc')}
                  aria-label="TikTok"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" style={{ display: 'block' }}>
                    <path fill="currentColor" d="M12.5 3h2.2c.3 1.8 1.5 3.3 3.2 4v2.2c-1.2-.02-2.4-.37-3.4-1v5.5c0 3-2.4 5.4-5.4 5.4S4 16.7 4 13.7c0-2.9 2.2-5.2 5.1-5.4v2.3c-1.6.2-2.8 1.6-2.8 3.2 0 1.8 1.5 3.3 3.3 3.3s3.3-1.5 3.3-3.3V3z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/atnsoul/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0066cc', display: 'inline-flex', transition: 'color 0.3s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'black')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#0066cc')}
                  aria-label="Instagram"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" style={{ display: 'block' }}>
                    <rect x="3.5" y="3.5" width="17" height="17" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="17.5" cy="6.5" r="1.4" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        {/* Colonne 2 - Texte About */}
        <div ref={textRef} style={{ 
          padding: isMobile ? '50px 20px 20px 20px' : '10px', 
          height: isMobile ? 'auto' : '90vh',
          borderRadius: '0',
          overflow: isMobile ? 'visible' : 'auto',
          boxSizing: 'border-box',
          gridColumn: isMobileLandscape ? '1 / 2' : undefined
        }} className="mobile-auto-height">
          <div style={{ color: 'black', lineHeight: '1.6', fontFamily: 'Lucida Console, monospace', fontSize: '0.85rem' }}>
            <h1 style={{
              margin: '0 0 0 0',
              color: 'black',
              fontFamily: 'Helvetica Neue LT Std, sans-serif',
              fontSize: isMobile ? '1.8rem' : '2.2rem',
              fontWeight: 'bold'
            }}>
              About
            </h1>
            <p style={{ marginBottom: '15px' }}>
              Ethan Fellous, also known by his artist name ATN Soul, is a musician, producer, composer, and lyricist from Paris.
            </p>
            
            <p style={{ marginBottom: '15px' }}>
              At the age of 14, he began his career by producing beats on his father&apos;s MPC before developing versatile skills by playing the guitar, bass, piano, clarinet, and singing.
            </p>
            
            <p style={{ marginBottom: '15px' }}>
              After releasing a first Hip Hop / House LP at the age of 17, Ethan moved to Berlin to study music production at University. Ironically, he ended up re-discovering his deep love for Jazz harmony in the Techno capital of the world.
            </p>
            
            <p style={{ marginBottom: '15px' }}>
              Collaborating on two projects with the Israeli singer Noamle, Ethan affirmed his inclination for a contemporary approach to Pop, blending Jazz elements, Electronic sounds and Neo Soul grooves.
            </p>
            
            <p style={{ marginBottom: '15px' }}>
              Upon his return to Paris, he decided to perfect his composition skills by studying Jazz harmony at the conservatory.
            </p>
            
            <p style={{ marginBottom: '15px' }}>
              Currently, Ethan is dedicated to making a transmedia music - documentary film while preparing for his first solo album and producing for other artists.
            </p>
          </div>
        </div>

        {/* Colonne 3 - Slider d'images (Mobile en dessous, Desktop colonne 3) */}
        {isMobile ? (
          <div style={{ 
              padding: '20px 20px', 
              borderRadius: '0',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxSizing: 'border-box',
              height: isMobileLandscape ? (sliderHeight ? `${sliderHeight}px` : 'auto') : 'auto',
              gridColumn: isMobileLandscape ? '2 / 3' : undefined
            }} className="mobile-auto-height">
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <img
                src={portraitImages[currentImageIndex].src}
                alt={portraitImages[currentImageIndex].alt}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }}
              />

              {currentImageIndex === 0 && (
                <div style={{ 
                  position: 'absolute', 
                  bottom: '16px', 
                  left: '20px',
                  color: '#ed002a',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  fontFamily: 'Lucida Console, monospace'
                }}>
                  Credit: Melanie Elbaz
                </div>
              )}

              {currentImageIndex === 1 && (
                <div style={{ 
                  position: 'absolute', 
                  bottom: '16px', 
                  left: '20px',
                  color: '#ed002a',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  fontFamily: 'Lucida Console, monospace'
                }}>
                  Credit: Nina Andersson
                </div>
              )}

              {currentImageIndex === 2 && (
                <div style={{ 
                  position: 'absolute', 
                  bottom: '16px', 
                  left: '20px',
                  color: '#ed002a',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  fontFamily: 'Lucida Console, monospace'
                }}>
                  Credit: Alan Chicheportiche
                </div>
              )}
            </div>
          </div>
        ) : null}

        {/* Colonne 3 - Slider d'images (Desktop) */}
        {!isMobile && (
          <div style={{ 
              padding: '20px', 
              height: '87vh',
              borderRadius: '0',
              position: 'relative',
              overflow: 'hidden'
            }} className="mobile-auto-height">
            {/* Image actuelle avec marge blanche */}
            <div style={{ 
              position: 'absolute', 
              top: '30px', 
              left: '30px', 
              right: '30px', 
              bottom: '30px', 
              backgroundColor: 'white',
              overflow: 'hidden'
            }}>
              <img
                src={portraitImages[currentImageIndex].src}
                alt={portraitImages[currentImageIndex].alt}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }}
              />
            </div>

            {/* Numérotation en haut à droite sur la photo */}
            <div style={{ 
              position: 'absolute', 
              top: '40px', 
              right: '40px',
              color: '#ed002a',
              fontSize: '11px',
              fontWeight: 'bold',
              fontFamily: 'Lucida Console, monospace'
            }}>
              {currentImageIndex + 1}/3
            </div>

            {/* Credit Melanie Elbaz sur la photo 1 */}
            {currentImageIndex === 0 && (
              <div style={{ 
                position: 'absolute', 
                bottom: '40px', 
                left: '40px',
                color: '#ed002a',
                fontSize: '11px',
                fontWeight: 'bold',
                fontFamily: 'Lucida Console, monospace'
              }}>
                Credit: Melanie Elbaz
              </div>
            )}

            {/* Credit Nina Andersson sur la photo 2 */}
            {currentImageIndex === 1 && (
              <div style={{ 
                position: 'absolute', 
                bottom: '40px', 
                left: '40px',
                color: '#ed002a',
                fontSize: '11px',
                fontWeight: 'bold',
                fontFamily: 'Lucida Console, monospace'
              }}>
                Credit: Nina Andersson
              </div>
            )}

            {/* Credit Alan Chicheportiche sur la photo 3 */}
            {currentImageIndex === 2 && (
              <div style={{ 
                position: 'absolute', 
                bottom: '40px', 
                left: '40px',
                color: '#ed002a',
                fontSize: '11px',
                fontWeight: 'bold',
                fontFamily: 'Lucida Console, monospace'
              }}>
                Credit: Alan Chicheportiche
              </div>
            )}


          </div>
        )}

      </div>
      


    </div>
  )
}