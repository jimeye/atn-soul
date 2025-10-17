"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX,
  List,
  Shuffle,
  Repeat,
  Repeat1
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { formatDuration } from "@/lib/utils"
import type { Track, MusicPlayerState } from "@/lib/types"

// Données d'exemple pour la démonstration
const sampleTracks: Track[] = [
  {
    id: "1",
    title: "Midnight Groove",
    artist: "ATN Soul",
    album: "Urban Vibes",
    duration: 240,
    url: "/audio/sample1.mp3",
    cover: "/images/album1.jpg",
    genre: "Soul",
  },
  {
    id: "2",
    title: "City Lights",
    artist: "ATN Soul",
    album: "Urban Vibes",
    duration: 195,
    url: "/audio/sample2.mp3",
    cover: "/images/album2.jpg",
    genre: "Jazz",
  },
  {
    id: "3",
    title: "Smooth Ride",
    artist: "ATN Soul",
    album: "Urban Vibes",
    duration: 210,
    url: "/audio/sample3.mp3",
    cover: "/images/album3.jpg",
    genre: "R&B",
  },
]

export function MusicPlayer() {
  const [playerState, setPlayerState] = useState<MusicPlayerState>({
    currentTrack: null,
    isPlaying: false,
    volume: 0.7,
    currentTime: 0,
    duration: 0,
    playlist: sampleTracks,
    currentIndex: 0,
    isShuffled: false,
    isRepeated: false,
  })
  const [showPlaylist, setShowPlaylist] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (playerState.currentTrack && audioRef.current) {
      audioRef.current.src = playerState.currentTrack.url
      audioRef.current.volume = playerState.volume
    }
  }, [playerState.currentTrack, playerState.volume])

  useEffect(() => {
    if (playerState.isPlaying) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
  }, [playerState.isPlaying])

  const togglePlay = () => {
    setPlayerState(prev => ({ ...prev, isPlaying: !prev.isPlaying }))
  }

  const playNext = () => {
    setPlayerState(prev => {
      const nextIndex = (prev.currentIndex + 1) % prev.playlist.length
      return {
        ...prev,
        currentIndex: nextIndex,
        currentTrack: prev.playlist[nextIndex],
        currentTime: 0,
      }
    })
  }

  const playPrevious = () => {
    setPlayerState(prev => {
      const prevIndex = prev.currentIndex === 0 ? prev.playlist.length - 1 : prev.currentIndex - 1
      return {
        ...prev,
        currentIndex: prevIndex,
        currentTrack: prev.playlist[prevIndex],
        currentTime: 0,
      }
    })
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setPlayerState(prev => ({
        ...prev,
        currentTime: audioRef.current!.currentTime,
        duration: audioRef.current!.duration,
      }))
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value)
    if (audioRef.current) {
      audioRef.current.currentTime = time
      setPlayerState(prev => ({ ...prev, currentTime: time }))
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const volume = parseFloat(e.target.value)
    if (audioRef.current) {
      audioRef.current.volume = volume
      setPlayerState(prev => ({ ...prev, volume }))
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted
    }
  }

  const toggleShuffle = () => {
    setPlayerState(prev => ({ ...prev, isShuffled: !prev.isShuffled }))
  }

  const toggleRepeat = () => {
    setPlayerState(prev => ({ ...prev, isRepeated: !prev.isRepeated }))
  }

  const playTrack = (track: Track, index: number) => {
    setPlayerState(prev => ({
      ...prev,
      currentTrack: track,
      currentIndex: index,
      currentTime: 0,
      isPlaying: true,
    }))
  }

  if (!playerState.currentTrack) {
    return null
  }

  return (
    <>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={playNext}
        onLoadedMetadata={handleTimeUpdate}
      />
      
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-20">
            {/* Track Info */}
            <div className="flex items-center space-x-4 flex-1 min-w-0">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                {playerState.currentTrack.cover ? (
                  <img
                    src={playerState.currentTrack.cover}
                    alt={playerState.currentTrack.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {playerState.currentTrack.title.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium truncate">
                  {playerState.currentTrack.title}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {playerState.currentTrack.artist}
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleShuffle}
                className={cn(playerState.isShuffled && "text-primary")}
              >
                <Shuffle className="h-4 w-4" />
              </Button>
              
              <Button variant="ghost" size="icon" onClick={playPrevious}>
                <SkipBack className="h-5 w-5" />
              </Button>
              
              <Button
                variant="default"
                size="icon"
                onClick={togglePlay}
                className="h-10 w-10"
              >
                {playerState.isPlaying ? (
                  <Pause className="h-5 w-5" />
                ) : (
                  <Play className="h-5 w-5" />
                )}
              </Button>
              
              <Button variant="ghost" size="icon" onClick={playNext}>
                <SkipForward className="h-5 w-5" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleRepeat}
                className={cn(playerState.isRepeated && "text-primary")}
              >
                {playerState.isRepeated ? (
                  <Repeat1 className="h-4 w-4" />
                ) : (
                  <Repeat className="h-4 w-4" />
                )}
              </Button>
            </div>

            {/* Progress & Volume */}
            <div className="flex items-center space-x-4 flex-1 justify-end">
              <div className="hidden sm:flex items-center space-x-2 min-w-0 flex-1 max-w-xs">
                <span className="text-xs text-muted-foreground">
                  {formatDuration(playerState.currentTime)}
                </span>
                <input
                  type="range"
                  min="0"
                  max={playerState.duration || 0}
                  value={playerState.currentTime}
                  onChange={handleSeek}
                  className="flex-1 h-1 bg-muted rounded-full appearance-none cursor-pointer slider"
                />
                <span className="text-xs text-muted-foreground">
                  {formatDuration(playerState.duration)}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMute}
                  className="h-8 w-8"
                >
                  {playerState.volume === 0 ? (
                    <VolumeX className="h-4 w-4" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                </Button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={playerState.volume}
                  onChange={handleVolumeChange}
                  className="w-16 h-1 bg-muted rounded-full appearance-none cursor-pointer slider"
                />
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowPlaylist(!showPlaylist)}
                className="h-8 w-8"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Progress Bar */}
          <div className="sm:hidden pb-2">
            <input
              type="range"
              min="0"
              max={playerState.duration || 0}
              value={playerState.currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-muted rounded-full appearance-none cursor-pointer slider"
            />
          </div>
        </div>

        {/* Playlist */}
        <AnimatePresence>
          {showPlaylist && (
            <motion.div
              className="border-t border-gray-200 bg-white/95 backdrop-blur-md"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container-wide py-4">
                <h3 className="text-sm font-medium mb-3">Playlist</h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {playerState.playlist.map((track, index) => (
                    <button
                      key={track.id}
                      onClick={() => playTrack(track, index)}
                      className={cn(
                        "w-full flex items-center space-x-3 p-2 rounded-md text-left transition-colors",
                        playerState.currentIndex === index
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-accent"
                      )}
                    >
                      <div className="w-8 h-8 rounded overflow-hidden bg-muted flex-shrink-0">
                        {track.cover ? (
                          <img
                            src={track.cover}
                            alt={track.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                            <span className="text-white font-bold text-xs">
                              {track.title.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium truncate">
                          {track.title}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {track.artist}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {formatDuration(track.duration)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: hsl(var(--primary));
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: hsl(var(--primary));
          cursor: pointer;
          border: none;
        }
      `}</style>
    </>
  )
}
