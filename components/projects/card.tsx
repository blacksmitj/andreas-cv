import Image from "next/image";
import imageplaceholder from "@/public/images/imageplaceholder.png";

export const Card = () => {
  return (
    <div className="flex flex-col gap-2 hover:cursor-pointer hover:scale-101 duration-300">
      <div className="w-full aspect-video">
        <Image
          src={imageplaceholder}
          alt="imageplaceholder"
          className="w-full saturate-0 hover:saturate-50"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold">Iado Quiz</h3>
        <p>Educational Web App</p>
      </div>
    </div>
  );
};
