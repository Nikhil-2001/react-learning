import { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "./UI/Modal";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext)

    const { data, isLoading: isSending, error, sendRequest, clearData } = useHttp('http://localhost:3000/orders', requestConfig)

    const cartTotal = cartCtx.items.reduce((total, items) => { return total + items.quantity * items.price }, 0)

    function handleClose() {
        userProgressCtx.hideCheckOut()
    }

    function handleFinish() {
        userProgressCtx.hideCheckOut()
        cartCtx.clearCart()
        clearData()
    }

    function handleSubmit(event) {
        event.preventDefault()
        const fd = new FormData(event.target)
        const customerData = Object.fromEntries(fd.entries())

        sendRequest(
            JSON.stringify({
                order: {
                    items: cartCtx.items,
                    customer: customerData
                }
            })
        )
    }

    let actions = (
        <p className="modal-actions">
            <Button type="button" onClick={handleClose} textOnly>Close</Button>
            <Button>Submit Order</Button>
        </p>
    )

    if (isSending)
        actions = <span>Sending Order Data</span>

    if (data && !error){
        return <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleFinish}>
            <h2>Success!</h2>
            <p>Your order was submitted successfully</p>
            <p>
                We will get back with more details via E-Mail soon
            </p>
            <p className="modal-actions">
                <Button onClick={handleClose}>Okay</Button>
            </p>
        </Modal>
    }

    return <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
            <Input label="Full Name" type="text" id="name" />
            <Input label="E-Mail Address" type="email" id="email" />
            <Input label="Street" type="text" id="street" />
            <div className="control-row">
                <Input label="Postal Code" type="text" id="postal-code" />
                <Input label="City" type="text" id="city" />
            </div>
            {error && <Error title="Failed to submit order data" message={error}></Error>}
            <p className="modal-actions">{actions}</p>
        </form>
    </Modal>
}