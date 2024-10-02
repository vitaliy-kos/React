import React from 'react'
import CartProductCard from './productCards/CartProductCard'
import Breadcrumbs from './Breadcrumbs';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { removeFromCart } from '../redux/slices/cartReducer';

const Cart = () => {
  const [total, setTotal] = useState(0);
  const { items } = useSelector(state => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    let sum = 0;
    
    items.map(item => {
      sum += item.quantity * item.product.price;
    });
    
    setTotal(sum);
  }, [items]);

  

  const handleClearCart = (e) => {
    e.preventDefault();

    items.map(item => {
      dispatch(removeFromCart(item.product.id));
    });
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Breadcrumbs title='Shopping cart' />

      <section className="cart-items">
          <div className="container">

            <div className="products">

                <div className="row ci-items">

                  {items.length === 0 ? 'Cart is empty.' : items.map(item => <CartProductCard product={item.product} quantity={item.quantity} key={item.product.id} />)}

                </div>

                {items.length > 0 &&
                  <div className="button-row">
                    <Link onClick={(e) => handleClearCart(e)} className="button">CLEAR SHOPPING CART</Link>
                    <Link to="/products" className="button">CONTINUE SHOPPING</Link>
                  </div>
                }

            </div>
            
            <div className="details">

              <div className="col">
                <div className="heading">Shipping Adress</div>
                <div className="content">
                  <div className="select-wrapper">
                    <select name="" id="">
                      <option value="">Bangladesh</option>
                    </select>
                  </div>
                  <input type="text" placeholder="State" />
                  <input type="text" placeholder="Postcode / Zip" />
                  <a href="#" className="button">GET A QUOTE</a>
                </div>
              </div>

              <div className="col">
                <div className="total_wrapper">
                    <div className="sub">Sub total <span>${total}</span></div>
                    <div className="grand">GRAND TOTAL <span>${total}</span></div>
                    {items.length > 0 &&
                      <a href="#" className="button pink">proceed to checkout</a>
                    }
                </div>
              </div>

            </div>
            

          </div>
      </section>


    </>
  )
}

export default Cart
