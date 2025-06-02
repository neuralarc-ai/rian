import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.1,
      delay: 0.5,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 120, damping: 18 } },
};

export default function HeroSection() {
  return (
    <section className="w-full text-white py-8 lg:py-16 text-center relative overflow-hidden">
      <motion.div
        className="w-full mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-4xl xl:text-[80px] lg:text-[50px] font-light mb-4 tracking-tight"
          variants={fadeUp}
        >
          AI that speaks the World&apos;s Language
        </motion.h1>
        <motion.p
          className="text-lg text-balance lg:text-[28px] xl:text-[48px] tracking-tight font-light text-[#FFFFFF]/50"
          variants={fadeUp}
        >
          Highlights Rian as a category-defining tech player
        </motion.p>
        <motion.div
          className="xl:-mt-48 lg:-mt-32 md:-mt-12"
          variants={fadeUp}
        >
          <Image
            src="/images/home/hero-image-web.webp"
            alt="Rian Dashboard"
            width={1400}
            height={1180}
            className="w-full h-full object-contain mx-auto"
            priority
          />
        </motion.div>
        <motion.p
          className="text-base lg:text-lg text-[#B3B3B3] max-w-[900px] mx-auto mb-10 xl:-mt-48 lg:-mt-32 md:-mt-12"
          variants={fadeUp}
        >
          With Rian&apos;s intuitive AI-powered platform, your team can effortlessly
          create professional-grade voiceovers, translate content into multiple
          languages, and make instant edits—all in-house. Eliminate reliance on
          external teams while maintaining full control, flexibility, and
          creative freedom.
        </motion.p>
        <motion.div className="flex justify-center" variants={fadeUp}>
          <Link
            href="https://calendly.com/aryan-tiwari-rian/30min?month=2025-06"
            target="_blank"
            className="w-full lg:w-fit"
          >
            <Button variant={"default"} className="md:w-fit w-full h-[64px] md:h-auto">
              Book a Demo
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
