import { useEffect, useRef, useState } from 'react'
import weddingTrack from '../../music/Alex Warren - Ordinary (Official Video).mp3'

const START_OFFSET_SECONDS = 5

function AudioControl() {
  const audioRef = useRef(null)
  const userMutedRef = useRef(false)
  const [isUserMuted, setIsUserMuted] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.55
    audio.defaultMuted = false
    audio.muted = false
    userMutedRef.current = false
    setIsUserMuted(false)

    const playMutedFallback = async () => {
      audio.muted = true
      try {
        await audio.play()
      } catch {
        // If still blocked, we retry on first interaction.
      }
    }

    const startPlayback = async () => {
      try {
        await audio.play()
      } catch (error) {
        // Only fallback to muted when autoplay-with-sound is explicitly blocked.
        if (error?.name === 'NotAllowedError') {
          await playMutedFallback()
          return
        }
        // Retry once media is ready; avoids false muted state during early load.
        const retryAfterReady = async () => {
          audio.removeEventListener('canplay', retryAfterReady)
          try {
            audio.muted = false
            await audio.play()
          } catch {}
        }
        audio.addEventListener('canplay', retryAfterReady, { once: true })
      }
    }

    const setStartOffset = () => {
      if (audio.duration && audio.currentTime < START_OFFSET_SECONDS) {
        audio.currentTime = START_OFFSET_SECONDS
      }
    }

    const unmuteAndPlay = async () => {
      if (userMutedRef.current) return
      audio.muted = false
      try {
        await audio.play()
        window.removeEventListener('pointerdown', unmuteAndPlay)
        window.removeEventListener('keydown', unmuteAndPlay)
        window.removeEventListener('touchstart', unmuteAndPlay)
        window.removeEventListener('pageshow', unmuteAndPlay)
      } catch {
        // Keep trying later; do not force muted icon unless user muted.
        audio.muted = true
      }
    }

    startPlayback()

    audio.addEventListener('loadedmetadata', setStartOffset)

    // Autoplay with sound is commonly blocked; unlock on first gesture.
    window.addEventListener('pointerdown', unmuteAndPlay)
    window.addEventListener('keydown', unmuteAndPlay)
    window.addEventListener('touchstart', unmuteAndPlay)
    window.addEventListener('pageshow', unmuteAndPlay)

    return () => {
      window.removeEventListener('pointerdown', unmuteAndPlay)
      window.removeEventListener('keydown', unmuteAndPlay)
      window.removeEventListener('touchstart', unmuteAndPlay)
      window.removeEventListener('pageshow', unmuteAndPlay)
      audio.removeEventListener('loadedmetadata', setStartOffset)
    }
  }, [])

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    const nextUserMuted = !isUserMuted
    userMutedRef.current = nextUserMuted
    setIsUserMuted(nextUserMuted)
    audio.muted = nextUserMuted

    if (!nextUserMuted && audio.paused) {
      audio.play().catch(() => {})
    }
  }

  return (
    <>
      <audio ref={audioRef} autoPlay preload="auto" playsInline loop src={weddingTrack} />
      <button
        type="button"
        aria-label={isUserMuted ? 'Unmute music' : 'Mute music'}
        onClick={toggleMute}
        className="fixed right-4 top-4 z-50 flex h-[56px] w-[56px] items-center justify-center rounded-full border-[3px] border-[#f3d7df] bg-gradient-to-b from-[#44527b] to-[#2f3b5c] shadow-[0_8px_20px_rgba(0,0,0,0.24)] transition-transform hover:scale-[1.03]"
      >
        <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#f3d7df]/55 bg-[#36446b] text-[#f7dfe5]">
          {isUserMuted ? (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden
            >
              <path d="M13 4.5a1 1 0 0 0-1.67-.74L7.7 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3.7l3.63 3.24A1 1 0 0 0 13 19.5v-15Z" />
              <path d="M16.6 8.3a1 1 0 0 1 1.41 0 5.3 5.3 0 0 1 0 7.49 1 1 0 0 1-1.41-1.42 3.3 3.3 0 0 0 0-4.65 1 1 0 0 1 0-1.42Z" />
              <path d="M19.34 5.56a1 1 0 0 1 1.41 0 9.2 9.2 0 0 1 0 12.88 1 1 0 1 1-1.41-1.42 7.2 7.2 0 0 0 0-10.04 1 1 0 0 1 0-1.42Z" />
            </svg>
          )}
        </span>
      </button>
    </>
  )
}

export default AudioControl
