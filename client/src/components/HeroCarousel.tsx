import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

type Slide = { src: string; alt: string };

export default function HeroCarousel({ slides }: { slides: Slide[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => {
      if (!emblaApi) return;
      const canScrollNext = emblaApi.canScrollNext();
      if (canScrollNext) emblaApi.scrollNext();
      else emblaApi.scrollTo(0);
    }, 4000);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <div className="relative overflow-hidden" dir="ltr">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((s, i) => (
            <div key={i} className="embla__slide relative min-w-full">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70 z-10" />
              <motion.img src={s.src} alt={s.alt} className="w-full h-[70vh] object-cover" initial={{ scale: 1.05, opacity: 0.9 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
