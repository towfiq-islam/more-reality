import { createSlice } from "@reduxjs/toolkit";
import m1 from "../../assests/about/m1.png";
import m2 from "../../assests/about/m2.png";
import m3 from "../../assests/about/m3.png";
import m4 from "../../assests/about/m4.png";
import m5 from "../../assests/about/m5.png";
import m6 from "../../assests/about/m6.png";
import m7 from "../../assests/about/m7.png";
import m8 from "../../assests/about/m8.png";
import m9 from "../../assests/about/m9.png";
import m10 from "../../assests/about/m10.png";

type ImageObject = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
};

type teamDataSchema = {
  imgUrl: string | ImageObject;
  name: string;
  descreption: string;
  phone: string;
  mailAddres: string;
  address: string;
  id: number;
};

const teamData: teamDataSchema[] = [
  {
    id: 1,
    imgUrl: m1,
    name: "Alice Rahman",
    descreption:
      "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
    phone: "+8801700000001",
    mailAddres: "alice@domain.com",
    address: "Dhaka, Bangladesh",
  },
  {
    id: 2,
    imgUrl: m2,
    name: "Bashir Uddin",
    descreption: "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
    phone: "+8801700000002",
    mailAddres: "bashir@domain.com",
    address: "Chittagong, Bangladesh",
  },
  {
    id: 3,
    imgUrl: m3,
    name: "Chad Islam",
    descreption: "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
    phone: "+8801700000003",
    mailAddres: "chad@domain.com",
    address: "Sylhet, Bangladesh",
  },
  {
    id: 4,
    imgUrl: m4,
    name: "Dipa Khatun",
    descreption: "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
    phone: "+8801700000004",
    mailAddres: "dipa@domain.com",
    address: "Rajshahi, Bangladesh",
  },
  {
    id: 5,
    imgUrl: m5,
    name: "Emon Sarker",
    descreption: "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
    phone: "+8801700000005",
    mailAddres: "emon@domain.com",
    address: "Khulna, Bangladesh",
  },
  {
    id: 6,
    imgUrl: m6,
    name: "Farzana Hossain",
    descreption: "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
    phone: "+8801700000006",
    mailAddres: "farzana@domain.com",
    address: "Barisal, Bangladesh",
  },
  {
    id: 7,
    imgUrl: m7,
    name: "Gazi Arif",
    descreption: "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
    phone: "+8801700000007",
    mailAddres: "gazi@domain.com",
    address: "Narayanganj, Bangladesh",
  },
  {
    id: 8,
    imgUrl: m8,
    name: "Hasan Jamil",
    descreption: "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
    phone: "+8801700000008",
    mailAddres: "hasan@domain.com",
    address: "Dhaka, Bangladesh",
  },
  {
    id: 9,
    imgUrl: m9,
    name: "Ishrat Chowdhury",
    descreption: "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
    phone: "+8801700000009",
    mailAddres: "ishrat@domain.com",
    address: "Comilla, Bangladesh",
  },
  {
    id: 10,
    imgUrl: m10,
    name: "Jabed Khan",
    descreption: "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
    phone: "+8801700000010",
    mailAddres: "jabed@domain.com",
    address: "Sylhet, Bangladesh",
  },
  {
    id: 11,
    imgUrl: m1,
    name: "Kazi Tahsin",
    descreption: "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
    phone: "+8801700000011",
    mailAddres: "kazi@domain.com",
    address: "Mymensingh, Bangladesh",
  },
  {
    id: 12,
    imgUrl: m2,
    name: "Lima Haque",
    descreption: "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
    phone: "+8801700000012",
    mailAddres: "lima@domain.com",
    address: "Rangpur, Bangladesh",
  },
  {
    id: 13,
    imgUrl: m3,
    name: "Mamun Bhuiyan",
    descreption: "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
    phone: "+8801700000013",
    mailAddres: "mamun@domain.com",
    address: "Dinajpur, Bangladesh",
  },
  {
    id: 14,
    imgUrl: m4,
    name: "Nazia Akter",
    descreption: "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
    phone: "+8801700000014",
    mailAddres: "nazia@domain.com",
    address: "Dhaka, Bangladesh",
  },
  {
    id: 15,
    imgUrl: m5,
    name: "Omar Faruk",
    descreption: "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
    phone: "+8801700000015",
    mailAddres: "omar@domain.com",
    address: "Jessore, Bangladesh",
  },
  {
    id: 16,
    imgUrl: m6,
    name: "Papia Roy",
    descreption: "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
    phone: "+8801700000016",
    mailAddres: "papia@domain.com",
    address: "Bogra, Bangladesh",
  },
  {
    id: 17,
    imgUrl: m7,
    name: "Qazi Rifat",
    descreption: "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
    phone: "+8801700000017",
    mailAddres: "rifat@domain.com",
    address: "Noakhali, Bangladesh",
  },
  {
    id: 18,
    imgUrl: m8,
    name: "Raihan Morshed",
    descreption: "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
    phone: "+8801700000018",
    mailAddres: "raihan@domain.com",
    address: "Tangail, Bangladesh",
  },
  {
    id: 19,
    imgUrl: m9,
    name: "Sabrina Nur",
    descreption: "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
    phone: "+8801700000019",
    mailAddres: "sabrina@domain.com",
    address: "Narsingdi, Bangladesh",
  },
  {
    id: 20,
    imgUrl: m10,
    name: "Tanvir Arefin",
    descreption: "I’m here to help you with your next property sale or purchase! You can rest assured that with my expertise I will guide you every step of the way to ensure you have the best buying or selling process possible. Contact me today to see how I can help!",
    phone: "+8801700000020",
    mailAddres: "tanvir@domain.com",
    address: "Gazipur, Bangladesh",
  },
];

const initialState = {
  teamData,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export const {} = counterSlice.actions;
export default counterSlice.reducer;
