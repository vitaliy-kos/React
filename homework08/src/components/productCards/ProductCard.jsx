import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cartReducer';
import { useState } from 'react';

const ProductCard = (props) => {
    const { product } = props;
    const [ added, setAdded ] = useState(false);

    const dispatch = useDispatch();

    const handleAddToCart = (e, product) => {
        e.preventDefault();
        setAdded(true);

        dispatch(addToCart(product));

        setTimeout(function() {
            setAdded(false);
        }, 1000);
    }

    return (
        <div className="fi-item">
            <div className="fi-photo">
                <img src={"/src/assets/"+product.image} alt="" className="background"/>
                <div className="hover">
                    <Link className="add-to-cart" onClick={(e) => handleAddToCart(e, product)}>{added ? 'Added' : 'Add to Cart'}</Link>
                </div>
            </div>
            <Link to={'/products/'+product.id}>
                <div className="desc">
                    <h4>{product.name}</h4>
                    <p className="grey-text">{product.description}</p>
                    <div className="price">${product.price}.00</div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard
