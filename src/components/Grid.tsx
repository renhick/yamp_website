import React from 'react'
import { gridItems } from '../../data'
import MaxWidthWrapper from './MaxWidthWrapper';
import { GlobeDemo } from './ui/GridGlobe';
import { Spotlight } from './ui/Spotlight';
import { Button } from './ui/button';
import { Divide } from 'lucide-react';

const Grid = () => {
    const boxStyle = 'relative bg-background border border-input rounded-lg p-5 flex flex-col items-center justify-center overflow-hidden';

    const itemStyle: { [key: number]: { classes: string; styles: React.CSSProperties } } = {
        1: { classes: "bg-[url('/bg_1.jpg')] bg-cover bg-center", styles: {} },
        2: { classes: "bg-[url('/footer-grid.svg')] bg-cover pt-5", styles: {} },
        3: { classes: "bg-[url('/footer-grid.svg')] bg-cover", styles: {} },
        4: { classes: "bg-[url('/footer-grid.svg')] bg-[length:200%] bg-top", styles: {} },
    };


    return (
        <MaxWidthWrapper>
            <div className='grid grid-cols-1 md:grid-cols-5 auto-rows-[200px] gap-4 mt-20'>
                {gridItems.map((item, i) => (
                    <div
                        key={item.id}
                        className={`${boxStyle} ${itemStyle[item.id]?.classes || ''} ${i === 0 ? 'md:col-span-5' : ''} ${i === 1 || i === 2 ? 'md:col-span-2' : ''} ${i === 3 ? 'md:col-span-1' : ''} ${i === 0 || i === 4 ? 'md:row-span-3' : ''}`}
                    >
                        <div className={`${item.boxClassName || ''}`}>
                            <h2 className={`${item.titleClassName || 'text-xl'}`}>{item.title}</h2>
                            <p className={`${item.textClassName || 'font-bold text-2xl w-6/6 md:w-2/6'}`}>{item.description}</p>
                            {item.id === 2 && <GlobeDemo />}
                            {item.id === 3 && <div>
                                <Spotlight className='-top-20 left-10 h-[80vh] w-[50vw]' fill='purple' />
                                <Spotlight className='-top-28 left-0 h-[80vh] w-[50vw]' fill='blue' />
                                <Spotlight className='-top-40 left-0 h-screen' fill='white' />
                            </div>}
                        </div>
                    </div>
                ))}
            </div>
        </MaxWidthWrapper>
    )
}

export default Grid