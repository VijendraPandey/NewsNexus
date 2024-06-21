import React from "react";

const ErrorComponent = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[74vh]">
      {/* Displaying error message */}
      <h2 className="-mt-20 text-5xl font-bold text-red-500">Error</h2>
      <p className="text-2xl text-gray-700">{message}</p>
    </div>
  );
};

export default ErrorComponent;
