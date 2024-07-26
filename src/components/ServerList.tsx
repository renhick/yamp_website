"use client"

import * as React from "react"
import {
    CaretSortIcon,
    ChevronDownIcon,
    DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    expandRows,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "./ui/badge"

import { ChevronDown } from "lucide-react"

import { ColumnMeta } from '@tanstack/react-table';
import { useState } from "react"

const data = [
    {
        id: "yamp.connect/corleone",
        players: 4317,
        maxplayers: 10000,
        servername: "[GER] CORLEONE CITY",
        gamemode: "",
        language: "German",
        img: "/icon.png",
        badge1: "Corleone",
        badge2: "Roleplay",
        badge3: "Economy",
        icon: "🌎",
        server: "2",
    },
    {
        id: "yamp.connect/blazev",
        players: 768,
        maxplayers: 2000,
        servername: "[GER] BLAZE V",
        gamemode: "",
        language: "German",
        img: "/blaze_icon.png",
        badge1: "BLAZE",
        badge2: "Roleplay",
        badge3: "Voice",
        icon: "",
        server: "3",
    },
    {
        id: "yamp.connect/finalcity",
        players: 3182,
        maxplayers: 5000,
        servername: "[GER] FINAL CITY",
        gamemode: "Roleplay",
        language: "German",
        img: "/DCLogo.gif",
        badge1: "FINAL CITY",
        badge2: "Roleplay",
        badge3: "STREAMING",
        icon: "",
        server: "1",
    },
    {
        id: "yamp.connect/hexscripts",
        players: 101,
        maxplayers: 500,
        servername: "[DEV-SERVER] HEX SCRIPTS",
        gamemode: "Scripts",
        language: "German",
        img: "/Hex_logo.gif",
        badge1: "Hex Scripts",
        badge2: "Scripts",
        badge3: "Join",
        icon: "",
        server: "2",
    },
    {
        id: "yamp.connect/dinero",
        players: 915,
        maxplayers: 1000,
        servername: "[GER] Dinero",
        gamemode: "Roleplay",
        language: "German",
        img: "/D_logo.gif",
        badge1: "Dinero",
        badge2: "Roleplay",
        badge3: "Cars",
        icon: "",
        server: "1",
    },

];

const dataExtended = [
    {
        id: "yamp.connect/corleone",
        servers: [
            {
                id: "yamp.connect/corleone-final",
                players: 500,
                servername: "Corleone City - FFA Fight",
                gamemode: "FFA",
                language: "German",
                maxplayers: 2024,
                badge1: "Corleone",
                badge2: "Roleplay",
                badge3: "Voice",
                icon: "🌎",
            },
            {
                id: "yamp.connect/corleone-wdgza",
                players: 12,
                servername: "Corleone City - Testserver",
                gamemode: "Developer",
                language: "German",
                maxplayers: 20,
                badge1: "Corleone",
                badge2: "Developer",
                badge3: "Testing",
                icon: "⚙️",
            },
        ],
    },
    {
        id: "yamp.connect/blazev",
        servers: [
            {
                id: "yamp.connect/blazev-ffa",
                players: 500,
                servername: "Blaze-V - FFA",
                gamemode: "FFA",
                language: "German",
                maxplayers: 1000,
                badge1: "BlazeV",
                badge2: "FFA",
                badge3: "Fight",
                icon: "",
            },
            {
                id: "yamp.connect/blazev-ffaa",
                players: 500,
                servername: "Blaze-V - FFA",
                gamemode: "FFA",
                language: "English",
                maxplayers: 1000,
                badge1: "BlazeV",
                badge2: "FFA",
                badge3: "Fight",
                icon: "",
            },
            {
                id: "yamp.connect/blazev-ffaaa",
                players: 500,
                servername: "Blaze-V - FFA",
                gamemode: "FFA",
                language: "French",
                maxplayers: 1000,
                badge1: "BlazeV",
                badge2: "FFA",
                badge3: "Fight",
                icon: "",
            },
        ],
    },
    
];

export type Servers = {
    id: string;
    players: number;
    servername: string;
    gamemode: string;
    maxplayers: number;
    language: string;
    img: string;
    badge1: string;
    badge2: string;
    badge3: string;
    icon: string;
    server: string;
};

interface CustomColumnMeta {
    className?: string;
}

declare module "@tanstack/react-table" {
    interface ColumnMeta<TData, TValue> extends CustomColumnMeta { }
}



const ServerList = () => {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
        {}
    );
    const [rowSelection, setRowSelection] = useState({});
    const [expandedRows, setExpandedRows] = useState<string[]>([]);
    const [expandedChevrons, setExpandedChevrons] = useState<Record<string, boolean>>({});


    const columns: ColumnDef<Servers>[] = [
        {
            accessorKey: "chevron",
            header: "",
            cell: ({ row }) => (
                <div className="!pr-0">
                    <button
                        className="w-6 h-6 rounded-full transition-all text-muted-foreground hover:bg-white/10 hover:text-white flex justify-center items-center"
                        onClick={() => toggleRowExpansion(row.id)}
                    >
                        <ChevronDown
                            className={`w-4 h-4 transform transition-all ${expandedChevrons[row.id] ? 'rotate-180' : 'rotate-0'}`}
                        />
                    </button>
                </div>
            ),
            meta: {
                className: "hidden lg:table-cell",
            },
        },
        {
            accessorKey: "servername",
            header: "Server name",
            cell: ({ row }) => (
                <div className="flex items-center gap-5">
                    <div>
                        <img
                            src={row.original.img}
                            alt="Logo"
                            className="w-12 h-12 rounded-full border border-input"
                        />
                    </div>
                    <div className="capitalize font-semibold text-base">
                        {row.getValue("servername")} {row.original.icon}
                        <div className="flex items-center gap-1 mt-1">
                            <Badge className="bg-white/10 hover:bg-white/30 cursor-pointer border border-input">
                                {row.original.badge1}
                            </Badge>
                            <Badge className="bg-white/10 hover:bg-white/30 cursor-pointer border border-input">
                                {row.original.badge2}
                            </Badge>
                            <Badge className="bg-white/10 hover:bg-white/30 cursor-pointer border border-input">
                                {row.original.badge3}
                            </Badge>
                        </div>
                    </div>
                </div>
            ),
            meta: {
                className: "sm:table-cell",
            },
        },
        {
            accessorKey: "gamemode",
            header: ({ column }) => {
                return (
                    <p>Gamemode</p>
                );
            },
            cell: ({ row }) => (
                <div className="capitalize text-base font-medium">
                    {row.getValue("gamemode")}
                </div>
            ),
            meta: {
                className: "hidden lg:table-cell",
            },
        },
        {
            accessorKey: "server",
            header: ({ column }) => {
                return <div>Server</div>;
            },
            cell: ({ row }) => (
                <div className="capitalize text-base font-medium">
                    {row.getValue("server")}
                </div>
            ),
            meta: {
                className: "hidden md:table-cell",
            },
        },
        {
            accessorKey: "language",
            header: ({ column }) => {
                return <div>Language</div>;
            },
            cell: ({ row }) => (
                <div className="capitalize text-base font-medium">
                    {row.getValue("language")}
                </div>
            ),
            meta: {
                className: "hidden lg:table-cell",
            },
        },
        {
            accessorKey: "players",
            header: ({ column }) => {
                return <div>Players</div>;
            },
            cell: ({ row }) => {
                const players = row.getValue("players") as number;
                const maxplayers = row.original.maxplayers as number;
                return (
                    <div className="capitalize text-base font-medium text-muted-foreground">
                        <span className="text-white">{players}</span> / {maxplayers}
                    </div>
                );
            },
            meta: {
                className: "hidden md:table-cell",
            },
        },
        {
            id: "actions",
            enableHiding: false,
            cell: ({ row }) => {
                const serverId = row.original.id;
                const extendedData = dataExtended.find(
                    (item) => item.id === serverId
                );

                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <DotsHorizontalIcon className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() =>
                                    navigator.clipboard.writeText(row.original.id)
                                }
                            >
                                Copy connect IP
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
            meta: {
                className: "hidden sm:table-cell",
            },
        },
    ];

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    const toggleRowExpansion = (rowId: string) => {
        if (expandedRows.includes(rowId)) {
            setExpandedRows(expandedRows.filter(id => id !== rowId));
        } else {
            setExpandedRows([...expandedRows, rowId]);
        }

        setExpandedChevrons(prevState => ({
            ...prevState,
            [rowId]: !prevState[rowId]
        }));
    };




    return (
        <div className="w-full">
            <div className="flex items-center py-4 gap-2">
                <Input
                    placeholder="Filter servernames.."
                    value={
                        (table.getColumn("servername")?.getFilterValue() as string) ??
                        ""
                    }
                    onChange={(event) =>
                        table.getColumn("servername")?.setFilterValue(
                            event.target.value
                        )
                    }
                    className="max-w-[21rem]"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns{" "}
                            <ChevronDownIcon className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                );
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead
                                            key={header.id}
                                            className={
                                                header.column.columnDef.meta?.className
                                            }
                                        >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <React.Fragment key={row.id}>
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected()}
                                        className="cursor-pointer"
                                        onClick={() =>
                                            toggleRowExpansion(row.id)
                                        }
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell
                                                key={cell.id}
                                                className={
                                                    cell.column.columnDef.meta?.className
                                                }
                                            >
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                    {expandedRows.includes(row.id) &&
                                        dataExtended
                                            .find(
                                                (item) => item.id === row.original.id
                                            )
                                            ?.servers.map((item) => (
                                                <TableRow key={item.id}>
                                                    <TableCell
                                                        colSpan={columns.length}
                                                        className="px-4 md:pl-[9.75rem] pr-9 py-4 cursor-pointer"
                                                    >

                                                        <div className="flex flex-col md:flex-row md:justify-between">
                                                            <div className="flex flex-col">
                                                                <div className="flex items-center gap-2 capitalize text-base font-semibold">
                                                                    <p>{item.servername}</p>
                                                                    <p>{item.icon}</p>
                                                                </div>
                                                                <div className="flex items-center gap-1 mt-1">
                                                                    <Badge className="bg-white/10 hover:bg-white/30 cursor-pointer border border-input">{item.badge1}</Badge>
                                                                    <Badge className="bg-white/10 hover:bg-white/30 cursor-pointer border border-input">{item.badge2}</Badge>
                                                                    <Badge className="bg-white/10 hover:bg-white/30 cursor-pointer border border-input">{item.badge3}</Badge>
                                                                </div>
                                                            </div>

                                                            <div className="flex items-center gap-5 md:gap-12 mt-5 md:mt-0">

                                                                <div className="capitalize text-base font-semibold lg:w-[11.45rem]">
                                                                    <p>{item.gamemode}</p>
                                                                </div>

                                                                <div className="capitalize text-base font-semibold lg:w-[4.5rem]">
                                                                    <p>{item.language}</p>
                                                                </div>

                                                                <div className="capitalize text-base font-semibold flex items-center gap-2 w-28">
                                                                    <p>{item.players}</p>
                                                                    <p className="text-muted-foreground">/{item.maxplayers}</p>
                                                                </div>

                                                                <div className="hidden md:table-cell">
                                                                    <DropdownMenu>
                                                                        <DropdownMenuTrigger asChild>
                                                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                                                <span className="sr-only">Open menu</span>
                                                                                <DotsHorizontalIcon className="h-4 w-4" />
                                                                            </Button>
                                                                        </DropdownMenuTrigger>
                                                                        <DropdownMenuContent align="end">
                                                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                                            <DropdownMenuItem
                                                                                onClick={() =>
                                                                                    navigator.clipboard.writeText(item.id)
                                                                                }
                                                                            >
                                                                                Copy connect IP
                                                                            </DropdownMenuItem>
                                                                        </DropdownMenuContent>
                                                                    </DropdownMenu>
                                                                </div>

                                                            </div>


                                                        </div>





                                                    </TableCell>

                                                </TableRow>
                                            ))}
                                </React.Fragment>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default ServerList;

