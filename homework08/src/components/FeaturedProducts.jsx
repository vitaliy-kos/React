import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts } from '../redux/slices/productsReducer'
import { Link } from 'react-router-dom'
import ProductCard from './productCards/ProductCard'

const FeaturedProducts = () => {
    const { products } = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <section className="featured-items">
            <div className="container">

                <div className="row column center">
                    <h2>Fetured Items</h2>

                    <p className="grey-text">Shop for items based on what we featured in this week</p>
                </div>

                <div className="row fi-items">

                    {products.length > 0 && products.map(product => <ProductCard key={product.id} product={product}/>)}

                </div>

                <div className="fi-btn-all">
                    <Link to="/products/" className="fi-btn">Browse All Product</Link>
                </div>


            </div>
        </section>
    )
}

export default FeaturedProducts
