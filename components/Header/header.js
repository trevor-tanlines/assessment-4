import Link from "next/link"
import styles from "@/components/Header/Header.module.css"


export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.bcit}>
                <img src="/images/bcit_logo.png" alt="bcit" width={45} height={45}></img>
            </div>
            <div className={styles.list}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className={styles.bars}>
                <img src="/images/bars.png" alt="bar" width={40} height={15}></img>
            </div>
        </div>
    )
}