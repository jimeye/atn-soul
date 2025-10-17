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

export default function NYCSessionsPage() {
  const isMobile = useIsMobile()
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
            <a href="/" style={{ color: 'black', textDecoration: 'none', marginBottom: '17px', display: 'block' }}>About</a>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <a href="/la-serre-aux-papillons" style={{ color: 'black', textDecoration: 'none' }}>
                La Serre aux Papillons (Film)
              </a>
              <a href="/nyc-sessions" style={{ color: '#ed002a', textDecoration: 'none' }}>
                NYC Sessions (Performance)
              </a>
              <a href="/amarela" style={{ color: 'black', textDecoration: 'none' }}>
                Amarela (LP)
              </a>
              <a href="/co-productions" style={{ color: 'black', textDecoration: 'none' }}>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <a href="https://open.spotify.com/artist/your-spotify-id" target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', textDecoration: 'none' }}>
                Spotify
              </a>
              <span style={{ color: '#0066cc' }}>|</span>
              <a href="https://music.apple.com/artist/your-apple-id" target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', textDecoration: 'none' }}>
                Apple Music
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

        {/* Colonne 2 - Contenu NYC Sessions - Desktop */}
        {!isMobile && (
          <div style={{
            padding: '50px 20px 20px 20px',
            height: '87vh',
            borderRadius: '0',
            overflow: 'auto'
          }} className="mobile-auto-height">
            <h1 translate="no" className="notranslate" style={{ color: 'black', fontSize: '2.2rem', marginBottom: '0px', fontWeight: 'bold', fontFamily: 'Helvetica Neue LT Std, sans-serif' }}>
              nyc sessions
            </h1>

            <div style={{ color: 'black', lineHeight: '1.6', fontFamily: 'Lucida Console, monospace', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <p style={{ fontSize: '0.97rem', margin: 0, color: '#0024cc' }}>
                  role : composer & performer
                </p>
              </div>
              
              <p style={{ marginBottom: '0px' }}>
                nyc improvised performances
              </p>
            </div>

            {/* Vidéo 1 - déplacée en section basse */}
            <div style={{ display: 'none' }}>
              <p style={{ 
                marginBottom: '0px', 
                fontFamily: 'Lucida Console, monospace', 
                fontSize: '0.85rem',
                color: 'black'
              }}>
                <strong><em>Doubts & Melancholia</em></strong> ft. Declan Sheehy Moss
              </p>
              <p style={{ 
                marginBottom: '3px', 
                fontFamily: 'Lucida Console, monospace', 
                fontSize: '0.85rem',
                color: 'black',
                marginTop: '-1px'
              }}>
                Performed in Industry City, Brooklyn, NYC
              </p>
              <iframe
                src="https://www.youtube.com/embed/-ls8tbfCPaw"
                width="100%"
                height="300"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  borderRadius: '0'
                }}
              ></iframe>
            </div>
          </div>
        )}

        {/* Colonne 3 - désactivée, vidéos déplacées en section 2/4 */}
        {!isMobile && (
          <div style={{ display: 'none' }}></div>
        )}

        {/* Section vidéos - Desktop sous les colonnes (2/4) */}
        {!isMobile && (
          <div style={{ gridColumn: '2 / 4', padding: '0 20px 20px 20px', marginTop: '-560px' }}>
            {/* Vidéo 1 */}
            <div style={{ marginTop: '20px' }}>
              <p style={{ marginBottom: '0px', fontFamily: 'Lucida Console, monospace', fontSize: '0.85rem', color: 'black' }}>
                <strong><em>Doubts & Melancholia</em></strong> ft. Declan Sheehy Moss
              </p>
              <p style={{ marginBottom: '3px', fontFamily: 'Lucida Console, monospace', fontSize: '0.85rem', color: 'black', marginTop: '-1px' }}>
                Performed in Industry City, Brooklyn, NYC
              </p>
              <iframe
                src="https://www.youtube.com/embed/-ls8tbfCPaw"
                width="100%"
                height="360"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '0' }}
              ></iframe>
            </div>

            {/* Vidéo 2 */}
            <div style={{ marginTop: '30px' }}>
              <p style={{ marginBottom: '0px', fontFamily: 'Lucida Console, monospace', fontSize: '0.85rem', color: 'black' }}>
                <strong><em>live from the clouds</em></strong> (filmed by Eva Wang)
              </p>
              <p style={{ marginBottom: '3px', fontFamily: 'Lucida Console, monospace', fontSize: '0.85rem', color: 'black', marginTop: '-1px' }}>
                Performed in Manhattan, NYC
              </p>
              <iframe
                src="https://www.youtube.com/embed/D5kdbHVS-4c"
                width="100%"
                height="360"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '0' }}
              ></iframe>
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
            boxSizing: 'border-box',
            gridColumn: isMobileLandscape ? '1 / 2' : undefined
          }} className="mobile-auto-height">
            <h1 translate="no" className="notranslate" style={{ color: 'black', fontSize: '1.8rem', marginBottom: '0px', fontWeight: 'bold', fontFamily: 'Helvetica Neue LT Std, sans-serif' }}>
              nyc sessions
            </h1>

            <div style={{ color: 'black', lineHeight: '1.6', fontFamily: 'Lucida Console, monospace', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <p style={{ fontSize: '0.97rem', margin: 0, color: '#0024cc' }}>
                  role : composer & performer
                </p>
              </div>
              
              <p style={{ marginBottom: '15px' }}>
                nyc improvised performances
              </p>
            </div>
          </div>
        )}

        {/* Vidéos Mobile */}
        {isMobile && (
          <div style={{
            padding: isMobileLandscape ? '50px 20px 20px 20px' : '0px 20px 20px 20px',
            marginTop: isMobileLandscape ? undefined : '-16px',
            height: isMobileLandscape ? (mediaHeight ? `${mediaHeight}px` : 'auto') : 'auto',
            borderRadius: '0',
            overflow: 'auto',
            gridColumn: isMobileLandscape ? '2 / 3' : undefined
          }} className="mobile-auto-height">
            {/* Vidéo 1 */}
            <div style={{ marginBottom: '12px' }}>
              <p style={{ 
                marginBottom: '0px', 
                fontFamily: 'Lucida Console, monospace', 
                fontSize: '0.85rem',
                color: 'black'
              }}>
                <strong><em>Doubts & Melancholia</em></strong> ft. Declan Sheehy Moss
              </p>
              <p style={{ 
                marginBottom: '0px', 
                fontFamily: 'Lucida Console, monospace', 
                fontSize: '0.85rem',
                color: 'black',
                marginTop: '-1px'
              }}>
                Performed in Industry City, Brooklyn, NYC
              </p>
              <iframe
                src="https://www.youtube.com/embed/-ls8tbfCPaw"
                width="100%"
                height="250"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  borderRadius: '0'
                }}
              ></iframe>
            </div>

            {/* Vidéo 2 */}
            <div>
              <p style={{ 
                marginBottom: '0px', 
                fontFamily: 'Lucida Console, monospace', 
                fontSize: '0.85rem',
                color: 'black'
              }}>
                <strong><em>live from the clouds</em></strong> (filmed by Eva Wang)
              </p>
              <p style={{ 
                marginBottom: '0px', 
                fontFamily: 'Lucida Console, monospace', 
                fontSize: '0.85rem',
                color: 'black',
                marginTop: '-1px'
              }}>
                Performed in Manhattan, NYC
              </p>
              <iframe
                src="https://www.youtube.com/embed/D5kdbHVS-4c"
                width="100%"
                height="250"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  borderRadius: '0'
                }}
              ></iframe>
            </div>
          </div>
        )}

      </div>

    </div>
  )
}
