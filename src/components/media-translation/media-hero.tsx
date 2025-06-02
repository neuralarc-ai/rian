import React from 'react';
import Image from 'next/image';

export default function MediaHero() {
  return (
    <section className="w-full max-w-[1720px] mx-auto flex flex-col items-center text-center py-12 px-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight text-white">
        Bring Your media to Life<br />in Any Language.
      </h1>
      <p className="text-base md:text-lg lg:text-2xl font-light text-[#D1D1D1] mb-10">
        Preserve the original tone and emotion of your videos with AI-driven precision.<br />
        Enjoy perfectly synced dubbing that lets you effortlessly connect with new global audiences.
      </p>
      <div className="w-full flex justify-center">
        <Image
          src="/images/platform/media-translation-hero.webp"
          alt="Media translation dashboard preview"
          width={1512}
          height={948}
          className="w-full h-full object-contain"
          priority
        />
      </div>
    </section>
  );
}
