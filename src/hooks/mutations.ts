"use client";
import { useMutation } from "@tanstack/react-query";
import { AddNewsletter, JoinUs } from "./api";
import toast from "react-hot-toast";

// Newsletter Section
export const useNewsletter = () => {
  return useMutation({
    mutationKey: ["newsletter"],
    mutationFn: (payload: React.ReactNode) => AddNewsletter(payload),
    onSuccess: data => {
      if (data?.success === true) {
        return toast.success(data?.message);
      }
      toast.error(data?.message);
    },
  });
};

// Join Us
export const useJoinUs = () => {
  return useMutation({
    mutationKey: ["join-us"],
    mutationFn: (payload: any) => JoinUs(payload),
    onSuccess: () => {
      toast.success("Message Sent Successfully");
    },
  });
};
