import React from 'react';
import SearchProduct from './SearchProduct';

function Home(props) {
 
  
    return (
      <>
       <nav className="container navbar navbar-expand-lg navbar-light bg-light">
         <div className='col'>
        <div className='row'>
          <h1>Home</h1>
        </div>
        <div className='row'>
        <SearchProduct />
        </div>
        </div>
        </nav>
      </>
    );
  }
  
  export default Home;