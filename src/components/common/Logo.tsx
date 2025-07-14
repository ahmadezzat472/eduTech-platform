import { Link } from "react-router";

const Logo = () => {
  return (
    <div>
      <Link to={`/`}>
        {/* <figure className="w-[150px] md:w-[180px]">
          <img className="img-size" src="/resize-crop-logo.png" alt="Logo" />
        </figure> */}
        <h1 className="text-2xl font-bold">Logo</h1>
      </Link>
    </div>
  );
};

export default Logo;
