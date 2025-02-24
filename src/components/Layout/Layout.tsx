"use client";

import React, { useEffect, useState } from "react";
import "@/components/Layout/Layout.css";

type LayoutProps = {
  children: React.ReactNode;
  mode?: "sidebar" | "header" | "fullscreen";
  maxWidth?: "sm" | "md" | "lg" | "xl";
  className?: string;
  title?: string;
  subtitle?: string;
  sidebarContent?: React.ReactNode;
  headerContent?: React.ReactNode;
  style?: React.CSSProperties;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  mode = "header",
  maxWidth = "xl",
  className = "",
  title,
  subtitle,
  sidebarContent,
  headerContent,
  style,
}) => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const recomputedWidthSize = (mode: string): number => {
    let result = 0;
    switch (mode) {
      case "header":
      case "fullscreen":
        result = width;
      case "sidebar":
        result = width * (1 / 3);
    }
    return result;
  };

  return (
    <div className={`layout ${mode} ${className}`} style={style}>
      {mode === "header" && (
        <header className="header">{headerContent || "Header"}</header>
      )}
      {mode === "sidebar" && (
        <aside className="sidebar" style={{ width: recomputedWidthSize(mode) }}>
          {sidebarContent || "Sidebar"}
        </aside>
      )}
      <main className={`content ${maxWidth}`}>
        {title && <h1 className="title">{title}</h1>}
        {subtitle && <h2 className="subtitle">{subtitle}</h2>}
        {children}
      </main>
    </div>
  );
};

export default Layout;
