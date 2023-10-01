import Link from "next/link";
import {RiGithubFill, RiLinkedinFill, RiInstagramFill, RiDiscordFill} from 'react-icons/ri';
import {TbFileCv} from 'react-icons/tb'
const Socials = () => {
  return (
  <div className="flex gap-x-5 max-md:gap-x-3 text-xl">
    <Link href={'https://drive.google.com/file/d/1LQoGXfPWFCU4vheV0o5_58vwmJVwFnQd/view'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
      <TbFileCv />
    </Link>
    <Link href={'https://www.linkedin.com/in/junithkumar/'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
      <RiLinkedinFill />
    </Link>
    <Link href={'https://github.com/Junith-K'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
      <RiGithubFill />
    </Link>
    <Link href={'https://www.instagram.com/juni._.28/'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
      <RiInstagramFill />
    </Link>
    <Link href={'https://discordapp.com/users/690883345122328576'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
      <RiDiscordFill />
    </Link>
  </div>
  );
};

export default Socials;
