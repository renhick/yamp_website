"use client"

import { AreaChart, Area, ResponsiveContainer, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const corleonePlayers = [
    {
        "name": "01:30",
        "players": 201
    },
    {
        "name": "02:00",
        "players": 501
    },
    {
        "name": "02:30",
        "players": 851
    },
    {
        "name": "03:00",
        "players": 915
    },
    {
        "name": "03:30",
        "players": 1025
    },
    {
        "name": "04:00",
        "players": 1130
    },
    {
        "name": "04:30",
        "players": 950
    },
    {
        "name": "05:00",
        "players": 210
    },
    {
        "name": "05:30",
        "players": 520
    },
    {
        "name": "06:00",
        "players": 870
    },
    {
        "name": "06:30",
        "players": 930
    },
    {
        "name": "07:00",
        "players": 1040
    },
    {
        "name": "07:30",
        "players": 1150
    },
    {
        "name": "08:00",
        "players": 970
    },
    {
        "name": "08:30",
        "players": 220
    },
    {
        "name": "09:00",
        "players": 540
    },
    {
        "name": "09:30",
        "players": 890
    },
    {
        "name": "10:00",
        "players": 945
    },
    {
        "name": "10:30",
        "players": 1060
    },
    {
        "name": "11:00",
        "players": 1170
    },
    {
        "name": "11:30",
        "players": 990
    },
    {
        "name": "12:00",
        "players": 230
    },
    {
        "name": "12:30",
        "players": 560
    },
    {
        "name": "13:00",
        "players": 910
    },
    {
        "name": "13:30",
        "players": 960
    },
    {
        "name": "14:00",
        "players": 1080
    },
    {
        "name": "14:30",
        "players": 1190
    },
    {
        "name": "15:00",
        "players": 1010
    },
    {
        "name": "15:30",
        "players": 240
    },
    {
        "name": "16:00",
        "players": 580
    },
    {
        "name": "16:30",
        "players": 930
    },
    {
        "name": "17:00",
        "players": 975
    },
    {
        "name": "17:30",
        "players": 1100
    },
    {
        "name": "18:00",
        "players": 1210
    },
    {
        "name": "18:30",
        "players": 1030
    },
    {
        "name": "19:00",
        "players": 250
    }
]

const PlayerChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={500} height={400} data={corleonePlayers}>
                <YAxis orientation='right'></YAxis>
                <XAxis dataKey="name"></XAxis>
                <CartesianGrid strokeDasharray="5 5" strokeOpacity={0.1} strokeWidth={0.5}></CartesianGrid>
                <Tooltip content={<CustomTooltip />}></Tooltip>
                <Area
                    type="monotone"
                    dataKey="players"
                    stroke="#7c3aed"
                    fill="url(#colorUv)"
                    strokeWidth={3} />
                <defs>
                    <linearGradient id="colorUv" x1="1" y1="2" x2="0" y2="0">
                        <stop offset="50%" stopColor="#000" stopOpacity={0} />
                        <stop offset="80%" stopColor="#7c3aed" stopOpacity={0.5} />
                    </linearGradient>
                </defs>
            </AreaChart>
        </ResponsiveContainer>
    )
}

interface PayloadItem {
    name: string;
    value: number;
}

interface CustomTooltipProps {
    active?: boolean;
    payload?: PayloadItem[];
    label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className='p-4 bg-background flex flex-col rounded-md border border-input'>
                <p className='text-medium text-md'>{label}</p>
                <p className='text-sm text-muted-foreground font-medium'>
                    Players:
                    <span className='ml-2'>{payload[0].value}</span>
                </p>
            </div>
        );
    }

    return null;
};

export default PlayerChart;
