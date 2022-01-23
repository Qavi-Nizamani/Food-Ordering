import React from "react";
import ReactDOM from "react-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";
import CartProduct from "./CartProduct";
import classes from "./CartProducts.module.css";
export const BackDrop = () => {
  return <div className={classes.backDrop}></div>;
};
const Products = (props) => {
  return (
    <>
      <BackDrop />
      <Card className={classes.cartProducts}>
        {props.products.map((product) => {
          return (
            <CartProduct
              key={product.id.toString()}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              count={product.count}
            />
          );
        })}
        <div className={classes.cartProducts__action}>
          <Button onClick={props.onClick}>Cancel</Button>
          <Button onClick={props.onClick}>Order</Button>
        </div>
      </Card>
    </>
  );
};
const CartProducts = (props) => {
  return ReactDOM.createPortal(
    <Products products={props.products} onClick={props.onClick} />,
    document.getElementById("overlay-elements")
  );
};

export default CartProducts;
