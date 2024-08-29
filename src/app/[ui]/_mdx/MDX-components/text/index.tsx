"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

type Tabs = "display" | "heading" | "paragraph" | "caption";

const TextUI = () => {
  const [selectedTab, setSelectedTab] = useState<Tabs>("display");
  const tabs = ["display", "heading", "paragraph", "caption"];
  const tabContent = {
    display: "매우 큰 텍스트입니다.",
    heading: "제목 등에 쓰이는 텍스트입니다.",
    paragraph: "본문 등에 쓰이는 텍스트입니다.",
    caption: "푸터, 캡션 등에 쓰이는 텍스트입니다.",
  };

  const tabContentStyle = [
    "text-6xl font-bold",
    "text-2xl font-bold",
    "text-base",
    "text-sm",
  ];
  return (
    <Tabs defaultValue="display" className="w-full">
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab}
            value={tab}
            onClick={() => setSelectedTab(tab as Tabs)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab, idx) => (
        <TabsContent key={tab} value={tab}>
          <div
            className={`bg-white rounded-lg shadow-md flex justify-center items-center p-8 ${tabContentStyle[idx]}`}
          >
            {tabContent[tab as Tabs]}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TextUI;
