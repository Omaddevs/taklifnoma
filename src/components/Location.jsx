import venueImage from '../images/venue.jpg'
import ribbonA from '../images/ribbon-a.png'
import ribbonC from '../images/ribbon-c.png'
import RevealSection from './RevealSection'

const copy = {
  uz: {
    title: "To'y manzili",
    place: "Gavhar to'yxonasi",
    addr: 'Beshariq tumani',
    timeLabel: 'Boshlanish vaqti',
    time: '13:00',
  },
  ru: {
    title: 'Место проведения',
    place: 'Дом торжеств «Gavhar»',
    addr: 'Бешарыкский район',
    timeLabel: 'Начало',
    time: '13:00',
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

      <p className="mt-6 font-['Playfair_Display'] text-[26px] leading-snug text-[#2f3b5c]">
        {t.place}
      </p>

      <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-[#2f3b5c]/75">
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="2.6" />
        </svg>
        {t.addr}
      </p>

      <div className="mx-auto mt-6 flex w-fit items-center gap-3 rounded-full border border-[#2f3b5c]/15 bg-white/45 px-6 py-3 shadow-[0_10px_24px_rgba(47,59,92,0.12)]">
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-[#b45f72]" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5.2l3.2 1.9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-left">
          <span className="block text-[10px] uppercase tracking-[0.18em] text-[#2f3b5c]/60">
            {t.timeLabel}
          </span>
          <span className="block font-['Playfair_Display'] text-2xl leading-tight text-[#2f3b5c]">
            {t.time}
          </span>
        </span>
      </div>

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
