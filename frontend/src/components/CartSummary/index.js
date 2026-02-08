import './index.css'

const CartSummary = props => {
  const {cartLiss, cartLis} = props
  var total = 0
  cartLis.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.itemQuantity
  })
  return(

        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs {total}
              /-
            </h1>
            <p className="total-items">{cartLiss} Items in cart</p>
            <button type="button" className="checkout-buttonlg d-sm-none">
              Checkout
            </button>
          </div>
        </>
    )
  }

export default CartSummary
