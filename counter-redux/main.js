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

    const containsMain = document.querySelectorAll('.rotate')
    let containsMainArr = Array.from(containsMain)

    if (store.getState()) {
        containerElem.classList.remove('rotate-main-active')
        containsMainArr.forEach(item => item.classList.remove('rotate-active'))

        containerElem.classList.add('rotate-not-active')
        containsMainArr.forEach(item => item.classList.add('rotate-not-active'))
    } else {
        containerElem.classList.remove('rotate-not-active')
        containsMainArr.forEach(item => item.classList.remove('rotate-not-active'))

        containerElem.classList.add('rotate-main-active')
        containsMainArr.forEach(item => item.classList.add('rotate-active'))
    }
}

plusElem.addEventListener('click', plusElemHandler)
zeroElem.addEventListener('click', zeroElemHandler)
minElem.addEventListener('click', minElemHandler)
rotateBoxElem.addEventListener('click', rotateBoxElemHandler)