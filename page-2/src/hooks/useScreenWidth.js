import { useState, useEffect } from "react";

const useScreenWidth = () => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", () => handleResize());

    handleResize();

    window.removeEventListener("resize", () => handleResize());
  }, [width]);

  return width;
};

export default useScreenWidth;
