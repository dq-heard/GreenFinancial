import { useEffect } from "react";

export const Cursor: React.FC = () => {
  useEffect(() => {
    const cursorInner = document.querySelector<HTMLElement>(".cursor-inner");
    const cursorOuter = document.querySelector<HTMLElement>(".cursor-outer");
    const links = document.querySelectorAll<HTMLElement>("a");
    let isHovering = false;

    if (cursorInner && cursorOuter) {
      const onMouseMove = (e: MouseEvent) => {
        if (!isHovering) {
          cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
        cursorInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      };

      const onMouseEnter = () => {
        cursorInner.classList.add("cursor-hover");
        cursorOuter.classList.add("cursor-hover");
        isHovering = true;
      };

      const onMouseLeave = () => {
        cursorInner.classList.remove("cursor-hover");
        cursorOuter.classList.remove("cursor-hover");
        isHovering = false;
      };

      window.addEventListener("mousemove", onMouseMove);
      links.forEach((link) => {
        link.addEventListener("mouseenter", onMouseEnter);
        link.addEventListener("mouseleave", onMouseLeave);
      });

      cursorInner.style.visibility = "visible";
      cursorOuter.style.visibility = "visible";

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        links.forEach((link) => {
          link.removeEventListener("mouseenter", onMouseEnter);
          link.removeEventListener("mouseleave", onMouseLeave);
        });
      };
    }
  }, []);

  return (
    <div>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </div>
  );
};
