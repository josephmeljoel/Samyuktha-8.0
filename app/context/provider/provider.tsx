"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { Store } from "../store/store"; // Ensure the path to your store is correct

interface ProvidersProps {
  children: ReactNode; // Type for children prop
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <Provider store={Store}>{children}</Provider>;
};

export default Providers;
