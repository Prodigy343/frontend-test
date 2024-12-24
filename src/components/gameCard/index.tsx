import { Game } from "@/types/games";
import Image from "next/image";
import { FC } from "react";
import styles from "./index.module.css";

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL || "http://localhost:3000";

interface GameCardProps {
  game: Game;
  onAddToCart: (game: Game) => void;
}

const GameCard: FC<GameCardProps> = ({ game, onAddToCart }) => {
  return (
    <div className={styles.game_card}>
      <div className={styles.image_container}>
        <Image
          src={BASE_URL + game.image}
          alt={game.name}
          fill /* Dynamically adjusts width and height */
          className={styles.game_image}
        />
      </div>
      {game.isNew && <span className={styles.badge}>New</span>}
      <div className={styles.game_info}>
        <p className={styles.game_genre}>{game.genre}</p>
        <h3 className={styles.game_name}>{game.name}</h3>
        <p className={styles.game_price}>${game.price.toFixed(2)}</p>
      </div>
      <button onClick={() => onAddToCart(game)} className={styles.add_to_cart_btn}>
        ADD TO CART
      </button>
    </div>
  );
};

export default GameCard;