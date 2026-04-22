import RevealSection from './RevealSection'
import venueImage from '../images/venue.jpg'
import ribbonC from '../images/ribbon-c.png'

const colors = ['#d58c9a', '#e7c1c7', '#f5f5f5', '#2f3b5c']
const copy = {
  uz: {
    title: 'Dress code',
    body: "To'yimiz nafis va uyg'un ruhda o'tishi uchun ushbu rang palitrasiga mos libos tanlasangiz, juda minnatdor bo'lamiz.",
  },
  ru: {
    title: 'Дресс-код',
    body: 'Мы очень старались сделать нашу свадьбу красивой и будем вам благодарны, если поддержите нашу цветовую палитру и придете в нарядах этих тонов.',
  },
}

function DressCode({ locale = 'uz' }) {
  const t = copy[locale] ?? copy.uz
  return (
    <RevealSection className="brush-top relative bg-[#f4d8de] px-6 py-14 text-center text-[#2f3b5c]">
      <img
        src={ribbonC}
        alt=""
        className="float-soft pointer-events-none absolute right-[-26px] top-[36px] w-24 opacity-90"
      />
      <h2 className="font-['Playfair_Display'] text-3xl uppercase tracking-wide">{t.title}</h2>
      <p className="mx-auto mt-5 max-w-[290px] text-sm leading-relaxed">
        {t.body}
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        {colors.map((color) => (
          <span
            key={color}
            className="h-10 w-10 rounded-full border border-[#2f3b5c]/20"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <div className="mx-auto mt-8 h-36 w-full max-w-[292px] overflow-hidden rounded-sm">
        <img
          src={venueImage}
          alt="Table decoration"
          className="h-full w-full object-cover"
        />
      </div>
    </RevealSection>
  )
}

export default DressCode
