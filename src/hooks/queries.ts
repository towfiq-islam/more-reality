"use client";
import { useQuery } from "@tanstack/react-query";
import { BlogData, HomepageData, SiteSettings, SocialLinks } from "./api";

// Homepage data
export const useHomepageData = () => {
  return useQuery({
    queryKey: ["homepage-data"],
    queryFn: HomepageData,
  });
};

// Site Settings
export const useSiteSettings = () => {
  return useQuery({
    queryKey: ["site-settings"],
    queryFn: SiteSettings,
  });
};

// Social Links
export const useSocialLinks = () => {
  return useQuery({
    queryKey: ["social-links"],
    queryFn: SocialLinks,
  });
};

// Blog Data
export const useBlogData = (per_page?: React.ReactNode) => {
  return useQuery({
    queryKey: ["blog-data", per_page],
    queryFn: () => BlogData(per_page),
  });
};
