"use client";

import { Button } from "@/components/ui/button";
import { LinkNavigation } from "./link-navigation";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-primary/40">
      <div className="flex justify-between my-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Keep in touch</h1>
          <p>
            <Button variant={"link"} className="px-0 ">
              send email
            </Button>
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="font-light">sitemap</h3>
          <ul className="flex flex-col gap-4">
            <LinkNavigation label="home" href="/" />
            <LinkNavigation label="projects" href="/projects" />
            <LinkNavigation label="works" href="/works" />
            <LinkNavigation label="skills" href="/skills" />
          </ul>
        </div>
        <div className="flex flex-col gap-8 xl:mr-40 mr-10">
          <h3 className="font-light">social media</h3>
          <ul className="flex flex-col gap-4">
            <li>instagram</li>
            <li>linkedin</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end py-8">
        <span className="font-normal text-xs">
          {new Date().getFullYear()} &copy; All Rights Reserved
        </span>
        <p className="font-normal text-xs">&nbsp;| Andreas</p>
      </div>
    </footer>
  );
};
