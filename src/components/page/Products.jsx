import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Products() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {


    setTimeout(() => {
      const URL = 'https://www.googleapis.com/books/v1/volumes?maxResults=10&orderBy=relevance&q=deneme';
      fetch(URL)
        .then((response) => response.json())
        .then((json) => {
          setData(json.items);
          console.log(json.items);
          setLoading(false);
        });
    }, 1000);
  }, []);
  
  if (loading) {
    return <h1>Loading..</h1>;
  }


  return (
    <>
      <div className="col-sm-12">
        <h1>Products</h1>

        <table className="table table-hover">
        <thead className='bg-warning'>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Authors</th>               
        </tr>
        </thead>
          
        {data
        .map((item, index) =>  (
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
   </>

  );
}

export default Products;
 


