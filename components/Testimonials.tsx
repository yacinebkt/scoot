import React from 'react'
import Carousel from './Carousel/Carousel'
import CarouselItem from './Carousel/CarouselItem'
import Review from './Review'

const Testimonials: React.FC = () => (
    <Carousel className='bg-black text-white py-10 lg:py-20 w-full '>
        <CarouselItem index={0}>
           <Review by='Khaled 01'>
           Margelo and Showtime both share the love for high-quality software, the passion for building something people want and the ambition of always doing our best. 10/10 would recommend working with Marc and his team.
           </Review>
        </CarouselItem>

        <CarouselItem index={1}>
           <Review by='Khaled 02'>
           Margelo and Showtime both share the love for high-quality software, the passion for building something people want and the ambition of always doing our best. 10/10 would recommend working with Marc and his team.
           </Review>
        </CarouselItem>

        <CarouselItem index={2}>
           <Review by='Khaled 03'>
           Margelo and Showtime both share the love for high-quality software, the passion for building something people want and the ambition of always doing our best. 10/10 would recommend working with Marc and his team.
           </Review>
        </CarouselItem>

        <CarouselItem index={3}>
           <Review by='Khaled 04'>
           Margelo and Showtime both share the love for high-quality software, the passion for building something people want and the ambition of always doing our best. 10/10 would recommend working with Marc and his team.
           </Review>
        </CarouselItem>
    </Carousel>
)


export default Testimonials