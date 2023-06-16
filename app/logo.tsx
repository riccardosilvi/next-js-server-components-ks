import styles from "@/app/page.module.css";
import Image from "next/image";

export default function Logo(){
    return (
        <div className={styles.center}>
            <Image
                className={styles.logo}
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
            />
        </div>
    )
}
