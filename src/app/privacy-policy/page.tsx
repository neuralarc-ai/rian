'use client';

import React, { Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] w-full">
      <motion.div
        className="w-10 h-10 rounded-full border-4 border-[#67F5C8] border-t-transparent animate-spin"
        aria-label="Loading..."
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <main className="w-full h-full max-w-[1720px] mx-auto px-4 py-4 lg:px-12 lg:py-12 flex items-center justify-center">
      <section className="w-full px-6 py-8 lg:px-12 lg:py-14 text-white">
        <AnimatePresence mode="wait">
          <Suspense fallback={<Loader />}>
            <motion.div
              key="privacy-content"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="flex flex-col items-center justify-center mb-10">
                <h1 className="text-3xl lg:text-4xl font-light mb-2 tracking-tight text-center">Privacy Policy</h1>
                <span className="block text-xs font-medium text-[#67F5C8] uppercase tracking-widest mb-2 text-center">Last Updated: May 30, 2025</span>
              </div>
              <div className="space-y-8 text-base lg:text-lg font-light text-[#D1D5DB] text-pretty">
                <section>
                  <h2 className="text-xl font-medium text-[#67F5C8] mb-2">Introduction</h2>
                  <p>At Rikaian Technology Private Limited (&quot;Rian&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, process, and disclose your information, including personal information, in conjunction with your access to and use of the rian.io website and services.</p>
                </section>
                <section>
                  <h2 className="text-xl font-medium text-[#67F5C8] mb-2">Information We Collect</h2>
                  <p>We collect various types of information from and about users of our website, including:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Personal identifiers (such as name, email address, phone number)</li>
                    <li>Professional or employment-related information</li>
                    <li>Internet or other electronic network activity information</li>
                    <li>Information you provide when filling out forms on our website</li>
                    <li>Records of your correspondence with us</li>
                    <li>Details of transactions you carry out through our website</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-xl font-medium text-[#67F5C8] mb-2">How We Use Your Information</h2>
                  <p>We use the information we collect for various purposes, including:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Providing, maintaining, and improving our services</li>
                    <li>Processing transactions and sending related information</li>
                    <li>Responding to your comments, questions, and requests</li>
                    <li>Sending you technical notices, updates, security alerts, and support messages</li>
                    <li>Communicating with you about products, services, and events</li>
                    <li>Monitoring and analyzing trends, usage, and activities in connection with our services</li>
                    <li>Detecting, investigating, and preventing fraudulent transactions and other illegal activities</li>
                    <li>Personalizing and improving your experience on our website</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-xl font-medium text-[#67F5C8] mb-2">Cookies and Tracking Technologies</h2>
                  <p>We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.</p>
                  <p>We use the following types of cookies:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><span className="font-medium text-white">Essential cookies:</span> necessary for the website to function properly</li>
                    <li><span className="font-medium text-white">Analytical/performance cookies:</span> allow us to recognize and count visitors and see how they move around the site</li>
                    <li><span className="font-medium text-white">Functionality cookies:</span> enable us to personalize content for you</li>
                    <li><span className="font-medium text-white">Targeting cookies:</span> record your visit to our website, the pages you visited, and the links you followed</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-xl font-medium text-[#67F5C8] mb-2">Data Security</h2>
                  <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>
                </section>
                <section>
                  <h2 className="text-xl font-medium text-[#67F5C8] mb-2">Your Data Protection Rights</h2>
                  <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>The right to access, update or delete your information</li>
                    <li>The right to rectification (to correct inaccurate data)</li>
                    <li>The right to object to our processing of your personal information</li>
                    <li>The right to restriction of processing of your personal information</li>
                    <li>The right to data portability (to receive your data in a structured, commonly used format)</li>
                    <li>The right to withdraw consent</li>
                  </ul>
                  <p>To exercise these rights, please contact us using the details provided in the &quot;Contact Us&quot; section below.</p>
                </section>
                <section>
                  <h2 className="text-xl font-medium text-[#67F5C8] mb-2">Children&apos;s Privacy</h2>
                  <p>Our services are not intended for use by children under the age of 18. We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us so that we can take necessary actions.</p>
                </section>
                <section>
                  <h2 className="text-xl font-medium text-[#67F5C8] mb-2">Changes to This Privacy Policy</h2>
                  <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date at the top of this policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                </section>
                <section>
                  <h2 className="text-xl font-medium text-[#67F5C8] mb-2">Contact Us</h2>
                  <p>If you have any questions about this Privacy Policy, please contact us:</p>
                  <ul className="list-none ml-0 space-y-1">
                    <li><span className="font-medium text-white">By email:</span> <a href="mailto:info@rian.io" className="underline hover:text-[#67F5C8]">info@rian.io</a></li>
                    <li><span className="font-medium text-white">By visiting our website:</span> <a href="https://rian.io/contact" className="underline hover:text-[#67F5C8]">rian.io/contact</a></li>
                    <li><span className="font-medium text-white">By mail:</span> Rikaian Technology Private Limited, Pune, Maharashtra, India</li>
                  </ul>
                </section>
              </div>
            </motion.div>
          </Suspense>
        </AnimatePresence>
      </section>
    </main>
  );
}
