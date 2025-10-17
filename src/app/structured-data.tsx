export function PersonStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ethan Fellous",
    "alternateName": "ATN Soul",
    "description": "Music Producer, Composer & Lyricist from Paris",
    "url": "https://atnsoul.com",
    "image": "https://atnsoul.com/images/atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-1.jpg",
    "sameAs": [
      "https://open.spotify.com/artist/your-spotify-id",
      "https://music.apple.com/fr/artist/atn-soul/1455380348"
    ],
    "jobTitle": "Music Producer",
    "worksFor": {
      "@type": "Organization",
      "name": "ATN Soul"
    },
    "knowsAbout": [
      "Music Production",
      "Jazz Harmony",
      "Film Scoring",
      "Contemporary Music",
      "Soul Music"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Conservatory of Paris"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paris",
      "addressCountry": "FR"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function MusicAlbumStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicAlbum",
    "name": "Amarela",
    "byArtist": {
      "@type": "MusicGroup",
      "name": "ATN Soul & Noamle"
    },
    "description": "A 15-track collaborative album exploring jazz, soul, and contemporary music influences",
    "datePublished": "2020-07",
    "genre": ["Jazz", "Soul", "Contemporary"],
    "url": "https://atnsoul.com/amarela",
    "image": "https://atnsoul.com/images/amarela-cover.jpg"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function CreativeWorkStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "La Serre aux Papillons",
    "description": "Film score and soundtrack for The Butterfly House by Eva Wang",
    "creator": {
      "@type": "Person",
      "name": "Ethan Fellous",
      "alternateName": "ATN Soul"
    },
    "dateCreated": "2024",
    "genre": "Film Score",
    "url": "https://atnsoul.com/la-serre-aux-papillons"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
