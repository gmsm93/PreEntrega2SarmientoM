import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context";

export const CartButtons = () => {
  const [state, setState] = React.useState(1);

  const { productId } = useParams();

  const { itemCount, setItemCount } = useContext(CartContext);

  console.log(itemCount);
  const handleMoreClick = () => {
    if (state === 5) return;
    setState(state + 1);
  };
  const handleLessClick = () => {
    if (state === 1) return;
    setState(state - 1);
  };

  const addToCart = () => {
    const existingProduct = itemCount.products.find(
      (p) => p.productId === productId
    );
    if (existingProduct) {
      existingProduct.qty += state;
    } else {
      const newProduct = {
        productId,
        qty: state,
      };
      setItemCount((prevState) => ({
        qtyItems: prevState.qtyItems + state,
        products: [...prevState.products, newProduct],
      }));
    }
  };

  return (
    <div className="d-flex align-items-center">
      <div className="d-flex w-25">
        <Button
          onClick={handleLessClick}
          variant="outline-secondary"
          className="rounded-0"
        >
          -
        </Button>
        <input
          type="text"
          className="form-control form-control-sm text-center rounded-0"
          value={state}
          placeholder="Cantidad custom"
          id="valueInput"
        />
        <Button
          onClick={handleMoreClick}
          variant="outline-secondary"
          className="rounded-0"
        >
          +
        </Button>
      </div>
      <Button className="ml-2" variant="primary" onClick={addToCart}>
        Agregar al Carrito
      </Button>
    </div>
  );
};
