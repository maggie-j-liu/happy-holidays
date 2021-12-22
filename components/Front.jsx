import Branch from "./Branch";

const Front = ({ title }) => {
  return (
    <div className="overflow-hidden relative w-full h-full p-2 sm:p-4">
      <div className="border-red-500 border-4 w-full h-full flex flex-col items-center justify-center">
        <h1 className="font-bold font-script text-3xl sm:text-5xl underline text-red-500 decoration-red-500">
          {title}
        </h1>
      </div>
      <div className="w-1/4 lg:w-48 absolute top-0 left-0 text-teal-800">
        <Branch />
      </div>
      <div className="w-1/3 lg:w-60 absolute bottom-0 left-0 -rotate-45 text-teal-800">
        <Branch />
      </div>
      <div className="w-1/4 lg:w-48 absolute bottom-0 right-0 rotate-180 text-teal-800">
        <Branch />
      </div>
      <div className="w-1/3 lg:w-60 absolute top-0 right-0 rotate-[135deg] text-teal-800">
        <Branch />
      </div>
    </div>
  );
};

export default Front;
