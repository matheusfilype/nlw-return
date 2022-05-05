import { Camera, CircleNotch } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";

export function LoadingButton() {
  return (
    <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
      <CircleNotch weight="bold" className="w-4 h-4 animate-spin" />
    </div>
  );
}
