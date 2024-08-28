"use client";

import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import { useState } from "react";
import html2canvas from "html2canvas";
import { toast } from "sonner";

const ScreenShotButton = () => {
  const [stream, setStream] = useState<MediaStream | undefined>(undefined);

  const handleCapture = () => {
    const element = document.getElementById("screenshot-area");
    if (!element) return;
    html2canvas(element).then((canvas) => {
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "screenshot.png";
      link.href = dataUrl;
      link.click();
      toast.success("스크린샷이 저장되었습니다.");
    });
  };

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={handleCapture}
      asChild
      className="p-2"
    >
      <Camera className="" />
    </Button>
  );
};

export default ScreenShotButton;
