import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I'm Sudhir a web developer, as a full-stack developer skilled in
        React.js, Node.js, Express.js, and PostgreSQL, I combine technical
        expertise with a passion for secure, scalable solutions. During my
        internship at NIT Durgapur, I enhanced the institution's website backend
        using Django, designing robust authentication systems and optimizing
        PostgreSQL databases to ensure seamless performance for high-traffic
        use. Currently pursuing a Master's in Computer Science, I leverage
        advanced algorithms and software design principles to build full-stack
        applications, from React-powered frontends to Node.js/Express backends
        integrated with relational databases. My work emphasizes security, clean
        architecture, and performance optimization, demonstrated in projects
        like RESTful API development and cross-platform apps with React Native.
        I thrive on merging academic rigor with industry insights to craft
        efficient, user-centric solutions.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
