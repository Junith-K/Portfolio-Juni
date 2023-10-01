'use client'
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import {motion} from 'framer-motion';
import {fadeIn, fadeIn1} from '../../variants';
import { TypeAnimation } from 'react-type-animation';
import React, { useEffect, useState } from 'react';
import ParticlesContainer from '../../components/ParticlesContainer';
import style from '../../components/styles/techstack.module.css'

const technologies = [
  {
    stack: [0,1,2,3,"null"],
    name: 'HTML 5',
    icon: '/html.svg',
  },
  {
    stack: [0,1,2,3,"null"],
    name: 'CSS 3',
    icon: '/css.svg',
  },
  {
    stack: [0,1,3,"null"],
    name: 'JavaScript',
    icon: '/js.svg',
  },
  {
    stack: [0,1,3,"null"],
    name: 'React JS',
    icon: '/reactjs.svg',
  },
  {
    stack: [0,1,"null"],
    name: 'MongoDB',
    icon: '/mongodb-original.svg',
  },
  {
    stack: [0,1,"null"],
    name: 'Node JS',
    icon: '/nodejs.svg',
  },
  {
    stack: [0,1,3,"null"],
    name: 'Redux Toolkit',
    icon: '/redux.svg',
  },
  {
    stack: ["null"],
    name: 'Java',
    icon: '/java.svg',
  },
  {
    stack: [0,1,3,"null"],
    name: 'Tailwind CSS',
    icon: '/tailwind.svg',
  },
  {
    stack: ["null"],
    name: 'TypeScript',
    icon: '/typescript.svg',
  },
  {
    stack: [0,1,2,3,"null"],
    name: 'Git',
    icon: '/git.svg',
  },
  {
    stack: [1,"null"],
    name: 'Next JS',
    icon: '/next-js.svg',
  },
  {
    stack: ["null"],
    name: 'Postgre SQL',
    icon: '/postgresql.svg',
  },
  {
    stack: ["null"],
    name: 'Python',
    icon: '/python.svg',
  },
];

const sequences = [
  [
    150,
    'Scrollon.',
    150,
  ],
  [
    150,
    'Portfolio.',
    150,
  ],
  [
    150,
    'Ash Ketchum CSS.',
    150,
  ],
  [
    150,
    'WeatherJS.',
    150,
  ],
  [
    150,
    'Projects.',
    150,
  ]
];

const sequences1 = [
  [
    `Full-Stack Social Media platform with advanced post management and user interaction features such as intuitive UI, robust search, and personalized profiles.`,
    150,
  ],
  [
    'My portfolio is a showcase of my coding journey, demonstrating my passion for creating impactful solutions through software development.'
    ,
    150,
  ],
  [
    `Explore my HTML and CSS rendition of Ash Ketchum, the Pokémon Trainer. This project showcases my attention to detail, faithfully recreating Ash's appearance without external images or SVGs.`,
    150,
  ],
  [
    'Discover weather like never before with my JavaScript Weather App. Its sleek UI showcases real-time conditions using captivating icons and images, providing a visually stunning way to stay informed about the weather.',
    150,
  ],
  [
    'Step into the realm of software development and discover the stories behind my projects. From building responsive user interfaces to optimizing server-side operations, this portfolio is your gateway to the intricate world of coding.',
    150,
  ]
];


