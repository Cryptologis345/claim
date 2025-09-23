import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carouselone'
import React from 'react'
import image1 from "@/images/Home/carouselone/Flare meeting.webp"
import image2 from "@/images/Home/carouselone/Group of people at Flare event.webp"
import image3 from "@/images/Home/carouselone/builders at flare google hackathon.webp"

import Image from 'next/image'


function CarouselAutoPlay()
{

  return (
      <div>
          <Carousel     opts={{
        align: "start",
      }}
              className="w-full max-w-sm">
              <CarouselContent>
                  
                      <CarouselItem className="basis-1/3">
                          <Image src={image1} alt=''/>
                      </CarouselItem>
                      <CarouselItem className="basis-1/3">
                      <Image src={image2} alt='' />
                      <Image src={image3} alt='' />
                      <div>
                          <p>300k+</p>
                      </div>
                  </CarouselItem>
                  <CarouselItem className="basis-1/3">
                      <Image src={image3} alt=''/>
                  </CarouselItem>
                  
                  
              </CarouselContent>
               <CarouselPrevious />
      <CarouselNext />
          </Carousel>
      
    </div>
  )
}

export default CarouselAutoPlay
