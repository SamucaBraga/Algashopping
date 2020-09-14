export const selectAllProducts = state => state.products

export const selectSelectedProducts = 
    state => state.products.filter(product => product.checked === true)

export const selectSelectedProductTotalPrice =
    state => state.products
        .filter(product => product.checked === true)
        .reduce((a, b) => a + b.price, 0)

