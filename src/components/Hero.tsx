import Image from "next/image";
import Button from "./Button";
import Img from "./Img";
import heropic from "../../public/assets/Hero pic.jpg"

const Hero = () => {
  return (
    <div
      className="
    flex
    justify-between
    flex-col
    items-start
    gap-2.5
    mb-10
    w-full
    "
    >
      <div
        className="
      flex
      justify-center
      w-full
      flex-col
      lg:items-center
      md:items-center
      lg:gap-2
      md:gap-2
      gap-5
      py-5
      px-5
      mt-12
      "
      >
        <h4 className="text-base md:text-xl lg:text-2xl lg:text-center md:text-center">
          LET'S REBUILD PAKISTAN TOGETHER WITH THE POWER OF
        </h4>

        <h1 className="text-4xl md:text-5xl lg:text-8xl font-black lg:text-center md:text-center">
          WEB3 AND METAVERSE
        </h1>

        <Button text = "Join The Program Now" link = "https://www.piaic.org"/>

      </div>

      <div>
       <Img src={heropic} alt="Hero Image" />

      </div>
    </div>
  );
};

export default Hero;
