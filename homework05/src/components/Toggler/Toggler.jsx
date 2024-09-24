import React from 'react'
import { FormControlLabel } from '@mui/material'
import MaterialUISwitch from '../MaterialUISwitch/MaterialUISwitch';
import { useSelector, useDispatch } from 'react-redux'

const Toggler = () => {
    const isDark = useSelector(isDark => isDark);
    const dispatch = useDispatch();
    
    const toggleTheme = () => {
        dispatch({ type: 'TOGGLE_THEME' });
    }

    return (
        <div>
            <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} checked={isDark} onChange={toggleTheme}/>}
                label="Light/dark theme toggler"
            />
        </div>
    )
}

export default Toggler
