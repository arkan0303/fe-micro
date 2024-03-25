import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate(); 
  const handleLoginClick = () => {
    if (!user) {
      navigate("/login");
    }
  };

  return (
    <>

      <span
        onClick={handleLoginClick}
        className="py-1 px-4 rounded bg-white text-black font-bold hover:bg-blue-700 cursor-pointer"
      >
  "Login"
      </span>
    </>
  );
};

export default Button;
