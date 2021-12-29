import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/products';


function ProductDetail(props) {
    
    const params = useParams();
    const [data, setData] = useState([]);

   
    return (
        <>
          {products
            .filter((item) => item.id === params.productId)
            .map((item) => (
              <div>
                <img
                  src={`https://picsum.photos/id/${item.id.split('-')[1]}/300/200`}
                />
                <h1>{item.title}</h1>
                <p>{item.detail}</p>
              </div>
            ))}
        </>
      );
    }
    
    export default ProductDetail;
    