import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../App/store/store.tsx";
import "./product.css";
import { addProduct, clearCart, removeProduct } from "../App/cartSlice";

const Product = () => {
  // useDispatch returns the Redux dispatch function.
  // We use dispatch to send actions like addProduct and removeProduct.
  const dispatch = useDispatch();

  // useSelector reads values from the Redux store.
  // Here we select the product list and the current cart items.
  const products = useSelector((state: RootState) => state.cart.products);
  const cart = useSelector((state: RootState) => state.cart.cart);

  // totalPrice is computed from the cart items using reduce.
  // The reduce callback is one of the callbacks in this component.
  const totalPrice = cart.reduce(
    (total: number, item) => total + item.price,
    0,
  );

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 Shopping Cart</h1>

      <div className="product-section">
        <h2 className="section-title">🛍️ Products</h2>
        <div className="products-list">
          {products.map((p) => (
            // products.map uses a callback to render each product card.
            <div key={p.id} className="product-card">
              <div className="product-info">
                <span className="product-name">{p.name}</span>
                <span className="product-price">{p.price}</span>
              </div>
              <button
                className="btn add-btn"
                // onClick callback dispatches the addProduct action.
                onClick={() => dispatch(addProduct(p))}
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <hr className="divider" />

      <div className="cart-section">
        <h2 className="section-title">🛒 Your Cart</h2>
        {cart.length == 0 ? (
          <p className="empty-cart">No item in the cart</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                // cart.map uses a callback to render cart rows for each item.
                <div key={item.id} className="cart-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">{item.price}</span>
                  <button
                    className="btn remove-btn"
                    // onClick callback dispatches removeProduct with the item id.
                    onClick={() => dispatch(removeProduct(item.id))}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <hr className="divider" />
      <div className="cart-summary">
        <p>
          <strong>Total Items:</strong> {cart.length}
        </p>
        <p>
          <strong>Total Price:</strong> ₹ {totalPrice}
        </p>
        <button
          className="btn clear-btn"
          // This onClick callback dispatches clearCart.
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
