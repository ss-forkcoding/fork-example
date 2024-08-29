import React from "react";

const UIViewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className="h-screen px-24 pt-20 w-full border border-slate-200 overflow-y-scroll prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white"
      id="screenshot-area"
    >
      {children}
    </main>
  );
};

export default UIViewLayout;
