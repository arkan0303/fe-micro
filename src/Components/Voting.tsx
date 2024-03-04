const Voting = (props: any) => {
  const { no, name, persen, background } = props;
  return (
    <>
      <div className="flex justify-center flex-col  items-center mx-auto ">
        <div
          className={`w-full flex  gap-2 px-3 border border-slate-950 mb-3 py-6  rounded-lg ${background}`}
        >
          <div className=" bg-orange-950 border  border-gray-50 p-2 text-white font-bold text-center rounded-lg">
            <h4>No. </h4>
            <h4>Paslon</h4>
            <h4 className="text-2xl">{no}</h4>
          </div>
          <div>
            <h1 className="font-bold text-3xl text-black">{name}</h1>
            <h1 className="font-bold text-3xl">{persen}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Voting;
