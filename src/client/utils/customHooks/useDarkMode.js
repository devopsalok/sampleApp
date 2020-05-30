import { useState } from "react";
import { rootTheme } from "../../withRoot";

const useDarkMode = () => {
  const [theme, setTheme] = useState(rootTheme);

  const {
    palette: { type }
  } = rootTheme;

  const toggleDarkMode = () => {
    const updatedTheme = {
      ...rootTheme,
      palette: {
        ...rootTheme.palette,
        type: type === "dark" ? "light" : "dark"
      }
    };

    setTheme(updatedTheme);
  };
  return [theme, toggleDarkMode];
};

export default useDarkMode;
