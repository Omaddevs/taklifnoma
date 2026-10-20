import venueImage from '../images/venue.jpg'
import ribbonA from '../images/ribbon-a.png'
import ribbonC from '../images/ribbon-c.png'
import RevealSection from './RevealSection'

const MAP_URL = 'https://maps.app.goo.gl/JMHqiZvQvHjht3Hw8'

const copy = {
  uz: {
    title: "To'y manzili",
    place: 'Namangan, Chortoq tumani',
    addr: 'A. Navoiy MFY, Navoiy 30-uy',
    schedule: [
      ['ZAGS', '09:00'],
      ['Bazm', '14:00'],
    ],
    map: "Xaritada ko'rish",
  },
  ru: {
    title: 'Место проведения',
    place: 'Наманган, Чартакский район',
    addr: 'МФЙ А. Навои, Навои, дом 30',
    schedule: [
      ['ЗАГС', '09:00'],
      ['Банкет', '14:00'],
    ],
    map: 'Открыть на карте',
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

      <div className="mt-6 flex justify-center gap-3">
        {t.schedule.map(([label, time]) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-full border border-[#2f3b5c]/15 bg-white/45 px-5 py-3 shadow-[0_10px_24px_rgba(47,59,92,0.12)]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-[#b45f72]" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5.2l3.2 1.9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-left">
              <span className="block text-[10px] uppercase tracking-[0.18em] text-[#2f3b5c]/60">
                {label}
              </span>
              <span className="block font-['Playfair_Display'] text-2xl leading-tight text-[#2f3b5c]">
                {time}
              </span>
            </span>
          </div>
        ))}
      </div>

      <a
        href={MAP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#2f3b5c] px-6 py-3 text-sm text-white shadow-[0_10px_24px_rgba(47,59,92,0.25)] transition-transform hover:scale-[1.03]"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="2.6" />
        </svg>
        {t.map}
      </a>

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
