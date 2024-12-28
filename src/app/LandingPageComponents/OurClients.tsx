import Image from "next/image";
import React from "react";

export default function OurClients() {
  return (
    <div className="py-5 container">
      <div className="text-center">
        <h1>Our Clients</h1>
        <p>We have been working with some Fortune 500+ clients</p>
      </div>
      <div className=" py-5 d-flex justify-content-between">
        {Array(7)
          .fill(null)
          .map((_, index) => (
            <Image
              key={index}
              height={50}
              width={0}
              style={{ width: "100%" }}
              src={`Logo-${index + 1}.svg`}
              alt=""
            />
          ))}
      </div>
    </div>
  );
}
