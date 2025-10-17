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

export default function PrivacyPolicyPage() {
  const isMobile = useIsMobile()

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
        gridTemplateColumns: isMobile ? '4fr 6fr' : '18% 41% 41%',
        height: isMobile ? 'calc(100vh - 10px)' : '95vh',
        gap: isMobile ? '6px' : '0',
        minHeight: isMobile ? 'calc(100vh - 10px)' : '95vh',
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
          </div>

        {/* Colonne 2 - Contenu Politique de Confidentialité */}
        <div style={{ 
          padding: isMobile ? '50px 0 50px 0' : '20px', 
          height: '90vh',
          borderRadius: '0',
          overflow: 'auto'
        }} className="mobile-auto-height">
          <h1 style={{ color: 'black', fontSize: isMobile ? '1.8rem' : '2.2rem', marginBottom: '20px', fontWeight: 'bold', fontFamily: 'Helvetica Neue LT Std, sans-serif' }}>
            Politique de Confidentialité
          </h1>

          <div style={{ color: 'black', lineHeight: '1.6', fontFamily: 'Lucida Console, monospace', fontSize: '0.85rem' }}>
            <p style={{ marginBottom: '15px' }}>
              <strong>Dernière mise à jour :</strong> 19 décembre 2024
            </p>
            
            <h2 style={{ fontSize: '1.2rem', marginBottom: '15px', marginTop: '30px', color: '#ed002a' }}>
              🍪 Utilisation des Cookies
            </h2>
            
            <p style={{ marginBottom: '15px' }}>
              Ce site utilise des cookies pour améliorer votre expérience de navigation. 
              Les cookies sont de petits fichiers texte stockés sur votre appareil.
            </p>
            
            <h3 style={{ fontSize: '1rem', marginBottom: '10px', marginTop: '20px' }}>
              Types de cookies utilisés :
            </h3>
            
            <ul style={{ marginBottom: '15px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '5px' }}>
                <strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site
              </li>
              <li style={{ marginBottom: '5px' }}>
                <strong>Cookies de préférences :</strong> Mémorisent vos choix (consentement, langue)
              </li>
              <li style={{ marginBottom: '5px' }}>
                <strong>Cookies analytiques :</strong> Nous aident à comprendre l'utilisation du site
              </li>
            </ul>
            
            <h2 style={{ fontSize: '1.2rem', marginBottom: '15px', marginTop: '30px', color: '#ed002a' }}>
              📊 Données collectées
            </h2>
            
            <p style={{ marginBottom: '15px' }}>
              Nous collectons uniquement les données nécessaires au fonctionnement du site :
            </p>
            
            <ul style={{ marginBottom: '15px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '5px' }}>Adresse IP (anonymisée)</li>
              <li style={{ marginBottom: '5px' }}>Pages visitées</li>
              <li style={{ marginBottom: '5px' }}>Temps de visite</li>
              <li style={{ marginBottom: '5px' }}>Préférences de consentement</li>
            </ul>
            
            <h2 style={{ fontSize: '1.2rem', marginBottom: '15px', marginTop: '30px', color: '#ed002a' }}>
              🔒 Protection des données
            </h2>
            
            <p style={{ marginBottom: '15px' }}>
              Vos données sont protégées et ne sont jamais vendues à des tiers. 
              Elles sont utilisées uniquement pour améliorer votre expérience sur notre site.
            </p>
            
            <h2 style={{ fontSize: '1.2rem', marginBottom: '15px', marginTop: '30px', color: '#ed002a' }}>
              ✋ Vos droits
            </h2>
            
            <p style={{ marginBottom: '15px' }}>
              Vous pouvez à tout moment :
            </p>
            
            <ul style={{ marginBottom: '15px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '5px' }}>Retirer votre consentement</li>
              <li style={{ marginBottom: '5px' }}>Supprimer les cookies de votre navigateur</li>
              <li style={{ marginBottom: '5px' }}>Nous contacter pour toute question</li>
            </ul>
            
            <h2 style={{ fontSize: '1.2rem', marginBottom: '15px', marginTop: '30px', color: '#ed002a' }}>
              📧 Contact
            </h2>
            
            <p style={{ marginBottom: '15px' }}>
              Pour toute question concernant cette politique de confidentialité, 
              contactez-nous à : <a href="mailto:contact@atnsoul.com" style={{ color: '#ed002a', textDecoration: 'none' }}>contact@atnsoul.com</a>
            </p>
          </div>
        </div>

        {/* Colonne 3 - Vide sur desktop */}
        {!isMobile && (
          <div style={{
            padding: '20px',
            height: '87vh',
            borderRadius: '0',
            overflow: 'auto'
          }} className="mobile-auto-height">
          </div>
        )}

      </div>

    </div>
  )
}
