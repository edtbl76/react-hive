import { useState, useEffect } from "react";

export const useCounter = (start = 0) => {
    // set the state
    const [ counter, setCounter ] = useState(start);

    // use the effect whenever the counter changes
    useEffect(() => {
        if (isPrime(counter)) {
            document.body.style.backgroundImage = 'linear-gradient(to right, coral, teal)';
        } else {
            document.body.style.backgroundImage = "";
        }
    }, [counter]);

    // create an easy-to-use increment function
    const increment = () => { setCounter(counter + 1)};

    // return the counter value and the incrementer
    return [counter, increment];
}

// Helper function for the custom hook
const isPrime = (num) => {
    const squareRoot = Math.sqrt(num);
    for (let i = 2; i <= squareRoot; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}