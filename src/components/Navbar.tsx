"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { FaDiscord, FaGithub, FaPatreon } from "react-icons/fa";

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import MaxWidthWrapper from "./MaxWidthWrapper"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

const Navbar = () => {
    return (
        <>
            <div className="fixed top-0 left-0 w-full p-3 border-b filter backdrop-blur-md border-b-white/10 z-[1000]">
                <MaxWidthWrapper>
                    <div className="flex gap-5 justify-between items-center w-full">
                        <Link href="/">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary rounded-md">
                                    <Image src="/logo.png" width="1080" height="1080" alt="Logo"></Image>
                                </div>
                                <div>
                                    <p className="font-semibold">YAMP Project</p>
                                </div>
                            </div>
                        </Link>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent">Getting started</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                            <li className="row-span-3">
                                                <NavigationMenuLink asChild>
                                                    <a
                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                        href="/"
                                                    >
                                                        <div className="mb-2 mt-4 text-lg font-medium">
                                                            shadcn/ui
                                                        </div>
                                                        <p className="text-sm leading-tight text-muted-foreground">
                                                            Beautifully designed components built with Radix UI and
                                                            Tailwind CSS.
                                                        </p>
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                            <ListItem href="/docs" title="Introduction">
                                                Re-usable components built using Radix UI and Tailwind CSS.
                                            </ListItem>
                                            <ListItem href="/downloads" title="Downloads">
                                                Installation of YAMP Client
                                            </ListItem>
                                            <ListItem href="/docs/primitives/typography" title="Typography">
                                                Styles for headings, paragraphs, lists...etc
                                            </ListItem>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent">Documentation</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                            {components.map((component) => (
                                                <ListItem
                                                    key={component.title}
                                                    title={component.title}
                                                    href={component.href}
                                                >
                                                    {component.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/serverlist" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Serverlist
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        {/* <div className="flex items-center gap-5 text-white/50">
                            <FaDiscord className="w-5 h-5" />
                            <FaGithub className="w-5 h-5" />
                            <FaPatreon className="w-5 h-5" />
                        </div> */}
                    </div>
                </MaxWidthWrapper>
            </div>
        </>
    )
}

export default Navbar


const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"