import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <a className="navbar-brand" href="/">
          Qiita Stocks
        </a>
        <div className="navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://qiita.com/tags"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tags
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutsite">
                About Site
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
