import Image from "next/image";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.1,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 120, damping: 18 } },
};

export default function Features() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={sectionRef}
      className="max-w-[1720px] mx-auto lg:px-12 my-4 lg:my-16"
      variants={container}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      <h2 className="text-center text-white lg:text-5xl text-[32px] font-light mb-12 tracking-tight">
        AI + Human hybrid model for <br className="hidden lg:block" />
        emotion-aware output
      </h2>

      <div className="flex xl:flex-row flex-col gap-6 xl:min-h-[690px] text-white">
        {/* Card 1 */}
        <motion.div
          className="relative bg-[#7C7C7C]/5 xl:max-w-[406px] w-full border border-[#FFFFFF]/10 p-4 md:p-8 rounded-3xl flex flex-col justify-end items-start overflow-hidden min-h-[340px] shadow-[0_18px_44px_0_rgba(0,0,0,0.2)]"
          variants={card}
        >
          <div className="relative z-10">
            <h3 className="text-[32px] lg:text-[82px] font-light mb-2">30+</h3>
            <p className="text-2xl font-light mb-6 max-w-[50%] md:max-w-full">AI dubbing languages</p>
            <ul className="space-y-3 text-base md:text-xl">
              <li className="flex items-center gap-3">
                <Image
                  src="/icons/feature-01.svg"
                  alt="Neural voice synthesis icon"
                  width={52}
                  height={52}
                  className="w-10 h-10 md:w-[52px] md:h-[52px]"
                />
                Neural voice synthesis
              </li>
              <li className="flex items-center gap-3">
                <Image
                  src="/icons/feature-02.svg"
                  alt="AI-powered lip-sync & match icon"
                  width={52}
                  height={52}
                  className="w-10 h-10 md:w-[52px] md:h-[52px]"
                />
                AI-powered lip-sync & match
              </li>
              <li className="flex items-center gap-3">
                <Image
                  src="/icons/feature-03.svg"
                  alt="Emotion-aware dubbing icon"
                  width={52}
                  height={52}
                  className="w-10 h-10 md:w-[52px] md:h-[52px]"
                />
                Emotion-aware dubbing
              </li>
              <li className="flex items-center gap-3">
                <Image
                  src="/icons/feature-04.svg"
                  alt="Multilingual output in hours icon"
                  width={52}
                  height={52}
                  className="w-10 h-10 md:w-[52px] md:h-[52px]"
                />
                Multilingual output in hours
              </li>
            </ul>
          </div>
          <Image
            src="/icons/dubbing-icon.svg"
            alt="Icon"
            width={190}
            height={190}
            className="md:w-[190px] w-[72px] h-auto absolute md:top-8 top-4 md:right-8 right-4 z-10 object-contain"
          />
          {/* Overlay */}
          <Image
            src="/images/home/feature-overlay-1.webp"
            alt="Overlay 1"
            fill
            className="absolute inset-0 object-cover rounded-3xl pointer-events-none z-20"
            priority={false}
          />
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="relative bg-[#7C7C7C]/5 xl:max-w-[587px] min-h-[180px] w-full border border-[#FFFFFF]/10 md:p-8 p-4 rounded-3xl flex flex-col justify-end overflow-hidden md:min-h-[340px] shadow-[0_18px_44px_0_rgba(0,0,0,0.2)]"
          variants={card}
        >
          <div className="relative z-50 lg:pb-6 ">
            <h3 className="text-3xl lg:text-[82px] font-light">60+</h3>
            <p className="text-2xl font-light">Document translation</p>
          </div>
          {/* Gradient Overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1/2 z-20"
            style={{
              background:
                "linear-gradient(to top, #272727 0%, transparent 100%)",
            }}
          />
          {/* Feature Overlay */}
          <Image
            src="/images/home/feature-overlay-2.webp"
            alt="Feature Overlay"
            fill
            className="absolute inset-0 object-cover rounded-3xl pointer-events-none z-10"
            priority={false}
          />
          {/* Background Image */}
          <Image
            src="/images/home/languages-card-web.webp"
            alt="Languages Background"
            width={1200}
            height={1200}
            className="absolute hidden xl:block inset-0 object-cover rounded-3xl pointer-events-none z-0"
            priority={false}
          />
          <Image
            src="/images/home/languages-card-mobile.webp"
            alt="Languages Background"
            width={1200}
            height={1200}
            className="absolute block xl:hidden inset-0 object-cover rounded-3xl pointer-events-none z-0"
            priority={false}
          />
        </motion.div>

        {/* Cards 3 & 4 stacked */}
        <div className="flex flex-col gap-6 w-full xl:max-w-[472px]">
          {/* Card 3 */}
          <motion.div
            className="relative bg-[#7C7C7C]/5 border border-[#FFFFFF]/10 md:p-8 p-4 rounded-3xl flex flex-col justify-between overflow-hidden min-h-[210px] xl:min-h-[170px] xl:flex-1 shadow-[0_18px_44px_0_rgba(0,0,0,0.2)]"
            variants={card}
          >
            <div className="relative z-10 flex flex-col h-full w-[80%]">
              <div className="flex w-full justify-between gap-4">
                {[5, 6, 7, 8].map((num) => (
                  <div
                    key={num}
                    className="w-[35px] h-[35px] md:w-[52px] md:h-[52px] relative"
                  >
                    <Image
                      src={`/icons/feature-0${num}.svg`}
                      alt={`Feature ${num}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-auto md:ml-8 ml-4 pt-6">
                <ul className="space-y-4 list-disc">
                  <li className="text-base md:text-xl text-[#C1C1C1]">OTT & Streaming</li>
                  <li className="text-base md:text-xl text-[#C1C1C1]">Podcasts & Audiobooks</li>
                  <li className="text-base md:text-xl text-[#C1C1C1]">Marketing Videos</li>
                  <li className="text-base md:text-xl text-[#C1C1C1]">EdTech & eLearning</li>
                </ul>
              </div>
            </div>
            {/* Overlay */}
            <Image
              src="/images/home/feature-overlay-3.webp"
              alt="Overlay 3"
              fill
              className="absolute inset-0 object-cover rounded-3xl pointer-events-none z-20"
              priority={false}
            />
          </motion.div>
          {/* Card 4 */}
          <motion.div
            className="relative bg-[#7C7C7C]/5 border border-[#FFFFFF]/10 p-4 md:p-8 rounded-3xl flex flex-col justify-between overflow-hidden md:min-h-[170px] flex-1 shadow-[0_18px_44px_0_rgba(0,0,0,0.2)]"
            variants={card}
          >
            <div className="relative z-10 font-light text-white flex flex-col justify-center lg:justify-end h-full ">
              <h3 className="text-[32px] lg:text-[82px]">97%</h3>
              <p className="font-light text-base lg:text-2xl">
                linguistic accuracy
              </p>
            </div>
            <Image
              src="/icons/check-icon.svg"
              alt="Icon"
              width={144}
              height={144}
              className="absolute lg:w-[144px] w-[72px] h-auto xl:bottom-8 md:top-8 top-4 right-6 z-10 object-contain"
            />
            {/* Overlay */}
            <Image
              src="/images/home/feature-overlay-4.webp"
              alt="Overlay 4"
              fill
              className="absolute inset-0 object-cover rounded-3xl pointer-events-none z-20"
              priority={false}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
