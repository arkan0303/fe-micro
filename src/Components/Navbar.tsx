import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between p-3 px-10 bg-black text-white items-center">
        <div className="flex items-center gap-4">
          <img className="w-8" src="images/logo.png" alt="" />
          <h3 className="font-bold">PEMILU PRESIDEN DUMBWAYS.ID</h3>
        </div>
        <div className="flex items-center gap-4">
          <a className="border-r-2 pr-4" href="">
            Partai
          </a>
          <a className="border-r-2 pr-4" href="">
            Paslon
          </a>
          <a className="border-r-2 pr-4" href="">
            Voting
          </a>
          <Button />
        </div>
      </div>
    </>
  );
};

export default Navbar;
