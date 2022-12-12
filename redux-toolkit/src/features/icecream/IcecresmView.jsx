import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {ordered,restocked} from '../icecream/icecreamSlice'

const IcecresmView = () => {
    const numOfIcecreams = useSelector(state => state.icecream.numOfIcecream)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of IceCream - {numOfIcecreams}</h2>
            <button onClick={()=> dispatch(ordered())}>Order IceCream</button>
            <button onClick={()=> dispatch(restocked(3))}>Restoke IceCream</button>
        </div>
    )
}

export default IcecresmView