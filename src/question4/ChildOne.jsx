import React from "react";
import { useTheme } from "./ThemeContext";

export default function ChildOne() {
  const darkTheme = useTheme();

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <div style={themeStyles}>
      <h2>Child One</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sit.
      </p>
    </div>
  );
}
