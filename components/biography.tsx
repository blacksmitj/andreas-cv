import Image from "next/image";
import square from "@/public/images/square.jpg";

export const Biography = () => {
  return (
    <div className="flex">
      <div className="w-1/3 px-8">
        <Image
          src={square}
          alt="profile"
          className="w-full aspect-square object-scale-down saturate-0"
        />
      </div>
      <div className="flex flex-col gap-4 w-2/3">
        <h1 className="text-4xl font-bold text-primary">Continues Learn</h1>
        <p className="leading-relaxed">
          Frontend web developer with several years of freelance experience,
          primarily using React.js along with various modern tech stacks.
          Successfully delivered diverse projects such as company profile
          websites, reporting web applications, and educational quiz platforms.
          Passionate about continuous learning, exploring new tools, and staying
          up-to-date with frontend development trends. Eager to grow
          professionally and take on new, challenging opportunities in the
          frontend space.
        </p>
      </div>
    </div>
  );
};
