import { useState } from 'react'
import RevealSection from './RevealSection'

const CARD_NUMBER = '9860 1301 2345 6789'
const copy = {
  uz: {
    title: "Sovg'a uchun karta",
    body: 'Istasangiz tabrik uchun ushbu karta raqamidan foydalanishingiz mumkin',
    copied: 'Nusxalandi',
    copy: 'Karta raqamini nusxalash',
    hint: 'Raqamdan nusxa olish uchun ikonchani bosing',
  },
  ru: {
    title: 'Карта для подарка',
    body: 'При желании вы можете использовать этот номер карты для поздравления',
    copied: 'Скопировано',
    copy: 'Скопировать номер карты',
    hint: 'Нажмите на иконку, чтобы скопировать номер',
  },
}

function GiftCard({ locale = 'uz' }) {
  const t = copy[locale] ?? copy.uz
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CARD_NUMBER.replaceAll(' ', ''))
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <RevealSection className="px-6 pb-10 pt-2">
      <div className="rounded-3xl border border-[#f0d7df]/35 bg-gradient-to-br from-[#44517b] to-[#2f3b5c] p-5 shadow-xl">
        <p className="text-center font-['Playfair_Display'] text-2xl text-[#f3dde5]">
          {t.title}
        </p>
        <p className="mt-2 text-center text-xs text-[#f0d2dd]">{t.body}</p>

        <div className="mt-5 rounded-2xl border border-white/15 bg-white/10 px-2 py-3 backdrop-blur-[1px]">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-1.5">
            <p className="min-w-0 whitespace-nowrap text-center font-['Playfair_Display'] text-[1.2rem] leading-none tracking-[0.02em] text-white sm:text-[1.45rem] sm:tracking-[0.03em]">
              {CARD_NUMBER}
            </p>
            <button
              type="button"
              onClick={handleCopy}
              aria-label={t.copy}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#f2d6de]/55 bg-[#f2d6de]/20 text-[#f5dce3] transition hover:bg-[#f2d6de]/35 hover:text-white sm:h-9 sm:w-9"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current sm:h-4 sm:w-4" aria-hidden="true">
                <path d="M16 1H6a2 2 0 0 0-2 2v12h2V3h10V1Zm3 4H10a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 16h-9V7h9v14Z" />
              </svg>
            </button>
          </div>
        </div>

        <p className="mt-3 text-center text-xs text-[#f0d2dd]/90">{copied ? t.copied : t.hint}</p>
      </div>
    </RevealSection>
  )
}

export default GiftCard
