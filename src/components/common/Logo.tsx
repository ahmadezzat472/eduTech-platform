import { Link } from "react-router";
import EduTechLogo from "@/assets/EduTech_logo.jpg";


const Logo = () => {
  return (
    <div>
      <Link to={`/`}>
        <figure className="w-[40px] md:w-[70px]">
          <img className="img-size" src={EduTechLogo} alt="Logo" />
        </figure>
      </Link>
    </div>
  );
};

export default Logo;
