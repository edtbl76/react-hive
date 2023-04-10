import React from 'react';
import { useCounter } from './hooks/useCounter.js';

export const Counter = () => {
    const [currentCount, increment] = useCounter();

    return (
        <div>
            <h2>Count: {currentCount}</h2>
            <button onClick={increment}>Click Me!</button>
        </div>
    )
}