import RevealSection from './RevealSection'
import ribbonA from '../images/ribbon-a.png'
import ribbonB from '../images/ribbon-b.png'

function Wishes() {
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
      <h2 className="font-['Playfair_Display'] text-3xl text-[#f5dde4]">
        Tilaklarimiz
      </h2>
      <p className="mx-auto mt-7 max-w-[300px] text-sm leading-relaxed text-[#f2d9df]">
        Sovg'a ustida uzoq o'ylamang. Ezgu tilaklaringiz va konvertdagi e'tiboringiz
        bizning yangi oilaviy orzularimizga qanot bo'ladi.
      </p>
      <p className="mx-auto mt-5 max-w-[300px] text-sm leading-relaxed text-[#f2d9df]">
        Jonli gullar o'rniga oilaviy kolleksiyamiz uchun bir shisha ichimlik
        olib kelsangiz, bundan xursand bo'lamiz.
      </p>
    </RevealSection>
  )
}

export default Wishes
