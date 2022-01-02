import React from 'react';
import { useState, useEffect } from 'react';


function Products(props) {

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

        <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Authors</th>
        </tr>
        </thead>
          
        {data
        .map((item) =>  (
          <tbody>
          <tr>
            <th scope="row">{item.index}</th> 
            <td>{item.volumeInfo.title}</td>
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
 


