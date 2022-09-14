import React from 'react'
import { Link } from 'react-router-dom'


function Products() {
  return (
    <section>
<h1>Product page</h1>
<ul>
  <li> <Link to='/products/p1'>A book</Link> </li>
  <li><Link to='/products/p2'>A carpet</Link> </li>
  <li><Link to='/products/p3'>An Online course</Link> </li>
</ul>
    </section>
    
  )
}

export default Products