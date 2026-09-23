import { useEffect, useRef } from "react";

const TAB_TARGETS = ["photos", "amenities", "reviews", "location"];

export default function NavigationTabs() {
  const tabsRef = useRef([]);

  useEffect(() => {
    const sections = TAB_TARGETS.map((id) => document.getElementById(id)).filter(
      Boolean
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          tabsRef.current.forEach((t) => {
            if (t) {
              t.classList.toggle(
                "active",
                t.dataset.target === visible.target.id
              );
            }
          });
        }
      },
      { rootMargin: "-110px 0px -58% 0px", threshold: [0.05, 0.2, 0.5] }
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  const handleClick = (target) => {
    document
      .getElementById(target)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="tabs" aria-label="Listing sections">
      {TAB_TARGETS.map((target, i) => (
        <button
          key={target}
          className={`tab ${i === 0 ? "active" : ""}`}
          data-target={target}
          ref={(el) => (tabsRef.current[i] = el)}
          onClick={() => handleClick(target)}
        >
          {target.charAt(0).toUpperCase() + target.slice(1)}
        </button>
      ))}
    </nav>
  );
}
