import React from 'react'
import Card from '@mui/material/Card';
import { TextField, Checkbox, FormControlLabel, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { removeProduct, updateProduct } from '../redux/slices/productsSlice';
import { useState } from 'react';

const ProductCard = (productData) => {
    const [product, setProduct] = useState({
        id: productData.id,
        name: productData.name,
        description: productData.description,
        price: productData.price,
        availability: productData.availability
    });
    const [isEditable, setIsEditable] = useState(false);

    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeProduct(product.id));
    }

    const nandleSubmit = (e) => {
        e.preventDefault();
        if (isEditable) {
            dispatch(updateProduct(product));
        }
        setIsEditable(isEditable ? false : true);
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
        <Card variant="outlined" className='product'>
            <form onSubmit={nandleSubmit} onChange={handleForm}>
                <TextField
                    id="product-name"
                    variant="outlined"
                    label="Название"
                    value={product.name}
                    disabled={!isEditable}
                    name="name"
                />
                <TextField 
                    id="product-description" 
                    label="Описание" 
                    variant="outlined" 
                    name="description" 
                    value={product.description}
                    disabled={!isEditable}
                    />
                <TextField 
                    id="product-price"  
                    label="Цена" 
                    variant="outlined" 
                    name="price" 
                    value={product.price}
                    disabled={!isEditable}
                    />
                <FormControlLabel 
                    control={<Checkbox 
                                checked={product.availability} 
                                disabled={!isEditable} 
                            />} 
                    label="Доступен" 
                    name="availability" />

                <Button variant="contained" onClick={nandleSubmit}>{!isEditable ? 'Изменить' : 'Сохранить'}</Button>
                <Button variant="outlined" color="error" onClick={handleRemove}>Удалить</Button>
            </form>
        </Card>
    )
}

export default ProductCard;
