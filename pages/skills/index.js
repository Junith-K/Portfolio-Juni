import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import {motion} from 'framer-motion';
import ParticlesContainer from '../../components/ParticlesContainer';
import {fadeIn} from '../../variants';
import { Cloud, renderSimpleIcon } from 'react-icon-cloud';
import icons_data from '../../public/svg';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';


const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      zIndex: "1"
    },
  },
  options: {
    clickToFront: 500,
    depth: 1,
    imageScale: 2,
    initial: [0.1, -0.1],
    outlineColour: "#fff",
    reverse: true,
    tooltip: "native",
    tooltipDelay: 0,
    wheelZoom: true, 
    shuffleTags: true,
    freezeDecel: true
  },
};

const renderCustomIcon = (icon, bg) => {
  return renderSimpleIcon({
    icon: icon,
    minContrastRatio: 0,
    bgHex: bg,
    size: 42,
    fallbackHex: '#fff',
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
}; 


const Services = () => {
  const [cloudIcons, setCloudIcons] = useState([])
  useEffect(()=>{
    setCloudIcons(icons_data.map((i) => renderCustomIcon(i, '#000')))
  },[])

  return (
  <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles />
    <ParticlesContainer />  
    <div className='container z-20 mx-auto'>
      <div className='flex flex-row max-sm:flex-col gap-x-8'>
        <div className='text-center flex xl:w-[40vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <motion.h2 
          variants={fadeIn('up',0.2)} 
          initial='hidden' 
          animate='show' 
          exit='hidden' 
          className='h2 xl:mt-8 text-accent  font-bold text-left'>
            <TypeAnimation
              sequence={[
                150,
                'Technical Prowess.',
                150
              ]}
              speed={10}
              repeat={Infinity}
              className='text-[2rem] max-sm:text-xl'
            />
          </motion.h2>
          <motion.p 
          variants={fadeIn('up',0.4)} 
          initial='hidden' 
          animate='show' 
          exit='hidden'
          className='mb-4 max-w-[500px] lg:mx-0 text-justify'>
            <TypeAnimation
              style={{ whiteSpace: 'pre-line', margin: '0 0 1em 0', display: 'block', color:"white" }}
              sequence={[
                150,
                'As a software engineer, I bring a diverse set of technical skills and expertise to the table. My proficiency spans both front-end and back-end development, allowing me to craft comprehensive solutions for a wide range of projects. Here are some of the key skills that define my capabilities.',
                150
              ]}
              speed={99}
              repeat={Infinity}
              className='text-[1rem] max-md:text-[0.60rem]'
            />
          </motion.p>
        </div>
        <motion.div 
        variants={fadeIn('down',0.6)} 
        initial='hidden' 
        animate='show' 
        exit='hidden'
        className='w-full xl:max-w-[55%] max-md:w-[50%] max-sm:w-[65%] self-center flex justify-center items-center z-30'>
          <Cloud {...cloudProps}>
              {cloudIcons} 
          </Cloud>
        </motion.div>
      </div>
    </div>
    <Bulb />  
  </div>
  );
};

export default Services;
