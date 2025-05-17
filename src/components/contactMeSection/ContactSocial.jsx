import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://linkedin.com/in/sudhir-kumar914027/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/SUDHIR-KUMAR-06"
        Icon={FiGithub}
      />
      {/* <SingleContactSocial link="#" Icon={FaInstagram} /> */}
    </div>
  );
};

export default ContactSocial;
