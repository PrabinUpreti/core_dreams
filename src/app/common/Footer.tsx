import React from "react";

export default function Footer() {
  return (
    <div>
      <div
        className="d-flex flex-column align-items-center text-center pb-4"
        // style={{ backgroundColor: "#F5F7FA" }}
      >
        <h1 className="display-3 fw-bold" style={{ maxWidth: "60rem" }}>
          Pellentesque suscipit fringilla libero eu.
        </h1>

        <div className="btn btn-lg btn-success"> Get a Demo</div>
      </div>
      <div style={{ backgroundColor: "#263238" }}> footer</div>
    </div>
  );
}
