"use client"

import DownloadServer from '@/components/DownloadServer'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'
import { Separator } from '@/components/ui/separator'
import { Minimize2, ShieldCheck, Zap } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaCloudDownloadAlt } from 'react-icons/fa'

const page = () => {
  const words = ["roleplay", "multiplayer", "action", "performance"];
  return (
    <div>
      <MaxWidthWrapper>
        <div className="w-full absolute top-0 left-0 h-[30rem] -z-10 bg-[url('/footer-grid.svg')] bg-cover bg-center"></div>
        <section className='mt-40'>
          <div className="w-full relative p-10 bg-[url('/bg_2.png')] bg-cover bg-center rounded-lg border border-input flex justify-center flex-col overflow-hidden bg-background" >
            <h1 className='text-4xl md:text-6xl font-bold'>Dive into the world of <FlipWords className='hidden md:block' words={words} /> <span className='md:hidden'>roleplay</span> with Yamp.</h1>
            <p className='text-muted-foreground max-w-prose mt-5'>Requiring just ~320MB for the full client and ~6MB for the installer/updater. Other system specification are the same as for GTAV</p>
            <div className='mt-5 flex flex-col md:flex-row md:items-center gap-2'>
              <Link href="/">
                <Button className='flex items-center gap-2 bg-white text-black hover:bg-white/50'>
                  <FaCloudDownloadAlt className='w-5 h-5' />
                  <p>Download YAMP Launcher</p>
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline">
                  <p>For server owners</p>
                </Button>
              </Link>
            </div>
          </div>

          <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
            <div className="w-full p-5 border border-input rounded-lg bg-[url('/footer-grid.svg')] bg-[length:200%]">
              <Minimize2 className='w-10 h-10 text-primary' />
              <h3 className='mt-2 font-medium'>Easy to use</h3>
              <p className='text-muted-foreground'>YAMP stands out for its remarkable ease of use, featuring a user-friendly interface that ensures you can start playing with minimal effort—simply click and you're ready to go.</p>
            </div>
            <div className="w-full p-5 border border-input rounded-lg bg-[url('/footer-grid.svg')] bg-[length:200%]">
              <ShieldCheck className='w-10 h-10 text-primary' />
              <h3 className='mt-2 font-medium'>Easy to use</h3>
              <p className='text-muted-foreground'>YAMP stands out for its remarkable ease of use, featuring a user-friendly interface that ensures you can start playing with minimal effort—simply click and you're ready to go.</p>
            </div>
            <div className="w-full p-5 border border-input rounded-lg bg-[url('/footer-grid.svg')] bg-[length:200%]">
              <Zap className='w-10 h-10 text-primary' />
              <h3 className='mt-2 font-medium'>Easy to use</h3>
              <p className='text-muted-foreground'>YAMP stands out for its remarkable ease of use, featuring a user-friendly interface that ensures you can start playing with minimal effort—simply click and you're ready to go.</p>
            </div>
          </div>
        </section>
        <Separator className='mt-10'></Separator>
        <section className='mt-10'>
          <div className='flex flex-col items-center'>
            <h1 className='text-3xl md:text-6xl font-bold text-center'>Effortlessly Download and Set Up a Base <span className='text-primary'>for Your Server</span> with YAMP</h1>
            <p className='max-w-prose text-center text-muted-foreground mt-5'> With YAMP, server owners can easily download and set up a base for their servers in just a few steps, ensuring a seamless and efficient process.</p>
            <div className='mt-5'>
              <DownloadServer></DownloadServer>
            </div>
          </div>
        </section>
      </MaxWidthWrapper >
    </div>

  )
}

export default page