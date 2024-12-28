import Image from "next/image";
import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg py-4"
      style={{ backgroundColor: "#F5F7FA" }}
    >
      <div className=" px-5 container-fluid">
        <Link className="navbar-brand" href="/">
          <Image
            src="Logo.svg"
            alt="Logo"
            height={100}
            width={0}
            style={{ width: "auto" }}
            layout="intrinsic"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-between">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/about"
              >
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#">
                Feature
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Testimonial
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                FAQ
              </Link>
            </li>
          </ul>
          <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-link">
              Login
            </button>
            <button type="button" className="btn btn-success">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
