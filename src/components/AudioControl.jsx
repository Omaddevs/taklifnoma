import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import weddingTrack from '../../music/wedding-nasheed.mp3'
import ribbonA from '../images/ribbon-a.png'
import ribbonB from '../images/ribbon-b.png'
import ribbonC from '../images/ribbon-c.png'

const copy = {
  uz: {
    names: 'Omadbek & Diyora',
    subtitle: 'Nikoh to\'y taklifnomasi',
    button: 'Taklifnomani ochish',
  },
  ru: {
    names: 'Omadbek & Diyora',
    subtitle: 'Свадебное приглашение',
    button: 'Открыть приглашение',
  },
}

function AudioControl({ locale = 'uz' }) {
  const audioRef = useRef(null)
  const userMutedRef = useRef(false)
  const [isUserMuted, setIsUserMuted] = useState(false)
  const [entered, setEntered] = useState(false)
  const t = copy[locale] ?? copy.uz

  const startMusic = () => {
    const audio = audioRef.current
    if (!audio || userMutedRef.current) return

    audio.volume = 0.6
    audio.muted = false
    audio.play().catch(() => {})
  }

  const handleEnter = () => {
    startMusic()
    setEntered(true)
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.6
    audio.muted = false

    const tryAutoplay = () => {
      if (entered || userMutedRef.current) return

      audio
        .play()
        .then(() => setEntered(true))
        .catch(() => {})
    }

    tryAutoplay()
    audio.addEventListener('canplaythrough', tryAutoplay, { once: true })

    return () => {
      audio.removeEventListener('canplaythrough', tryAutoplay)
    }
  }, [entered])

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
      <audio ref={audioRef} preload="auto" playsInline loop src={weddingTrack} />

      <AnimatePresence>
        {!entered && (
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleEnter}
            className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center overflow-hidden bg-[#2f3b5c] px-6"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(244,216,222,0.12),transparent_55%)]" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
              className="relative w-full max-w-[390px] px-4 py-10 text-center"
            >
              <img
                src={ribbonA}
                alt=""
                className="float-soft pointer-events-none absolute left-[-18px] top-[-10px] w-32 opacity-95"
              />
              <img
                src={ribbonB}
                alt=""
                className="float-soft pointer-events-none absolute right-[-18px] top-[-6px] w-32 scale-x-[-1] opacity-95"
              />
              <img
                src={ribbonC}
                alt=""
                className="float-soft pointer-events-none absolute bottom-[-8px] left-[-22px] w-28 opacity-90"
                style={{ animationDelay: '1.5s' }}
              />
              <img
                src={ribbonC}
                alt=""
                className="float-soft pointer-events-none absolute bottom-[-8px] right-[-22px] w-28 scale-x-[-1] opacity-90"
                style={{ animationDelay: '2s' }}
              />

              <div className="relative mx-auto max-w-[320px] overflow-visible rounded-[32px] border border-white/15 bg-white/[0.04] px-6 pb-10 pt-12 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-[2px]">
                <p className="font-['Playfair_Display'] text-lg italic text-[#f7dfe5]">
                  Bismillahir Rohmanir Rohim
                </p>

                <div className="mx-auto mt-5 flex w-24 items-center gap-2">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#f3d7df]/70" />
                  <span className="text-[#f3d7df]">✦</span>
                  <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#f3d7df]/70" />
                </div>

                <motion.h1
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35, duration: 0.8, ease: 'easeOut' }}
                  className="glow-soft mt-6 overflow-visible px-1 py-2 font-['Playfair_Display'] text-[46px] leading-[1.2] tracking-normal"
                >
                  <span className="block bg-gradient-to-b from-white to-[#f3d8e2] bg-clip-text pb-1 text-transparent">
                    Omadbek
                  </span>
                  <span className="my-1 block text-[32px] italic leading-none text-[#f3d8e2]">&</span>
                  <span className="block bg-gradient-to-b from-white to-[#f3d8e2] bg-clip-text pb-1 text-transparent">
                    Diyora
                  </span>
                </motion.h1>

                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[#e9d3da]">{t.subtitle}</p>

                <span className="mt-10 inline-flex animate-pulse items-center justify-center rounded-full border-2 border-[#f3d7df] bg-gradient-to-b from-[#44527b] to-[#36446b] px-9 py-3.5 font-['Playfair_Display'] text-lg text-white shadow-[0_8px_28px_rgba(0,0,0,0.35)] transition-transform hover:scale-[1.03]">
                  {t.button}
                </span>
              </div>
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {entered && (
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
      )}
    </>
  )
}

export default AudioControl
