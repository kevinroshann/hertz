"use client";

import Snowfall from "react-snowfall";

const SnowfallEffect = () => {
  return (
    <Snowfall
      color="white"
      snowflakeCount={100}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 9999, // Ensures it appears above other elements
        pointerEvents: "none", // Prevents interaction issues
      }}
    />
  );
};

export default SnowfallEffect;
