import { axiosPublic } from "./useAxiosPublic";

// Homepage - Banner
export const HomepageBanner = async () => {
  const { data } = await axiosPublic("/api/cms/home-banner");
  return data?.data;
};
