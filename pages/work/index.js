'use client'
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';
import { TypeAnimation } from 'react-type-animation';
import React, { useEffect, useState } from 'react';
import ParticlesContainer from '../../components/ParticlesContainer';

const sequences = [
  [
    'Scrollon.',
    1000,
  ],
  [
    'Portfolio.',
    1000,
  ],
  [
    'Dummy 1.',
    1000,
  ],
  [
    'Dummy 2.',
    1000,
  ],
  [
    'Projects.',
    1000,
  ]
];

const sequences1 = [
  [
    `Full-Stack Social Media platform with advanced post management and user interaction features such as intuitive UI, robust search, and personalized profiles.`,
    1000,
  ],
  [
    'Seqdfg gdfg dgdgd ggdrgd'
    ,
    1000,
  ],
  [
    'Sequence for Item 2',
    1000,
  ],
  [
    'Sequence for Item 3',
    1000,
  ],
  [
    'Step into the realm of software development and discover the stories behind my projects. From building responsive user interfaces to optimizing server-side operations, this portfolio is your gateway to the intricate world of coding.',
    1000,
  ]
];


const Services = () => {

  const [selectedSeq, setSelectedSeq] = useState([
    'ss.',
    1000,
  ]);
  const [hoverId, setHoverId] = useState(null);
  const [hoverIdDup, setHoverIdDup] = useState(null);
  const changeSequence = (hoveredItemId) => {
    const selectedSequence = hoveredItemId !== null ? sequences[hoveredItemId+1] : sequences[0];
    if(selectedSequence!=selectedSeq){
      setSelectedSeq(selectedSequence);
      setHoverId("f");
      setHoverIdDup(hoveredItemId);
    }
  };

  useEffect(()=>{
    if(hoverId=="f"){
      setTimeout(() => {
        setHoverId(hoverIdDup);
      }, 100);
    }
  },[hoverId])

  return (
  <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <motion.h2 
          variants={fadeIn('up',0.2)} 
          initial='hidden' 
          animate='show' 
          exit='hidden' 
          className='h3 text-accent font-bold'>
            {
              hoverId == 0 ? (
                <TypeAnimation
                  style={{ fontSize: '2rem' }}
                  sequence={sequences[0]}
                  speed={40}
                  repeat={Infinity}
                />
              ) : hoverId == 1 ? (
                <TypeAnimation
                  style={{ fontSize: '2rem' }}
                  sequence={sequences[1]}
                  speed={40}
                  repeat={Infinity}
                />
              ) : hoverId == 2 ? (
                <TypeAnimation
                  style={{ fontSize: '2rem' }}
                  sequence={sequences[2]}
                  speed={40}
                  repeat={Infinity}
                />
              ) : hoverId == 3 ? (
                <TypeAnimation
                  style={{ fontSize: '2rem' }}
                  sequence={sequences[3]}
                  speed={40}
                  repeat={Infinity}
                />
              ) : hoverId == null ? (
                <TypeAnimation
                  style={{ fontSize: '2rem' }}
                  sequence={sequences[4]}
                  speed={40}
                  repeat={Infinity}
                />
              ) : (
                <div style={{ fontSize: '2rem' }}></div>
              )
            }
          </motion.h2>
          <motion.p 
          variants={fadeIn('up',0.4)} 
          initial='hidden' 
          animate='show' 
          exit='hidden'
          className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
            {
              hoverId == 0 ? (
                <TypeAnimation
                  style={{ whiteSpace: 'pre-line', height: '195px', display: 'block', fontSize: '1.25rem' }}
                  sequence={sequences1[0]}
                  speed={95}
                  repeat={Infinity}
                />
              ) : hoverId == 1 ? (
                <TypeAnimation
                  style={{ fontSize: '1rem' }}
                  sequence={sequences1[1]}
                  speed={40}
                  repeat={Infinity}
                />
              ) : hoverId == 2 ? (
                <TypeAnimation
                  style={{ fontSize: '1rem' }}
                  sequence={sequences1[2]}
                  speed={40}
                  repeat={Infinity}
                />
              ) : hoverId == 3 ? (
                <TypeAnimation
                  style={{ fontSize: '1rem' }}
                  sequence={sequences1[3]}
                  speed={40}
                  repeat={Infinity}
                />
              ) : hoverId == null ? (
                <TypeAnimation
                  style={{ whiteSpace: 'pre-line', height: '195px', display: 'block', fontSize: '1rem' }}
                  sequence={sequences1[4]}
                  speed={95}
                  repeat={Infinity}
                />
              ) : (
                <div style={{ fontSize: '1rem' }}></div>
              )
            }
          </motion.p>
        </div>
        <motion.div
        variants={fadeIn('down',0.6)} 
        initial='hidden' 
        animate='show' 
        exit='hidden'
        className='w-full xl:max-w-[65%]'>
        <WorkSlider changeSequence={changeSequence}/>
        </motion.div>
      </div>
    </div>
    <ParticlesContainer />
    <Bulb />
  </div>
  );
};

export default Services;
