import penguin from "../public/penguin.gif";
import Image from "next/image";
const ImageSide = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-1/2">
        <Image src={penguin} />
      </div>
    </div>
  );
};

export default ImageSide;
