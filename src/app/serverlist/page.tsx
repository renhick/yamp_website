import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'
import { serverImg, serverList } from '../../../data'
import { Separator } from '@/components/ui/separator'
import ServerList from '@/components/ServerList'
import ServerCard from '@/components/ServerCard'
import ServerDrawer from '@/components/ServerDrawer'

const page = () => {
    return (
        <>
            <MaxWidthWrapper>
                <section className='mt-40'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <div>
                            <h1 className='text-4xl font-bold'>YAMP Serverlist</h1>
                            <p className='text-muted-foreground mt-2'>Check out all the projects available on YAMP and find your perfect match among the many servers, from high-speed races to epic heists</p>
                            <Separator className='mt-5' />
                            <div className='grid grid-cols-3 md:grid-cols-3 gap-2 mt-5'>
                                {serverList.map((item) => (
                                    <div
                                        key={item.id}
                                        className="w-full p-5 rounded-lg border border-white/10 bg-[url('/footer-grid.svg')] bg-[length:200%] bg-center">
                                        <p className='text-sm text-muted-foreground'>{item.title}</p>
                                        <h1 className='text-2xl font-semibold'>{item.info}</h1>
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div>
                            <div className='w-full h-full rounded-lg overflow-hidden border border-input relative'>
                                {serverImg.map((item) => (
                                    <div
                                        key={item.id}
                                        className='w-full h-full'>
                                        <img src={item.img} alt="Featured Image" className='w-full h-full' />
                                        <div className='absolute bottom-0 left-0 p-5'>
                                            <p className='text-sm text-muted-foreground'>{item.title}</p>
                                            <h2 className='text-2xl font-semibold'>{item.name}</h2>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </section>
                <ServerList></ServerList>
                <ServerDrawer></ServerDrawer>
            </MaxWidthWrapper>
        </>
    )
}

export default page