"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { ArrowUpDown, CheckIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const filters = [
    {
        value: "hide emtpy",
        label: "Hide empty",
    },
    {
        value: "hide full",
        label: "Hide full",
    },
    {
        value: "hide passworded",
        label: "Hide passworded",
    },
    {
        value: "promoted on top",
        label: "Promoted on top",
    },
];

const Filter = () => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? filters.find((filter) => filter.value === value)?.label
                        : "Filter"}
                    {/* <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
                    <ArrowUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search filter..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>No filter found.</CommandEmpty>
                        <CommandGroup>
                            {filters.map((filter) => (
                                <CommandItem
                                    key={filter.value}
                                    value={filter.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    {filter.label}
                                    <CheckIcon
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            value === filter.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default Filter