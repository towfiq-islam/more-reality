"use client";
import { useQuery } from "@tanstack/react-query";
import {
  AboutUs,
  BlogBanner,
  BlogData,
  BLogDetails,
  BuyingHome,
  Commercial,
  ContactInfo,
  GetCities,
  GetStates,
  HomepageData,
  JoinMoreRealty,
  MeetTheTeamBanner,
  MoreGives,
  OurOffices,
  OurOfficesBanner,
  OurServices,
  SellingHome,
  SiteSettings,
  SocialLinks,
  TeamMembers,
  UnitedRealStateData,
} from "./api";

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
export const useBlogData = (per_page?: React.ReactNode, page_id?: number) => {
  return useQuery({
    queryKey: ["blog-data", per_page, page_id],
    queryFn: () => BlogData(per_page, page_id),
  });
};

// Blog Details
export const useBlogDetails = (slug: string) => {
  return useQuery({
    queryKey: ["blog-details", slug],
    queryFn: () => BLogDetails(slug),
    enabled: !!slug,
  });
};

// Blog Banner
export const useBlogBanner = () => {
  return useQuery({
    queryKey: ["blog-banner"],
    queryFn: BlogBanner,
  });
};

// Join More Realty
export const useJoinMoreRealty = () => {
  return useQuery({
    queryKey: ["join-more-realty"],
    queryFn: JoinMoreRealty,
  });
};

// Commercial
export const useCommercial = () => {
  return useQuery({
    queryKey: ["commercial"],
    queryFn: Commercial,
  });
};

// Our Services Section
export const useOurServices = () => {
  return useQuery({
    queryKey: ["our-services"],
    queryFn: OurServices,
  });
};

// All Team Members
export const useTeamMembers = (
  per_page?: React.ReactNode,
  page_id?: number
) => {
  return useQuery({
    queryKey: ["team-members", per_page, page_id],
    queryFn: () => TeamMembers(per_page, page_id),
  });
};

// Our Offices
export const useOurOffices = (
  per_page?: React.ReactNode,
  page_id?: number,
  country_id?: number | null,
  city_id?: number | null
) => {
  return useQuery({
    queryKey: ["our-offices", per_page, page_id, country_id, city_id],
    queryFn: () => OurOffices(per_page, page_id, country_id, city_id),
  });
};

// About Us
export const useAboutUs = () => {
  return useQuery({
    queryKey: ["about-us-secondaryBanner"],
    queryFn: AboutUs,
  });
};

// Meet the team banner
export const useMeetTheTeamBanner = () => {
  return useQuery({
    queryKey: ["meet-the-team-banner"],
    queryFn: MeetTheTeamBanner,
  });
};

// Our Offices Banner
export const useOurOfficesBanner = () => {
  return useQuery({
    queryKey: ["our-offices-banner"],
    queryFn: OurOfficesBanner,
  });
};

// Get states
export const useGetStates = () => {
  return useQuery({
    queryKey: ["get-states"],
    queryFn: GetStates,
  });
};

// Get Cities
export const useGetCities = () => {
  return useQuery({
    queryKey: ["get-cities"],
    queryFn: GetCities,
  });
};

// Get Cities
export const useMoreGives = () => {
  return useQuery({
    queryKey: ["more-gives"],
    queryFn: MoreGives,
  });
};

// United Real State
export const useUnitedRealState = () => {
  return useQuery({
    queryKey: ["united-real-state"],
    queryFn: UnitedRealStateData,
  });
};

// Buying Home
export const useBuyingHome = () => {
  return useQuery({
    queryKey: ["buying-home"],
    queryFn: BuyingHome,
  });
};

// Selling Home
export const useSellingHome = () => {
  return useQuery({
    queryKey: ["selling-home"],
    queryFn: SellingHome,
  });
};

// ContactInfo
export const useContactInfo = () => {
  return useQuery({
    queryKey: ["contact-info"],
    queryFn: ContactInfo,
  });
};
