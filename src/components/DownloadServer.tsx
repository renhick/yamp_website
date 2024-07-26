"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { ArrowRight, FolderDown } from 'lucide-react'
import MaxWidthWrapper from './MaxWidthWrapper'

const DownloadServer = () => {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button className='bg-white text-black hover:bg-white/50 flex items-center gap-2'><p>Configure your server</p> <ArrowRight className='w-5 h-5' /></Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-3xl">
                    <DrawerHeader>
                        <DrawerTitle>YAMP server SDK</DrawerTitle>
                        <DrawerDescription>Set up your own server.</DrawerDescription>

                    </DrawerHeader>

                    


                    <DrawerFooter>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                            <Button className='flex items-center gap-2'>Download <FolderDown className='w-5 h-5' /></Button>
                            <DrawerClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                        </div>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default DownloadServer




