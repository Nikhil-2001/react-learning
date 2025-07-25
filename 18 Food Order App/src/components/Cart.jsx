import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext"
import CartItem from "./CartItem";

export default function Cart() {
    const cartCtx = useContext(CartContext)
    const userCtx = useContext(UserProgressContext)
    const cartTotal = cartCtx.items.reduce((total, items) =>{return total + items.quantity * items.price},0)

    function handleCloseCart() {
        userCtx.hideCart();
    }

    function showCheckOut() {
        userCtx.showCheckOut();
    }

    return (<Modal className="cart" open={userCtx.progress === 'cart'} onClose={userCtx.progress === 'cart' ? handleCloseCart : null}>
        <h2>Your cart</h2>
        <ul>
            {cartCtx.items.map((item) => <CartItem key={item.id} {...item} onIncrease={() => cartCtx.addItem(item)} onDecrease={() => cartCtx.removeItem(item.id)}></CartItem>)}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
            <Button textOnly onClick={handleCloseCart}>Close</Button>
            {cartCtx.items.length > 0 && <Button onClick={showCheckOut}>Go to Checkout</Button>}
        </p>
    </Modal>)
}