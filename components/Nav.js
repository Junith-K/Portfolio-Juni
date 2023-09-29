import {HiHome, HiUser, HiViewColumns, HiRectangleGroup, HiChatBubbleBottomCenterText, HiEnvelope} from 'react-icons/hi2';

export const navData = [
  { name: 'Home', path: '/', icon: '/home.png', icon1: '/home1.png' },
  { name: 'About', path: '/about', icon: '/about.png', icon1: '/about1.png' },
  { name: 'Skills', path: '/skills', icon: '/skills.png', icon1: '/skills1.png' },
  { name: 'Projects', path: '/projects', icon: '/projects.png', icon1: '/projects1.png' },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: '/home.png',
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: '/home.png',
  },
];

import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router =useRouter();
  const pathname = router.pathname;

  return ( 
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0
    mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
    <div className='items-center xl:justify-center flex xl:flex-col justify-between gap-y-10 w-full
    px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
      {navData.map((link, index)=>{
        return<Link className={`${link.path==pathname && 'text-accent'} items-center relative flex group hover:text-accent transition-all duration-300`}
        href={link.path} key={index}>
          <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
            <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
              <div className='text-[12px] leading-none font-semibold capitalize'>
              {link.name}
              </div>
              <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'>
              </div>

            </div>

          </div>
          
          <div>
          <img width={24} height={24} src={link.path==pathname?link.icon1:link.icon}/>
          </div>
          </Link>;
      })
      }
    </div>
  </nav>
);
};

export default Nav;
