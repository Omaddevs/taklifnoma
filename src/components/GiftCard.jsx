import { useState } from 'react'
import RevealSection from './RevealSection'

const CARD_NUMBER = '9860 1301 2345 6789'

function GiftCard() {
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
          Sovg'a uchun karta
        </p>
        <p className="mt-2 text-center text-xs text-[#f0d2dd]">
          Istasangiz tabrik uchun ushbu karta raqamidan foydalanishingiz mumkin
        </p>

        <div className="mt-5 rounded-2xl border border-white/15 bg-white/10 px-4 py-4 text-center backdrop-blur-[1px]">
          <p className="font-['Playfair_Display'] text-2xl tracking-[0.16em] text-white">
            {CARD_NUMBER}
          </p>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="mt-4 w-full rounded-2xl bg-[#f2d6de] px-4 py-3 text-sm font-semibold text-[#2f3b5c] transition hover:bg-white"
        >
          {copied ? 'Nusxalandi' : 'Karta raqamini nusxalash'}
        </button>
      </div>
    </RevealSection>
  )
}

export default GiftCard
