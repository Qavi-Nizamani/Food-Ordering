import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
const BackDrop = (props) => {
  return <div className={classes.backDrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const overlayEl = document.getElementById("overlay-elements");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, overlayEl)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlayEl
      )}
    </>
  );
};
export default Modal;
