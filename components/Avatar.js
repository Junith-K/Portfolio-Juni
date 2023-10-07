import Image from "next/image";

const Avatar = () => {
  return (
  <div className="hidden xl:flex xl:max-w-none">
    <Image loading="eager" priority={true} quality={100} src={'/human.png'} width={480} height={560} alt=""
    className="translate-z-0 w-full h-full"/>
    </div>
  )
};

export default Avatar;
