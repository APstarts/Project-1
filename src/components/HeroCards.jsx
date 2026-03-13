import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function HeroCards() {

  //hero show off cards
  const cards = [
    { id: 1, content: "20+ clients served" },
    { id: 2, content: "360+ github contributions this year" },
    { id: 3, content: "Machine Learning and Deep Learning Specialization" },
    { id: 4, content: "Solving financial workflows with Python" },
  ];
  useGSAP(() => {
    gsap.from(".hero-card", {
      // 1. Start State: Edge-on to the viewer
      rotationY: -90,
      opacity: 0,

      // swinging from center or right or left?
      transformOrigin: "right",

      // 3. Animation Feel
      duration: 1.2,
      stagger: 0.2, // Each card starts 0.2s after the previous one
      ease: "power3.out", // A smooth decelerating ease
    });
  }, []);
  return (
    <section id="hero-cards">
      {cards.map((item, index) => (
        <div key={index} className={`hero-card hero-card-${item.id}`}>
          <p>{item.content}</p>
        </div>
      ))}
    </section>
  );
}

export default HeroCards;
