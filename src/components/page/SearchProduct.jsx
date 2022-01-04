import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SearchProduct(props) {
    const location = useLocation(); 
    const navigate = useNavigate(); 
    const [data, setData] = useState([]);
   

    const urlParams = new URLSearchParams(location.search);
    const [urlQ, setUrlQ] = useState(urlParams.get('q'));



  useEffect(() => {

      const URL = 'https://www.googleapis.com/books/v1/volumes?maxResults=10&orderBy=relevance&q=deneme';
      fetch(URL)
        .then((response) => response.json())
        .then((json) => {
          setData(json.items);
          console.log(json.items);
        });
  }, []);


  
    function formHandler(event) {
      event.preventDefault();
      setUrlQ(event.target.q.value);
      navigate(`/arama?q=${event.target.q.value}`);
    }


    return (
        <>
          <form onSubmit={formHandler}>
            <div class="mb-3">
              
              <label htmlfor="search" className="form-label">
                Search
              </label>
              <input
                name="q"
                type="text"
                className="form-control"
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
    
          {location.pathname === '/arama' && <div>

         <table className="table table-hover">

           { location.search !== '' &&
        <thead className='bg-warning'>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Authors</th>
        </tr>
        </thead> 
             }
            
           {data
        .filter((item, index) => item.volumeInfo.title.includes(urlQ))
        .map((item, index) => (
          
          <tbody className='table'>
          <tr>
            <th scope="row">{index + 1}</th> 
            <th>
            <Link className="text-dark" to={`${item.id}`}>
              {item.volumeInfo.title}
            </Link>
            </th>
            <td>{item.volumeInfo.authors}</td>
          </tr>
          </tbody> 
        ))}
        </table>
      </div>
       }
   </>
  )}     

export default SearchProduct