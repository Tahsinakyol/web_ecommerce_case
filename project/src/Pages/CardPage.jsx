import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions";
import "./CartPage.css";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  // Toplam fiyatı hesapla
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity; // Ürün fiyatı * miktar
  }, 0);
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="cart_general_outher">
        <div className="container">
          <h1 className="basket_header">My Basket</h1>
          {cartItems.length === 0 ? (
            <div className="center_oops">
              <i class="fa-regular fa-hand"></i>
              <span>Your basket is Empty</span>
            </div>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <div key={index} className="cart_item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart_item_image"
                  />
                  <div className="cart_item_detail">
                    <h3>{item.name}</h3>
                    <p>
                      {item.price}.00 ₺ x {item.quantity}
                    </p>{" "}
                    {/* Miktarı göster */}
                    <p>
                      Subtotal: {(item.price * item.quantity).toFixed(2)} ₺
                    </p>{" "}
                    {/* Ara toplam */}
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="remove_btn"
                    >
                      Remove from Basket
                    </button>
                  </div>
                </div>
              ))}
              <div className="total_price">
                <h2>Total Price:{totalPrice.toFixed(2)} ₺</h2>
                <button onClick={() => setOpenModal(true)}>buy</button>
              </div>
            </>
          )}
        </div>
      </div>
      {openModal == true ? (
        <>
          <div className="modal_creitCart">
            <div className="modal_inner">
              <h3>Creit Card Payment</h3>
              <div className="input_outher">
                <input type="text" placeholder="Write Name and Surname" />
              </div>
              <div className="input_outher">
                <input
                  type="number"
                  placeholder="Write Creit Card Number"
                  maxLength={16}
                />
              </div>
              <div className="two_input_outher">
                <div style={{ flex: 1 }}>
                  <div className="input_outher">
                    <input type="number" placeholder="22/05" maxLength={5} />
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div className="input_outher">
                    <input
                      type="number"
                      placeholder="Security Number"
                      maxLength={3}
                    />
                  </div>
                </div>
              </div>
              <div className="two_input_outher">
                <button
                  className="cancel_modal"
                  onClick={() => setOpenModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="cancel_modal"
                  style={{ backgroundColor: "green" }}
                >
                  Going on
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default CartPage;
