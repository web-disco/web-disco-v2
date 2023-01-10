import { useState, useEffect } from "react";
import { format } from "date-fns";
import Link from "next/link";
import { useTheme } from "next-themes";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // set current time
  const [time, setTime] = useState(format(new Date(), "h:mmaaaaa'm"));

  // each tick will update current time
  const tick = () => {
    setTime(format(new Date(), "h:mmaaaaa'm"));
  };

  // run tick every second
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
    <div className="container w-full fixed top-0 z-[999] mix-blend-difference text-black dark:text-white">
      <div className="flex justify-between items-center py-4 relative">
        <Link href="/">
          <h3 className="font-basement mix-blend-difference">WD.</h3>
        </Link>
        <p className="font-inter text-[12px] uppercase absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
          {time} — Toronto, ON
        </p>
        <div>
          <p>{theme} yo</p>
          <button
            onClick={() => {
              if (theme === "dark") {
                setTheme("light");
              } else {
                setTheme("dark");
              }
            }}
          >
            {theme === "dark" ? "light" : "dark"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
