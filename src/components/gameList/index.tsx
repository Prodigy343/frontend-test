import { FC } from "react";
import GameCard from "../gameCard";
import { Game } from "@/types/games";
import styles from "./index.module.css";

interface GameListProps {
  games: Game[];
  onAddToCart: (game: Game) => void;
  onLoadMore: () => void;
}

const GameList: FC<GameListProps> = ({ games, onAddToCart, onLoadMore }) => {
  return (
    <div>
      <div className={styles.game_list}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} onAddToCart={onAddToCart} />
        ))}
      </div>
      <button className={styles.add_more} onClick={() => onLoadMore()}>
        SEE MORE
      </button>
    </div>
  );
};

export default GameList;