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
    <main className="flex h-screen px-24 pt-10 w-full  border border-slate-200 border-collapse overflow-scroll relative">
      <DotPattern />
      <p className="text-black">{params.ui}</p>
    </main>
  );
};

export default UIViewPages;
