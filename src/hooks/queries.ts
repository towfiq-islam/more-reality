"use client";
import { useQuery } from "@tanstack/react-query";
import { BlogData, HomepageData } from "./api";

// Homepage data
export const useHomepageData = () => {
  return useQuery({
    queryKey: ["homepage-data"],
    queryFn: HomepageData,
  });
};

// BlogData
export const useBlogData = (per_page?: React.ReactNode) => {
  return useQuery({
    queryKey: ["blog-data", per_page],
    queryFn: () => BlogData(per_page),
  });
};
