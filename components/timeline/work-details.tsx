import { Circle } from "lucide-react";

export const WorkDetails = () => {
  return (
    <li className="group flex flex-col ml-5 w-full mx-auto items-start justify-between">
      <Circle
        fill="currentColor"
        className="absolute left-1 pt-1 group-hover:animate-ping duration-100"
      />
      <div className="flex flex-col space-y-2">
        <h3 className="font-black">Motion Graphic Designer</h3>
        <p className="italic">PT. Merdeka Jaya</p>
        <p>17 Januari | sekarang</p>
        <br />
        <p>
          As a motion graphic designer and video editor I am tasked with
          creating several products such as bumpers, explainers, editing video
          profiles, softnews,lowerthird etc.
        </p>
      </div>
    </li>
  );
};
