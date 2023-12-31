import Image from 'next/image';
import Link from 'next/link';
import {HiArrowRight} from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
  <div className='mx-auto xl:mx-0 z-20'>
    <Link href={'/projects'}
    className='relative w-[185px] max-sm:w-[150px] max-sm:h-[150px] h-[185px] flex justify-center 
    items-center bg-circleStar bg-cover bg-center bg-no-repeat group'>
      <Image loading="eager" priority={true} quality={100} src={'/rounded-text.png'} width={141} height={148} alt='' 
      className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] max-sm:w-[100px] max-sm:h-[110px]'/>
      <HiArrowRight className='absolute text-4xl hover:w-8'/>
    </Link>
  </div>
  )
};

export default ProjectsBtn;
