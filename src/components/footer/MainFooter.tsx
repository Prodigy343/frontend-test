import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export const MainFooter = () => {
  return (
    <footer className={styles.main}>
      <Link href="/" className={styles.container}>
        <Image
          src="/icons/apply-logo.svg"
          alt="Apply Digital"
          className={styles.logo}
          width={170} 
          height={47.09}
        />
      </Link>
    </footer>
  );
};