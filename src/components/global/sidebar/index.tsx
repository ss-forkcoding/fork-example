import { UI_CATEGORIES } from "@/constants";
import React from "react";

const SideBar = () => {
  return (
    <aside className="w-[360px] min-h-screen pt-10 border border-slate-200 border-collapse overflow-scroll">
      {UI_CATEGORIES.map((category, idx) => (
        <section key={category.id}>
          <h2 className="text-base font-medium">{category.label}</h2>
        </section>
      ))}
    </aside>
  );
};

export default SideBar;
