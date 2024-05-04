import { createStore } from 'redux'
import reducer from './src/Redux/counter.js'

const store = createStore(reducer)

console.log(store);