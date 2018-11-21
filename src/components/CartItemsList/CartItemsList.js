import React from 'react';
import CartItems from '../cartItems/cartItems.js'

const CartItemsList = ({ items }) => (
    <ul>
        { items.map((x, y)=> <CartItems key={y} id={y} items= {x}/> )}
    </ul>
)



export default CartItemsList