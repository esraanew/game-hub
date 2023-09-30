import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectedGerne: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "games",
    { params: { genres: selectedGerne?.id, platforms: selectedPlatform?.id } },
    [selectedGerne?.id, selectedPlatform?.id]
  );

export default useGames;
