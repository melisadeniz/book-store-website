import React from 'react';
import Nav from './components/base/Nav';
import Footer from './components/base/Footer';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';
// import { useEffect, useState } from "react";

function App() {

//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     console.log("Veri aliniyor");
//    fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
//      res.json().then((data) => setPosts(data));
//    })
//   }, []);

  return  <>
       <Nav />
      <div className="container my-3 mx-2">
        <div className="row">
       
          <Routes>
            {routes.map((item, index) => (
              <Route key={index} path={item.path} element={<item.element />} />
            ))}
          </Routes>
      
        </div>
      </div>

      <Footer />
    </>
  }

export default App;
