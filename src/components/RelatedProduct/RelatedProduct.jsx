import React from 'react';
import './RelatedProduct.css'; // Corrected filename
import data_product from '../assets/data'; // Make sure the path to your data is correct
import Item from '../Item/Item'; // Corrected import path for the Item component

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'> {/* Corrected className */}
      <h1>Related Products</h1>
      <hr/>
      <div className="relatedproducts-item">
        {
            data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })
        }
      </div>
    </div>
  );
};

export default RelatedProducts;
