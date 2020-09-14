import { createStore, combineReducers }  from 'redux'
import calculatorReducer from './Calculator/Calculator.reducer'

const rootReduce = combineReducers({
    calculator: calculatorReducer
})

const store = createStore(rootReduce)

export default store