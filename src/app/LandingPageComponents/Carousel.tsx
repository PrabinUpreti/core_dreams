import Image from "next/image";
import React from "react";

export default function Carousel() {
  return (
    <section style={{ backgroundColor: "#F5F7FA" }}>
      <div className="container">
        <div className="py-5 row align-items-center ">
          <div className="col-md-7">
            <h1 className="display-2">
              Lessons and insights{" "}
              <span className="text-success">from 8 years</span>
            </h1>
            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className="btn btn-success">Register</button>
          </div>
          <Image
            className="col-md-5"
            src="Illustration.svg"
            alt=""
            width={0}
            height={0}
            style={{ height: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}
