'use client';

import Image from 'next/image';

const teamMembers = [
  { name: 'Anand', title: 'Founder', image: '/images/company/anand.png' },
  { name: 'Aniket', title: 'Chief Executive Officer', image: '/images/company/aniket.png' },
  { name: 'Saijash', title: 'Chief Technology Officer', image: '/images/company/saijesh.png' },
  { name: 'Roopali', title: 'International Sales', image: '/images/company/roopali.png' },
  { name: 'Pranav', title: 'Chief Operating Officer', image: '/images/company/pranav.png' },
  { name: 'Ketki', title: 'Vice President - Growth', image: '/images/company/ketki.png' },
];  

export default function TeamSection() {
  return (
    <section className="text-white py-16 px-4 text-center">
      <h2 className="text-3xl lg:text-5xl font-light mb-6">The Minds Behind the Mission</h2>
      <p className="max-w-4xl mx-auto text-lg lg:text-2xl font-extralight mb-12 text-balance">
        Behind every breakthrough is a collective of passionate minds.
        This is the team turning bold ideas into real-world impact.
      </p>

      <div className="hidden lg:flex flex-col gap-12 items-center">
        {/* Top Row - 5 members overlapping */}
        <div className="flex justify-center -space-x-10">
          {teamMembers.slice(0, 4).map((member, idx) => (
            <div key={idx} className="relative z-[1] text-center">
              <div className="w-40 h-40 xl:w-[350px] xl:h-[350px] lg:w-[250px] lg:h-[250px] rounded-full overflow-hidden border-[6px] border-[#1D1D1D]">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={550}
                  height={550}
                  className="object-cover w-full h-full z-50"
                />
              </div>
              <p className="mt-4 font-medium text-lg lg:text-2xl xl:text-[40px]">{member.name}</p>
              <p className="text-xs lg:text-lg xl:text-2xl text-[#B1B1B1]">{member.title}</p>
            </div>
          ))}
        </div>

        {/* Bottom Row - 2 members overlapping */}
        <div className="flex justify-center -space-x-10">
          {teamMembers.slice(4, 6).map((member, idx) => (
            <div key={idx} className="relative z-[1] text-center">
              <div className="w-40 h-40 xl:w-[350px] xl:h-[350px] lg:w-[250px] lg:h-[250px] rounded-full overflow-hidden border-[6px] border-[#1D1D1D]">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={550}
                  height={550}
                  className="object-cover w-full h-full z-50"
                />
              </div>
              <p className="mt-4 text-lg lg:text-2xl xl:text-[40px]">{member.name}</p>
              <p className="text-xs lg:text-lg xl:text-2xl text-[#B1B1B1]">{member.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive layout for small screens */}
      <div className="lg:hidden flex flex-col gap-12 mt-8 w-fit mx-auto">
        {Array.from({ length: Math.ceil(teamMembers.length / 2) }).map((_, rowIdx) => {
          const firstIdx = rowIdx * 2;
          const secondIdx = firstIdx + 1;
          return (
            <div key={rowIdx} className="flex items-center justify-center">
              {/* First member */}
              <div className="text-center z-10">
                <div className="w-36 h-36 md:w-[250px] md:h-[250px] rounded-full overflow-hidden border-[6px] border-[#1D1D1D]">
                  <Image
                    src={teamMembers[firstIdx].image}
                    alt={teamMembers[firstIdx].name}
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="mt-4 text-xl md:text-2xl font-medium">{teamMembers[firstIdx].name}</p>
                <p className="text-xs md:text-sm text-[#B1B1B1] max-w-[70%] mx-auto">{teamMembers[firstIdx].title}</p>
              </div>
              {/* Second member, overlapped */}
              {teamMembers[secondIdx] && (
                <div className="text-center -ml-8 z-20">
                  <div className="w-36 h-36 md:w-[250px] md:h-[250px] rounded-full overflow-hidden border-[6px] border-[#1D1D1D]">
                    <Image
                      src={teamMembers[secondIdx].image}
                      alt={teamMembers[secondIdx].name}
                      width={160}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="mt-4 text-xl md:text-2xl font-medium">{teamMembers[secondIdx].name}</p>
                  <p className="text-xs md:text-sm text-[#B1B1B1] max-w-[70%] mx-auto">{teamMembers[secondIdx].title}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