const Services = () => {
  const [stack, setStack] = useState("null");
  const [selectedSeq, setSelectedSeq] = useState([
    'ss.',
    150,
  ]);
  const [hoverId, setHoverId] = useState(null);
  const [hoverIdDup, setHoverIdDup] = useState(null);
  const changeSequence = (hoveredItemId) => {
    console.log(hoveredItemId)
    const selectedSequence = hoveredItemId != null ? sequences[hoveredItemId+1] : selectedSeq;
    console.log(selectedSequence)
    if(selectedSequence!=selectedSeq){
      setStack(hoveredItemId!=null?hoveredItemId:"null")
      setSelectedSeq(selectedSequence);
      setHoverId("f");
      setHoverIdDup(hoveredItemId);
    }
  };
  const changeSequence1 = (hoveredItemId) => {
    console.log(hoveredItemId)
    const selectedSequence = hoveredItemId != null ? sequences[hoveredItemId+1] : sequences[0];
    console.log(selectedSequence)
    if(selectedSequence!=selectedSeq){
      setStack(hoveredItemId!=null?hoveredItemId:"null")
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
  <div className='h-full bg-primary/30 flex md:justify-evenly'>
    <Circles />
    <div className='container mx-auto z-10 max-xl:mx-0 py-36 max-lg:py-20 max-lg:h-full'>
      <div className='flex flex-row gap-x-8 max-xl:items-center max-lg:flex-col max-lg:h-full'>
        <div className='text-center max-lg:w-full max-xl:w-[500px] flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 '>
          <motion.h2 
          variants={fadeIn('up',0.2)} 
          initial='hidden' 
          animate='show' 
          exit='hidden' 
          className='h3 text-accent font-bold flex items-center'>
            {
              hoverId == 0 ? (
                <>
            <img onClick={()=>{changeSequence1(null)}} className={style.undo} src='/undo.svg'/>
                <TypeAnimation
                  sequence={sequences[0]}
                  speed={10}
                  repeat={Infinity}
                  className=' text-[2rem] max-lg:text-[1.5rem]'
                />
                </>
              ) : hoverId == 1 ? (
                <>
            <img onClick={()=>{changeSequence1(null)}} className={style.undo} src='/undo.svg'/>
                <TypeAnimation
                  sequence={sequences[1]}
                  speed={10}
                  repeat={Infinity}
                  className=' text-[2rem] max-lg:text-[1.5rem]'
                />
                </>
                ) : hoverId == 2 ? (
                <>
            <img onClick={()=>{changeSequence1(null)}} className={style.undo} src='/undo.svg'/>
                <TypeAnimation
                  sequence={sequences[2]}
                  speed={10}
                  repeat={Infinity}
                  className=' text-[2rem] max-lg:text-[1.5rem]'
                />
                </>
              ) : hoverId == 3 ? (
                <>
            <img onClick={()=>{changeSequence1(null)}} className={style.undo} src='/undo.svg'/>
                <TypeAnimation
                  sequence={sequences[3]}
                  speed={10}
                  repeat={Infinity}
                  className=' text-[2rem] max-lg:text-[1.5rem]'
                />
                </>
                ) : hoverId == null ? (
                <TypeAnimation
                  sequence={sequences[4]}
                  speed={10}
                  repeat={Infinity}
                  className=' text-[2rem] max-lg:text-[1.5rem]'
                />
              ) : (
                <div style={{ fontSize: '2rem' }}></div>
              )
            }
          </motion.h2>
          <motion.div
          variants={fadeIn('up',0.4)} 
          initial='hidden' 
          animate='show' 
          exit='hidden'
          className='mb-4 w-[400px] max-lg:mx-0 max-lg:w-full mx-auto lg:mx-0 text-justify'>
            {
              hoverId == 0 ? (
                <>
                  <TypeAnimation
                    style={{ whiteSpace: 'pre-line', margin: '0 0 1em 0', display: 'block' }}
                    sequence={sequences1[0]}
                    speed={99}
                    repeat={Infinity}
                  className='text-[1rem] max-lg:text-[0.85rem]'
                  />
                  <motion.div className={style.tech_container}>
                  {technologies.filter((technology) => technology.stack.includes(stack)).map((tech, index) => (
                    <motion.abbr
                      initial="hidden"
                      whileInView="show"
                      variants={fadeIn1('up', '', index * 0.15, 0.75)}
                      title={tech.name}
                      key={tech.name}
                      className={style.tech}
                    >
                      <img className={style.tech_img} src={tech.icon} alt={tech.name} loading="lazy" />
                    </motion.abbr>
                  ))}
                </motion.div>
                </>
              ) : hoverId == 1 ? (
                <>
                  <TypeAnimation
                    style={{ whiteSpace: 'pre-line', margin: '0 0 1em 0', display: 'block' }}
                    sequence={sequences1[1]}
                    speed={99}
                    repeat={Infinity}
                  className='text-[1rem] max-lg:text-[0.85rem]'
                  />
                  <motion.div className={style.tech_container}>
                  {technologies.filter((technology) => technology.stack.includes(stack)).map((tech, index) => (
                    <motion.abbr
                      initial="hidden"
                      whileInView="show"
                      variants={fadeIn1('up', '', index * 0.15, 0.75)}
                      title={tech.name}
                      key={tech.name}
                      className={style.tech}
                    >
                      <img className={style.tech_img} src={tech.icon} alt={tech.name} loading="lazy" />
                    </motion.abbr>
                  ))}
                </motion.div>
                </>
                ) : hoverId == 2 ? (
                <>
                  <TypeAnimation
                    style={{ whiteSpace: 'pre-line', margin: '0 0 1em 0', display: 'block' }}
                    sequence={sequences1[2]}
                    speed={99}
                    repeat={Infinity}
                  className='text-[1rem] max-lg:text-[0.85rem]'
                  />
                  <motion.div className={style.tech_container}>
                  {technologies.filter((technology) => technology.stack.includes(stack)).map((tech, index) => (
                    <motion.abbr
                      initial="hidden"
                      whileInView="show"
                      variants={fadeIn1('up', '', index * 0.15, 0.75)}
                      title={tech.name}
                      key={tech.name}
                      className={style.tech}
                    >
                      <img className={style.tech_img} src={tech.icon} alt={tech.name} loading="lazy" />
                    </motion.abbr>
                  ))}
                </motion.div>
                </>
              ) : hoverId == 3 ? (
                <>
                  <TypeAnimation
                    style={{ whiteSpace: 'pre-line', margin: '0 0 1em 0', display: 'block' }}
                    sequence={sequences1[3]}
                    speed={99}
                    repeat={Infinity}
                  className='text-[1rem] max-lg:text-[0.85rem]'
                  />
                  <motion.div className={style.tech_container}>
                  {technologies.filter((technology) => technology.stack.includes(stack)).map((tech, index) => (
                    <motion.abbr
                      initial="hidden"
                      whileInView="show"
                      variants={fadeIn1('up', '', index * 0.15, 0.75)}
                      title={tech.name}
                      key={tech.name}
                      className={style.tech}
                    >
                      <img className={style.tech_img} src={tech.icon} alt={tech.name} loading="lazy" />
                    </motion.abbr>
                  ))}
                </motion.div>
                </>
              ) : hoverId == null ? (
                <>
                <TypeAnimation
                  style={{ whiteSpace: 'pre-line', margin: '0 0 1em 0', display: 'block' }}
                  sequence={sequences1[4]}
                  speed={99}
                  repeat={Infinity}
                  className='text-[1rem] max-lg:text-[0.85rem]'
                />
                 <motion.div className={style.tech_container}>
                  {technologies.filter((technology) => technology.stack.includes(stack)).map((tech, index) => (
                    <motion.abbr
                      initial="hidden"
                      whileInView="show"
                      variants={fadeIn1('up', '', 1 * 0.15, 0.75)}
                      title={tech.name}
                      key={tech.name}
                      className={style.tech}
                    >
                      <img className={style.tech_img} src={tech.icon} alt={tech.name} loading="lazy" />
                    </motion.abbr>
                  ))}
                </motion.div>
                </>
              ) : (
                <div style={{ fontSize: '1rem' }}></div>
              )
            }
          </motion.div>
        </div>
        <motion.div
        variants={fadeIn('down',0.6)} 
        initial='hidden' 
        animate='show' 
        exit='hidden'
        className='w-[65%] max-lg:w-[100%] md:w-[65%] h-auto'>
        <WorkSlider changeSequence={changeSequence}/>
        </motion.div>
      </div>
    </div>
    <Bulb />
    <ParticlesContainer />
  </div>
  );
};

export default Services;
