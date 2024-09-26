import { useState } from 'react';
import { TextField, Checkbox, FormControlLabel, Alert, Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import Ids from 'ids';
import { addProduct } from '../redux/slices/productsSlice';

const AddProduct = () => {
    const [product, setProduct] = useState({
        id: '',
        name: '',
        description: '',
        price: '',
        availability: false
    });
    const [error, setError] = useState("");

    const dispatch = useDispatch();

    const nandleSubmit = (e) => {
        e.preventDefault();

        if (parseInt(product.price) == 0 || isNaN(parseInt(product.price))) {
            setError("Введите правильную цену!");
            return;
        }
        
        const ids = new Ids();
        product.id = ids.next();
        
        dispatch(addProduct(product));
        
        setError("");
        setProduct({
            id: '',
            name: '',
            description: '',
            price: 0,
            availability: false
        });
    }

    const handleForm = (e) => {
        const key = e.target.name;
        let val = e.target.value;
        
        if (key == 'availability') val = e.target.checked ? true : false;
        
        setProduct({
            ...product,
            [key]: val
        });
    }

    return (
        <div className='addProduct'>
            <h3>Добавление товара</h3>
            <form onSubmit={nandleSubmit} onChange={handleForm}>
                {error && <Alert severity="error">{error}</Alert>}
                <TextField 
                    id="name" 
                    label="Название" 
                    variant="outlined" 
                    name="name" 
                    value={product.name}
                    required />
                <TextField 
                    id="description" 
                    label="Описание" 
                    variant="outlined" 
                    name="description" 
                    value={product.description} />
                <TextField 
                    id="price"  
                    label="Цена" 
                    variant="outlined" 
                    name="price" 
                    value={product.price}
                    required
                    />
                <FormControlLabel 
                    control={<Checkbox checked={product.availability} />} 
                    label="Доступен" 
                    name="availability" />

                <Button variant="contained" type="submit">Добавить товар</Button>
            </form>
        </div>
    )
}

export default AddProduct;
