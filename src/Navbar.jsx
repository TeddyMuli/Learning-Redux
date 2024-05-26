import { useSelector } from "react-redux"

export function Navbar() {
    let cartCount = useSelector(state => state.cartCount.value)

    return (
        <div className="navbar">
            <h2 className="">Number of items {cartCount}</h2>
        </div>
    )
};
