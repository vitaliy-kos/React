import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    const { items } = useSelector(state => state.cart);

    return (
        <header>
            <div className="container">

                <div className="logo-container">
                    <Link to='/'>
                        <img src='/src/assets/img/logo.png' alt=""/>
                    </Link>
                </div>

                <div className="search-container">
                    <Link to='search'>
                        <img src='/src/assets/img/search.svg' alt=""/>
                    </Link>
                </div>

                <div className="menu-container">
                    <ul className="main-menu horizontal-menu">
                        <li>
                            <Link to='#'>
                                <img src='/src/assets/img/burger.svg' alt=""/>
                            </Link>
                            <div className="dropdown">
                                <h3>MENU</h3>
                                <h4>MAN</h4>
                                <ul className="menu">
                                    <li>
                                        <NavLink to='products'>Accessories</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='products'>Bags</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='products'>Denim</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='products'>T-Shirts</NavLink>
                                    </li>
                                </ul>
                                <h4>WOMAN</h4>
                                <ul className="menu">
                                    <li>
                                        <NavLink to='products'>Accessories</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='products'>Jackets & Coats</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='products'>Polos</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='products'>T-Shirts</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='products'>Shirts</NavLink>
                                    </li>
                                </ul>
                                <h4>KIDS</h4>
                                <ul className="menu">
                                    <li>
                                        <NavLink to='products'>Accessories</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='products'>Jackets & Coats</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='products'>Polos</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='products'>T-Shirts</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='products'>Shirts</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='products'>Bags</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="user">
                            <Link to='#'>
                                <img src='/src/assets/img/user.svg' alt=""/>
                            </Link>
                        </li>
                        <li className="cart">
                            <Link to='cart'>
                                <img src='/src/assets/img/cart.svg' alt=""/>
                            </Link>
                            <span className="cart-count">{items.length}</span>
                        </li>
                    </ul>
                </div>

            </div>
        </header>
    )
}

export default Header
