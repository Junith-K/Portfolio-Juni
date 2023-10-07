import Image from "next/image";

const Bulb = () => {
  return (
  <div className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 w-[200px] xl:w-[260px]">
    <Image loading="eager" priority={true} quality={100} src={'/bulb.png'} width={260} height={200} alt='' className="h-full w-full"/>
  </div>
  );
};

export default Bulb;
