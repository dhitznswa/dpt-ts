"use client";

import React, { useContext, createContext, useState } from "react";

interface SidebarContextType {
  isOpen: boolean;
  setStatus: (status: boolean) => void;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const setStatus = (status: boolean) => setIsOpen(status);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar, setStatus }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};
