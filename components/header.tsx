import { useState, useEffect } from "react";
import { format } from "date-fns";
import Link from "next/link";

const Header = () => {
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

  return (
    <div className="container w-full fixed top-0 z-[999] mix-blend-difference text-yellow-500">
      <div className="flex justify-between items-center py-4">
        <Link href="/">
          <h3 className="font-basement mix-blend-difference">WD.</h3>
        </Link>
        <p className="font-inter text-[12px] uppercase absolute left-[50%] translate-x-[-50%]">
          {time} — Toronto, ON
        </p>
      </div>
    </div>
  );
};

export default Header;
