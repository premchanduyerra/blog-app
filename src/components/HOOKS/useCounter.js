//create a hook for counter

import React from 'react'

export const useCounter = (initialCount = 0, value) => {

    const [count, setCount] = React.useState(initialCount);

    const increment = () => {
        setCount(prevCount => prevCount + value)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - value)
    }

    const reset = () => {
        setCount(initialCount)
    }

    return [count, increment, decrement, reset]
}