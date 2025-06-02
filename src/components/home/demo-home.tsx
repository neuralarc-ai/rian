'use client';

import { useState, useRef, useEffect } from 'react';
import { ShineBorder } from '../magicui/shine-border';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '../ui/carousel';
import { Button } from '../ui/button';
import Link from 'next/link';

const demoItems = [
  {
    title: 'Customized Voice Match',
    description: 'Accelerate your content strategy',
  },
  {
    title: 'Emotional Voice Synthesis',
    description: 'Natural, engaging voice',
  },
  {
    title: 'Multi-Language Reach',
    description: 'Deliver exceptional results',
  },
];

// Update video pairs to use cloud URLs
const demoVideoPairs = [
  {
    before: {
      src: 'https://res.cloudinary.com/dykdfg6m5/video/upload/v1748842734/xl16aurp4xw924rwdzsi.mp4',
      label: 'Before (English)',
      langTag: 'ENGLISH',
      poster: '/videos/video-1-before-thumbnail.webp',
    },
    after: {
      src: 'https://res.cloudinary.com/dykdfg6m5/video/upload/v1748842738/drawdx5ki120dshz0wxm.mp4',
      label: 'After (Japanese)',
      langTag: 'JAPANESE',
      poster: '/videos/video-1-after-thumbnail.webp',
    },
  },
  {
    before: {
      src: 'https://res.cloudinary.com/dykdfg6m5/video/upload/v1748842740/tifa1fw2guv2v9ferovy.mp4',
      label: 'Before (English)',
      langTag: 'ENGLISH',
      poster: '/videos/video-2-before-thumbnail.webp',
    },
    after: {
      src: 'https://res.cloudinary.com/dykdfg6m5/video/upload/v1748842749/ejguooojhcq6y74xcfsm.mp4',
      label: 'After (French)',
      langTag: 'FRENCH',
      poster: '/videos/video-2-after-thumbnail.webp',
    },
  },
  {
    before: {
      src: 'https://res.cloudinary.com/dykdfg6m5/video/upload/v1748842747/edf33ijjzfrcsx5si8yr.mp4',
      label: 'Before (Hindi)',
      langTag: 'HINDI',
      poster: '/videos/video-3-before-thumbnail.webp',
    },
    after: {
      src: 'https://res.cloudinary.com/dykdfg6m5/video/upload/v1748842739/eialefqn39cjirpnnltu.mp4',
      label: 'After (German)',
      langTag: 'GERMAN',
      poster: '/videos/video-3-after-thumbnail.webp',
    },
  },
];

