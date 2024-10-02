import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import { fetchProducts } from '../redux/slices/productsReducer'
import ProductCard from "./productCards/ProductCard";
import { addToCart } from '../redux/slices/cartReducer';

const SingleProduct = () => {
    const { id } = useParams();
    const { products } = useSelector(state => state.products);
    
    const dispatch = useDispatch();
    
    const [ product, setProduct ] = useState({});
    const [ size, setSize ] = useState('XXL');
    const [ color, setColor ] = useState('RED');
    const [ quantity, setQuantity ] = useState(2);
    const [ added, setAdded ] = useState(false);
    
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        setProduct(products.filter(product => product.id == id).pop());
        window.scrollTo(0, 0);
    }, [id]);

    const handleAddToCart = (e, product) => {
        e.preventDefault();
        setAdded(true);

        dispatch(addToCart(product));

        setTimeout(function() {
            setAdded(false);
        }, 1000);
    }

    return (
        <>
            <section className="product">
                <div className="arrows">
                    <div className="arrow arrow-left">
                        <div className="icon"></div>
                    </div>
                    <div className="arrow arrow-right">
                        <div className="icon"></div>
                    </div>
                </div>
                <div className="container">
                    <img src={"/src/assets/"+product.image} alt="product" />
                </div>
            </section>

            <section className="product-description">
                <div className="container">
                    <div className="mini-heading">WOMEN COLLECTION</div>
                    <div className="main-heading">{product && product.name}</div>
                    <div className="desc">{product && product.description}</div>
                    <div className="charact">
                        <div className="char">MATERIAL: <span>COTTON</span></div>
                        <div className="char">DESIGNER: <span>BINBURHAN</span></div>
                    </div>
                    <div className="price">${product && product.price}</div>
                    <div className="options">
                        <div className="option">
                            <label htmlFor="color">CHOOSE COLOR</label>
                            <div className="select-wrapper">
                                <select id="color">
                                    <option value="RED">RED</option>
                                </select>
                            </div>
                        </div>
                        <div className="option">
                            <label htmlFor="size">CHOOSE SIZE</label>
                            <div className="select-wrapper">
                                <select id="size">
                                    <option value="XXL">XXL</option>
                                </select>
                            </div>
                        </div>
                        <div className="option">
                            <label htmlFor="quantity">QUANTITY</label>
                            <input type="text" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                        </div>
                    </div>
                    
                    <div onClick={(e) => handleAddToCart(e, product)} className="button"><img src="/src/assets/img/cart-pink.svg" alt="" />{added ? 'Added' : 'Add to Cart'}</div>
                </div>
            </section>
                
            <section className="featured-items">
                <div className="container">

                    <div className="row column center">
                        <h2 className="uppercase">you may like also</h2>
                    </div>

                    <div className="row fi-items">

                        {products && products
                                        .filter(product => product.id !== parseInt(id))
                                        .slice(0, 3)
                                        .map(product => <ProductCard key={product.id} product={product} />)}

                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default SingleProduct
