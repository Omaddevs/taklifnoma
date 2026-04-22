import { useEffect, useMemo, useState } from 'react'
import RevealSection from './RevealSection'

const EVENT_DATE = '2026-08-08T18:00:00'
const labels = {
  uz: {
    title: "To'ygacha qolgan vaqt",
    done: "Bugun to'y kuni. Xush kelibsiz!",
    units: ['kun', 'soat', 'daqiqa', 'sekund'],
  },
  ru: {
    title: 'До свадьбы осталось',
    done: 'Сегодня день свадьбы. Добро пожаловать!',
    units: ['дней', 'часов', 'минут', 'секунд'],
  },
}

function getTimeLeft() {
  const target = new Date(EVENT_DATE).getTime()
  const now = Date.now()
  const diff = Math.max(target - now, 0)

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { days, hours, minutes, seconds, isFinished: diff === 0 }
}

function Countdown({ locale = 'uz' }) {
  const t = labels[locale] ?? labels.uz
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const intervalId = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(intervalId)
  }, [])

  const countdownItems = useMemo(
    () => [
      [t.units[0], timeLeft.days],
      [t.units[1], timeLeft.hours],
      [t.units[2], timeLeft.minutes],
      [t.units[3], timeLeft.seconds],
    ],
    [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds, t.units],
  )

  return (
    <RevealSection className="px-6 pb-12 pt-2 text-center">
      <h2 className="font-['Playfair_Display'] text-[28px] text-[#f4d8de]">{t.title}</h2>
      {timeLeft.isFinished ? (
        <p className="mt-4 text-base text-white">{t.done}</p>
      ) : (
        <div className="mt-6 grid grid-cols-4 gap-3">
          {countdownItems.map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/20 bg-[#3a4670]/80 px-3 py-4 shadow-lg"
            >
              <p className="font-['Playfair_Display'] text-3xl text-white">
                {String(value).padStart(2, '0')}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-[#eacfd8]">
                {label}
              </p>
            </div>
          ))}
        </div>
      )}
    </RevealSection>
  )
}

export default Countdown
