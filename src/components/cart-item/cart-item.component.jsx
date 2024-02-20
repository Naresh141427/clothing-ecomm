<<<<<<< HEAD
=======

>>>>>>> 1b99bda55dffdb3464e91fa01ca7a1c1692033e2
import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} × $ {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
