import venueImage from '../images/venue.jpg'
import ribbonA from '../images/ribbon-a.png'
import ribbonC from '../images/ribbon-c.png'
import RevealSection from './RevealSection'

function Location() {
  const mapUrl = 'https://maps.google.com/?q=Royal+Hall+Ulubishe'

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
      <h2 className="font-['Playfair_Display'] text-3xl uppercase tracking-wide">
        To'y manzili
      </h2>
      <p className="mt-6 text-sm font-medium">Royal Hall maskani</p>
      <p className="mt-2 text-sm">Ulubishe qishlog'i, Peski ko'chasi, 2A</p>
      <a
        href={mapUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex rounded-full border border-[#2f3b5c]/20 bg-[#2f3b5c] px-5 py-2 text-sm text-white transition hover:bg-[#1f2943]"
      >
        Lokatsiyani ochish
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
