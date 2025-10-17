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

export default function AmarelaPage() {
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

  const vinylCovers = [
    {
      id: 1,
      image: "/images/1-amarela-noamle-atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-la-serre-aux-papillons.webp",
      title: "Amarela",
      subtitle: "Digital Album",
      url: "https://ampl.ink/w1XNN"
    },
    {
      id: 2,
      image: "/images/2-amarela-noamle-atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-la-serre-aux-papillons.webp",
      title: "Amarela",
      subtitle: "Limited Edition Vinyl",
      url: "https://ampl.ink/w1XNN"
    },
    {
      id: 3,
      image: "/images/3-amarela-noamle-atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-la-serre-aux-papillons.webp",
      title: "Amarela",
      subtitle: "Bandcamp",
      url: "https://atnsoulnoamle.bandcamp.com/album/amarela"
    }
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
                <a href="/amarela" style={{ color: '#ed002a', textDecoration: 'none' }}>
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

      {/* Powered by déplacé dans le Footer global */}

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
            </div>
          </div>

        {/* Colonne 2 - Contenu Amarela - Desktop */}
        {!isMobile && (
          <div style={{
            padding: '50px 20px 20px 20px',
            height: '87vh',
            borderRadius: '0',
            overflow: 'auto'
          }} className="mobile-auto-height">
            <h1 style={{ color: 'black', fontSize: '2.2rem', marginBottom: '0px', fontWeight: 'bold', fontFamily: 'Helvetica Neue LT Std, sans-serif' }}>
              amarela
            </h1>

            <div style={{ color: 'black', lineHeight: '1.6', fontFamily: 'Lucida Console, monospace', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <p style={{ fontSize: '0.97rem', margin: 0, color: '#0024cc' }}>
                  role : producer, composer & creative director
                </p>
              </div>
              
              <p style={{ marginBottom: '15px' }}>
                amarela - atn soul & noamle
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                Amarela is a 15-track collaborative album released in July 2020.
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                It's ATN Soul & Noamle's first independent album, following their first release Bleue (EP).
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                The album explores a wide range of influence including D'angelo, Erykah Badu, Coltrane, James Blake, Bjork, Tyler The Creator, J Dilla, Chassol, Flying Lotus, Thundercat, N*E*R*D and more.
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                Thematically, the album delves into love and hatred, depicting beautiful relationships that turn toxic.
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                It also addresses the struggles of being young in contemporary society, tackling themes of uncertainty, doubts, fears, fame, and judgments.
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                Amarela features contributions from musicians, singers, and rappers from the jazz and soul US and German scenes.
              </p>
            </div>
          </div>
        )}

        

        {/* Colonne 3 - Image seulement - Desktop */}
        {!isMobile && (
          <div style={{
            padding: '20px',
            height: '87vh',
            borderRadius: '0',
            overflow: 'hidden'
          }} className="mobile-auto-height">
            {/* Image principale */}
            <div style={{ marginBottom: '30px' }}>
              <img
                src="/images/amarela-noamle-atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-la-serre-aux-papillons.avif"
                alt="Amarela - ATN Soul & Noamle"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '0'
                }}
              />
            </div>
          </div>
        )}

        {/* Section Pochettes Vinyl - Desktop */}
        {!isMobile && (
          <div style={{
            gridColumn: '2 / 4',
            padding: '20px',
            marginTop: '-50px'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px'
            }}>
              {vinylCovers.map((item, index) => (
                <a
                  key={item.id}
                  href={item.url}
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
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)'
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'
                  }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
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
                    fontSize: '0.8rem'
                  }}>
                    <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>{item.title}</p>
                    <p style={{ margin: '0', color: '#666' }}>{item.subtitle}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Footer spécifique supprimé: désormais géré par Footer global */}
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
              amarela
            </h1>

            <div style={{ color: 'black', lineHeight: '1.6', fontFamily: 'Lucida Console, monospace', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <p style={{ fontSize: '0.97rem', margin: 0, color: '#0024cc' }}>
                  role : producer, composer & creative director
                </p>
              </div>
              
              <p style={{ marginBottom: '15px' }}>
                amarela - atn soul & noamle
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                Amarela is a 15-track collaborative album released in July 2020.
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                It's ATN Soul & Noamle's first independent album, following their first release Bleue (EP).
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                The album explores a wide range of influence including D'angelo, Erykah Badu, Coltrane, James Blake, Bjork, Tyler The Creator, J Dilla, Chassol, Flying Lotus, Thundercat, N*E*R*D and more.
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                Thematically, the album delves into love and hatred, depicting beautiful relationships that turn toxic.
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                It also addresses the struggles of being young in contemporary society, tackling themes of uncertainty, doubts, fears, fame, and judgments.
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                Amarela features contributions from musicians, singers, and rappers from the jazz and soul US and German scenes.
              </p>
            </div>
          </div>
        )}

        {/* Image et Pochettes Mobile */}
        {isMobile && (
          <div style={{
            padding: '50px 20px 20px 20px',
            height: isMobileLandscape ? (mediaHeight ? `${mediaHeight}px` : 'auto') : 'auto',
            borderRadius: '0',
            overflow: 'auto'
          }} className="mobile-auto-height">
            {/* Image principale */}
            <div style={{ marginBottom: '30px' }}>
              <img
                src="/images/amarela-noamle-atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-la-serre-aux-papillons.avif"
                alt="Amarela - ATN Soul & Noamle"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '0'
                }}
              />
            </div>

            {/* Powered by — Mobile portrait: place identique à l'accueil */}
            {!isMobileLandscape && (
              <div style={{
                height: '10px',
                backgroundColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '10px',
                fontFamily: 'Lucida Console, monospace',
                fontSize: '9.2px',
                color: '#ed002a',
                marginTop: '20px',
                marginBottom: '5px'
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
              </div>
            )}

            {/* Pochettes Vinyl - Mobile portrait (2 par ligne) */}
            {!isMobileLandscape && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '20px',
                marginTop: '20px'
              }}>
                {vinylCovers.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'black', display: 'block' }}
                  >
                    <div
                      style={{
                        width: '100%',
                        aspectRatio: '1',
                        borderRadius: '0px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)'
                        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)'
                        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{
                      marginTop: '12px',
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
            )}

          </div>
        )}

      </div>

      {/* Grille 3 pochettes à la fin - mobile paysage */}
      {isMobileLandscape && (
        <div style={{ padding: '0 20px 30px 20px', boxSizing: 'border-box' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', width: '100%' }}>
            {vinylCovers.map((item) => (
              <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black', display: 'block' }}>
                <div style={{ width: '100%', aspectRatio: '1', borderRadius: '0px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; }}
                >
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ marginTop: '12px', textAlign: 'center', fontFamily: 'Lucida Console, monospace', fontSize: '0.75rem' }}>
                  <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>{item.title}</p>
                  <p style={{ margin: '0', color: '#666' }}>{item.subtitle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}
