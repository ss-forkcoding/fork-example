"use client";

const Preview = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="bg-white h-[1000px] z-20 relative rounded-3xl px-20 py-16 border-slate-300 border shadow-md mb-52">
      {children}
    </div>
  );
};

export default Preview;
