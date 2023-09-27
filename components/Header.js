import Image from "next/image";
import Link from "next/link";
import Socials from '../components/Socials';
import SoundBar from "./SoundBar";
const Header = () => {
  return (
  <header className="absolute w-full z-30 flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <div className="flex justify-center items-center gap-5">
          <Link href={'/'}>
            <Image src={'/logo.png'}
            width={137}
            height={53}
            alt=""
            property={true}/>
          </Link>
          <SoundBar/>
          </div>
          <Socials />
          </div>
    </div>
    </header>
  )
};

export default Header;
