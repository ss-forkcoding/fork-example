import { COMMON_UI, UI_CATEGORIES } from "@/constants";
import Link from "next/link";
import React from "react";
import SidebarLink from "./sidebar-link";

const SideBar = () => {
  return (
    <aside className="w-[360px] min-h-screen pt-10 border px-6 border-slate-200 border-collapse overflow-scroll space-y-5">
      {UI_CATEGORIES.map((category, idx) => (
        <section key={category.id} className="flex flex-col gap-3">
          <div>
            <h2 className="text-base font-medium text-slate-700">
              {category.label}
            </h2>
          </div>
          <ul className="space-y-1.5">
            {COMMON_UI.filter((ui) => ui.id === category.id).map((ui, idx) => (
              <li key={ui.label}>
                <SidebarLink href={`/ui${ui.href}`} label={ui.label} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </aside>
  );
};

export default SideBar;
