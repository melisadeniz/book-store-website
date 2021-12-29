import React from 'react';
import routes from '../../routes';
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <Link className="navbar-brand" to="#">
         <h3>Navbar</h3>
        </Link>

        <div className="navbar">
          <ul className="nav justify-content-end ">
            {routes
              .filter((item) => item.isNav)
              .map((item, index) => (
                <li key={index}>
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