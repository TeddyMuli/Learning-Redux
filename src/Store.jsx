import { useState } from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./cartCountSlice";
import { useSelector } from "react-redux";

export function Store() {
    const [incrementAmount, setIncrementAmount] = useState('')
    let cartCount = useSelector(state => state.cartCount.value)
    let dispatch = useDispatch()
    

    return (
        <>
            <div>
                <h2>Protein powder</h2>
                <div>
                    <button onClick={() => dispatch(increment())} id="button">+</button>
                    <button onClick={() => dispatch(decrement())} id="button">-</button>
                    <input value={incrementAmount} onChange={(event) => setIncrementAmount(Number(event.target.value))} type="number" id="input" />
                    <button onClick={() => dispatch(incrementByAmount(incrementAmount))} id="button">Add X items</button>
                </div>
            </div>
            <h2>Number of items in cart {cartCount}</h2>
        </>
    )
};
