import { combineReducers } from 'redux'

import shoppingReducer from './shop/shopping-reducer'
import userReducer from './user/user-reducer'

const rootReducer = combineReducers({
    shop: shoppingReducer,
    user: userReducer
})

export default rootReducer;
