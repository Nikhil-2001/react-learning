import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending',
            message: 'Sending cart data!'
        }))

        const sendRequest = async () => {
            const response = await fetch('https://learning-react-a5740-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            })

            if (!response.ok) {
                throw new Error('Sending cart data failed')
            }
        }

        try {
            await sendRequest()
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data!'
            }))
        } catch (e) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Error sending cart data!'
            }))
        }
    }
}

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://learning-react-a5740-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json')

            if (!response.ok) {
                throw new Error('Sending cart data failed')
            }
            const data = await response.json()
            return data
        }

        try {
            const cartData = await fetchData()
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }))
        } catch (e) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Error sending cart data!'
            }))
        }
    }
}