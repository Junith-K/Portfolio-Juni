import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';
import styles from "../../components/styles/experience.module.css"
import ParticlesContainer from '../../components/ParticlesContainer';
import { SiCss3, SiJavascript, SiRedux, SiReact, SiBootstrap, SiTailwindcss } from "react-icons/si";
import {ImHtmlFive} from "react-icons/im"

const experience = [
  {
    title: "Lawazia Tech",
    description: "We help global brands with digital products on web, mobile and connected platforms.",
    timeStart: "Jan 2023",
    timeEnd: "Jun 2023",
    image: "https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    icons: [<SiReact/>, <SiRedux/>, <SiJavascript/>, <SiTailwindcss/>]
  },
  {
    title: "Bill OK",
    description: "BillOK automates invoice management with AI, empowering entrepreneurs to focus on business growth.",
    timeStart: "Jun 2022",
    timeEnd: "Aug 2022",
    image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    icons: [<ImHtmlFive/>, <SiCss3/>, <SiReact/>, <SiJavascript/>, <SiBootstrap/>]
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
          Navigating the realms of software engineering, I've honed my skills in crafting efficient and reliable solutions. Join me on a journey through practical experiences and collaborative coding adventures.
          </motion.p>
        </div>
        <motion.div 
        variants={fadeIn('down',0.6)} 
        initial='hidden' 
        animate='show' 
        exit='hidden'
        className='z-40 flex gap-x-5 min-[640px]:gap-x-10'>
        {experience.map((item,index)=>{
          return <div key={index} className={styles.nftxu} >
            <div className={styles.mainxu}>
              <img className={styles.tokenImagexu} src={item.image} alt="NFT" />
              <h2 className='pt-1 text-center max-[960px]:text-[0.9rem]'>{item.title}</h2>
              <p className={styles.descriptionxu}>{item.description}</p>
              <div className={styles.tokenInfoxu}>
                <div className={styles.durationxu}>{item.timeStart}</div>
                <div className={styles.durationxu1}>-</div>
                <div className={styles.durationxu}>{item.timeEnd}</div>
              </div>
              <hr />
              <div className='flex justify-evenly items-center mt-3'>
                {item.icons?.map((icon, index1)=>{
                    return (
                      <div key={`${index1}55`} className="text-[1.5rem] max-[960px]:text-[1.25rem] hover:text-white/100">{icon}</div>
                   )
                })}
              </div>
            </div>
          </div>
        })}
        </motion.div>
      </div>
    </div>
    <Bulb />
  </div>
  );
};

export default Services;