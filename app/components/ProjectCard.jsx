import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "100% 100%" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-white"
          >
            <CodeBracketIcon className="h-10 w-10 text-white absolute top-1/2 left-1/2 transforme -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-white"
          >
            <EyeIcon className="h-10 w-10 text-white absolute top-1/2 left-1/2 transforme -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="rounded-b-xl mb-3 bg-[#ADB7BE] py-6 px-4">
        <h5 className="font-xl font-semibold mb-2">{title}</h5>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
