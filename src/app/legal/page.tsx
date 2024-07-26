import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const page = () => {
    return (
        <MaxWidthWrapper>
            <section className='mt-40'>
                <h1 className='text-3xl md:text-6xl font-bold'>Imprint</h1>

                <Separator className='mt-5'></Separator>

                <div className='mt-5 text-muted-foreground flex flex-col gap-2'>
                    <p><strong className='text-white'>Website Owner:</strong> John Doe</p>
                    <p><strong className='text-white'>Address:</strong> 123 Main Street, Cityville, Country</p>
                    <div>
                        <p><strong className='text-white'>Contact Information:</strong></p>
                        <p>Email: john.doe@example.com</p>
                        <p>Phone: +123-456-7890</p>
                    </div>
                    <div>
                        <p><strong className='text-white'>Company Registration:</strong></p>
                        <p>Company Name: Doe Enterprises</p>
                        <p>Company Registration Number: 123456789</p>
                        <p>VAT Number: VAT123456</p>
                    </div>
                    <p><strong className='text-white'>Responsible for Content:</strong> John Doe</p>
                    <div>
                        <p><strong className='text-white'>Disclaimer:</strong></p>
                        <p>The content of our website has been compiled with meticulous care and to the best of our knowledge. However, we cannot assume any liability for the up-to-dateness, completeness, or accuracy of any of the pages.</p>
                    </div>
                    <div>
                        <p><strong className='text-white'>External Links:</strong></p>
                        <p>Our website contains links to third-party websites "external links". As the content of these websites</p>
                    </div>
                </div>
            </section>
        </MaxWidthWrapper>
    )
}

export default page