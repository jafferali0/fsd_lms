import React, { createContext, useState } from "react";

const dashScrollContext = createContext();

export default function DashboardScroll({ children }) {
  const [scroll, setScroll] = useState(0);
  return (
    <dashScrollContext.Provider value={{ scroll, setScroll }}>
      {children}
    </dashScrollContext.Provider>
  );
}

export { dashScrollContext };
