import Image from "next/image";

import profile from "@/public/images/profile.png";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="flex mx-10 xl:mx-30 2xl:mx-60 h-full ">
      {/* Heading */}
      <div className="flex flex-col gap-2 w-full mt-[15%]">
        <h1 className="text-4xl font-bold">Hello, Andreas here!</h1>
        <p className="text-xs">I am a frontend developer</p>
        <Button variant="super" className="w-fit mt-4 hover:cursor-pointer">
          Contact me
        </Button>
      </div>
      {/* Foto */}
      <div className="w-full xl:-ml-20">
        <Image
          src={profile}
          alt="profile"
          className="w-[300px] xl:w-[400px] object-scale-down saturate-0 hover:saturate-30 duration-300"
        />
      </div>
    </div>
  );
};
