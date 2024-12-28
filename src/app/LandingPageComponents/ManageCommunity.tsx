import React from "react";

export default function ManageCommunity() {
  return (
    <div className="container">
      <div className="text-center">
        <h1 className="col-md-auto">
          Manage your entire community in a single system
        </h1>
        <p className="">Who is Nextcent suitable for?</p>
      </div>
      <div className="d-flex justify-content-center justify-content-md-around flex-wrap">
        <div className="my-1 p-3 card text-center" style={{ width: "18rem" }}>
          <div className="card-body">
            <img
              className="mb-4"
              src="Icon-4.svg"
              style={{ height: "80px" }}
              alt=""
            />
            <h3 className="card-title">Membership Organisations</h3>

            <p className="card-text">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
        <div className="my-1 p-3 card text-center" style={{ width: "18rem" }}>
          <div className="card-body">
            <img
              className="mb-4"
              src="Icon-5.svg"
              style={{ height: "80px" }}
              alt=""
            />
            <h3 className="card-title">National Associations</h3>

            <p className="card-text">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
        <div className=" my-1 p-3 card text-center" style={{ width: "18rem" }}>
          <div className="card-body">
            <img
              className="mb-4"
              src="Icon-6.svg"
              style={{ height: "80px" }}
              alt=""
            />
            <h3 className="card-title">Clubs And Groups</h3>

            <p className="card-text">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
