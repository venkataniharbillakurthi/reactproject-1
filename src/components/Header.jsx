import React from 'react'

function Header() {
  return (
    <div>
         <div class="nav">
        <div class="logo">
            <img src="https://cdn.pixabay.com/photo/2013/07/12/15/53/shopping-cart-150504_1280.png" alt="no image" width="100px" style={{padding: "10px;"}} />
        </div>
        <div class="memu">
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/contact">Contact us</a>
        </div>
        <div class="btns">
            <button><a href="/login">login</a></button>
        </div>
    </div>
    </div>
  )
}

export default Header
