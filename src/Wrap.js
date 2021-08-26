import React from "react";

const Wrap = (WrappedComp) => {
  const newComponent = () => {
    return (
      <div style={{ background: "red" }}>
        <WrappedComp />
      </div>
    );
  };
  return newComponent;
};

export default Wrap;
