import { useMutation } from "@tanstack/react-query";
import { AddNewsletter } from "./api";
import toast from "react-hot-toast";

// Newsletter Section
export const useNewsletter = () => {
  return useMutation({
    mutationKey: ["newsletter"],
    mutationFn: (payload: React.ReactNode) => AddNewsletter(payload),
    onSuccess: data => {
      console.log(data);
      if (data?.success === true) {
        return toast.success(data?.message);
      }
      toast.error(data?.message);
    },
  });
};
