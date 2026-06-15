import BackgroundGrid from './components/BackgroundGrid'
import Hero from './components/Hero'
import CurrentFocus from './components/CurrentFocus'
import FeaturedProjects from './components/FeaturedProjects'
import Connect from './components/Connect'

export default function App() {
  return (
    <>
      <BackgroundGrid />
      <main className="relative">
        <Hero />
        <CurrentFocus />
        <FeaturedProjects />
        <Connect />
      </main>
    </>
  )
}
