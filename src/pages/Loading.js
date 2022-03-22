import React from "react";

const Loading = () => {
  return (
    <>
      <div className="centered">
        <h2 className="loadingText">Loading...</h2>
        <img src="/assets/images/Rhombus.gif" alt="loading animation"></img>
      </div>
      <div className="loading"></div>
    </>
  );
};

export default Loading;
