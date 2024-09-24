import { configureStore } from '@reduxjs/toolkit'

const reducer = (isDark = false, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return isDark ? false : true;
        default:
            return isDark;
    }
}

const store = configureStore({
    reducer: reducer
});

export default store;