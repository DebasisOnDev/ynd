"use client";
import React, { createContext, ReactNode, useContext } from "react";

type styleType = {
  background: string;
  textColor: string;
  buttonBg: string;
};

type HeaderContextType = {
  headerStyle: styleType;
  setHeaderStyle: (style: styleType) => void;
};

export const HeaderContext = createContext<HeaderContextType>({
  headerStyle: {
    background: "text-sitebg",
    textColor: "text-text-pm",
    buttonBg: "bg-white",
  },
  setHeaderStyle: () => {},
});

export const HeaderContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [headerStyle, setHeaderStyle] = React.useState<styleType>({
    background: "text-sitebg",
    textColor: "text-text-pm",
    buttonBg: "bg-white",
  });

  return (
    <HeaderContext.Provider value={{ headerStyle, setHeaderStyle }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error(
      "useHeaderContext must be used within a HeaderContextProvider"
    );
  }
  return context;
};
