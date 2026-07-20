import coupleImage from '../images/couple.jpg'
import ribbonA from '../images/ribbon-a.png'
import ribbonB from '../images/ribbon-b.png'
import { motion } from 'framer-motion'
import RevealSection from './RevealSection'

const copy = {
  uz: {
    bismillah: 'Bismillahir Rohmanir Rohim',
    verse: '"Va Biz sizlarni juft-juft qilib yaratdik."',
    arabic: '﴿وَخَلَقْنَاكُمْ أَزْوَاجًا﴾',
    verseRef: "(Qur'oni Karim, Naba surasi, 8-oyat)",
    body1:
      "Alloh taoloning marhamati, ota-onalarimizning duolari va yaqinlarimizning ezgu tilaklari ila hayotimizning eng baxtli kunlaridan biri — nikoh to'yimiz munosabati bilan Siz azizlarni samimiylik bilan taklif etamiz.",
    body2:
      "Quvonchimizga sherik bo'lib, duolaringiz bilan bizni siylashingizni chin dildan so'raymiz.",
  },
  ru: {
    bismillah: 'Bismillahir Rohmanir Rohim',
    verse: '«Мы создали вас парами»',
    arabic: '﴿وَخَلَقْنَاكُمْ أَزْوَاجًا﴾',
    verseRef: '(Священный Коран, сура Ан-Наба, аят 8)',
    body1:
      'По милости Аллаха, с молитвами наших родителей и добрыми пожеланиями близких мы от всей души приглашаем вас на одно из самых счастливых событий нашей жизни — наш свадебный праздник.',
    body2:
      'Будем искренне рады, если вы разделите с нами эту радость и обратитесь к нам с добрыми молитвами.',
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

      <p className="font-['Playfair_Display'] text-lg italic text-[#f7dfe5]">{t.bismillah}</p>

      <div className="mx-auto w-full max-w-[280px] rounded-t-[140px] border border-white/20 p-2 mt-6">
        <img
          src={coupleImage}
          alt="Omadbek va Diyora"
          className="h-[320px] w-full rounded-t-[130px] object-cover object-top"
        />
      </div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.85, ease: 'easeOut' }}
        className="glow-soft mt-7 overflow-visible px-1 py-2 font-['Playfair_Display'] text-[50px] leading-[1.2] tracking-normal"
      >
        <span className="block bg-gradient-to-b from-white to-[#f3d8e2] bg-clip-text pb-1 text-transparent">
          Omadbek
        </span>
        <span className="my-1 block text-[36px] italic leading-none text-[#f3d8e2]">&</span>
        <span className="block bg-gradient-to-b from-white to-[#f3d8e2] bg-clip-text pb-1 text-transparent">
          Diyora
        </span>
      </motion.h1>

      <blockquote className="mx-auto mt-6 max-w-[300px] space-y-2">
        <p className="text-sm italic leading-relaxed text-[#f7dfe5]">{t.verse}</p>
        <p className="font-['Playfair_Display'] text-2xl leading-relaxed text-white" dir="rtl">
          {t.arabic}
        </p>
        <p className="text-[11px] text-[#e9d3da]">{t.verseRef}</p>
      </blockquote>

      <p className="mx-auto mt-5 max-w-[300px] text-xs leading-relaxed text-[#e9d3da]">{t.body1}</p>
      <p className="mx-auto mt-3 max-w-[300px] text-xs leading-relaxed text-[#e9d3da]">{t.body2}</p>

      <p className="mt-8 font-['Playfair_Display'] text-4xl text-white">06.08.2026</p>
    </RevealSection>
  )
}

export default Hero
