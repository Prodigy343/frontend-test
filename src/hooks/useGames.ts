import { useState, useEffect } from "react";
import { fetchGames } from "@/services/gamesService";
import { Game, UseGamesReturn } from "@/types/games";
import { handleError } from "@/utils/handleError";
import { AppError } from "@/types/common";

export const useGames = (genre?: string, initialPage: number = 1): UseGamesReturn => {
  const [games, setGames] = useState<Game[]>([]);
  const [availableFilters, setAvailableFilters] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AppError | null>(null);

  useEffect(() => {
    const loadGames = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetchGames(genre, currentPage);
        setGames(response.games);
        setAvailableFilters(response.availableFilters);
        setTotalPages(response.totalPages);
      } catch (err) {
        const appError = handleError(err);
        setError(appError);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, [genre, currentPage]);

  return {
    games,
    availableFilters,
    currentPage,
    totalPages,
    loading,
    error,
    setCurrentPage,
  };
};