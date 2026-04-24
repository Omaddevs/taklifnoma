import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Location from './components/Location'
import DressCode from './components/DressCode'
import GiftCard from './components/GiftCard'
import Wishes from './components/Wishes'
import AudioControl from './components/AudioControl'
import LanguageSwitch from './components/LanguageSwitch'
import { useState } from 'react'

function App() {
  const [locale, setLocale] = useState('uz')

  return (
    <main className="mx-auto min-h-screen max-w-[390px] bg-[#2f3b5c] text-white shadow-2xl">
      <AudioControl locale={locale} />
      <LanguageSwitch locale={locale} onChange={setLocale} />
      <Hero locale={locale} />
      <Countdown locale={locale} />
      <Location locale={locale} />
      <DressCode locale={locale} />
      <GiftCard locale={locale} />
      <Wishes locale={locale} />
    </main>
  )
}

export default App
