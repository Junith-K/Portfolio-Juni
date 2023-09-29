import React, {useState} from "react";
import {FaHtml5, FaCss3, FaJs, FaJava, FaReact, FaPython, } from 'react-icons/fa';
import { SiLeetcode, SiHackerearth, SiHackerrank, SiCodechef, SiCodeforces } from "react-icons/si";
import {SiNextdotjs, SiTailwindcss, SiMongodb} from 'react-icons/si';
import {TbSql} from 'react-icons/tb';
import Circles from '../../components/Circles';
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';
import ParticlesContainer from "../../components/ParticlesContainer";
import Bulb from "../../components/Bulb";
import { FcGoogle } from "react-icons/fc";
/* eslint-disable react/jsx-key */
export const aboutData = [
  {
    title: 'education',
    info: [
      {
        title: "B.Tech in Electronics and Communication",
        stage: "IIIT Sri City"
      },
      {
        title: 'MPC',
        stage: "FIITJEE, Visakhapatnam"
        // icons: [<FaJava />, <FaPython/>, <TbSql/>],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Runner up in Speed UI Hackathon',
        stage: 'November 2022',
      },
      {
        title: 'Solved more than 300 DSA Questions',
        icons: [<SiLeetcode/>, <SiHackerearth/>, <SiHackerrank/>, <SiCodechef/>,<SiCodeforces/>]
      },
    ],
  },
  {
    title: 'extracurricular',
    info: [
      // {
      //   title: 'UX/UI Designer - XYZ Company',
      //   stage: '2012 - 2023',
      // },
      // {
      //   title: 'Web Developer - ABC Agency',
      //   stage: '2010 - 2012',
      // },
       {
        title: 'Google Student Developer Club',
        stage: 'Web Development Core 2023 - ',
        icons: [<FcGoogle/>]
      },
      {
        title: 'IOTA',
        stage: 'Design Team Lead 2022'
        // icons: [<FcGoogle/>]
      },
    ],
  },
  {
    title: 'implant Training',
    info: [
      // {
      //   title: 'Web Development - ABC University, LA, CA',
      //   stage: '2011',
      // },
      // {
      //   title: 'Computer Science Diploma - AV Technical Institute',
      //   stage: '2009',
      // },
      {
        title: 'MD Info-Tech Solutions, Erode',
        stage: '2020',
      },
    ],
  },
];
/* eslint-enable react/jsx-key */
const About = () => {
  const [index, setIndex]= useState(0);
  console.log(index);
  return (
  <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    <Circles/>
    <ParticlesContainer />
    <div className="w-[1200px] h-full absolute right-0 bottom-0">
      <div className="bg-none xl:bg-explosion animate-pulse duration-75 xl:bg-cover xl:bg-right 
      xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
        </div>
        <motion.div 
        variants={fadeIn("up",0.5)}
        initial='hidden'
        animate='show'
        exit='hidden'
        transition={{duration: 1, ease: 'easeInOut'}}
        className="w-full h-full max-w-[480px] max-h-[562px] absolute -bottom-20 lg:right-[10%]">
        </motion.div>
    </div>
    {/* <motion.div 
    variants={fadeIn('right',0.2)} 
    initial='hidden' 
    animate='show' 
    exit='hidden'
    className="hidden xl:flex absolute bottom-0 -left-[370px]">
    <Avatar />
    </motion.div> */}
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
      <div className="flex-1 flex flex-col justify-center z-40">
        <div>
        <motion.h2 className="h2"
        variants={fadeIn('right',0.2)} 
        initial='hidden' 
        animate='show' 
        exit='hidden'>The web development</motion.h2> 
        <motion.p className="text-2xl"
        variants={fadeIn('right',0.4)} 
        initial='hidden' 
        animate='show' 
        exit='hidden'>is a <span className="text-accent">never-ending adventure</span>, 
        with new challenges and opportunities awaiting at every turn.</motion.p>
        </div>
      </div>
      <motion.div 
      variants={fadeIn('left',0.3)} 
      initial='hidden' 
      animate='show' 
      exit='hidden'
      className="flex flex-col w-full xl:max-w-[48%] h-[60%] z-40">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, itemIndex)=>{
            return (
             <div key={itemIndex} className={`cursor-pointer ${index===itemIndex &&
            'text-accent after-[100%] after:bg-accent after:transition-all after:duration-300'
            } cursor-pointer capitalize xl:text-lg relative after:w-8
             after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
             onClick={()=>setIndex(itemIndex)}> 
              {item.title}
              </div>
            );
          })}
        </div>
        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
          {aboutData[index].info.map((item,itemIndex)=>{
            return (
              <div key={itemIndex} className="flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">    
                {item.icons?.map((icon)=>{
                  
                  return (/* eslint-disable react/jsx-key */
                    <div className="text-2xl hover:text-white/100">{icon}</div>
                 /* eslint-enable react/jsx-key */ )
                })}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div> 
    </div>
    <Bulb/>
  </div>
  );
};

export default About;
