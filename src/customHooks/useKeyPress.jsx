import { useEffect, useState } from "react";

export default function useKeyPress(keyName) {
  const [isEnterPressed, setIsEnterPressed] = useState(false);
  useEffect(() => {
    const keyUpFunc = (e) => {
      if (keyName === e.key) {
        setIsEnterPressed(false);
      }
    };
    const keyDownFunc = (e) => {
      if (keyName === e.key) {
        setIsEnterPressed(true);
      }
    };
    document.addEventListener("keyup", keyUpFunc);
    document.addEventListener("keydown", keyDownFunc);
  }, []);
  return isEnterPressed;
}
