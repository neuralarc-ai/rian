import React from 'react';
import Image from 'next/image';

export default function DocumentHero() {
  return (
    <section className="w-full max-w-[1720px] mx-auto flex flex-col items-center text-center py-12 px-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight text-white">
        AI-Powered Document Translation That<br className="hidden md:inline" /> Delivers Accuracy.
      </h1>
      <p className="text-base md:text-lg lg:text-2xl font-light text-[#D1D1D1] mb-10">
        Translate documents faster without sacrificing accuracy.<br />
        Our AI ensures every word, tone, and format is preserved—every single time.
      </p>
      <div className="w-full flex justify-center">
        <Image
          src="/images/platform/document-translation-hero.webp"
          alt="Document translation dashboard preview"
          width={1512}
          height={948}
          className="w-full h-full object-contain"
          priority
        />
      </div>
    </section>
  );
}
