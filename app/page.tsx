import Image from 'next/image'
import { Hero, Mission } from '@/app/components/Home'

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
    </main>
  )
}
