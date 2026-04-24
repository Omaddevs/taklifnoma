import RevealSection from './RevealSection'
import ribbonA from '../images/ribbon-a.png'
import ribbonB from '../images/ribbon-b.png'
import footerImage from '../images/footer.jpg'

const copy = {
  uz: {
    title: '',
  },
  ru: {
    title: '',
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
      <div className="mx-auto mt-8 w-full max-w-[320px] overflow-hidden rounded-2xl border border-[#f5dde4]/25 bg-[#39466d]/45 p-2">
        <img src={footerImage} alt="Wedding wishes footer" className="w-full rounded-xl object-cover" />
      </div>
    </RevealSection>
  )
}

export default Wishes
