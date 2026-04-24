import RevealSection from './RevealSection'
import ribbonC from '../images/ribbon-c.png'

const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
const CALENDAR_DAYS = [
  null,
  null,
  null,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
]

const copy = {
  uz: {
    title: "To'y taqvimi",
    body: "Quvonchli kunimizni taqvimda belgilab qo'ying.",
    month: 'Avgust 2026',
    note: "8-avgust - to'y kuni",
  },
  ru: {
    title: 'Свадебный календарь',
    body: 'Отметьте эту дату в своем календаре.',
    month: 'Август 2026',
    note: '8 августа - день свадьбы',
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
      <div className="mx-auto mt-8 w-full max-w-[320px] rounded-3xl border border-[#2f3b5c]/15 bg-white/35 p-4 shadow-[0_10px_24px_rgba(47,59,92,0.12)] backdrop-blur-[1px]">
        <p className="text-center font-['Playfair_Display'] text-2xl text-[#2f3b5c]">{t.month}</p>
        <div className="mt-4 grid grid-cols-7 gap-1 text-center">
          {WEEKDAYS.map((day) => (
            <span key={day} className="text-[11px] font-semibold uppercase tracking-wide text-[#2f3b5c]/70">
              {day}
            </span>
          ))}
          {CALENDAR_DAYS.map((day, idx) => (
            <span
              key={day ?? `empty-${idx}`}
              className={`flex h-9 items-center justify-center rounded-full text-sm ${
                day === null
                  ? ''
                  : day === 8
                    ? 'border-2 border-[#d58c9a] bg-[#f8e6ea] font-semibold text-[#b45f72] shadow-[0_6px_14px_rgba(213,140,154,0.28)]'
                    : 'text-[#2f3b5c]'
              }`}
            >
              {day ?? ''}
            </span>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-[#2f3b5c]">{t.note}</p>
      </div>
    </RevealSection>
  )
}

export default DressCode
