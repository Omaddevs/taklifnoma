import venueImage from '../images/venue.jpg'
import ribbonA from '../images/ribbon-a.png'
import ribbonC from '../images/ribbon-c.png'
import RevealSection from './RevealSection'

const copy = {
  uz: {
    title: "To'y manzili",
    place: '____________________',
    addr: "Manzil tez orada e'lon qilinadi",
  },
  ru: {
    title: 'Место проведения',
    place: '____________________',
    addr: 'Адрес будет объявлен позже',
  },
}

function Location({ locale = 'uz' }) {
  const t = copy[locale] ?? copy.uz

  return (
    <RevealSection className="brush-top brush-bottom relative bg-[#f4d8de] px-6 py-14 text-center text-[#2f3b5c]">
      <img
        src={ribbonA}
        alt=""
        className="float-soft pointer-events-none absolute bottom-2 left-[-30px] w-28 opacity-90"
      />
      <img
        src={ribbonC}
        alt=""
        className="float-soft pointer-events-none absolute bottom-2 right-[-30px] w-28 scale-x-[-1] opacity-90"
      />
      <h2 className="font-['Playfair_Display'] text-3xl uppercase tracking-wide">{t.title}</h2>
      <p className="mt-6 text-sm font-medium italic">{t.place}</p>
      <p className="mt-2 text-sm text-[#2f3b5c]/70">{t.addr}</p>

      <div className="mx-auto mt-8 h-[230px] w-[260px] overflow-hidden rounded-t-[70px] border border-[#2f3b5c]/25 bg-white/60 p-1">
        <img
          src={venueImage}
          alt="Wedding venue"
          className="h-full w-full rounded-t-[64px] object-cover"
        />
      </div>
    </RevealSection>
  )
}

export default Location
