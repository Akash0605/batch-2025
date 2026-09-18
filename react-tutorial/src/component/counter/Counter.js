import { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0);


    const increment = () => {
        console.log("Increment button clicked");
        // count++;
        if (count < 10) setCount(count + 1);
    };

    const decrement = () => {
        console.log("Decrement button clicked");
        // count--;
        if (count > 0) setCount(count - 1);
    };

    return (
        <div style={{ display: "flex", marginTop: "1rem", flexDirection: "column", alignItems: "center", gap: "10px" }}>

            <h1>Current Count: {count}</h1>

            <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={increment}>+ Increment</button>
                <button onClick={decrement}>- Decrement</button>
            </div>
        </div>
    )
}