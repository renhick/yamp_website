import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Separator } from './ui/separator'
import { SpecItems, SpecItems2 } from '../../data'
import { Button } from './ui/moving-border'

const FAQ = () => {
    const boxStyle = 'relative bg-background border border-input rounded-lg p-5 flex flex-col items-center justify-center overflow-hidden';

    const itemStyle: { [key: number]: { classes: string; styles: React.CSSProperties } } = {
        1: { classes: "bg-[url('/footer-grid.svg')] bg-cover", styles: {} },
        2: { classes: "bg-[url('/footer-grid.svg')] bg-cover", styles: {} },
    };
    return (
        <MaxWidthWrapper>
            <section className='mt-20'>
                <div>
                    <h1 className='text-4xl font-bold'>System requirements</h1>
                    <p className='max-w-prose text-muted-foreground mt-2'>Ensure your system meets these requirements for optimal performance while using YAMP. Should you have any further questions or need assistance, our support team is here to help!</p>
                    <Separator className='mt-5' />


                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
                        {SpecItems.map((card) => (
                            <div
                            key={card.id}>
                                <Button className='cursor-auto select-text'>
                                    <div className={`${card.boxClassName || ''}`}>
                                        <h2 className={`${card.titleClassName || 'text-xl'}`}>{card.title}</h2>
                                        <p className={`${card.textClassName || 'font-bold text-2xl w-6/6 md:w-2/6'}`}>{card.description}</p>
                                        <p className={`${card.textSpecNamefirst || ''}`}><span className='font-bold text-white'>CPU </span>{card.spectext_cpu}</p>
                                    <p className={`${card.textSpecName || ''}`}><span className='font-bold text-white'>GPU </span>{card.spectext_gpu}</p>
                                    <p className={`${card.textSpecName || ''}`}><span className='font-bold text-white'>RAM </span>{card.spectext_ram}</p>
                                    <p className={`${card.textSpecName || ''}`}><span className='font-bold text-white'>HDD </span>{card.spectext_hdd}</p>
                                    </div>
                                </Button> 
                            </div>
                        ))}
                        {SpecItems2.map((item) => (

                            <div
                                key={item.id}
                                className={`${boxStyle} ${itemStyle[item.id]?.classes || ''}`}>
                                <div className={`${item.boxClassName || ''}`}>
                                    <h2 className={`${item.titleClassName || 'text-xl'}`}>{item.title}</h2>
                                    <p className={`${item.textClassName || 'font-bold text-2xl w-6/6 md:w-2/6'}`}>{item.description}</p>
                                    <p className={`${item.textSpecNamefirst || ''}`}><span className='font-bold text-white'>CPU </span>{item.spectext_cpu}</p>
                                    <p className={`${item.textSpecName || ''}`}><span className='font-bold text-white'>GPU </span>{item.spectext_gpu}</p>
                                    <p className={`${item.textSpecName || ''}`}><span className='font-bold text-white'>RAM </span>{item.spectext_ram}</p>
                                    <p className={`${item.textSpecName || ''}`}><span className='font-bold text-white'>HDD </span>{item.spectext_hdd}</p>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </section>
        </MaxWidthWrapper>
    )
}

export default FAQ