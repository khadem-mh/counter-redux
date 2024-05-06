import { createStore } from 'redux'
import reducer from './src/Redux/counter.js'
import {
    increaseNumberAction, decreaseNumberAction, setZeroNumberAction, rotateCounterBoxAction
} from './src/Redux/counter.js'

const topNumberElem = document.querySelector('.top__number')
const plusElem = document.getElementById('plus')
const zeroElem = document.getElementById('zero')
const minElem = document.getElementById('min')
const rotateBoxElem = document.getElementById('rotateBox')
const containerElem = document.getElementById('main')

const store = createStore(reducer)

const plusElemHandler = () => {
    store.dispatch(increaseNumberAction())
    topNumberElem.innerHTML = store.getState()
}

const zeroElemHandler = () => {
    store.dispatch(setZeroNumberAction())
    topNumberElem.innerHTML = store.getState()
}

const minElemHandler = () => {
    store.dispatch(decreaseNumberAction())
    topNumberElem.innerHTML = store.getState()
}

const rotateBoxElemHandler = () => {
    store.dispatch(rotateCounterBoxAction())
    if (store.getState()) {
        containerElem.classList.remove('rotate-main-active')
        containerElem.classList.add('rotate-not-active')
    } else {
        containerElem.classList.remove('rotate-not-active')
        containerElem.classList.add('rotate-main-active')
    }
}

plusElem.addEventListener('click', plusElemHandler)
zeroElem.addEventListener('click', zeroElemHandler)
minElem.addEventListener('click', minElemHandler)
rotateBoxElem.addEventListener('click', rotateBoxElemHandler)