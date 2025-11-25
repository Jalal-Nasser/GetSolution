import { useEffect, useRef } from "react";

export default function AnimatedSvgIcon({ src, size = 72, hover = true }: { src: string; size?: number; hover?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch(src);
        const text = await res.text();
        if (!mounted || !ref.current) return;
        ref.current.innerHTML = text;
        const svg = ref.current.querySelector("svg");
        if (svg) {
          svg.setAttribute("width", String(size));
          svg.setAttribute("height", String(size));
          const paths = Array.from(svg.querySelectorAll("path"));
          paths.forEach((p) => {
            const len = (p as SVGPathElement).getTotalLength?.();
            if (!len || !isFinite(len)) return;
            p.style.strokeDasharray = String(len);
            p.style.strokeDashoffset = String(len);
            p.style.transition = "stroke-dashoffset 1.2s ease";
          });
          requestAnimationFrame(() => {
            paths.forEach((p) => { p.style.strokeDashoffset = "0"; });
          });
          if (hover) {
            svg.addEventListener("mouseenter", () => {
              paths.forEach((p) => { p.style.strokeDashoffset = "0"; });
            });
            svg.addEventListener("mouseleave", () => {
              paths.forEach((p) => {
                const len = (p as SVGPathElement).getTotalLength?.();
                if (!len || !isFinite(len)) return;
                p.style.strokeDashoffset = String(len);
              });
            });
          }
        }
      } catch (_) {}
    })();
    return () => { mounted = false; };
  }, [src, size, hover]);

  return <div ref={ref} />;
}
