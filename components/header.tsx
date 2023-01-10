import { useState, useEffect, useRef } from "react";
import { format } from "date-fns";
import Link from "next/link";
import { useTheme } from "next-themes";
import gsap from "gsap";

import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";

const Header = () => {
  const component = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const [time, setTime] = useState(format(new Date(), "h:mmaaaaa'm"));

  const tick = () => {
    setTime(format(new Date(), "h:mmaaaaa'm"));
  };

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.25, yoyo: true });
      tl.fromTo(".underscore", { opacity: 0 }, { opacity: 1 }, "+=0.25");
    }, component);

    return () => ctx.revert();
  }, [mounted]);

  useEffect(() => {
    setInterval(() => {
      tick();
    }, 1000);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header ref={component}>
      <div className="header container w-full fixed top-0 z-[999] mix-blend-difference text-black dark:text-white">
        <div className="flex justify-between items-center py-4 relative">
          <Link href="/">
            <h3 className="font-basement">
              <span className="underscore">_</span>WD
            </h3>
          </Link>
          <p className="font-inter text-[12px] uppercase absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
            {time} — Toronto, ON
          </p>
          <div>
            <button
              onClick={() => {
                if (theme === "dark") {
                  setTheme("light");
                } else {
                  setTheme("dark");
                }
              }}
            >
              Menu | Toggle
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
