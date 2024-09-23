import { useState } from 'react'
import { TextField } from '@mui/material'

function TemperatureConverter() {
    const [temperature, setTemperature] = useState({
        celsius: 0,
        fahrenheit: 0
    });

    const changeCelsius = (el) => {
        const input = el.target;
        setTemperature({
            celsius: input.value,
            fahrenheit: Math.round((input.value * 9 / 5) + 32)
        });
    }

    const changeFahrenheit = (el) => {
        const input = el.target;
        setTemperature({
            celsius: Math.round((input.value - 32) * 5 / 9),
            fahrenheit: input.value
        });
    }
  
    return (
        <div className="TemperatureConverter">
            <h1>Задание 1 - Конвертер температуры</h1>
            <p>Цель: Создать компонент TemperatureConverter, используя компоненты TextField из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.
            <br/><br/>
            <b>Логика:</b>
            </p>
            <ul>
                <li>При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.</li>
                <li>Реализуйте конвертацию температур в обоих направлениях.</li>
            </ul>
            <br/>
            
            <TextField 
                label="Celsius"
                className="input"
                onChange={changeCelsius}
                value={temperature.celsius}
                />
                
            <TextField 
                label="Fahrenheit"
                className="input"
                onChange={changeFahrenheit}
                value={temperature.fahrenheit}
                />
        </div>
    )
}

export default TemperatureConverter;