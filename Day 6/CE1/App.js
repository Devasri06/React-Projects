import React from "react";
import {ProductList} from './WithProductList';
import ProductListComponent from './ProductListComponent';
const Products=[
  {id:1,name:'Product 1',price:19.99,imageUrl:'images/product1.jpg'},
  {id:2,name:'Product 2',price:29.99,imageUrl:'images/product2.jpg'},
];
const EnhacedProductList = WithProductList(ProductListComponent, Products);
const App =() => {
  return(
    <div>
      <h1>Your App Title</h1>
      {/*Render the enhanced Product List */}
      <EnhacedProductList/>
    </div>
  );
};

export default App;
