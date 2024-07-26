import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { Separator } from './ui/separator'
import Image from 'next/image'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const Footer = () => {
    return (
        <footer className='w-full' id='contact'>
            <div className="w-full relative h-96 bg-[url('/footer-grid.svg')] bg-cover bg-center-top flex items-center flex-col justify-end pb-20">
                <h1 className='max-w-xl text-center text-4xl font-bold'>Ready to embark on your YAMP journey? It begins here.</h1>
                <p className='mt-2 text-muted-foreground text-center'>Join the YAMP Community and Start Your Adventure Today!</p>
                <Link href="/">
                    <Button className='mt-5 flex items-center gap-2 bg-white text-black hover:bg-white/50'>
                        <p>Join now</p>
                        <ArrowRight className='w-5 h-5' />
                    </Button>
                </Link>
            </div>
            <div className='w-full border-t border-t-white/10'>
                <MaxWidthWrapper className='pb-10'>
                    <div className='pt-10 pb-10 grid grid-cols-1 lg:grid-cols-5 gap-5'>
                        <div className='col-span-2 w-full'>
                            <div>
                                <div className="w-10 h-10 bg-primary rounded-md">
                                    <Image src="/logo.png" width="1080" height="1080" alt="Logo"></Image>
                                </div>
                                <h1 className='text-2xl font-semibold mt-2'>Join YAMP Launcher Community.</h1>
                                <p className='text-muted-foreground'>Unlock Endless Possibilities and Elevate Your Gaming Experience with YAMP Launcher.</p>
                            </div>
                        </div>
                        <div className='col-span-3 w-full'>
                            <div className='w-full flex justify-start lg:justify-end gap-10 flex-wrap lg:gap-20'>
                                <div>
                                    <h1 className='text-muted-foreground tracking-widest uppercase'>Social</h1>
                                    <div className='flex-col flex gap-2 mt-2'>
                                        <Link href="/" className='text-muted-foreground hover:underline transition-all'>
                                            <p>Discord</p>
                                        </Link>
                                        <Link href="/" className='text-muted-foreground hover:underline transition-all'>
                                            <p>Github</p>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-muted-foreground tracking-widest uppercase'>Downloads</h1>
                                    <div className='flex-col flex gap-2 mt-2'>
                                        <Link href="/" className='text-muted-foreground hover:underline transition-all'>
                                            <p>Ressource Hub</p>
                                        </Link>
                                        <Link href="/" className='text-muted-foreground hover:underline transition-all'>
                                            <p>YAMP SDK</p>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-muted-foreground tracking-widest uppercase'>Legal</h1>
                                    <div className='flex-col flex gap-2 mt-2'>
                                        <Link href="/" className='text-muted-foreground hover:underline transition-all'>
                                            <p>Cookies & Settings</p>
                                        </Link>
                                        <Link href="/legal" className='text-muted-foreground hover:underline transition-all'>
                                            <p>Imprint</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Separator />


                    <p className='text-muted-foreground text-sm tracking-tighter mt-5'>Grand Theft Auto and Grand Theft Auto V are trademarks owned by Take-Two Interactive Software. All other trademarks mentioned belong to their respective owners. YAMP and the YAMP Team have no affiliation with, nor are they endorsed by, Rockstar Games, Take-Two Interactive Software, or any other rights holders. YAMP and the YAMP Team do not manage user-generated servers and are not accountable for any user-generated content. The ownership of all user-generated content remains with its creators.</p>
                    <div className='w-full flex justify-between items-center'>
                        <p className='text-muted-foreground text-sm tracking-tighter mt-2'>Copyright &#169; YAMP Launcher Corp.</p>
                        <p className='text-muted-foreground text-sm tracking-tighter mt-2'>All rights reserved 2024</p>
                    </div>
                </MaxWidthWrapper>
            </div>
        </footer>
    )
}

export default Footer