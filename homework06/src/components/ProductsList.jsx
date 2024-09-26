import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from './ProductCard';

const ProductsList = () => {
    const products = useSelector(state => state.products.list);
    
    return (
        <div className='productList'>
            {products.length > 0 && products.map(product => <ProductCard key={product.id} {... product}/>)}
        </div>
    )
}

export default ProductsList
