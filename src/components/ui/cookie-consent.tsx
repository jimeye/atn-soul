"use client"

import { useState, useEffect } from 'react'

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Vérifier si le consentement a déjà été donné
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Afficher le popup après un délai pour ne pas être trop agressif
      const timer = setTimeout(() => {
        setShowConsent(true)
        // Animation d'apparition
        setTimeout(() => setIsVisible(true), 100)
      }, 2000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
    setTimeout(() => setShowConsent(false), 300)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsVisible(false)
    setTimeout(() => setShowConsent(false), 300)
  }

  if (!showConsent) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      right: '20px',
      maxWidth: '400px',
      backgroundColor: 'white',
      border: '1px solid #e5e5e5',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
      zIndex: 10000,
      transform: isVisible ? 'translateY(0) scale(0.8)' : 'translateY(100px) scale(0.8)',
      transformOrigin: 'bottom left',
      opacity: isVisible ? 1 : 0,
      transition: 'all 0.3s ease',
      fontFamily: 'Lucida Console, monospace',
      fontSize: '0.85rem',
      lineHeight: '1.5'
    }}>
      {/* Icône cookie */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px'
      }}>
        <span style={{
          fontSize: '20px',
          marginRight: '10px'
        }}>
          🍪
        </span>
        <span style={{
          fontWeight: 'bold',
          color: '#ed002a'
        }}>
          Cookies & Confidentialité
        </span>
      </div>

      {/* Texte explicatif */}
      <p style={{
        margin: '0 0 15px 0',
        color: '#333',
        fontSize: '0.8rem'
      }}>
        Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
        En continuant à naviguer, vous acceptez notre utilisation des cookies.
      </p>

      {/* Boutons */}
      <div style={{
        display: 'flex',
        gap: '10px',
        justifyContent: 'flex-end'
      }}>
        <button
          onClick={declineCookies}
          style={{
            padding: '8px 16px',
            backgroundColor: 'transparent',
            color: '#666',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.75rem',
            transition: 'all 0.2s ease',
            fontFamily: 'Lucida Console, monospace'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f5f5f5'
            e.currentTarget.style.borderColor = '#ccc'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.borderColor = '#ddd'
          }}
        >
          Refuser
        </button>
        
        <button
          onClick={acceptCookies}
          style={{
            padding: '8px 16px',
            backgroundColor: '#ed002a',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.75rem',
            transition: 'all 0.2s ease',
            fontFamily: 'Lucida Console, monospace'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#d10022'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ed002a'
          }}
        >
          Accepter
        </button>
      </div>

      {/* Lien vers la politique de confidentialité */}
      <div style={{
        marginTop: '10px',
        textAlign: 'center'
      }}>
        <a
          href="/privacy-policy"
          style={{
            color: '#ed002a',
            textDecoration: 'none',
            fontSize: '0.7rem',
            borderBottom: '1px solid transparent',
            transition: 'border-color 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#ed002a'}
          onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
        >
          En savoir plus
        </a>
      </div>
    </div>
  )
}
