"use client";

import React, { useEffect } from "react";
import { useCartStore } from "@/store/useCartStore";
import GameList from "@/components/gameList";
import { Game } from "@/types/games";
import { useGameStore } from "@/store/useGameStore";

const Home: React.FC = () => {
  const { loadGames, loading, currentGenre, currentPage, games, error } = useGameStore();
  const { addGame } = useCartStore();

  useEffect(() => {
    loadGames();
  }, [loadGames])

  const handleAddToCart = (game: Game) => {
    addGame(game);
  };

  const handleLoadMore = () => {
    loadGames(currentGenre ?? undefined, currentPage + 1, true);
  }

  return (
    <div className="full-width-container">
      <h1>Game Store</h1>

      {loading && <p>Loading games...</p>}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
      {!loading && !error && <GameList games={games} onAddToCart={handleAddToCart} onLoadMore={handleLoadMore}/>}
    </div>
  );
};

export default Home;