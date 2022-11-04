// Add Item Cart

export const addCart = (product) => {
    return {
        type: "ADDCART",
        payload: product
    }
}


// Delete Item Cart 

export const deleteCart = (product) => {
    return {
        type: "DELETECART",
        payload: product
    }
}