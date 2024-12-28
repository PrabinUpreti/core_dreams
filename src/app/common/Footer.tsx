import Image from "next/image";
import Link from "next/link";
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
      <div className="pt-5" style={{ backgroundColor: "#263238" }}>
        <footer className="text-light py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-5 mb-5">
                <div className="d-flex align-items-center">
                  <Image
                    src="IconFooter.svg"
                    alt="Nexcent"
                    height={0}
                    width={0}
                    style={{ width: "40px", marginRight: "10px" }}
                    layout="intrinsic"
                  />
                  <h3 className="mb-0">Nexcent</h3>
                </div>
                <p className="mt-2 mb-0">Copyright © 2020 Nexcent Ltd.</p>
                <small>All rights reserved</small>
                <div className=" mt-5 d-flex gap-2">
                  <Link href="#" className="text-light">
                    <i className="bi bi-instagram"></i>
                  </Link>
                  <Link href="#" className="text-light">
                    <i className="bi bi-twitter"></i>
                  </Link>
                  <Link href="#" className="text-light">
                    <i className="bi bi-facebook"></i>
                  </Link>
                  <Link href="#" className="text-light">
                    <i className="bi bi-youtube"></i>
                  </Link>
                </div>
              </div>
              <div className="row col-md-7 mb-7">
                <div className="col-md-3 mb-3">
                  <h4>Company</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        href="#"
                        className="text-light text-decoration-none"
                      >
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-light text-decoration-none"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-light text-decoration-none"
                      >
                        Contact us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-light text-decoration-none"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-light text-decoration-none"
                      >
                        Testimonials
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 mb-3">
                  <h4>Support</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        href="#"
                        className="text-light text-decoration-none"
                      >
                        Help center
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-light text-decoration-none"
                      >
                        Terms of service
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-light text-decoration-none"
                      >
                        Legal
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-light text-decoration-none"
                      >
                        Privacy policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-light text-decoration-none"
                      >
                        Status
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6>Stay up to date</h6>
                  <form>
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your email address"
                      />
                      <button type="submit" className="btn btn-outline-light">
                        <i className="bi bi-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
