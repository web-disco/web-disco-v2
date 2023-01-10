import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

const Cursor = () => {
  useEffect(() => {
    gsap.set([".cursor", ".follower"], {
      xPercent: -50,
      yPercent: -50,
    });

    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".follower");

    window.addEventListener("mousemove", (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.2 });
      gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.3 });
    });
  }, []);

  return (
    <>
      <div className="cursor mix-blend-difference"></div>
      <div className="follower mix-blend-difference">
        <Image
          src="/images/cursor.svg"
          alt="Crosshair"
          width={20}
          height={20}
        />
      </div>
    </>
  );
};

export default Cursor;
