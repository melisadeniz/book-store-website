import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import bookimages from './bookimages';
import { Link } from 'react-router-dom';


function ProductDetail(props) {
    
    const params = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
  
      fetch(`https://www.googleapis.com/books/v1/volumes?maxResults=10&orderBy=relevance&q=deneme/${params.productId}`)
        .then((response) => response.json())
        .then((json) => {
          setData(json.items)
          
          console.log(params)
        });
    }, []);


    return (
        <>
        <h1>Product Detail</h1>

        <div className="table-responsive container">
      <table className="table mt-5">
      <thead className="table bg-warning">
        <tr>
          <th scope="col">Product Image</th>
          <th scope="col">Title</th>
          <th scope="col">Authors</th>
          <th scope="col">Published Date</th>
          <th scope="col">Categories</th>
          <th scope="col" className='d-none d-md-block'>-</th>
        </tr>
      </thead>

      <tbody>

          {data
            .map((item, index) => (

        <tr>
          <td>
            <img src={bookimages[index].URL} alt="products" style={{ width: "20vh", height: "30vh" }}/></td> 
          <td>{item.volumeInfo.title}</td>
          <td>{item.volumeInfo.authors}</td>
          <td>{item.volumeInfo.publishedDate}</td>
          <td>{item.volumeInfo.categories}</td>
          <td className="d-none d-md-table-cell">         
            <Link to="#" className="btn btn-primary">Add to Chart</Link></td>
       </tr>
        
           ))}

      </tbody>
    </table>
    </div>
        </>
      );
    }


    
    export default ProductDetail;
    