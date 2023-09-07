import React from 'react'
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const Navbar = () => {
    return (
        <>
            <nav className={styles.Navbar}>
                <ul>
                    <Link href="/">
                        {/* <a> */}
                        <li>
                            Home
                        </li>
                        {/* </a> */}
                    </Link>
                    <Link href="/aboutpage">
                        {/* <a> */}
                        <li>
                            About
                        </li>
                        {/* </a> */}
                    </Link>
                    <Link href="/blogpage">
                        {/* <a> */}
                        <li>
                            Blog
                        </li>
                        {/* </a> */}
                    </Link>
                    <Link href="/contactpage">
                        {/* <a> */}
                        <li>
                            Contact
                        </li>
                        {/* </a> */}
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
