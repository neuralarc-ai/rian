'use client';

import React, { useState } from "react";
import { Button } from "../ui/button";
import DemoDialog from "../dialogs/DemoDialog";

export default function PlatformCTA() {
  const [demoOpen, setDemoOpen] = useState(false);
  return (
    <div
      className="w-full rounded-[24px] bg-[url('/images/platform/platform-mobile.png')]  lg:bg-[url('/images/platform/platform.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-[320px] py-16 px-4 mb-12 lg:mt-24"
    >
      <div className="flex flex-col items-center justify-center text-center w-full max-w-3xl mx-auto">
        <h2 className="text-white text-3xl lg:text-6xl font-light mb-4">Experience the Platform</h2>
        <p className="text-white text-lg lg:text-2xl font-light mb-8 max-w-5xl">
          Slash 40% off human effort with the Translation AI Agent, revolutionising translations with unmatched speed and accuracy.
        </p>
        <Button
          className="text-lg px-8 py-6 h-16 w-full md:w-fit"
          onClick={() => setDemoOpen(true)}
        >
          Launch Interactive Demo
        </Button>
      </div>

      <DemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
}
