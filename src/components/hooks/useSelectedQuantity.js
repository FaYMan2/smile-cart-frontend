import { paths } from "ramda";
import useCartItemsStore from "stores/useCartItemsStore";
import { shallow } from "zustand/shallow";

const useSelectedQuantity = slug => {
  const [selectedQuantity, setSelectedQuantity] = useCartItemsStore(
    paths([["cartItems", slug], ["setSelectedQuantity"]]),
    shallow
  );

  const updatedSelectedQuantity = quantity => {
    setSelectedQuantity(slug, quantity);
  };

  return [selectedQuantity, updatedSelectedQuantity];
};

export default useSelectedQuantity;
