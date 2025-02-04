"use client";

import type React from "react";
import { useHeaderStyleChange } from "@/hooks/use-header-style-change";

interface HeaderStyleWrapperProps {
  children: React.ReactNode;
  style: {
    background: string;
    textColor: string;
    buttonBg: string;
  };
}

const HeaderStyleWrapper: React.FC<HeaderStyleWrapperProps> = ({
  children,
  style,
}) => {
  const ref = useHeaderStyleChange(style);

  return (
    <div ref={ref} data-header-style>
      {children}
    </div>
  );
};

export default HeaderStyleWrapper;
