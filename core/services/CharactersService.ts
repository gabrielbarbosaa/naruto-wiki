"use client"
import useSWR from "swr";
import { api } from ".";
import { AllCharacters } from "../interfaces/AllCharacters";

const getAllCharacters = async (url: string, page: string, limit: number): Promise<AllCharacters> => {
  const response = await api.get<AllCharacters>(`${url}?page=${page}&limit=${limit}`);
  return response.data;
};
  
export function useAllCharacters(page: string, limit: number) {
  const key = ["character", page, limit];
  const fetcher = async () => getAllCharacters("character", page, limit);
  const { data, error } = useSWR<AllCharacters>(key, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
  };
}