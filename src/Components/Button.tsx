import { useState } from "react";

const Button = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`relative py-1 px-4 rounded ${
          clicked
            ? "bg-black"
            : "bg-white text-black font-bold hover:bg-blue-700"
        }`}
      >
        {clicked ? (
          <a
            href="/paslon"
            className="inset-0 flex items-center justify-center text-white bg-green-500 rounded-full w-8 h-6"
          >
            A
          </a>
        ) : (
          "Login"
        )}
      </button>
    </>
  );
};

export default Button;
