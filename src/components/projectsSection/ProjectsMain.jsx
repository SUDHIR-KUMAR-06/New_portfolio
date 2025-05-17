import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Minify URL",
    year: "Mar2025",
    align: "right",
    image: "/New_portfolio/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "Travel Path Planner",
    year: "Sept2022",
    align: "left",
    image: "/New_portfolio/images/website-img-2.webp",
    link: "https://sudhir-kumar-06.github.io/Travel_Path_planner/",
  },
  {
    name: "Meet Up",
    year: "Jan2023",
    align: "right",
    image: "/New_portfolio/images/website-img-3.jpg",
    link: "#",
  },
  // {
  //   name: "Bank of Luck",
  //   year: "May2024",
  //   align: "left",
  //   image: "../../public/images/website-img-4.jpg",
  //   link: "#",
  // },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
