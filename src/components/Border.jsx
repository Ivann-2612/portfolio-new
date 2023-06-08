"use client";
import { useTheme } from "@nextui-org/react";

const Border = () => {
  const { isDark } = useTheme();
  return (
    <>
      <div id={`${isDark ? "border" : "border-light"}`}>
        <h6
          className={`${
            isDark ? "footer-text text-center" : "footer-text-light text-center"
          }`}
        >
          Copyright @2023 All right reserved
        </h6>
        <h6 className="footer-text list-color">Design by Ivan Nikolic</h6>
      </div>
    </>
  );
};

export default Border;
