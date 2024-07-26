import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { FAQItem } from '../../data';

const FAQ = () => {

    const boxStyle = 'relative bg-background border border-input rounded-lg p-5 flex flex-col items-center justify-center overflow-hidden';

    const itemStyle: { [key: number]: { classes: string; styles: React.CSSProperties } } = {
        1: { classes: "bg-[url('/footer-grid.svg')] bg-cover", styles: {} },
        2: { classes: "bg-[url('/footer-grid.svg')] bg-cover", styles: {} },
    };

    return (
        <section className='mt-20'>
            <MaxWidthWrapper>
                <div className='w-full flex justify-center items-center flex-col'>
                    <h1 className='text-4xl font-bold'>Frequently asked questions</h1>
                    <p className='max-w-prose text-muted-foreground text-center mt-2'>Need help with something? First of all, check out this list, and you might find what you are looking for.</p>
                </div>

                <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {FAQItem.map((item) => (
                        <div
                            key={item.id}
                            className={`${boxStyle} ${itemStyle[item.id]?.classes || ''}`}>
                            <div className={`${item.boxClassName || ''}`}>
                                <h2 className={`${item.titleClassName || 'text-xl'}`}>{item.title}</h2>
                                <p className={`${item.textClassName || 'font-bold text-2xl w-6/6 md:w-2/6'}`}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default FAQ