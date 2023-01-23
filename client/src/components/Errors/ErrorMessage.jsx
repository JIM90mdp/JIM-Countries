import React from "react";
import {  useSelector } from "react-redux";
import "../Errors/ErrorMessage.css"


export default function ErrorMessage() {
  const allErrors = useSelector((state) => state.error);

  if (allErrors.errorName) {
    return (
      <div className="error_container">
        <div>Sorry...</div>
        <span>No results found with the required values</span>
      </div>
    );
  }
  return <div>Upps</div>;
}
