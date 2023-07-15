// import React, { useState } from 'react';
// import { CartItem } from '../Shared/CartItem';
// import Menu from '../Shared/Menu';
// import './Card.css';

// const Card = (props) => {
//     const [quantity, setQuantity] = useState(0);

//     const handleIncrement = () => {
//         setQuantity(quantity + 1);
//     };

//     const handleDecrement = () => {
//         if (quantity > 0) {
//             setQuantity(quantity - 1);
//         }
//     };

//     return (
//         <div className="food-card">
//             <p>{props.price}</p>
//             <select className='m-2 h-100 rounded'>
//                 <option value="half">Half</option>
//                 <option value="full">Full</option>
//             </select>

//             <div className="quantity-container">
//                 <button onClick={handleDecrement}>-</button>
//                 <span>{quantity}</span>
//                 <button onClick={handleIncrement}>+</button>
//             </div>
//         </div>
//     );
// };

// export default Card;
