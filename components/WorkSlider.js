import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React, { useEffect, useState } from 'react';

import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import {BsArrowRight} from 'react-icons/bs';
import Image from 'next/image';
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Scrollon',
          path: '/scroll.png',
          link: 'https://scrollon-6fuj.onrender.com/',
        },
        {
          title: 'Portfolio-Juni',
          path: '/portfolio.png',
          link: 'https://github.com/Junith-K/Portfolio-Juni',
        },
        {
          title: 'Ash Ketchum CSS',
          path: '/ash.jpg',
          link: 'https://github.com/Junith-K/Ash-Ketchum-CSS'
        },
        {
          title: 'WeatherJS',
          path: '/weath.png',
          link: 'https://github.com/Junith-K/WeatherJS'
        },
      ],
    }
    // {
    //   images: [
    //     {
    //       title: 'title',
    //       path: '/thumb4.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb1.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb2.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb3.jpg',
    //     },
    //   ],
    // },
  ],
};

const WorkSlider = ({changeSequence}) => {
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleItemHover = (itemId) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }

    // Set a timeout for 250ms to delay the hover effect
    const timeoutId = setTimeout(() => {
      setHoveredItemId(itemId);
    }, 500);

    setHoverTimeout(timeoutId);
  };
  const handleItemLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }

    // Clear the hovered item when leaving
    setHoveredItemId(null);
  };
  useEffect(()=>{
    changeSequence(hoveredItemId)
  },[hoveredItemId])
  return (
    <Swiper
    spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className=''
  >
    {workSlider.slides.map((slide, slideIndex) => {
      return (
        <SwiperSlide key={slideIndex}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((image, imageIndex) => {
              return (
                <div
                  key={imageIndex}
                  className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                  onMouseEnter={() => handleItemHover(imageIndex)}
                  onMouseLeave={() => handleItemHover(null)} // Reset when leaving
                >
                  <div className='flex items-center justify-center relative overflow-hidden group'>
                    <Image src={image.path} width={500} height={300} className='bg-red-300' alt='' />
                    <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'>
                    </div>
                    <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-400 text-[13px] tracking-[0.2em] '>
                      <div className='text-lg font-semibold'>
                        <a key={imageIndex} href={image.link} target='_blank'>
                          {image.title}
                        </a>
                      </div>
                      <div className='flex items-center gap-x-2'>
                        <div className='delay-100'>
                          <a key={imageIndex} href={image.link} target='_blank'>
                            Live
                          </a>
                        </div>
                        <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                          <a key={imageIndex} href={image.link} target='_blank'>
                            Project
                          </a>
                        </div>
                        <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                          <a key={imageIndex} href={image.link} target='_blank'>
                            <BsArrowRight />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </SwiperSlide>
      );
    })}
  </Swiper>
  );
};

export default WorkSlider;
