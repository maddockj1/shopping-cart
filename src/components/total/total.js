import React, { Component } from 'react'


class Total extends Component {
    render(){
        let total = 0
        this.props.items.forEach( item => {
            total += item.product.priceInCents * item.quantity
          })
          total = total + ''
          let price = `$${total.substring(0,total.length-2)}.${total.substring(total.length-2)}`
          return(
            <div>
              Total Price = {price}
            </div>
          )
    }
}


export default Total