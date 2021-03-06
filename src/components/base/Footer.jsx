import React from 'react';
import routes from '../../routes';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub } from "react-icons/bs"


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

  <div className="container p-4 pb-0">

        <section className="mb-4">

          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="https://www.linkedin.com/in/melisa-deniz"
            target='_blank'
            role="button"
          ><BsLinkedin /></a>

          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#333333" }}
            href="https://github.com/melisadeniz"
            target='_blank'
            role="button"
          ><BsGithub /></a>
        </section>

      </div>


<div className="text-center p-3" >
  © 2022 Copyright {' '}
  <Link className="text-dark" to="#">Turkuvaz Müzik Kitap Mağazacılık ve Pazarlama A.Ş.</Link>
</div>

</footer>


</>
  ;}

export default Footer;
