"use client";

import React from "react";
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
  let width = window.innerWidth;
  console.log("Width at mount: ", width);

  const recomputedWidthSize = (mode: string): number => {
    let result = 0;
    switch (mode) {
      case "header":
      case "fullscreen":
        result = width;
      case "sidebar":
        result = width * (1 / 3);
    }
    console.log("Inner method: ", result);
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
