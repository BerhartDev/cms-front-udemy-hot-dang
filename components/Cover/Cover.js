import Image from "next/image";

export const Cover = ({ children, background }) => {
  console.log(background)
  return (
    <div className="h-screen bg-slate-800 relative min-h-[400px] flex justify-center items-center">
      <Image 
      alt="Cover" 
      src={background} 
      fill 
      cover 
      className="mix-blend-soft-light"/>
      {children}
    </div>
  );
};
