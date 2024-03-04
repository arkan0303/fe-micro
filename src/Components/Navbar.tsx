import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = (props: any) => {
  const { header, voting, partai, paslon, children } = props;
  return (
    <>
      <div className="flex justify-between p-3 px-10 bg-black text-white items-center">
        <div className="flex items-center gap-4">
          <img className="w-8" src="images/logo.png" alt="" />
          <h3 className="font-bold">{header}</h3>
        </div>
        <div className="flex items-center gap-4">
          <Link className="border-r-2 pr-4" to={partai}>
            Partai
          </Link>
          <Link className="border-r-2 pr-4" to={paslon}>
            Paslon
          </Link>
          <Link className="border-r-2 pr-4" to={voting}>
            {children}
          </Link>
          <Button />
        </div>
      </div>
    </>
  );
};

export default Navbar;
