"use client";
import Image from "next/image";
import Heading from "@/components/Tags/Heading/Heading";
import Paragraph from "@/components/Tags/Paragraph/Paragraph";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import {
  BluePhone,
  BlueMail,
  BlueLocation,
} from "../SvgContainer/SvgContainer";

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

interface MeetProps {
  isAllmember: boolean;
}

const Meet: React.FC<MeetProps> = ({ isAllmember }) => {
  const teamData = useSelector((state: RootState) => state.team.teamData);
  const [isOpen, setIsOpen] = useState<boolean | null>(false);
  const [activeMember, setactiveMember] = useState<teamDataSchema | null>(null);
  console.log(activeMember);

  return (
    <section className="py-10 xl:py-20 lg:px-5 3xl:px-0">
      <div className=" container">
        {/* Title */}
        <Heading
          Txt="Meet the Team"
          className="text-primary-text-blue font-semibold mb-2 xl:mb-4 text-center"
          Variant="h3"
        />
        {/* Sub Title */}
        <Paragraph
          Txt={"Our success starts with the people behind the name."}
          className="max-w-[1440px] text-primary-text-blue text-lg md:text-xl text-center mb-7 md:mb-12"
        />

        {/* Map */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 grid-col gap-x-6 3xl:gap-x-6 gap-y-7 md:gap-y-10">
          {(isAllmember ? teamData : teamData.slice(0, 5)).map(item => (
            <div
              key={item?.id}
              onClick={() => {
                setIsOpen(true);
                setactiveMember(item);
              }}
              className="text-center"
            >
              <Image
                data-aos="fade-up"
                data-aos-delay="100"
                width={271}
                height={271}
                src={
                  typeof item.imgUrl === "string"
                    ? item.imgUrl
                    : item.imgUrl.src
                }
                alt="Meet_img"
                className="rounded-full mx-auto w-[180px] 2xl:w-[200px] 3xl:w-[271px] h-[180px] 2xl:h-[200px] 3xl:h-[271px] cursor-pointer"
              />
              <Heading
                data-aos="fade-up"
                data-aos-delay="100"
                Variant="h3"
                Txt={item?.name}
                className="text-primary-text-blue text-lg md:!text-xl font-bold !mt-3 xl:!mt-5"
              />
            </div>
          ))}
        </div>
      </div>
      {activeMember !== null && (
        <Dialog.Root open={isOpen !== null && isOpen} onOpenChange={setIsOpen}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed backdrop-blur-[2px] inset-0 bg-black/50 z-50" />
            <Dialog.Content className="fixed outline-none z-[99999] top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg overflow-y-auto max-h-[550px] xl:max-h-[450px] w-11/12 xl:max-w-[903px] mx-auto">
              <div className="flex justify-between items-start p-5 md:p-7 xl:p-10 flex-col gap-y-5 md:gap-y-7 lg:gap-y-10">
                <div className="flex flex-col gap-y-5 lg:flex-row gap-x-5 xl:gap-x-10">
                  <Image
                    width={209}
                    height={209}
                    src={
                      typeof activeMember.imgUrl === "string"
                        ? activeMember.imgUrl
                        : activeMember.imgUrl.src
                    }
                    alt="Meet_img"
                    className="rounded-full mx-auto w-[190px] md:w-[209px] h-[190px] md:h-[209px]"
                  />
                  <div className="flex flex-col gap-1 xl:gap-2.5">
                    <h3 className="text-xl md:!text-2xl 2xl:!text-[32px] font-semibold text-primary-text-blue">
                      {activeMember.name}
                    </h3>
                    <p
                      className={
                        "!text-base md:!text-lg 2xl:!text-xl text-primary-text-blue font-normal"
                      }
                    >
                      {activeMember.descreption}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-3 lg:gap-y-4 ">
                  <div className="flex flex-row gap-x-2.5 ">
                    <BluePhone />
                    <p
                      className={
                        "md:text-lg text-primary-text-blue font-medium"
                      }
                    >
                      {activeMember?.phone}
                    </p>
                  </div>
                  <div className="flex flex-row gap-x-2.5 ">
                    <BlueMail />
                    <p
                      className={
                        "md:text-lg text-primary-text-blue font-medium"
                      }
                    >
                      {activeMember?.mailAddres}
                    </p>
                  </div>
                  <div className="flex flex-row gap-x-2.5 ">
                    <BlueLocation />
                    <p
                      className={
                        "md:text-lg text-primary-text-blue font-medium"
                      }
                    >
                      {activeMember?.address}
                    </p>
                  </div>
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </section>
  );
};

export default Meet;
