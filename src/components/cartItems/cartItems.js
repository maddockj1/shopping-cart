import React from 'react'

const CartItems = ({ items }) => {
        return(
           
                <div className="row">
                  <div className="col-md-8">{items.product.name}</div>
                  <div className="col-md-2">{items.product.priceInCents}</div>
                  <div className="col-md-2">{items.quantity}</div>
                </div>
    )
}
export default CartItems