function VideoCard({ src, label, langTag, poster }: { src: string; label: string; langTag: string; poster: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoading(false);
    };

    const handleError = (e: Event) => {
      const target = e.target as HTMLVideoElement;
      setError(`Error loading video: ${target.error?.message || 'Unknown error'}`);
      setIsLoading(false);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  const handlePlayPause = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    try {
      if (isPlaying) {
        await videoRef.current.pause();
      } else {
        // Reset video to start if it has ended
        if (videoRef.current.ended) {
          videoRef.current.currentTime = 0;
        }
        await videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } catch (err) {
      console.error('Error playing video:', err);
      setError('Error playing video. Please try again.');
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-[#FFFFFF]/10 p-2 flex flex-col mx-auto">
      <div className="relative w-full h-full cursor-pointer" onClick={handlePlayPause}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-3xl"
          playsInline
          preload="metadata"
          poster={poster}
          onClick={handlePlayPause}
          onEnded={handleEnded}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="w-10 h-10 border-4 border-[#67F5C8] border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="text-white text-center p-4">
              <p className="text-sm mb-2">{error}</p>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setError(null);
                  setIsLoading(true);
                  if (videoRef.current) {
                    videoRef.current.load();
                  }
                }}
                className="text-[#67F5C8] text-sm underline"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Play/Pause Overlay */}
        {!isLoading && !error && (
          <button
            className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity ${
              isPlaying ? 'bg-black/10 opacity-0 hover:opacity-100' : 'opacity-100'
            }`}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
            onClick={handlePlayPause}
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              {isPlaying ? (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </div>
          </button>
        )}

        {/* Language Tag Overlay */}
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-md z-20">
          {langTag}
        </div>
      </div>
      {/* Label */}
      <div className="text-center text-white text-base mt-2 mb-1 font-medium">
        {label}
      </div>
    </div>
  );
}

export default function DemoHome() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  // Handler to sync carousel index with feature cards
  const handleSetApi = (api: CarouselApi | undefined) => {
    if (!api) return;
    api.on('select', () => {
      setCarouselIndex(api.selectedScrollSnap());
    });
  };
  return (
    <section className="w-full max-w-[1720px] rounded-2xl lg:rounded-[48px] bg-[#232323] mx-auto px-4 lg:px-8 lg:py-16 py-10">
      {/* Title */}
      <div className="text-center mb-8 md:mb-12 max-w-[896px] mx-auto">
        <h2 className="text-3xl lg:text-5xl font-light text-white mb-4">
          Integrating AI and Human Expertise in<br className="hidden md:block" /> Dubbing & Localization.
        </h2>
      </div>
      {/* Feature Cards Grid */}
      <div className="flex flex-col lg:flex-row justify-center gap-4 md:gap-8 mb-8 md:mb-10 max-w-[1424px] mx-auto">
        {demoItems.map((item, index) => (
          <div key={index} className="relative flex-1 min-w-[260px]">
            <div className={`relative z-10 h-full bg-[#232323] border rounded-xl p-6 overflow-hidden transition-all duration-300 ease-in-out ${carouselIndex === index ? 'shadow-[0_18px_44px_0_rgba(0,0,0,0.2)]' : 'border-[#6D6D6D] border-[1.5px]'}`}> 
              {/* ShineBorder only on active */}
              {carouselIndex === index && (
                <div className="absolute inset-0 opacity-100 transition-opacity duration-300 pointer-events-none">
                  <ShineBorder 
                    className="w-full h-full rounded-xl"
                    shineColor={["#FD184A", "#4AFDF1", "#F1FA38"]}
                    borderWidth={1}
                    duration={8}
                  />
                </div>
              )}
              {/* Card content */}
              <div className="relative z-10 text-center">
                <h3 className="text-xl lg:text-2xl text-white mb-2 md:mb-3">{item.title}</h3>
                <p className="text-[#949494] text-base md:text-lg">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Book a Demo Button */}
      <div className="flex justify-center mb-8 md:mb-12">
        <Link href="https://calendly.com/aryan-tiwari-rian/30min?month=2025-06" target="_blank">
        <Button className="px-8 py-3">Book a Demo</Button>
        </Link>
      </div>
      {/* Carousel Video Demo Section */}
      <div className="relative md:mx-auto rounded-[40px] p-4 overflow-hidden">
        <Carousel 
          className="relative" 
          setApi={handleSetApi} 
          opts={{ 
            loop: true,
            align: "center",
            skipSnaps: false,
            duration: 20,
            dragFree: false,
            containScroll: "trimSnaps"
          }}
          
        >
          <CarouselContent className="px-8">
            {demoVideoPairs.map((pair, idx) => (
              <CarouselItem key={idx} className="flex justify-center items-center">
                <div className="flex flex-col md:flex-row gap-6 w-full max-w-[80%] mx-auto">
                  {/* Before Video - Full width on mobile, half width on md+ */}
                  <div className="w-full md:w-1/2 min-w-0 flex justify-center">
                    <VideoCard 
                      src={pair.before.src} 
                      label={pair.before.label} 
                      langTag={pair.before.langTag} 
                      poster={pair.before.poster} 
                    />
                  </div>
                  {/* After Video - Full width on mobile, half width on md+ */}
                  <div className="w-full md:w-1/2 min-w-0 flex justify-center">
                    <VideoCard 
                      src={pair.after.src} 
                      label={pair.after.label} 
                      langTag={pair.after.langTag} 
                      poster={pair.after.poster} 
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:block left-2 z-20 bg-[#555555]/35 rounded-full hover:bg-[#555555]/50 transition-colors" />
          <CarouselNext className="hidden md:block right-2 z-20 bg-[#555555]/35 rounded-full hover:bg-[#555555]/50 transition-colors" />
        </Carousel>
      </div>
    </section>
  );
}

DemoHome.displayName = 'DemoHome';
