import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state'

export default function Cart() {
    const cartamount = useSelector(state => state.cartitems)
    const dispatch = useDispatch()
    const { clearcart, addtocart } = bindActionCreators(actionCreators, dispatch);

    return (

        <div className='text-white p-6'>
            <h1 className="text-5xl font-bold text-center">Your Cart Items</h1>
            <h1 className="text-4xl font-bold text-center">Total - ${cartamount}</h1>
            <button className="bg-sky-500 px-4 p-2" onClick={() => { clearcart() }}>Clear</button>
        </div>
    )
}
