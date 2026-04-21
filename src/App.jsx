import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Location from './components/Location'
import DressCode from './components/DressCode'
import GiftCard from './components/GiftCard'
import Wishes from './components/Wishes'

function App() {
  return (
    <main className="mx-auto min-h-screen max-w-[390px] bg-[#2f3b5c] text-white shadow-2xl">
      <Hero />
      <Countdown />
      <Location />
      <DressCode />
      <GiftCard />
      <Wishes />
    </main>
  )
}

export default App
