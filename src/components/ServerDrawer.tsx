"use client"

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
import { ArrowRight, FolderDown, Gamepad2, Play } from 'lucide-react'

import React from 'react'
import { ScrollArea } from "./ui/scroll-area"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Link from "next/link"
import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"
import PlayerChart from "./PlayerChart"

const ServerDrawer = () => {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button className='bg-white text-black hover:bg-white/50 flex items-center gap-2'><p>Test click Server</p> <ArrowRight className='w-5 h-5' /></Button>
            </DrawerTrigger>
            <DrawerContent>
                <ScrollArea className="w-full h-[35rem] mt-5 pb-10">
                    <MaxWidthWrapper>
                        <div className="w-full relative overflow-hidden h-72 bg-[url('/corleone.png')] bg-cover bg-center border border-input rounded-lg p-5">
                            {/* <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-black -z-20"></div> */}
                            <div className="h-full flex flex-col justify-between">
                                <div className="flex items-center gap-5 z-50">
                                    <div className="w-16 h-16  bg-[url('/icon.png')] bg-cover bg-center border border-input rounded-full"></div>
                                    <div>
                                        <p className="text-3xl font-bold">Corleone City - Germany</p>
                                        <div className="flex items-center gap-2">
                                            <p className="capitalize text-base font-semibold">981 <span className="text-muted-foreground">/2024</span></p>
                                            <p className="text-muted-foreground text-base font-semibold">players</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <Button className="bg-white text-black hover:bg-white/50">
                                        <Link href="/" className="flex items-center gap-2">
                                            <p>Start playing</p>
                                            <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                            <div className="w-full border border-input p-5 rounded-lg bg-[url('/footer-grid.svg')] bg-cover bg-center">
                                <p className="text-muted-foreground">Language:</p>
                                <p className="text-base font-semibold">German</p>
                            </div>
                            <div className="w-full border border-input p-5 rounded-lg bg-[url('/footer-grid.svg')] bg-cover bg-center">
                                <p className="text-muted-foreground">Game mode:</p>
                                <p className="text-base font-semibold">Roleplay</p>
                            </div>
                            <div className="w-full border border-input p-5 rounded-lg bg-[url('/footer-grid.svg')] bg-cover bg-center">
                                <p className="text-muted-foreground">Tags:</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <Badge className="bg-white/10 hover:bg-white/30 cursor-pointer border border-input">Corleone</Badge>
                                    <Badge className="bg-white/10 hover:bg-white/30 cursor-pointer border border-input">Roleplay</Badge>
                                    <Badge className="bg-white/10 hover:bg-white/30 cursor-pointer border border-input">Voice</Badge>
                                </div>
                            </div>
                        </div>

                        <div className="w-full mt-5">
                            <p className="text-muted-foreground">Description:</p>
                            <p className="text-base font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iusto magni vitae quidem incidunt unde totam repudiandae obcaecati fugit dolore, quo facilis quibusdam accusantium culpa omnis reprehenderit dolorum dolores vel odit et, nihil maiores molestiae. Ipsum eaque, perferendis nulla atque sapiente earum, amet molestias expedita culpa explicabo possimus quae esse!</p>
                        </div>

                        <Separator className="mt-5"></Separator>

                        <div className="w-full h-96 mt-5 rounded-lg border border-input">
                            <PlayerChart></PlayerChart>
                        </div>
                    </MaxWidthWrapper>
                </ScrollArea>
            </DrawerContent>
        </Drawer>
    )
}

export default ServerDrawer