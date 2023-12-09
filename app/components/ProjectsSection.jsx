"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 Description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    git: "/",
    preview: "/",
  },
  {
    id: 2,
    title: "Airbnb Clone",
    description:
      "A simple Airbnb project using ReactJS, Tailwind CSS, Mapbox, Calendar and Date Picker. Type on the search box to look for a place and a date.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    git: "/",
    preview: "/",
  },
  {
    id: 3,
    title: "Velt Managing Platform",
    description:
      "Managing people in organizations is not an easy task. The Velt platform was developed with the purpose of simplifying this responsibility in organizations.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    git: "/",
    preview: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.git}
            previewUrl={project.preview}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
