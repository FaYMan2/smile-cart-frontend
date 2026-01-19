import { useContext } from "react";

import { Button } from "neetoui";
import { without } from "ramda";
import cartItemsContext from "src/contexts/cartItemsContext";

const AddToCart = ({ slug }) => {
  const [cartItems, setCartItems] = useContext(cartItemsContext);

  const handleClick = e => {
    e.stopPropagation();
    e.preventDefault();
    setCartItems(prevCartItems =>
      prevCartItems.includes(slug)
        ? without([slug], cartItems)
        : [slug, ...cartItems]
    );
  };

  return (
    <Button
      label={cartItems.includes(slug) ? "Remove from cart" : "Add to cart"}
      size="large"
      onClick={handleClick}
    />
  );
};

export default AddToCart;
