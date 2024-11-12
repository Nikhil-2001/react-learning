import Link from "next/link";
import logoimg from '@/assets/logo.png'
import classes from './main-header.module.css'
import Image from "next/image";
import NavLink from "./navlink/navlink";

export default function MainHeader() {
    return (<header className={classes.header}>
        <Link className={classes.logo} href='/'>
            <Image src={logoimg} alt='A food on a plate wit it' priority/>
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink href='/meals'>Browse Meals</NavLink>
                </li>
                <li>
                    <NavLink href='/community'>Foodies Community</NavLink>
                </li>
            </ul>
        </nav>
    </header>)
}