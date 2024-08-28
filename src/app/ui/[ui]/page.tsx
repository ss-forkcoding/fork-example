"use client";
import Welcome from "@/app/ui/[ui]/_mdx/welcom.mdx";

const UIViewPages = ({
  params,
}: {
  params: {
    ui: string;
  };
}) => {
  return <Welcome />;
};

export default UIViewPages;
