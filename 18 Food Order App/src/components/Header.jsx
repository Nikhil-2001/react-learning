import logoPng from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from "../store/CartContext"
import UserProgressContext from "../store/UserProgressContext"
import { useContext } from 'react'

export default function Header() {
    const cartCtx = useContext(CartContext)
    const userCtx = useContext(UserProgressContext)
    const itemsCount = cartCtx.items.reduce((total, items) =>{return total + items.quantity},0)

    function handleShowCart(){
        userCtx.showCart();
    }

    return <header id="main-header">
        <div id="title">
            <img src={logoPng} alt="food delivery company"></img>
            <h1>Nikhil's 30 mins delivery</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart}>Cart ({itemsCount})</Button>
        </nav>
    </header>
}