import { PRODUCTS } from "../../products";
import { ShopContext } from '../../context/ShopContextProvider'
import CartItem from "./CartItem";
import { useContext } from "react";
import './cart.css'
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();


  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product}/>
          }
          return null;
        })}
      </div>

      {totalAmount > 0 ? 
        <div className="checkout">
          <h2>Subtotal: ${totalAmount}</h2>
          <button onClick={(() => navigate('/'))}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
        :
        <h2>Your cart is empty.</h2>
      }
    </div>
  )
}

export default Cart;
