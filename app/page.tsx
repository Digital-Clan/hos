import { Hero, Mission, Events } from '@/app/components/Home'
import { Memoriam } from './components/Common'

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <Memoriam showButton={true} />
      <Events />
    </main>
  )
}
