import { PRODUCTS } from "../../products";
import Product from "./Product";
import './shop.css';

const Shop = () => {
  return (
    <div>
        <div className="shop">
        <div className="shopTitle">
          
              <h1>React Ecommerce Store</h1>
              </div>
              <div className="products">
                  {PRODUCTS.map((product) => (
                      <Product data={product} key={product.id}/>
                      ))}
              </div>
      </div>
    </div>
  )
}

export default Shop;
