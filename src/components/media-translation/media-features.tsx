import React from "react";
import Image from "next/image";

export default function MediaFeatures() {
  return (
    <div className="w-full lg:py-12 py-6">
      <h2 className="text-3xl lg:text-5xl font-light text-white text-center mb-12">
        AI Intelligence with a Human Signature
      </h2>
      <div
        className="w-full flex flex-col gap-4 xl:flex-row xl:gap-6 "
      >
        {/* Left Section (60%) */}
        <div className="flex flex-col gap-4 xl:gap-6 w-full xl:w-[60%]">
          {/* Top Card */}
          <div
            className={
              "rounded-2xl border border-white/10 shadow-[0_18px_44px_0_rgba(0,0,0,0.20)] min-h-[180px] xl:min-h-[314px] bg-[url('/images/platform/voice-repo.png')] bg-cover bg-center bg-no-repeat flex flex-col xl:flex-row justify-between p-8"
            }
          >
            {/* Left: Number and Label */}
            <div className="flex flex-col xl:justify-end xl:items-start xl:w-1/2">
              <div className="mb-2 xl:mb-0">
                <div className="text-4xl md:text-6xl xl:text-[82px] text-white">1200</div>
                <div className="text-base lg:text-2xl text-white  font-light">Voice Repository</div>
              </div>
            </div>
            {/* Right: Description */}
            <div className="mt-4 xl:mt-0 xl:flex xl:items-end xl:justify-end xl:w-1/2">
              <div className="text-base text-white/60 font-light max-w-lg xl:text-right">
                New voice profiles are released each month, expanding your options for tone, style, and language. Stay ahead with a constantly evolving library designed for global reach.
              </div>
            </div>
          </div>
          {/* Bottom Row: Two Cards */}
          <div className="flex flex-col gap-4 xl:flex-row xl:gap-6 xl:min-h-[354px]">
            {/* Card 2 */}
            <div
              className={
                "rounded-2xl border border-white/10 shadow-[0_18px_44px_0_rgba(0,0,0,0.20)] flex-1 min-h-[180px] bg-[url('/images/platform/bullets.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-between p-8"
              }
            >
              <ul className="text-white/60 text-base lg:text-lg font-light space-y-4 list-disc pl-4">
                <li>Clones tone, pitch, and emotion with precision</li>
                <li>Delivers high-fidelity, natural-sounding output</li>
                <li>Supports custom voice creation</li>
                <li>Scales securely for high-volume use</li>
              </ul>
            </div>
            {/* Card 3 */}
            <div
              className={
                "rounded-2xl border border-white/10 shadow-[0_18px_44px_0_rgba(0,0,0,0.20)] flex-1 min-h-[180px] bg-[url('/images/platform/phonetic.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-between h-full p-8"
              }
            >
              {/* Top: Grouped Title */}
              <div>
                <div className="text-white/60 text-lg font-light mb-1">Powered by a</div>
                <div className="text-white text-[32px] max-w-[286px] font-light">Patented<br />Phonetic Library</div>
              </div>
              {/* Bottom: Description */}
              <div className="text-white/60 text-lg font-light mt-4 xl:mt-0">
                for unmatched pronunciation accuracy across languages.
              </div>
            </div>
          </div>
        </div>
        {/* Right Section (40%) */}
        <div className="w-full xl:w-[40%] flex flex-col">
          <div
            className={
              "rounded-2xl border border-white/10 shadow-[0_18px_44px_0_rgba(0,0,0,0.20)] min-h-[400px] xl:min-h-full bg-[url('/images/platform/ai-agents.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-between h-full p-8"
            }
          >
            {/* Top: Title and Subtitle */}
            <div>
              <div className="text-white text-4xl md:text-6xl xl:text-[82px] mb-2">AI Agents</div>
              <div className="text-white text-2xl font-light mb-6">document translation</div>
            </div>
            {/* Bottom: List of Agents */}
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/90 text-xl font-light">
                <Image src="/icons/translate.svg" alt="Translation AI Agent" width={52} height={52} className="mr-2" />
                Translation AI Agent
              </li>
              <li className="flex items-center gap-3 text-white/90 text-xl font-light">
                <Image src="/icons/quality.svg" alt="Quality Check Agent" width={52} height={52} className="mr-2" />
                Quality Check Agent
              </li>
              <li className="flex items-center gap-3 text-white/90 text-xl font-light">
                <Image src="/icons/curation.svg" alt="Curation Intelligent Agent" width={52} height={52} className="mr-2" />
                Curation Intelligent Agent
              </li>
              <li className="flex items-center gap-3 text-white/90 text-xl font-light">
                <Image src="/icons/coordination.svg" alt="Co-ordination Agent" width={52} height={52} className="mr-2" />
                Co-ordination Agent
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
