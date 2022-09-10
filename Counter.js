import React, { useState } from "react"

const Counter = ({stock = 5, initial = 1, onAdd}) => {

    const [cart, setCart] = useState(initial)

  return (
    <div className="card bg-neutral w-96 shadow-xl select-none">
        <div className="card-body">
            <h2 className="card-title text-white justify-center">Termo Yoda Stanley</h2>
            <p className="text-white">Stock: {stock}</p>
            <p className="text-white">Add to cart: {cart}</p>
            <div className="card-actions border-slate-50">
                <button className="btn btn-primary" onClick={()=> setCart (cart -1)} disabled = {cart === initial}>-</button>
                <button className="btn btn-primary" onClick={() => setCart (cart + 1)} disabled = {cart === stock}>+</button>
            </div>
        </div>
    </div>
  )
}
export default Counter