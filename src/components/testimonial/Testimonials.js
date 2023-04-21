import React from 'react'
import "./Testimonials.css"
import { TestimonialData } from "./testimonialData/TestimonialData.js";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";


export const Testimonials = ({ title, subtitle }) => {
    return (
        <section className='testimonial container section'>
            <h2 className='section-title'>{title}</h2>
            <span className='section-subtitle'>{subtitle}</span>

            <Swiper className='testimonial-container'
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    }
                }}
                modules={[Pagination]}
            >
                {TestimonialData.map(({ id, image, title, desc }) => {
                    return (
                        <SwiperSlide className='testimonial-card' key={id}>
                            <img src={image} alt="" className='testimonial-img' />
                            <h3 className='testimonial-name'>{title}</h3>
                            <p className='testimonial-desc'>{desc}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}
