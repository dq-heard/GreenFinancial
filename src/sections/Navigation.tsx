import React, { useEffect } from "react";
import { Logo, NavLinks, NavToggle, Shake } from "../components";

export const Navigation: React.FC = () => {
  const drawerHandler = () => {
    const drawer = document.querySelector("#mobile-drawer");
    if (drawer) {
      if (drawer.classList.contains("active")) {
        drawer.classList.remove("active");
      } else {
        drawer.classList.add("active");
      }
    }
  };

  useEffect(() => {
    const drawerOpen = document.querySelector(".drawer-overlay");
    if (drawerOpen) {
      drawerOpen.addEventListener("click", drawerHandler);
    }

    const handleScroll = () => {
      const element = document.querySelector(".navigation-wrapper");
      if (element) {
        if (
          document.body.scrollTop > 100 ||
          document.documentElement.scrollTop > 100
        ) {
          element.classList.add("sticky");
        } else {
          element.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (drawerOpen) {
        drawerOpen.removeEventListener("click", drawerHandler);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navigation-wrapper">
      <div className="desktop-wrapper">
        <div className="header-content">
          <Logo />
          <nav className="nav-wrapper">
            <ul className="nav-list">
              <NavLinks />
            </ul>
          </nav>
          <nav className="mobile-nav-wrapper">
            <div id="mobile-drawer">
              <div className="nav-sidebar">
                <div className="">
                  <div className="mobile-logo">
                    <Logo />
                  </div>
                </div>
                <ul className="mobile-nav-list">
                  <NavLinks />
                </ul>
                <Shake />
              </div>
              <div className="drawer-overlay"></div>
            </div>
          </nav>
        </div>
        <div className="desktop-shake">
          <Shake />
        </div>
        <NavToggle onClick={drawerHandler} />
      </div>
    </div>
  );
};
