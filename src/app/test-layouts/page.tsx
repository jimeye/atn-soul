"use client"

import { useState, useEffect } from "react"
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

export default function TestLayoutsPage() {
  const [currentLayout, setCurrentLayout] = useState(1)
  const isMobile = useIsMobile()

  const layouts = [
    // Layout 1: Texte à gauche, image à droite (classique)
    {
      id: 1,
      name: "Classique - Texte/Image",
      grid: "50% 50%",
      mobile: "1fr 1fr"
    },
    // Layout 2: Image à gauche, texte à droite
    {
      id: 2,
      name: "Inversé - Image/Texte",
      grid: "50% 50%",
      mobile: "1fr 1fr"
    },
    // Layout 3: Texte plus large, image plus petite
    {
      id: 3,
      name: "Texte dominant - 70/30",
      grid: "70% 30%",
      mobile: "2fr 1fr"
    },
    // Layout 4: Image plus large, texte plus petit
    {
      id: 4,
      name: "Image dominante - 30/70",
      grid: "30% 70%",
      mobile: "1fr 2fr"
    },
    // Layout 5: Égal avec plus d'espace
    {
      id: 5,
      name: "Égal avec gap - 45/45",
      grid: "45% 45%",
      mobile: "1fr 1fr"
    },
    // Layout 6: Texte très large
    {
      id: 6,
      name: "Texte très large - 80/20",
      grid: "80% 20%",
      mobile: "3fr 1fr"
    },
    // Layout 7: Image très large
    {
      id: 7,
      name: "Image très large - 20/80",
      grid: "20% 80%",
      mobile: "1fr 3fr"
    },
    // Layout 8: Presque égal avec légère dominance texte
    {
      id: 8,
      name: "Légère dominance texte - 60/40",
      grid: "60% 40%",
      mobile: "3fr 2fr"
    },
    // Layout 9: Presque égal avec légère dominance image
    {
      id: 9,
      name: "Légère dominance image - 40/60",
      grid: "40% 60%",
      mobile: "2fr 3fr"
    },
    // Layout 10: Carré parfait
    {
      id: 10,
      name: "Carré parfait - 50/50",
      grid: "50% 50%",
      mobile: "1fr 1fr"
    }
  ]

  const currentLayoutData = layouts.find(layout => layout.id === currentLayout)

  return (
    <div style={{ padding: '0', margin: '0', minHeight: '100vh' }}>
      {/* Header Mobile - visible seulement sur mobile/tablette */}
      {isMobile && <MobileHeader />}
      
      {/* Sélecteur de layout */}
      <div style={{
        position: 'fixed',
        top: '80px',
        left: '20px',
        zIndex: 1001,
        backgroundColor: 'white',
        padding: '15px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        border: '1px solid #e5e5e5'
      }}>
        <div style={{
          fontFamily: 'Lucida Console, monospace',
          fontSize: '0.9rem',
          marginBottom: '10px',
          fontWeight: 'bold'
        }}>
          Layout {currentLayout}/10
        </div>
        <div style={{
          fontFamily: 'Lucida Console, monospace',
          fontSize: '0.8rem',
          marginBottom: '15px',
          color: '#666'
        }}>
          {currentLayoutData?.name}
        </div>
        <div style={{ display: 'flex', gap: '5px' }}>
          <button
            onClick={() => setCurrentLayout(Math.max(1, currentLayout - 1))}
            style={{
              padding: '5px 10px',
              backgroundColor: '#ed002a',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            ←
          </button>
          <button
            onClick={() => setCurrentLayout(Math.min(10, currentLayout + 1))}
            style={{
              padding: '5px 10px',
              backgroundColor: '#ed002a',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            →
          </button>
        </div>
      </div>

      {/* Grille principale */}
      <div className="responsive-grid" style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? (currentLayoutData?.mobile || '1fr 1fr') : (currentLayoutData?.grid || '50% 50%'),
        height: '95vh',
        gap: currentLayout === 5 ? '20px' : '0',
        minHeight: '95vh'
      }}>
        
        {/* Colonne 1 - Contenu (Texte ou Image selon le layout) */}
        <div style={{
          padding: '0',
          height: '90vh',
          borderRadius: '0',
          overflow: 'auto',
          backgroundColor: currentLayout === 2 || currentLayout === 4 || currentLayout === 7 || currentLayout === 9 ? 'transparent' : '#f8f8f8'
        }} className="mobile-auto-height">
          {currentLayout === 2 || currentLayout === 4 || currentLayout === 7 || currentLayout === 9 ? (
            // Image
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img
                src="/images/atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-1.jpg"
                alt="Portrait 1"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '0'
                }}
              />
            </div>
          ) : (
            // Texte
            <div>
              <h1 style={{
                color: 'black',
                fontSize: currentLayout === 3 || currentLayout === 6 || currentLayout === 8 ? '2.2rem' : '1.8rem',
                marginBottom: '20px',
                fontWeight: 'bold',
                fontFamily: 'Helvetica Neue LT Std, sans-serif'
              }}>
                ATN SOUL
              </h1>
              <div style={{
                color: 'black',
                lineHeight: '1.6',
                fontFamily: 'Lucida Console, monospace',
                fontSize: currentLayout === 3 || currentLayout === 6 || currentLayout === 8 ? '0.95rem' : '0.85rem'
              }}>
                <p style={{ marginBottom: '15px' }}>
                  ATN SOUL is a Paris-based producer and composer, crafting immersive soundscapes that bridge electronic and organic elements.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  With a focus on atmospheric textures and emotional depth, ATN SOUL creates music that transports listeners to otherworldly realms.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  Drawing from influences spanning ambient, electronic, and experimental music, each composition is a journey through sound and emotion.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  The project explores themes of transformation, memory, and the intersection of human experience with digital landscapes.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Colonne 2 - Contenu (Image ou Texte selon le layout) */}
        <div style={{
          padding: '0',
          height: '90vh',
          borderRadius: '0',
          overflow: currentLayout === 2 || currentLayout === 4 || currentLayout === 7 || currentLayout === 9 ? 'auto' : 'hidden',
          backgroundColor: currentLayout === 2 || currentLayout === 4 || currentLayout === 7 || currentLayout === 9 ? '#f8f8f8' : 'transparent'
        }} className="mobile-auto-height">
          {currentLayout === 2 || currentLayout === 4 || currentLayout === 7 || currentLayout === 9 ? (
            // Texte
            <div>
              <h1 style={{
                color: 'black',
                fontSize: currentLayout === 4 || currentLayout === 7 || currentLayout === 9 ? '1.6rem' : '1.8rem',
                marginBottom: '20px',
                fontWeight: 'bold',
                fontFamily: 'Helvetica Neue LT Std, sans-serif'
              }}>
                ATN SOUL
              </h1>
              <div style={{
                color: 'black',
                lineHeight: '1.6',
                fontFamily: 'Lucida Console, monospace',
                fontSize: currentLayout === 4 || currentLayout === 7 || currentLayout === 9 ? '0.8rem' : '0.85rem'
              }}>
                <p style={{ marginBottom: '15px' }}>
                  ATN SOUL is a Paris-based producer and composer, crafting immersive soundscapes that bridge electronic and organic elements.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  With a focus on atmospheric textures and emotional depth, ATN SOUL creates music that transports listeners to otherworldly realms.
                </p>
                <p style={{ marginBottom: '15px' }}>
                  Drawing from influences spanning ambient, electronic, and experimental music, each composition is a journey through sound and emotion.
                </p>
              </div>
            </div>
          ) : (
            // Image
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img
                src="/images/atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-2.jpg"
                alt="Portrait 2"
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

      </div>

    </div>
  )
}
