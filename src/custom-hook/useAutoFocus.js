import { useEffect, useRef } from 'react'
import { isArray, isNumber, isFunction } from '../utils/checkType'

const validate = ({ refs, order, start }) => {
    if(!isArray(refs)) throw new Error('refs must be an array of ref')
    if(!isArray(order)) throw new Error('refs must be an array of ref index')
    if(!isNumber(start)) throw new Error('refs must be a number of ref order')
}

const useAutoForus = ({ refs, order, start = 0 }) => {
    validate({ refs, order, start })
    const currentFocus = useRef(start)

    const focus = () => {
        console.log(currentFocus.current)
        const __focus = refs[order[currentFocus.current]].current.focus
        isFunction(__focus) && __focus()
    }

    const nextFocus = () => {
        currentFocus.current < refs.length - 1 ? currentFocus.current++ : currentFocus.current = 0
        focus()
    }

    const changeFocus = index => {
        if(isNumber(index)) {
            currentFocus.current = index
            focus()
        }
    }

    useEffect(() => {
        console.log('mouted')
        focus()
    }, [])

    return {
        nextFocus,
        changeFocus
    }
}

export default useAutoForus