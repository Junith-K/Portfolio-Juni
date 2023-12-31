import Image from "next/image";
import styles from "../components/styles/navbar.module.css"

export const navData = [
  { name: 'Home', path: '/', icon: '/home.png' },
  { name: 'About', path: '/about', icon: '/about.png' },
  { name: 'Experience', path: '/experience', icon: '/work.png', },
  { name: 'Projects', path: '/projects', icon: '/projects.png' },
  { name: 'Skills', path: '/skills', icon: '/skills.png' },
  { name: 'Contact', path: '/contact', icon: '/contact.png', },
];

import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router =useRouter();
  const pathname = router.pathname;

  return ( 
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0
    mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
    <div className='items-center xl:justify-center flex xl:flex-col justify-between gap-y-6 w-full
    px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
      {navData.map((link, index)=>{
        return<Link className={`${link.path==pathname && styles.discord_active} ${styles.discord_radius} p-3 items-center relative flex group transition-all ease-linear duration-300`}
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
            <Image loading="eager" priority={true} quality={100} width={20} height={20} alt={link.name} src={link.icon}/>
          </div>
          </Link>;
      })
      }
    </div>
  </nav>
);
};

export default Nav;
