import React, { useState } from 'react';


const Counter = () => {
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div>
            <div className="quantity-container">
                <button className=" bg-red-600 text-sm" onClick={handleDecrement}>-</button>
                <span>{quantity}</span>
                <button className="bg-red-600 text-sm" onClick={handleIncrement}>+</button>
            </div>
        </div>
    );
};

export default Counter;
