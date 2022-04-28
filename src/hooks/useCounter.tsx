import React, { useState } from 'react'

export const useCounter = (initialData:number = 0) => {
    const [counter, setCounter] = useState(initialData)

    const reset = () =>{
        setCounter(initialData)
    }

    const increment = () =>{
        setCounter(counter + 1)
    }

    const decrement = () =>{
        setCounter(counter - 1)
    }

    return {counter, increment, decrement, reset}
}
