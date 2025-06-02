"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import DemoDialog from "@/components/dialogs/DemoDialog";
import React, { useState } from "react";

export default function PlatformPromo() {
  const [open, setOpen] = useState(false);
  return (
    <section className="w-full mb-12 lg:mb-0 mt-12">
      {/* XL+ Layout */}
      <div className="hidden rounded-2xl overflow-hidden lg:rounded-[48px] bg-[#FFFFFF]/5 text-white lg:flex w-full lg:flex-row">
        {/* Left Section */}
        <div className="flex flex-col justify-between w-1/2 py-12 px-12">
          <div>
            <h2 className="lg:text-[40px] text-[32px] mb-6 leading-tight">
              Experience <br /> the Platform
            </h2>
            <p className="text-sm lg:text-lg ">
              Slash 40% off human effort with the Translation AI Agent, <br />
              revolutionising translations with unmatched speed and accuracy.
            </p>
          </div>

          <div className="flex gap-4 mt-10">
            <Button onClick={() => setOpen(true)}>Launch Interactive Demo</Button>
            <a href="/platform">
              <Button variant="outline" className="border-[#8A8A8A]">
                Explore Platform
              </Button>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-1/2 object-cover h-full -z-10 overflow-hidden flex justify-center items-center">
          <Image
            src="/images/home/platform-web.webp"
            alt="Platform Dashboard"
            width={1000}
            height={1000}
            className="object-cover "
          />
        </div>
      </div>

      {/* Mobile & Below XL Layout */}
      <div className="flex flex-col lg:hidden text-white w-full bg-[#FFFFFF]/5 rounded-2xl">
        <div className="px-6 pt-12">
          <h2 className="text-4xl mb-6 leading-tight">
            Experience <br /> the Platform
          </h2>
          <p className="text-base text-[#C1C1C1]">
            Slash 40% off human effort with the Translation AI Agent, <br />
            revolutionising translations with unmatched speed and accuracy.
          </p>
        </div>

        <div className="relative  mt-8 object-contain -z-10 overflow-hidden flex justify-center items-center">
          <Image
            src="/images/home/platform-mobile.png"
            alt="Platform Dashboard"
            width={1000}
            height={1000}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col gap-4 px-6 mt-8 pb-12">
          <Button className="w-full md:w-fit py-8" onClick={() => setOpen(true)}>
            Launch Interactive Demo
          </Button>
          <a href="/platform">
            <Button variant="outline" className="border-[#8A8A8A] w-full md:w-fit py-8">
              Explore Platform
            </Button>
          </a>
        </div>
      </div>
      <DemoDialog open={open} onOpenChange={setOpen} />
    </section>
  );
}
