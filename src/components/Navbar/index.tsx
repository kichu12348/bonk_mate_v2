import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Track scroll position for glassmorphism effect
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 640 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  // GSAP entrance animation
  useGSAP(
    () => {
      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.1 },
      );
    },
    { scope: navRef },
  );

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
        id="main-navbar"
      >
        <div className={styles.navInner}>
          {/* Logo */}
          <a href="#hero" className={styles.logo}>
            Bunk<span className={styles.logoAccent}>Mate</span>
          </a>

          {/* Desktop Links */}
          <div className={styles.navLinks}>
            <a href="#hero" className={styles.navLink}>
              Home
            </a>
            <span className={styles.navSeparator}>|</span>
            <a href="#about" className={styles.navLink}>
              About
            </a>
            <span className={styles.navSeparator}>|</span>
            <a href="#features" className={styles.navLink}>
              Features
            </a>
          </div>

          {/* CTA */}
          <a href="#download" className={styles.navCta}>
            Download
          </a>

          {/* Mobile Hamburger */}
          <button
            className={`${styles.menuBtn} ${menuOpen ? styles.open : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className={styles.menuLine}></span>
            <span className={styles.menuLine}></span>
            <span className={styles.menuLine}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <a
          href="#hero"
          className={styles.mobileNavLink}
          onClick={handleLinkClick}
        >
          Home
        </a>
        <a
          href="#about"
          className={styles.mobileNavLink}
          onClick={handleLinkClick}
        >
          About
        </a>
        <a
          href="#features"
          className={styles.mobileNavLink}
          onClick={handleLinkClick}
        >
          Features
        </a>
        <a
          href="#download"
          className={styles.mobileCta}
          onClick={handleLinkClick}
        >
          Download
        </a>
      </div>
    </>
  );
};

export default Navbar;
