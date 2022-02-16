import { IFooterProps } from "../../uteis/interfaces";
import styles from './footer.module.css'

export default function FooterSection({ description }: IFooterProps) {
    return (
        <footer className={styles.footerContainer}>
            <p>{description}</p>
        </footer>
    )
}