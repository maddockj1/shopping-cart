import React from 'react'

const Product = ({ items }) => (

    <option value={items.name}>
    {items.name}
  </option>

)

export default Product