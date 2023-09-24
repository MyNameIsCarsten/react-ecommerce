import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react';
import { ShopContext } from '../context/ShopContextProvider';
import './navbar.css'
import { useContext } from "react";

const Navbar = () => {
  const { getTotalCount } = useContext(ShopContext);

  return (
    <div className="navbar">
          <div className="links">
              <Link to='/'>Shop</Link>
              <Link to='/cart' id='cartIcon'>
          <ShoppingCart size={32} />
           <div className='count'>{getTotalCount()} <span id='spanNav'></span></div>
              </Link>
      </div>
    </div>
  )
}

export default Navbar;
