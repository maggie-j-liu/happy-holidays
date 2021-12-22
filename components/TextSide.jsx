const TextSide = ({ message }) => {
  return (
    <div className="whitespace-pre-wrap p-2 sm:p-4 text-xs sm:text-base w-full h-full prose">
      {message}
    </div>
  );
};

export default TextSide;
