import Preview from "@/components/custom/preview";
import DotPattern from "@/components/magicui/dot-pattern";
import React from "react";

const UIViewPages = ({
  params,
}: {
  params: {
    ui: string;
  };
}) => {
  return (
    <main className="max-h-screen px-24 pt-20 w-full  border border-slate-200 overflow-y-scroll relative">
      <DotPattern className="z-10 h-screen" />
      <Preview>
        <p className="text-black">{params.ui}</p>
      </Preview>
    </main>
  );
};

export default UIViewPages;
