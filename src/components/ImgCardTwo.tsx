import Image from "next/image";

const ImgCardTwo = ({ images }: { images: string[] }) => {
  return (
    <div className="relative md:pl-28 w-full h-full mx-auto flex items-center justify-center overflow-hidden">
      {images?.map((img, i) => (
        <div
          key={i}
          className="absolute mx-auto transition-all duration-500 ease-in-out hover:translate-x-12 hover:rotate-6 group"
          style={{
            zIndex: images.length - i,
            transform: `scale(${1 - i * 0.05}) translateX(${-i * 100}px)`,
          }}
        >
          <div className="relative rounded-[2rem] overflow-hidden border-[6px] ring ring-white-pm/70 border-gray-200/20">
            <Image
              src={`/${img}`}
              alt={`Image ${i + 1}`}
              width={450}
              height={450}
              className="object-cover w-auto h-[450px] rounded-[2rem] transition-transform duration-500 ease-in-out group-hover:scale-110"
              style={{
                maxHeight: "calc(100vh - 200px)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImgCardTwo;
