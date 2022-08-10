import { useEffect, useState } from 'react'

const useMounted = () => {
    const [mouted, setMouted] = useState(false)

    useEffect(() => {
        setMouted(true)
    }, [])

    return mouted
}

export default useMounted