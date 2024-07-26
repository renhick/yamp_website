import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Badge } from './ui/badge'
import { Item } from '@radix-ui/react-navigation-menu'
import { developer } from '../../data'
import { ArrowRight, Braces, PlusCircle } from 'lucide-react'
import { Button } from './ui/button'

const Cover = () => {
  return (
    <section className='mt-10 w-full'>
      <div className="w-full relative h-full bg-[url('/cover.png')] bg-cover bg-center">

        <MaxWidthWrapper className='pt-20 pb-20'>
          <div>
            <Badge>YAMP Launcher</Badge>
            <h1 className='text-4xl font-bold max-w-xl mt-2'>We love creative minds, developers & designers!</h1>
            <p className='text-muted-foreground mt-2 max-w-2xl'>Harness the full capabilities of GTA V through our user-friendly APIs designed for JavaScript or C#, offering extensive modding opportunities, robust development tools, and a supportive community eager to assist you in creating your ideal server.</p>
          </div>

          <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
            {developer.map((item) => (
              <div
                key={item.id}
                className="w-full p-5 bg-white/10 bg-[url('/footer-grid.svg')] bg-cover backdrop-blur-md rounded-lg border border-white/10">
                <h2 className='text-2xl'>{item.title}</h2>
                <p className='text-muted-foreground'>{item.description}</p>
                <Button className='mt-2 flex items-center gap-2 bg-white text-black hover:bg-white/50'>
                  <p>{item.button}</p>
                  <ArrowRight className='w-5 h-5' />
                </Button>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  )
}

export default Cover