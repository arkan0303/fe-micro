import React from "react";

interface CardProps {
  title: string;
  createdAt: Date;
  username: number;
}

const Card: React.FC<CardProps> = ({ title, createdAt, username }) => {
  return (
    <>
      <div className="w-80 h-80 bg-slate-100">
        <img className="w-full" src="images/kpu.png" alt="" />
        <button className="bg-red-700 text-white mt-2 px-4 py-1 ms-4 rounded-md">
          {createdAt.toDateString()} 
        </button>
        <h1 className="font-bold text-2xl ms-4">{title}</h1>
        <p className="ms-4">{username}</p>
      </div>
    </>
  );
};

export default Card;
