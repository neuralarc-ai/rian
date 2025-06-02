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

export default function TermsOfUse() {
  return (
    <main className="w-full h-full max-w-[1720px] mx-auto px-4 py-4 lg:px-12 lg:py-12 flex items-center justify-center">
      <section className="w-full px-6 py-8 lg:px-12 lg:py-14 text-white">
        <AnimatePresence mode="wait">
          <Suspense fallback={<Loader />}>
            <motion.div
              key="terms-content"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="flex flex-col items-center justify-center mb-10">
                <h1 className="text-3xl lg:text-5xl font-semibold mb-4 tracking-tight text-center">Terms of Use</h1>
                <span className="block text-base font-medium text-[#67F5C8] uppercase tracking-widest mb-2 text-center">Please read these terms carefully before using our services.</span>
              </div>
              <div className="space-y-8 text-base lg:text-lg font-light text-[#D1D5DB] text-pretty">
                <section>
                  <h2 className="text-xl font-medium text-[#67F5C8] mb-2">Section A: Paid Users</h2>
                  <p>For the purpose of these Terms of Use, wherever the context so requires &quot;You&quot; or &quot;User&quot; shall mean any natural or legal person who has agreed to become a buyer of the services on Platform by providing data while registering on the Platform as Paid User. The term &quot;Rian&quot;, &quot;We&quot;, &quot;Us&quot;, &quot;Our&quot; shall mean Rikaian Technology Private Limited and its affiliates.</p>
                  <h3 className="text-lg font-medium text-white mt-4 mb-1">Eligibility; Authority</h3>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>You must be at least 18 years of age.</li>
                    <li>You must be able to form legally binding contracts under applicable law.</li>
                    <li>You must not be barred from purchasing or receiving the Services found under the laws of India or other applicable jurisdictions.</li>
                    <li>If you are entering into this Agreement on behalf of a corporate entity, you represent and warrant that you have the legal authority to bind such entity to the terms and conditions contained herein.</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-xl font-medium text-[#67F5C8] mb-2">Section B: Free Users</h2>
                  <p>This policy is applicable to free users only. The &quot;Free Users&quot; means the user who is not having a registered account with us and availing the services at a pre-decided price. In case of free users, we shall not take responsibility towards any information or any document uploaded or any submissions made by the free user on this platform.</p>
                  <p>If you are not agreeable to all the usage terms, you must not use this website/App and should exit immediately.</p>
                </section>
                <section>
                  <h2 className="text-xl font-medium text-[#67F5C8] mb-2">General Rules of Conduct</h2>
                  <p>You acknowledge and agree that:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Your use of this Site and the Services will comply with these terms.</li>
                    <li>You will not collect or harvest any personally identifiable information about another User without their express prior written consent.</li>
                    <li>You will not use this Site or the Services in a manner that promotes illegal activity, child pornography, terrorism, spamming, or hacking.</li>
                    <li>You will not infringe on intellectual property rights or violate privacy rights.</li>
                    <li>You will not interfere with the operation of this Site or the Services.</li>
                    <li>You will not upload viruses, worms, or other harmful code.</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-xl font-medium text-[#67F5C8] mb-2">Fees and Payments</h2>
                  <p>You agree to pay all amounts due for Services at the time you order them. All amounts are non-refundable unless otherwise noted in the Refund Policy.</p>
                  <h3 className="text-lg font-medium text-white mt-4 mb-1">Payment Types</h3>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Net Banking</li>
                    <li>Valid Credit Card</li>
                    <li>Valid Debit Card</li>
                    <li>Unified Payment Interface (UPI)</li>
                    <li>Wallets</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-xl font-medium text-[#67F5C8] mb-2">Limitation of Liability</h2>
                  <p>In no event shall Rian be liable for any indirect, punitive, incidental, special, consequential damages, or any other damages resulting from:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>The use or inability to use the Services or Products.</li>
                    <li>Unauthorized access to or alteration of the user&apos;s transmissions or data.</li>
                    <li>Breach of conditions, representations, or warranties by the manufacturer.</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-xl font-medium text-[#67F5C8] mb-2">Dispute Resolution</h2>
                  <p>We shall be bound to submit all disputes and differences arising out of or in connection with this Agreement to mediation. In the event of failure to resolve the dispute, it shall be referred to arbitration. These terms shall be governed by and construed in accordance with the laws of India, and disputes shall be subject to the exclusive jurisdiction of courts in Pune, Maharashtra.</p>
                </section>
              </div>
            </motion.div>
          </Suspense>
        </AnimatePresence>
      </section>
    </main>
  );
} 