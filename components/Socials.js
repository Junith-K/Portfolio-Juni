import Link from "next/link";
import {RiGithubFill, RiLinkedinFill, RiInstagramFill, RiTwitterFill, RiDiscordFill} from 'react-icons/ri';
const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://www.linkedin.com/in/junithkumar/'} className="hover:text-accent transition-all duration-300">
      <RiLinkedinFill />
    </Link>
    <Link href={'https://github.com/Junith-K'} className="hover:text-accent transition-all duration-300">
      <RiGithubFill />
    </Link>
    <Link href={'https://instagram.com/juni._.28?igshid=NGVhN2U2NjQ0Yg=='} className="hover:text-accent transition-all duration-300">
      <RiInstagramFill />
    </Link>
    <Link href={'https://twitter.com/juni_wanderer'} className="hover:text-accent transition-all duration-300">
      <RiTwitterFill/>
    </Link>
    <Link href={'https://discordapp.com/users/690883345122328576'} className="hover:text-accent transition-all duration-300">
      <RiDiscordFill />
    </Link>
  </div>
  );
};

export default Socials;
