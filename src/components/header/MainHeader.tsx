import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

export const MainHeader = () => {
  return (
    <header className={styles.main}>
      <div className={`${styles.container} full-width-container fixed-two-columns`}>
        <Link href="/" className={styles.brand}>GamerShop</Link>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link href="/cart">
                <Image
                  src="/icons/cart.svg"
                  alt="cart logo"
                  className={styles.cart}
                  width={20} 
                  height={20}
                />
              </Link>  
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};