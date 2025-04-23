import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { useEffect } from 'react';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    // Smooth scroll behavior for internal links
    const headerLinks = document.querySelectorAll(".internal-links a");

    headerLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: targetSection, offsetY: 50 },
            ease: "power2.out",
          });
        }
      });
    });

    gsap.utils.toArray("[class*='fade-up-']").forEach((el) => {
      const delayMatch = [...el.classList].find(cls => cls.startsWith("fade-up-"));
      const delayNum = delayMatch ? parseInt(delayMatch.replace("fade-up-", ""), 10) : 0;
      const delay = delayNum * 0.075; //75ms
    
      gsap.from(el, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });
    
  }, []);

  return null;
}
