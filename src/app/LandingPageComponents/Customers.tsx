import React from "react";

export default function Customers() {
  return (
    <section style={{ backgroundColor: "#F5F7FA" }}>
      <div className=" my-5 container">
        <div className="py-5 row align-items-center">
          <div className="col-md-3">
            <img src="image9.png" style={{ width: "100%" }} alt="" />
          </div>
          <div className="col-md-9">
            <p>
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h4 className="text-success">Tim Smith</h4>
            <p className="fw-lighter">British Dragon Boat Racing Association</p>
            <div className="d-flex justify-content-between">
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <img
                    key={index}
                    style={{ height: "50px" }}
                    src={`Logo-${index + 1}.svg`}
                    alt=""
                  />
                ))}
              <div className="btn btn-link">Meet All Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}