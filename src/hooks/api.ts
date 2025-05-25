import { axiosPublic } from "./useAxiosPublic";

// Homepage data
export const HomepageData = async () => {
  const { data } = await axiosPublic("/api/get_home");
  return data?.data;
};

// Blog data
export const BlogData = async (per_page?: React.ReactNode) => {
  let url = "/api/blogs?";
  if (per_page) url += `per_page=${per_page}&`;
  url = url.endsWith("&") ? url.slice(0, -1) : url;
  url = url.endsWith("?") ? url.slice(0, -1) : url;
  const { data } = await axiosPublic(url);
  return data?.data;
};

// Blog Details
export const BLogDetails = async (slug: string) => {
  const { data } = await axiosPublic(`/api/blog/${slug}`);
  return data?.data;
};

// Site Settings
export const SiteSettings = async () => {
  const { data } = await axiosPublic("/api/site-settings");
  return data?.data;
};

// Social Links
export const SocialLinks = async () => {
  const { data } = await axiosPublic("/api/social-links");
  return data?.data;
};

// Newsletter Section (POST API)
export const AddNewsletter = async (payload: React.ReactNode) => {
  const { data } = await axiosPublic.post("/api/newsletter", payload);
  return data;
};
