import { useEffect } from 'react'
import { useSearchParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/slices/productsReducer'
import Advantages from './Advantages'
import Breadcrumbs from './Breadcrumbs'
import ProductCard from './productCards/ProductCard'
import { sizesSorted } from '../data/sizesSorted'
import { useState } from 'react'

const Catalog = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const sizesParams = searchParams.getAll("sizes");

  const { products } = useSelector(state => state.products);
  const [sizeValues, setSizeValues] = useState([]);
  const [filtredProducts, setFiltredProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const arrValues = [];
    products.map(product => !arrValues.includes(product.size) && arrValues.push(product.size));
    arrValues.sort((a, b) => sizesSorted.indexOf(a) > sizesSorted.indexOf(b));
    setSizeValues(arrValues);
    filterProduct();
  }, [products]);

  useEffect(() => {
    filterProduct();
  }, [sizesParams.length]);

  const filterProduct = () => {
    let filtered = [];
    
    if (sizesParams.length > 0) {
      sizesParams.forEach(size => {
        filtered.push(... products.filter(product => product.size.toLowerCase() === size.toLowerCase()));
      });
    } else {
      filtered = products;
    }

    setFiltredProducts(filtered);
  }

  const handleSizeInput = (e, size) => {
    let newParamsArr = sizesParams;

    if (e.target.checked) {
      newParamsArr.push(size);
    } else {
      newParamsArr = newParamsArr.filter(param => param !== size);
    }

    setSearchParams({sizes: newParamsArr});
  }
  
  return (
      <>
        <Breadcrumbs title='New arrivals' />

        <section className="featured-items catalog">
            <div className="container">

                <div className="col filter-col">
                  <h4>SIZE</h4>
                  <div className="sizes">
                    
                    {sizeValues && sizeValues.map(sizeValue => 
                      <div className="form-group" key={sizeValue}>
                          <input type="checkbox" id={"size-"+sizeValue} onChange={(e) => handleSizeInput(e, sizeValue)} checked={sizesParams.includes(sizeValue)}/>
                          <label htmlFor={"size-"+sizeValue}>{sizeValue}</label>
                      </div>
                    )}
                  </div>

                </div>

                <div className="row fi-items">
                    {filtredProducts.length > 0 && filtredProducts.map(product => <ProductCard key={product.id} product={product}/>)}

                </div>


            </div>
        </section>

        <Advantages />
      </>
  )
}

export default Catalog
