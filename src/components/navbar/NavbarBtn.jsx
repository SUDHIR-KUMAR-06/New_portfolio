import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  const handleDownload = () => {
    window.open("/Sudhir_kumar_resume.pdf", "_blank");
  };
  return (
    <button
      className=" px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
      onClick={handleDownload}
    >
      Download CV
    </button>
  );
};

export default NavbarBtn;
