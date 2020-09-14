import productsMock from '../../mocks/productsList.json'

export default function (state = productsMock.products, actions) {
    switch(actions.type) {
        case 'TOGGLE_PRODUCT':
            return state.map(product =>
                product.id === actions.payload 
                ? { ...product, checked: !product.checked } 
                : product
            )

        default:
            return state
    }
}