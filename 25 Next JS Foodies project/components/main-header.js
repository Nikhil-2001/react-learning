import Link from "next/link";
import logoimg from '@/assets/logo.png'
import classes from './main-header.module.css'

export default function MainHeader() {
    return (<header className={classes.header}>
        <Link className={classes.logo} href='/'>
            <img src={logoimg.src} alt='A food on a plate wit it'/>
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href='/meals'>Browse Meals</Link>
                </li>
                <li>
                    <Link href='/community'>Foodies Community</Link>
                </li>
            </ul>
        </nav>
    </header>)
}