import { createStore, combineReducers }  from 'redux'
import calculatorReducer from './Calculator/Calculator.reducer'
import productsReducer from './Products/Products.reducer'

const rootReduce = combineReducers({
    calculator: calculatorReducer,
    products: productsReducer
})

const store = createStore(rootReduce)

export default store