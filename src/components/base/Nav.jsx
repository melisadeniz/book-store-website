import React from 'react';
import routes from '../../routes';
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <Link className="navbar-brand" to="#">
         <img src="https://upload.wikimedia.org/wikipedia/tr/5/52/D%26R_logo.jpg" className="mx-3" width="100" height="80" alt="..." />
        </Link>

        <div className="navbar">
          <ul className="nav">
            {routes
              .filter((item) => item.isNav)
              .map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link className="nav-item nav-link text-dark text-end" to={item.path}>
                    {item.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;