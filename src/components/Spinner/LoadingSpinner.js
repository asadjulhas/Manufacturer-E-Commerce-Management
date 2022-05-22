import React from "react";

const LoadingSpinner = ({className}) => {
  const loaderClass = className || ''
  return (
    <div className={`loader_spinner ${loaderClass}`} role="status">
    <div className="spinner-grow text-warning" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    </div>
  );
};

export default LoadingSpinner;
