import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';
import styles from "../../components/styles/experience.module.css"
import ParticlesContainer from '../../components/ParticlesContainer';
import { SiCss3, SiJavascript, SiRedux, SiReact, SiBootstrap, SiTailwindcss } from "react-icons/si";
import {ImHtmlFive} from "react-icons/im"
import Image from 'next/image';

const item = [
  {
    key: "lawa",
    title: "Lawazia Tech",
    description: "We help global brands with digital products on web, mobile and connected platforms.",
    timeStart: "Jan 2023",
    timeEnd: "Jun 2023",
    image: "/cube.png",
  },
  {
    key: "bill",
    title: "Bill OK",
    description: "BillOK automates invoice management with AI, empowering entrepreneurs to focus on business growth.",
    timeStart: "Jun 2022",
    timeEnd: "Aug 2022",
    image: "/window.png",
  }
]

const Services = () => {
  return (
  <div className='h-full bg-primary/30 py-36 flex items-center justify-center'>
    <Circles />
    <ParticlesContainer />  
    <div className='container min-[960px]:mx-auto mx-10 max-[800px]:mx-5'>
      <div className='flex flex-row max-[960px]:flex-col gap-x-8'>
        <div className='max-[960px]:w-full max-[960px]:text flex w-[35vw] flex-col lg:text-left xl:mb-0 z-40'>
          <motion.h2 
          variants={fadeIn('up',0.2)} 
          initial='hidden' 
          animate='show' 
          exit='hidden' 
          className='text-[2.5rem] max-xl:text-[1.5rem] max-xl:text-center max-[960px]:text-[1.25rem] xl:mt-8 max-md:text-[1rem]'>My Work Experience
          <span className='text-accent'>.</span>
          </motion.h2>
          <motion.p 
          variants={fadeIn('up',0.4)} 
          initial='hidden' 
          animate='show' 
          exit='hidden'
          className='mb-4 min-[960px]:max-w-[400px] max-[960px]:text-[0.9rem] lg:mx-0 text-center max-md:text-[0.6rem]'>
          Navigating the realms of software engineering, I&rsquo;ve honed my skills in crafting efficient and reliable solutions. Join me on a journey through practical experiences and collaborative coding adventures.
          </motion.p>
        </div>
        <motion.div 
        variants={fadeIn('down',0.6)} 
        initial='hidden' 
        animate='show' 
        exit='hidden'
        className='z-40 flex gap-x-5 min-[640px]:gap-x-10'>
          <div className={styles.nftxu} >
            <div className={styles.mainxu}>
              <Image loading="eager" width={500} height={250} quality={100} className={styles.tokenImagexu} src={item[0].image} alt="NFT" />
              <h2 className='pt-1 text-center max-[960px]:text-[0.9rem]'>{item[0].title}</h2>
              <p className={styles.descriptionxu}>{item[0].description}</p>
              <div className={styles.tokenInfoxu}>
                <div className={styles.durationxu}>{item[0].timeStart}</div>
                <div className={styles.durationxu1}>-</div>
                <div className={styles.durationxu}>{item[0].timeEnd}</div>
              </div>
              <hr />
              <div className='flex justify-evenly items-center mt-3'>
                <div className="text-[1.5rem] max-[960px]:text-[1.25rem] hover:text-white/100"><SiReact/></div>
                <div className="text-[1.5rem] max-[960px]:text-[1.25rem] hover:text-white/100"><SiRedux/></div>
                <div className="text-[1.5rem] max-[960px]:text-[1.25rem] hover:text-white/100"><SiJavascript/></div>
                <div className="text-[1.5rem] max-[960px]:text-[1.25rem] hover:text-white/100"><SiTailwindcss/></div>
              </div>
            </div>
          </div>
          <div className={styles.nftxu} >
            <div className={styles.mainxu}>
              <Image loading="eager" width={500} height={250} quality={100} className={styles.tokenImagexu} src={item[1].image} alt="NFT" />
              <h2 className='pt-1 text-center max-[960px]:text-[0.9rem]'>{item[1].title}</h2>
              <p className={styles.descriptionxu}>{item[1].description}</p>
              <div className={styles.tokenInfoxu}>
                <div className={styles.durationxu}>{item[1].timeStart}</div>
                <div className={styles.durationxu1}>-</div>
                <div className={styles.durationxu}>{item[1].timeEnd}</div>
              </div>
              <hr />
              <div className='flex justify-evenly items-center mt-3'>
                <div className="text-[1.5rem] max-[960px]:text-[1.25rem] hover:text-white/100"><ImHtmlFive/></div>
                <div className="text-[1.5rem] max-[960px]:text-[1.25rem] hover:text-white/100"><SiCss3/></div>
                <div className="text-[1.5rem] max-[960px]:text-[1.25rem] hover:text-white/100"><SiReact/></div>
                <div className="text-[1.5rem] max-[960px]:text-[1.25rem] hover:text-white/100"><SiTailwindcss/></div>
                <div className="text-[1.5rem] max-[960px]:text-[1.25rem] hover:text-white/100"><SiBootstrap/></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    <Bulb />
  </div>
  );
};

export default Services;