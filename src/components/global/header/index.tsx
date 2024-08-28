"use client";

import React from "react";
import { ModeToggle } from "../theme-toggle";
import Image from "next/image";
import ScreenShotButton from "../screenshot";
import CustomToolTip from "@/components/custom/tooltip";

const Header = () => {
  return (
    <nav className="flex justify-between items-center mx-auto px-8 py-3 border-2 border-slate-100 max-w-[1280px] min-w-[740px] shadow-md shadow-orange-500/20 rounded-full">
      <Image
        width={400}
        height={400}
        alt="logo"
        src="/logo.png"
        className="size-6"
      />
      <h1 className="font-medium text-lg">Fork Coding UI Examples</h1>
      <aside className="flex justify-center items-center gap-2">
        <CustomToolTip content="화면을 캡처하여 저장합니다">
          <ScreenShotButton />
        </CustomToolTip>
        <ModeToggle />
      </aside>
    </nav>
  );
};

export default Header;
