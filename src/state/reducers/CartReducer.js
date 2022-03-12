const reducer = (state = 0, action) => {


    if (action.type == "addtocart") {
        return state + action.payload;
    }

    else if (action.type == "clearcart") {
        return 0;
    }

    else {
        return state;
    }
}



export default reducer;