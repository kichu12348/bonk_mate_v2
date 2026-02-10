import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./Hero.module.css";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const dangerRef = useRef<HTMLImageElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const cloud1Ref = useRef<HTMLImageElement>(null);
  const cloud2Ref = useRef<HTMLImageElement>(null);
  const cloud3Ref = useRef<HTMLImageElement>(null);
  const cloud4Ref = useRef<HTMLImageElement>(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Set initial states
      gsap.set(
        [
          titleRef.current,
          illustrationRef.current,
          arrowRef.current,
          phoneRef.current,
          dangerRef.current,
          descRef.current,
          buttonsRef.current,
        ],
        { opacity: 0, y: 30 },
      );

      gsap.set(
        [
          cloud1Ref.current,
          cloud2Ref.current,
          cloud3Ref.current,
          cloud4Ref.current,
        ],
        { opacity: 0, scale: 0.5 },
      );

      // Animate in sequence
      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.7 })
        .to(
          illustrationRef.current,
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.35",
        )
        .to(
          arrowRef.current,
          { opacity: 0.85, y: 0, duration: 0.5, x: isMobile ? "-25vw" : "0vw" },
          "-=0.25",
        )
        .to(phoneRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.3")
        .to(
          dangerRef.current,
          { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "back.out(1.7)" },
          "-=0.2",
        )
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2")
        .to(buttonsRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2")
        .to(
          [
            cloud1Ref.current,
            cloud2Ref.current,
            cloud3Ref.current,
            cloud4Ref.current,
          ],
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.6",
        );
    },
    {
      scope: heroRef,
      dependencies: [isMobile],
    },
  );

  return (
    <section className={styles.hero} ref={heroRef} id="hero">
      {/* Floating Clouds */}
      <div className={styles.cloudsContainer}>
        <img
          ref={cloud1Ref}
          src="/images/cloud-1.png"
          alt=""
          className={`${styles.cloud} ${styles.cloud1}`}
        />
        <img
          ref={cloud2Ref}
          src="/images/cloud-2.png"
          alt=""
          className={`${styles.cloud} ${styles.cloud2}`}
        />
        <img
          ref={cloud3Ref}
          src="/images/cloud-3.png"
          alt=""
          className={`${styles.cloud} ${styles.cloud3}`}
        />
        <img
          ref={cloud4Ref}
          src="/images/cloud-4.png"
          alt=""
          className={`${styles.cloud} ${styles.cloud4}`}
        />
      </div>

      {/* Hero Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroInner}>
          {/* Left Section */}
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle} ref={titleRef}>
              Can I bunk today?
            </h1>

            <div className={styles.heroIllustration} ref={illustrationRef}>
              <img
                src="/images/sleeping-guy.png"
                alt="Student sleeping on desk with alarm clock and question marks"
                className={styles.sleepingGuy}
              />
            </div>

            <p className={styles.heroDescription} ref={descRef}>
              BunkMate tells you when{"\n"}you can skip class{"\n"}without
              risking attendance.
            </p>

            {/* CTA Button */}
            <div className={styles.heroButtons} ref={buttonsRef}>
              <a href="#download" className={styles.btnDownload}>
                <img
                  src="/images/drawn-download-btn.png"
                  alt="Download App"
                  className={styles.btnDownloadImg}
                />
              </a>
            </div>
          </div>

          {/* Arrow */}
          <div className={styles.arrowContainer} ref={arrowRef}>
            <img src="/images/arrow.png" alt="" className={styles.arrowImg} />
          </div>

          {/* Right Section - Phone */}
          <div className={styles.heroRight}>
            <div className={styles.phoneContainer} ref={phoneRef}>
              <img
                src="/images/phone-img.png"
                alt="BunkMate app showing 75% attendance - Safe to bunk!"
                className={styles.phoneImg}
              />
              <img
                src="/images/danger-zone.png"
                alt="Danger Zone!"
                className={styles.dangerBadge}
                ref={dangerRef}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
