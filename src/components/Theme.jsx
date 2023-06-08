"use client";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";

const Theme = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  return (
    <div>
      {/* {type}*/}
      <Switch
        shadow
        color="secondary"
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
    </div>
  );
};

export default Theme;
