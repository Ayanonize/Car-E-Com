import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state'
import { Link } from 'react-router-dom'


export default function Header() {
    const cartamount = useSelector(state => state.cartitems)
    const dispatch = useDispatch()
    const { clearcart, addtocart } = bindActionCreators(actionCreators, dispatch);

    return (
        <>

            <header class="text-gray-400 bg-ayanonize body-font sticky" style={{ top: "0" }}>
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>

                        <span class="ml-3 text-xl">Tailblocks</span>
                    </a>
                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link class="mr-5 hover:text-white" to="/">Home</Link>
                        <Link class="mr-5 hover:text-white" to="/cart">Cart</Link>
                        <Link class="mr-5 hover:text-white" to="/">Third Link</Link>
                        <Link class="mr-5 hover:text-white" to="/">Fourth Link</Link>
                    </nav>
                    <Link to="cart" class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Cart ${cartamount}</Link>
                </div>
            </header>
        </>

    )
}
