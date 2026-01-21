import { useRef, useState } from "react";
import "../styles/Marquee.css";

// IMPORT IMAGES
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";
import img4 from "../assets/images/img4.jpeg";
import img5 from "../assets/images/img5.jpeg";
import img6 from "../assets/images/img6.jpeg";
import img7 from "../assets/images/img7.jpeg";
import img8 from "../assets/images/img8.jpeg";
import img9 from "../assets/images/img9.jpeg";
import img10 from "../assets/images/img10.jpeg";

import img11 from "../assets/images/img11.jpeg";
import img12 from "../assets/images/img12.jpeg";
import img13 from "../assets/images/img13.jpeg";
import img14 from "../assets/images/img14.jpeg";
import img15 from "../assets/images/img15.jpeg";
import img16 from "../assets/images/img16.jpeg";
import img17 from "../assets/images/img17.jpeg";
import img18 from "../assets/images/img18.jpeg";
import img19 from "../assets/images/img19.jpeg";
import img20 from "../assets/images/img20.jpeg";

const row1 = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10];
const row2 = [img11,img12,img13,img14,img15,img16,img17,img18,img19,img20];

function MarqueeRow({ images, direction }) {

  const trackRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [paused, setPaused] = useState(false);

  // MOUSE / TOUCH START
  const startDrag = (e) => {
    setIsDragging(true);
    setPaused(true);

    const x = e.pageX || e.touches[0].pageX;
    setStartX(x);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  // MOVE
  const onDrag = (e) => {
    if (!isDragging) return;

    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX) * 1.5;

    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  // END
  const stopDrag = () => {
    setIsDragging(false);
    setPaused(false);
  };

  return (
    <div
      ref={trackRef}
      className={`marquee-track ${direction} ${paused ? "paused" : ""}`}
      onMouseDown={startDrag}
      onMouseMove={onDrag}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onTouchStart={startDrag}
      onTouchMove={onDrag}
      onTouchEnd={stopDrag}
    >

      {[...images, ...images].map((img, index) => (
        <div className="marquee-card" key={index}>
          <img src={img} draggable="false" />
        </div>
      ))}

    </div>
  );
}

function MarqueeSection() {
  return (
    <section className="marquee-wrapper">

      <MarqueeRow images={row1} direction="marquee-left" />
      <MarqueeRow images={row2} direction="marquee-right" />

    </section>
  );
}

export default MarqueeSection;
