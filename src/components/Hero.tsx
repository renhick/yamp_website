import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Button } from './ui/button'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa6'
import Link from 'next/link'
import { Badge } from './ui/badge'

const Hero = () => {
    return (
        <>

            <div className='pb-20 pt-30 absolute top-0 left-0 w-full h-screen overflow-hidden -z-10'>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>

            {/* <div className="h-screen w-full dark:bg-grid-white/[0.03] bg-grid-black/[0.03] flex items-center justify-center absolute top-0 left-0 -z-10">
                <div className="pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div> */}

            <MaxWidthWrapper>
                <div className='flex justify-center flex-col items-center z-10 mt-40'>
                    <Badge>YAMP Launcher</Badge>
                    <TextGenerateEffect
                        words="Enhance your multiplayer experience like never before!"
                        className="text-center text-6xl max-w-4xl"
                    />
                    <p className='text-muted-foreground max-w-4xl text-center mt-10'>YAMP Multiplayer is a complimentary mod for Grand Theft Auto V, enabling you to connect to dedicated servers and explore unique custom gamemodes.</p>

                    <div className='mt-10 flex items-center gap-2'>
                        <Link href="/">
                            <Button className='flex items-center gap-2 bg-white text-black hover:bg-white/50'>
                                <FaCloudDownloadAlt className='w-5 h-5' />
                                <p>Download YAMP Launcher</p>
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button variant="outline">
                                <p>Learn more</p>
                            </Button>
                        </Link>
                    </div>
                </div>
            </MaxWidthWrapper>
        </>
    )
}

export default Hero