export interface Track {
  id: string
  title: string
  artist: string
  album?: string
  duration: number
  url: string
  cover?: string
  genre?: string
  releaseDate?: string
}

export interface Playlist {
  id: string
  name: string
  description?: string
  tracks: Track[]
  cover?: string
  createdAt: string
  updatedAt: string
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  time?: string
  location: string
  venue?: string
  image?: string
  ticketUrl?: string
  isUpcoming: boolean
}

export interface GalleryImage {
  id: string
  title: string
  description?: string
  url: string
  thumbnail?: string
  category?: string
  createdAt: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface MusicPlayerState {
  currentTrack: Track | null
  isPlaying: boolean
  volume: number
  currentTime: number
  duration: number
  playlist: Track[]
  currentIndex: number
  isShuffled: boolean
  isRepeated: boolean
}

export interface Theme {
  theme: 'light' | 'dark' | 'system'
}

export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
}
