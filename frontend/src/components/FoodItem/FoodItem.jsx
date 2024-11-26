import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ image, name, price, desc, id }) => {
  const { cartItems = {}, addToCart, removeFromCart, url = "", currency = "$" } =
    useContext(StoreContext);  // Default empty object if cartItems is undefined

  // Get the current quantity of the item from cartItems, if not found default to 0
  const itemCount = cartItems[id] || 0;

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={`${url}/images/${image}`}
          alt={`Food item: ${name}`}  // Descriptive alt text for accessibility
        />
        {!itemCount ? (
          <img
            className="add"
            onClick={() => addToCart(id)}  // Add item to cart
            src={assets.add_icon_white}
            alt="Add to cart"
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}  // Remove item from cart
              alt="Remove from cart"
            />
            <p>{itemCount}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => addToCart(id)}  // Increase item quantity in cart
              alt="Add one more item"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating stars" />
        </div>
        <p className="food-item-desc">{desc}</p>
        <p className="food-item-price">
          {currency}
          {price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
