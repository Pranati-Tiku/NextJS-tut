import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
              <div className='flex flex-col items-center'>
            
                <h1 className='m-5 font-bold text-xl'>HomePage</h1>
                <p className='p-4 font-semibold text-md'>This is the HomePage
                </p>
                <Link href='/demo' className='bg-white rounded-md text-black'>See all demos</Link>
              </div>

  )
}
