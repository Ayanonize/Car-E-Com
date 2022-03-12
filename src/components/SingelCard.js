import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clearcart, addtocart } from '../state/action-creators'
import { actionCreators } from '../state'

export default function SingelCard(props) {
    const dispatch = useDispatch()
    const { clearcart, addtocart } = bindActionCreators(actionCreators, dispatch);
    return (
        <>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer" onClick={() => { addtocart(parseInt(props.data.price)) }}>
                <a class="block h-48 rounded overflow-none">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={props.data.img} />
                </a>
                <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{props.data.brand}</h3>
                    <h2 class="text-white title-font text-lg font-medium">{props.data.model}</h2>
                    <p class="mt-1">${props.data.price}</p>
                </div>
            </div>



        </>

    )
}
