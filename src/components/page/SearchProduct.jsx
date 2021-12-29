import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function SearchProduct(props) {
    const location = useLocation(); 
    const navigate = useNavigate(); 
    console.log(location);
  
    const urlParams = new URLSearchParams(location.search);

  
    const [urlQ, setUrlQ] = useState(urlParams.get('query'));

  
    function formHandler(event) {
      event.preventDefault();
      setUrlQ(event.target.qInput.value);
      navigate(`/arama?query=${event.target.qInput.value}`);
    }

    return (
        <>
          <form onSubmit={formHandler}>
            <div class="mx-5">
              
              <label htmlfor="search" className="form-label">
                Search
              </label>
              <input
                name="q"
                type="text"
                className="searchInputs"
                id="search"
                defaultValue={urlQ}
              />
              <div className='searchIcon'></div>

            </div>
    
            <button type="reset" className="btn btn-danger mx-5 m-3">
              Reset
            </button>
            <button type="submit" className="btn btn-primary m-3">
              Submit
            </button>
          </form>
    
    
        </>
      );
    }
    
    export default SearchProduct;