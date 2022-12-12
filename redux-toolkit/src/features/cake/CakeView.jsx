import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered,restocked } from './cakeSlice'

const CakeView = () => {
    const numOfCakes = useSelector((state) => state.cake.numOfCake)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Cake - {numOfCakes}</h2>
            <button onClick={() => dispatch(ordered())}>Order Cake</button>
            <button onClick={() => dispatch(restocked(2))}>Restoke Cake</button>
        </div>
    )
}

export default CakeView
