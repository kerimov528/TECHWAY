import {configureStore} from '@reduxjs/toolkit'
// const reduxLogger = require('redux-logger')

import cakeReducer from '../../../react-rtk-demo/src/features/cake/cakeSlice'
import icecreamReducer from '../../../react-rtk-demo/src/features/icecream/icecreamSlice'
import userReducer from '../../../react-rtk-demo/src/features/user/userSlice'

// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware)=> {getDefaultMiddleware().concat(logger)}

})

export default store