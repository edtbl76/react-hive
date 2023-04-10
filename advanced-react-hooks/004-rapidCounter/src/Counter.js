import React, { useState, useEffect } from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        setCounter(counter + 1)
    }, [counter])

    return (
        <div>
            Rapid Count: {counter}
        </div>
    )
}