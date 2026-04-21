import RevealSection from './RevealSection'

const timelineItems = [
  ['15:30', 'mehmonlarni kutib olish'],
  ['16:00', 'nikoh marosimi'],
  ['16:30', 'foto sessiya'],
  ['17:00', 'bayram dasturxoni'],
]

function Timeline() {
  return (
    <RevealSection className="relative px-6 pb-14 pt-12">
      <div className="space-y-7">
        {timelineItems.map(([time, title]) => (
          <div key={time} className="flex items-baseline justify-center gap-4">
            <p className="font-['Playfair_Display'] text-4xl text-[#f4d8de]">{time}</p>
            <p className="w-36 text-sm text-[#f3dde4]">{title}</p>
          </div>
        ))}
      </div>
    </RevealSection>
  )
}

export default Timeline
