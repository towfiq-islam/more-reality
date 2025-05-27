import { axiosPublic } from "./useAxiosPublic";

// Homepage data
export const HomepageData = async () => {
  const { data } = await axiosPublic("/api/get_home");
  return data?.data;
};

// Blog data
export const BlogData = async (
  per_page?: React.ReactNode,
  page_id?: number
) => {
  let url = "/api/blogs?";
  if (per_page) url += `per_page=${per_page}&`;
  if (page_id) url += `page=${page_id}&`;

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

// Blog Banner
export const BlogBanner = async () => {
  const { data } = await axiosPublic("/api/get_blog");
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

// Join Us (POST API)
export const JoinUs = async (payload: any) => {
  const { data } = await axiosPublic.post("/api/contact_store", payload);
  return data?.data;
};

// Join More Realty
export const JoinMoreRealty = async () => {
  const { data } = await axiosPublic("/api/get_join");
  return data?.data;
};

// Commercial
export const Commercial = async () => {
  const { data } = await axiosPublic("/api/get_commercial");
  return data?.data;
};

// Our Services Section
export const OurServices = async () => {
  const { data } = await axiosPublic("/api/our-services");
  return data?.data;
};

// All Team Members
export const TeamMembers = async (
  per_page?: React.ReactNode,
  page_id?: number
) => {
  let url = "/api/our-teams?";
  if (per_page) url += `item=${per_page}&`;
  if (page_id) url += `page=${page_id}&`;

  url = url.endsWith("&") ? url.slice(0, -1) : url;
  url = url.endsWith("?") ? url.slice(0, -1) : url;

  const { data } = await axiosPublic(url);
  return data?.data;
};

// Our Offices
export const OurOffices = async (
  per_page?: React.ReactNode,
  page_id?: number,
  country_id?: number | null,
  city_id?: number | null
) => {
  let url = "/api/our-offices?";
  if (per_page) url += `item=${per_page}&`;
  if (page_id) url += `page=${page_id}&`;
  if (country_id) url += `country_id=${country_id}&`;
  if (city_id) url += `city_id=${city_id}&`;

  url = url.endsWith("&") ? url.slice(0, -1) : url;
  url = url.endsWith("?") ? url.slice(0, -1) : url;

  const { data } = await axiosPublic(url);
  return data?.data;
};

// About Us
export const AboutUs = async () => {
  const { data } = await axiosPublic("/api/get_about");
  return data?.data;
};

// Meet the team Banner
export const MeetTheTeamBanner = async () => {
  const { data } = await axiosPublic("/api/get_team");
  return data?.data;
};

// Our Offices Banner
export const OurOfficesBanner = async () => {
  const { data } = await axiosPublic("/api/get_our_office");
  return data?.data;
};

// Get states
export const GetStates = async () => {
  const { data } = await axiosPublic("/api/states");
  return data?.data;
};

// Get Cities
export const GetCities = async () => {
  const { data } = await axiosPublic("/api/cities");
  return data?.data;
};

// More Gives Page
export const MoreGives = async () => {
  const { data } = await axiosPublic("/api/get_more_gives");
  return data?.data;
};

// United Real State
export const UnitedRealStateData = async () => {
  const { data } = await axiosPublic("/api/get_united_real_state");
  return data?.data;
};

// Buying Home
export const BuyingHome = async () => {
  const { data } = await axiosPublic("/api/get_buying");
  return data?.data;
};

// Selling Home
export const SellingHome = async () => {
  const { data } = await axiosPublic("/api/get_selling");
  return data?.data;
};
