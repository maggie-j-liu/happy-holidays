const Front = ({ title }) => {
  return (
    <div className="w-full h-full p-2 sm:p-4">
      <div className="border-red-400 border-2 w-full h-full flex flex-col items-center justify-center">
        <h1 className="font-script text-5xl underline text-red-500 decoration-red-500">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Front;
