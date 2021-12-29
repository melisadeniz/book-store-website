import React from 'react';
import { Link } from 'react-router-dom';
import products from '../../data/products';


function Products(props) {

  return (
    <>
      <div className="col-sm-12">
        <h1>Products</h1>
        <hr />
      </div>

      {products.map((item, index) => (
        <div className="col-sm-3 mb-2" key={item.id}>
          <div className="card">
            <img
              className="card-img-top"
              src={`https://picsum.photos/id/${item.id.split('-')[1]}/300/200`}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
            <div>
                {               
                <h1 key={item.id}>
              <Link to={`${item.id}`} className="btn btn-primary">
                Detail
              </Link>
              </h1>
                }
             </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Products;

