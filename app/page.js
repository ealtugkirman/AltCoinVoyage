import Image from 'next/image'
import Logo from '../public/altcoinvoyagelogo.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='items-center justify-center text-center' >
        <Image src={ Logo } />
        <p className='text-blue-200 font-bold' >We are coming to guide you on crypto world.</p>
     </div>
    </main>
  )
}
