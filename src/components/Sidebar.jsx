import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="col-lg-2 " style={{ backgroundColor: "#F5F5F5" }}>
        <div>
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg d-flex flex-wrap">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#myNavBar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-brand">
                <span>
                  <h2 style={{ color: "#203562" }}>Notes App</h2>
                </span>
              </div>

              <div className="collapse navbar-collapse" id="myNavBar">
                <ul className="nav nav-pills flex-column mt-3 ">
                  <li className="nav-item   d-flex ">
                    <Link
                      to="/notes"
                      className=" rounded-2"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "25px",
                        backgroundColor: "#203562",
                      }}
                    >
                      <i className="fa-regular fa-file-lines fa-sm  p-4"></i>
                      <span className="me-5 p-2">Notes</span>
                    </Link>
                  </li>
                  <br />
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
