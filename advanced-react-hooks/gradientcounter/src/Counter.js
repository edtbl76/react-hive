import React, { useState, useEffect } from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        if (isPrime(counter)) {
            document.body.style.backgroundImage = 'linear-gradient(to right, coral, teal)';
        } else {
            document.body.style.backgroundImage = "";
        }
    }, [counter]);

    return (
        <div>
            <h2>Count: {counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>Click Me!</button>
        </div>
    )
}

const isPrime = (num) => {
    const squareRoot = Math.sqrt(num)
    for (let i = 2; i <= squareRoot; i++) {
        if (num % 2 === 0) {
            return false;
        }
    }
    return num > 1;
}