const Moto = (props: any) => {
  const { children, color } = props;
  return (
    <>
      <div className="w-9/12 sm:w-9/12  mx-auto flex justify-center p-16">
        <p className={`text-center text-3xl ${color} font-bold`}>{children}</p>
      </div>
    </>
  );
};

export default Moto;
