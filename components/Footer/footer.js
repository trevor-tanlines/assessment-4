import styles from '@/components/Footer/footer.module.css'

export default function Footer() {
    return(
        <div className={styles.footer}>
            <div className={styles.bcit}>
            <img src="/images/bcit_logo.png" alt="bcit" width={70} height={70}></img>
            </div>
        <div className={styles.list}>
                <ul>
                    <li>Visit</li>
                    <li>Apply Now</li>
                    <li>Events</li>
                    <li>Careers</li>
                </ul>
            </div>
        </div>
    )
}