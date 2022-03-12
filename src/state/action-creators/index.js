export const addtocart = (amount) => {

    return ((dispatch) => {
        dispatch({
            type: "addtocart",
            payload: amount
        })
    })

}

export const clearcart = () => {

    return ((dispatch) => {
        dispatch({
            type: "clearcart",
            payload: 0
        })
    })

}
