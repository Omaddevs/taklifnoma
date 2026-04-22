import coupleImage from '../images/couple.jpg'
import ribbonA from '../images/ribbon-a.png'
import ribbonB from '../images/ribbon-b.png'
import { motion } from 'framer-motion'
import RevealSection from './RevealSection'

const copy = {
  uz: {
    titleTop: "AZIZ OILA A'ZOLARI VA QADRLI DO'STLAR",
    body: "Sizni hayotimizdagi eng baxtli va unutilmas kunlardan biri - to'y tantanamizga chin dildan taklif qilamiz.",
  },
  ru: {
    titleTop: 'ДОРОГИЕ РОДНЫЕ И БЛИЗКИЕ',
    body: 'С радостью и волнением мы приглашаем вас разделить с нами один из самых значимых дней нашей жизни - день нашей свадьбы.',
  },
}

function Hero({ locale = 'uz' }) {
  const t = copy[locale] ?? copy.uz

  return (
    <RevealSection className="relative overflow-hidden px-6 pb-10 pt-8 text-center">
      <img
        src={ribbonA}
        alt=""
        className="float-soft pointer-events-none absolute left-[-30px] top-[-14px] w-28 opacity-95"
      />
      <img
        src={ribbonB}
        alt=""
        className="float-soft pointer-events-none absolute right-[-26px] top-[-8px] w-28 scale-x-[-1] opacity-95"
      />
      <div className="mx-auto w-full max-w-[280px] rounded-t-[140px] border border-white/20 p-2">
        <img
          src={coupleImage}
          alt="Anton and Alina"
          className="h-[320px] w-full rounded-t-[130px] object-cover object-top"
        />
      </div>
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.85, ease: 'easeOut' }}
        className="glow-soft mt-7 bg-gradient-to-b from-white to-[#f3d8e2] bg-clip-text font-['Playfair_Display'] text-[64px] leading-[0.85] tracking-tight text-transparent"
      >
        Toxir
        <span className="mx-2 block text-[42px] italic">&</span>
        Zuxra
      </motion.h1>
      <p className="mx-auto mt-6 max-w-[290px] text-sm leading-relaxed text-[#f7dfe5]">{t.titleTop}</p>
      <p className="mx-auto mt-4 max-w-[300px] text-xs leading-relaxed text-[#e9d3da]">
        {t.body}
      </p>
      <p className="mt-8 font-['Playfair_Display'] text-4xl text-white">
        08.08.2026
      </p>
    </RevealSection>
  )
}

export default Hero
