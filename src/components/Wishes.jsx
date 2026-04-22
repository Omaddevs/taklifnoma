import RevealSection from './RevealSection'
import ribbonA from '../images/ribbon-a.png'
import ribbonB from '../images/ribbon-b.png'

const copy = {
  uz: {
    title: 'Tilaklarimiz',
    p1: "Sovg'a ustida uzoq o'ylamang. Ezgu tilaklaringiz va konvertdagi e'tiboringiz bizning yangi oilaviy orzularimizga qanot bo'ladi.",
    p2: "Jonli gullar o'rniga oilaviy kolleksiyamiz uchun bir shisha ichimlik olib kelsangiz, bundan xursand bo'lamiz.",
  },
  ru: {
    title: 'Наши пожелания',
    p1: 'Не ломайте голову над подарком. Ваши пожелания в конвертах помогут осуществить нашу заветную мечту.',
    p2: 'Вместо живых цветов лучшей альтернативой может стать бутылка вина для нашего семейного бара.',
  },
}

function Wishes({ locale = 'uz' }) {
  const t = copy[locale] ?? copy.uz
  return (
    <RevealSection className="relative overflow-hidden px-6 pb-16 pt-14 text-center">
      <img
        src={ribbonA}
        alt=""
        className="float-soft pointer-events-none absolute bottom-0 left-[-30px] w-28 opacity-90"
      />
      <img
        src={ribbonB}
        alt=""
        className="float-soft pointer-events-none absolute bottom-0 right-[-30px] w-28 scale-x-[-1] opacity-90"
      />
      <h2 className="font-['Playfair_Display'] text-3xl text-[#f5dde4]">{t.title}</h2>
      <p className="mx-auto mt-7 max-w-[300px] text-sm leading-relaxed text-[#f2d9df]">
        {t.p1}
      </p>
      <p className="mx-auto mt-5 max-w-[300px] text-sm leading-relaxed text-[#f2d9df]">
        {t.p2}
      </p>
    </RevealSection>
  )
}

export default Wishes
