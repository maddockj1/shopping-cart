import React, { Component } from 'react'
import Product from '../product/product.js'

class AddItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Medicore Iron Watch',
            quantity: 1,
            products: [
                { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
                { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
                { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
                { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
                { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
                { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
                { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
                { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
                { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
              ]
        }
    }
    render(){
        return(
            <div>
            <form >
                <div>
                <label>Quantity</label>
                <input />
                </div>
                <div>
                <label>Products</label>
                <select>
                { this.state.products.map((x, y)=> <Product key={y} id={y} items= {x}/> )}
                </select>
                </div>
            </form>
            </div>
        )
    }
}
export default AddItem