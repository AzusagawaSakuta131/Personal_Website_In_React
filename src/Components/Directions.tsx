import { useEffect, useState } from "react";
import "./Directions.css";

export const Directions = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sectionIds = ["introduce", "my-projects", "hobbies"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="directions">
    <div className="navibox">
        <a href="#introduce" className={active === "introduce" ? "active" : ""}>introduce</a>
    </div>
    <div className="navibox">
        <a href="#my-projects" className={active === "my-projects" ? "active" : ""}>projects</a>
    </div>
    <div className="navibox">
        <a href="#hobbies" className={active === "hobbies" ? "active" : ""}>hobbies</a>
        </div>
    </div>
  );
};
