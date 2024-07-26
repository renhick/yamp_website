import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { Mail } from 'lucide-react'

const Banner = () => {
    return (
        <section className='mt-5'>
            <MaxWidthWrapper>
                <div className="w-full p-10 border border-input rounded-lg bg-[url('/banner_bg.png')] bg-cover">
                    <div className='w-full flex-col gap-5 md:flex-row flex justify-between items-start md:items-end'>
                        <div>
                            <div className="w-10 h-10 bg-primary rounded-md">
                                <Image src="/logo.png" width="1080" height="1080" alt="Logo"></Image>
                            </div>
                            <h1 className='text-2xl mt-2 font-bold'>Get in touch with our Team.</h1>
                            <p className='max-w-[25rem] text-muted-foreground'>If you have any questions, do not be shy to contact us. We will respond within 24 hours.</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Link href="/">
                                <Button variant="outline">
                                    FAQ
                                </Button>
                            </Link>
                            <Link href="/">
                                <Button className='bg-white text-black hover:bg-white/50 flex items-center gap-2'>
                                    <Mail className="w-5 h-5" />
                                    Contact via e-mail
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default Banner