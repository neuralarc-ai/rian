'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DemoDialog from "../dialogs/DemoDialog";

export default function Footer() {
  const [demoOpen, setDemoOpen] = useState(false);
  return (
    <footer className="text-white p-8 lg:rounded-[48px] rounded-3xl max-w-[1820px] mx-auto lg:px-12 px-6 relative overflow-hidden bg-[url('/images/footer-bg-mobile.png')] lg:bg-[url('/images/footer-bg-web.png')] bg-cover bg-no-repeat bg-center">
      <div className="relative z-10 flex flex-col lg:flex-row gap-8 mb-12 w-full min-h-[212px]">
        {/* Logo & description */}
        <div className="min-h-[170px] flex flex-col justify-start xl:min-w-[775px]">
          <div className="flex items-center gap-3">
            <Image
              src="/icons/rian-logo-footer.svg"
              alt="Rian Logo"
              width={200}
              height={55}
              priority
              className="lg:w-[188px] w-auto h-auto"
            />
          </div>
          <p className="text-base font-light text-[A7A7A7] lg:max-w-[300px] xl:max-w-[775px] mt-6">
            At Rian, we specialize in video localization and document
            translation, helping creators and brands adapt content for global
            audiences. By blending AI with human expertise, we ensure every
            story retains its cultural authenticity and emotional impact.
          </p>
        </div>

        {/* Navigation + Social */}
        <div className="flex flex-col lg:flex-row flex-1 gap-8">
          {/* Navigation */}
          <div className="grid grid-cols-2 gap-4 text-base flex-1">
            <div className="flex flex-col md:px-6 py-5 justify-between">
              <ul className="space-y-2 flex flex-col justify-evenly h-full">
                <li>
                  <Link href="/platform">Platform</Link>
                </li>
                <li>
                  <Link href="https://app.rian.io/registervendor">Vendor Registration</Link>
                </li>
                <li>
                  <Link
                    href="https://academy.rian.io/"
                    className="bg-gradient-to-br from-[#67F5C8] to-[#ADFF15] bg-clip-text text-transparent"
                  >
                    Rian Academy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col md:px-6 py-5 justify-between">
              <ul className="space-y-2 flex flex-col justify-evenly h-full">
                <li>
                  <Link href="/company">Company</Link>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setDemoOpen(true)}
                    className="text-left hover:underline focus:outline-none"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
                <li>
                  <Link href="/responsible-ai">Responsible & Ethical AI</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Icons for Desktop */}
          <div className="hidden lg:flex flex-col justify-start py-5">
            <h4 className="font-light mb-3 text-[32px]">Get in touch</h4>
            <div className="flex gap-3">
              <Link
                href="https://in.linkedin.com/company/rian-io"
                aria-label="Linkedin"
                target="_blank"
              >
                <Image
                  src="/icons/linkedin.svg"
                  alt="Linkedin"
                  width={62}
                  height={62}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCNyfv71KD7roDPonTcKDnFQ"
                aria-label="YouTube"
                target="_blank"
              >
                <Image
                  src="/icons/youtube.svg"
                  alt="YouTube"
                  width={62}
                  height={62}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Address Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-[#A6A6A6]/5 rounded-[24px] h-[236px] lg:h-auto lg:p-8 p-4 flex items-center gap-4">
          <Image
            src="/icons/india-map.svg"
            alt="India Map"
            width={120}
            height={120}
            className="lg:w-30 lg:h-30 w-15 h-15"
            loading="lazy"
          />
          <div>
            <h5 className="lg:text-[28px] text-lg mb-1">India</h5>
            <p className="lg:text-lg text-base font-light text-[#A7A7A7]">
              Rikaian Technology Pvt. Ltd. <br />
              Survey number 846, Gokhale Sanchit, First floor, BMCC Rd, Deccan
              Gymkhana, Pune 411004, Maharashtra.
            </p>
          </div>
        </div>
        <div className="bg-[#A6A6A6]/5 rounded-[24px] h-[236px] lg:h-auto lg:p-8 p-4 flex items-center gap-4">
          <Image
            src="/icons/japan-map.svg"
            alt="Japan Map"
            width={120}
            height={120}
            className="lg:w-30 lg:h-30 w-15 h-15"
            loading="lazy"
          />
          <div>
            <h5 className="lg:text-[28px] text-lg mb-1">Japan</h5>
            <p className="lg:text-lg text-base font-light text-[#A7A7A7]">
              Rikaian Technology Pvt. Ltd. <br />
              Fabbit Kyobashi 2F, 1-1-5 Central Bldg Chuo-Ku, Tokyo 104-0031
            </p>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="flex flex-col lg:flex-row justify-between lg:items-center text-base text-[#A1A1A1] mb-6">
        <div className="flex gap-3 mb-3 md:mb-0">
          <Link href="/terms-of-use">Terms of use</Link>
          <span>•</span>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
        <p>© 2025 Rikaian Technology Pvt. Ltd.</p>
      </div>

      {/* Social Icons for Mobile */}
      <div className="flex gap-3 flex-col lg:hidden mb-2">
        <h4 className="font-light mb-2 text-3xl">Get in touch</h4>
        <div className="flex gap-3">
          <Link
            href="https://in.linkedin.com/company/rian-io"
            aria-label="Linkedin"
            target="_blank"
          >
            <Image
              src="/icons/linkedin.svg"
              alt="Linkedin"
              width={52}
              height={52}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCNyfv71KD7roDPonTcKDnFQ"
            aria-label="YouTube"
            target="_blank"
          >
            <Image
              src="/icons/youtube.svg"
              alt="YouTube"
              width={52}
              height={52}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </div>

      <DemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </footer>
  );
}
