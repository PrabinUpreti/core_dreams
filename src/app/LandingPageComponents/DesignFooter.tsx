import Image from "next/image";
import React from "react";

export default function DesignFooter() {
  return (
    <div className=" my-5 container">
      <div className=" pt-5 row align-items-center">
        <div className="col-md-4">
          <Image
            src="/pana.svg"
            width={0}
            height={0}
            style={{ width: "100%" }}
            alt=""
            layout="intrinsic"
          />
        </div>
        <div className="col-md-8">
          <h1>How to design your site footer like we did</h1>
          <p>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <div className="btn btn-success">Learn More</div>
        </div>
      </div>
    </div>
  );
}
