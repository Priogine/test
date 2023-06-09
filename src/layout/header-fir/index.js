// import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import React, { useState, useEffect } from "react";
import SmallLogo from "../../assets/images/logo/logo.png";
import { Outlet, Link } from "react-router-dom";

const HeaderFir = () => {
  // -------- menu cbp-af-header-shrink class add --------
  const [classAdd, setClassAdd] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setClassAdd(false);
    } else {
      setClassAdd(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // -------- nav background-color !important --------

  // const ref = useRef(null);

  // useLayoutEffect(() => {
  //   ref.current.style.setProperty("background-color", "transparent", "important");
  // }, []);

  // ----------- nav menu button ------------

  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div
      id="menu-wrap"
      className={`menu-wrap menu-back cbp-af-header ${
        classAdd ? "" : "cbp-af-header-shrink"
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light mx-lg-0">
              <a className="navbar-brand" href="/">
                <img src={SmallLogo} alt="" style={{height:'5rem'}}/>
              </a>
              <button
                className={`navbar-toggler ${show ? "collapsed" : ""}`}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                // eslint-disable-next-line jsx-a11y/aria-proptypes
                aria-expanded={`${show ? false : true}`}
                aria-label="Toggle navigation"
                onClick={handleClick}
              >
                <span className="navbar-toggler-icon">
                  <span className="menu-icon__line menu-icon__line-left"></span>
                  <span className="menu-icon__line"></span>
                  <span className="menu-icon__line menu-icon__line-right"></span>
                </span>
              </button>

              <div
                className={`navbar-collapse collapse justify-content-end ${show ? "" : "show"}`}
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link __mPS2id"
                      href="https://pyranodes.com/"
                      data-ps2id-offset="120"
                    >
                      Home
                    </a>
                    {/* <Link to="home">Home</Link> */}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link __mPS2id"
                      href="https://traderjoexyz.com/trade?outputCurrency=0xeacd4f4d93527cb5d0cdfe5930d612ccfd5af436#/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Buy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link __mPS2id"
                      href="https://www.dextools.io/app/avalanche/pair-explorer/0x06878853d7519e8bb0c02f3131330920337bb30c"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Chart
                    </a>
                  </li>
                  <li className="nav-item mt-2">
                    {/* <a
                      href="/dapp"
                      className="btn btn-primary js-tilt __mPS2id"
                      style={{ marginRight: "30px" }}
                    >
                      DAPP
                    </a> */}
                    <Link to="/dapp" className="btn btn-primary js-tilt __mPS2id"
                      style={{ marginRight: "30px" }}>DAPP</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderFir;
