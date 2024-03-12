import React from "react";
import { useThemeUpdate } from "./ThemeContext";

export default function Button() {
  const toggleTheme = useThemeUpdate();

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="border bg-white border-slate-400 rounded-full px-2 py-1 font-semibold text-lg hover:bg-black hover:text-white"
      >
        Toggle Theme
      </button>
    </div>
  );
}
