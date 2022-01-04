import React from 'react';
import routes from '../../routes';
import { Link } from 'react-router-dom';


function Footer(props) {
  return <>

<footer className="text-center">


<div className="col py-3 my-4">
  <ul className="nav justify-content-center border-bottom pb-3 mb-3">
             {routes
              .filter((item) => item.isFooter)
              .map((item, index) => (
                <li key={index}>
                  <Link className="nav-item nav-link text-dark text-end" to={item.path}>
                    {item.title}
                  </Link>
                </li>
              ))}
  </ul>
  
  </div>


<div className="text-center p-3" >
  © 2022 Copyright {' '}
  <Link className="text-dark" to="#">Melisa Deniz</Link>
</div>

</footer>


</>
  ;}

export default Footer;
