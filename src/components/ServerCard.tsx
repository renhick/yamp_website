import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"

const ServerCard = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent className="z-[1000]">
                <div className="w-full h-56 rounded-lg relative bg-[url('/corleone.png')] bg-cover bg-center mt-5 border border-input overflow-hidden">
                    <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black from-10% to-transparent to-60%"></div>
                    <div className="absolute bottom-5 left-5">
                        {/* <Badge className="bg-primary/50">corleone-city.de</Badge> */}
                        <h1 className="text-2xl font-semibold">Corleone City</h1>
                        <div className="mt-1 flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-90"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <p className="text-sm font-bold">4.271 <span className="text-muted-foreground font-medium">/10.000 players total</span></p>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <div>
                        <p className="text-sm text-muted-foreground font-medium">Description</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nemo vel eligendi nobis aperiam omnis dolor nisi exercitationem tenetur laudantium!</p>
                    </div>

                    <Separator className="mt-5" />

                    <div className="mt-5">
                        <p className="text-sm text-muted-foreground font-medium">Serverlist - Corleone</p>
                        <div className="flex flex-col gap-2 mt-2">
                            <div className="w-full p-2 rounded-lg border border-input flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img src="/icon.png" alt="Logo" className="w-10 h-10 rounded-full border border-input" />
                                    <div>
                                        <p className="font-semibold">Corleone - Berlin</p>
                                        <div className="flex items-center gap-2">
                                            <Badge className="bg-white/10 hover:bg-white/30 border border-input">Roleplay</Badge>
                                            <Badge className="bg-white/10 hover:bg-white/30 border border-input">#1</Badge>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <p className="text-sm font-semibold text-muted-foreground">Players</p>
                                    <p className="text-muted-foreground"><span className="font-semibold text-white">987</span>/1.000</p>
                                </div>
                            </div>
                            <div className="w-full p-2 rounded-lg border border-input flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img src="/icon.png" alt="Logo" className="w-10 h-10 rounded-full border border-input" />
                                    <div>
                                        <p className="font-semibold">Corleone - Los Angeles</p>
                                        <div className="flex items-center gap-2">
                                            <Badge className="bg-white/10 hover:bg-white/30 border border-input">Roleplay</Badge>
                                            <Badge className="bg-white/10 hover:bg-white/30 border border-input">#1</Badge>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <p className="text-sm font-semibold text-muted-foreground">Players</p>
                                    <p className="text-muted-foreground"><span className="font-semibold text-white">987</span>/1.000</p>
                                </div>
                            </div>
                            <div className="w-full p-2 rounded-lg border border-input flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img src="/icon.png" alt="Logo" className="w-10 h-10 rounded-full border border-input" />
                                    <div>
                                        <p className="font-semibold">Corleone - Tokio</p>
                                        <div className="flex items-center gap-2">
                                            <Badge className="bg-white/10 hover:bg-white/30 border border-input">Roleplay</Badge>
                                            <Badge className="bg-white/10 hover:bg-white/30 border border-input">#1</Badge>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <p className="text-sm font-semibold text-muted-foreground">Players</p>
                                    <p className="text-muted-foreground"><span className="font-semibold text-white">987</span>/1.000</p>
                                </div>
                            </div>
                            <div className="w-full p-2 rounded-lg border border-input flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img src="/icon.png" alt="Logo" className="w-10 h-10 rounded-full border border-input" />
                                    <div>
                                        <p className="font-semibold">Corleone - Glasgow</p>
                                        <div className="flex items-center gap-2">
                                            <Badge className="bg-white/10 hover:bg-white/30 border border-input">Roleplay</Badge>
                                            <Badge className="bg-white/10 hover:bg-white/30 border border-input">#1</Badge>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <p className="text-sm font-semibold text-muted-foreground">Players</p>
                                    <p className="text-muted-foreground"><span className="font-semibold text-white">987</span>/1.000</p>
                                </div>
                            </div>
                            <div className="w-full p-2 rounded-lg border border-input flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img src="/icon.png" alt="Logo" className="w-10 h-10 rounded-full border border-input" />
                                    <div>
                                        <p className="font-semibold">Corleone - Vienna</p>
                                        <div className="flex items-center gap-2">
                                            <Badge className="bg-white/10 hover:bg-white/30 border border-input">Roleplay</Badge>
                                            <Badge className="bg-white/10 hover:bg-white/30 border border-input">#1</Badge>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <p className="text-sm font-semibold text-muted-foreground">Players</p>
                                    <p className="text-muted-foreground"><span className="font-semibold text-white">987</span>/1.000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <SheetFooter>
                    <SheetClose asChild>

                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default ServerCard
