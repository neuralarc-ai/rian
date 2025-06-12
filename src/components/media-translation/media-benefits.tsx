import React from "react";
import Image from "next/image";

export default function MediaBenefits() {
  return (
    <section className="relative w-full py-16 lg:py-24 flex flex-col min-h-[1056px] items-center justify-center mb-12">
      {/* Overlay image */}
      <img
        src="/images/platform/benefits-overlay.png"
        alt="Section Overlay"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 mt-12 hidden xl:block"
        aria-hidden
      />
      {/* Content wrapper */}
      <div className="relative z-10 w-full mx-auto px-4 flex flex-col items-center">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-light text-white text-center mb-4">
          Engineered to Outperform
        </h2>
        {/* Description */}
        <p className="text-base md:text-lg text-white/80 text-center mb-12 max-w-2xl">
          Crafted for teams that move fast and localise smarter. <br className="hidden md:block" />
          Every feature solves a real-world challenge with precision and purpose.
        </p>
        {/* Cards */}
        <div className="w-full xl:max-h-[576px] xl:max-w-[1516px] grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-6 justify-center items-stretch">
          {/* Card 1 */}
          <div className="relative min-w-[260px] xl:min-h-[576px] rounded-2xl border-[1.5px] border-white/10 shadow-[0_18px_44px_0_rgba(0,0,0,0.20)] bg-[url('/images/platform/benefit-1-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col p-8">
            <Image src="/images/platform/benefit-1.png" alt="Unified Localisation Hub" width={160} height={160} className="mb-6 w-[140px] h-[155px] object-contain" />
            <div className="text-white text-2xl lg:text-[40px] mb-4">Unified<br />Localisation Hub</div>
            <div className="mt-auto text-white text-base md:text-2xl font-light min-h-[160px]">
              Centralise every asset, project, and collaborator from source files to final output in a single, intuitive workspace.
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative min-w-[260px] xl:min-h-[576px] rounded-2xl border-[1.5px] border-white/10 shadow-[0_18px_44px_0_rgba(0,0,0,0.20)] bg-[url('/images/platform/benefit-2-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col p-8">
            <Image src="/images/platform/benefit-2.png" alt="AI + Human Workflow by Design" width={160} height={160} className="mb-6 w-[199px] h-[155px] object-contain" />
            <div className="text-white text-2xl lg:text-[40px] mb-4">AI + Human<br />Workflow by Design</div>
            <div className="mt-auto text-white text-base md:text-2xl font-light min-h-[160px]">
              Machine efficiency meets human nuance. Let smart automation handle scale, while experts perfect every message.
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative min-w-[260px] xl:min-h-[576px] rounded-2xl border-[1.5px] border-white/10 shadow-[0_18px_44px_0_rgba(0,0,0,0.20)] bg-[url('/images/platform/benefit-3-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col p-8">
            <Image src="/images/platform/benefit-3.png" alt="Live Collaboration, Global Teams" width={160} height={160} className="mb-6 w-[199px] h-[155px] object-contain" />
            <div className="text-white text-2xl lg:text-[40px] mb-4">Live Collaboration,<br />Global Teams</div>
            <div className="mt-auto text-white text-base md:text-2xl font-light min-h-[160px]">
              Real-time communication between translators, editors, and managers—no delays, no disconnects.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
