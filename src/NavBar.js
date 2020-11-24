import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <div className="container-fluid qw p-0 pos">
      <div className="row">
        <div className="col-md-12 gh">
          <nav className="navbar navbar-expand-lg navbar-light gf m-0 mt-1 ">
            <a className="navbar-brand hf animate__animated.animate__fadeIn" href="#">
              Scrovio
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse dser"
              id="navbarSupportedContent"
            >
              <form className="form-inline my-2 my-lg-0 ">
                <input
                  className="mr-sm-2 alu-1 alu p-2 animated bounceInDown dser "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
              <div className="vf">
                <ul className="navbar-nav  d-flex justify-content-between ds">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/dailychallenge">
                      Daily challenge
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/timeline">
                      Timeline
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contactus">
                      Contact US
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/messages">
                      <p className="vg">
                        <AiOutlineMail />
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/notifications">
                      <p className="vg">
                        <MdNotificationsNone />
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/profile">
                      <img
                        src="https://static.jobscan.co/blog/uploads/linkedin-profile-picture.jpg"
                        className="sad"
                        alt="profile"
                      ></img>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 gh">
          <NavLink
            to="/"
            className=" sas pl-3 pr-3"
            activeStyle={{
              borderBottom: "2px solid black",
              color: "yellowgreen",
            }}
          >
            Stories
          </NavLink>
          <NavLink
            to="/topwriter"
            className=" sas pl-3 pr-3"
            activeStyle={{
              borderBottom: "2px solid black",
              color: "yellowgreen",
            }}
          >
            Writers
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
