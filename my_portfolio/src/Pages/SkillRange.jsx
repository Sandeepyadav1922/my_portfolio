import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useEffect, useState } from "react";

function SkillRange({ value }) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentValue(value);
    }, 100);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <Slider
      min={0}
      max={100}
      value={currentValue}
      disabled
      handleRender={() => null}
      styles={{
        rail: {
          height: "16px",
          backgroundColor: "#333",
          borderRadius: "10px",
          top: "0px",
        },

        track: {
          height: "16px",
          background: "linear-gradient(90deg, #7167ee, #8a42b8)",
          borderRadius: "10px",
          top: "0px",
          transition: "width 1.2s ease",
        },
      }}
    />
  );
}

export default SkillRange;