import Image from "next/image";

const TopLeftImg = () => {
  return <div className="absolute top-0 left-0 mix-blend-color-dodge w-[200px] xl:w-[400px] opacity-50">
    <Image loading="eager" priority={true} quality={100} src='/top-left-img.png'width={400} height={400} alt='' />
  </div>;
};

export default TopLeftImg;
