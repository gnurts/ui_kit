import { useEffect } from 'react'
import { isFunction } from '../utils/checkType'

const useMounted = (callback) => {
    if(!isFunction(callback)) throw new Error('callback must be a function')
    
    useEffect(callback, [])
}

export default useMounted