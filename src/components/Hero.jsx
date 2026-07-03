import React, { useEffect, useState } from "react";

const Hero = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMessage ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMessage]);
  return (
    <section className="hero">
      <h1>❤️ Happy 4th Anniversary ❤️</h1>
      <h2>To My Forever MAHAL</h2>

      <p>I play sa, para naay background ba.</p>

      <div className="music-player">
        <iframe
          width="480"
          height="280"
          src="https://www.youtube.com/embed/l5Bn9m-ro3A?list=RDl5Bn9m-ro3A"
          title="Tahanan (c) El Manu [Official Audio]"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <p>
        Every moment with you has been the most beautiful chapter of my life.
        Thank you for making every day feel special.
      </p>

      <button
        type="button"
        onClick={() => {
          setShowMessage(!showMessage);
        }}
      >
        {showMessage ? "💌 Close My Gift" : "🎁 Open My Gift"}
      </button>

      {showMessage && (
        <div className="modal-overlay" onClick={() => setShowMessage(false)}>
          <div className="letter-modal" onClick={(e) => e.stopPropagation()}>
            {/* <button className="close-btn" onClick={() => setShowMessage(false)}>
              ✕
            </button> */}

            <h3>💌 A Letter For You</h3>

            <p style={{ textAlign: "left" }}>
              Four years of loving each other across the distance, and every
              single day has proven that love isn't measured by miles—it's
              measured by commitment, trust, and the choice to keep choosing
              each other.
            </p>

            <br />

            <p style={{ textAlign: "left" }}>
              Being apart hasn't been easy. We've missed birthdays,
              celebrations, simple hugs, and countless moments we wished we
              could spend side by side. But through every video call, every
              late-night conversation, every "I miss you," and every "Good
              morning" and "Good night," we've continued to build something
              real.
            </p>

            <br />

            <p style={{ textAlign: "left" }}>
              Thank you for staying, for believing in us, and for making this
              distance feel worth it. You've been my comfort, my safe place, and
              my favorite person, even from miles away. I'm so proud of how far
              we've come together.
            </p>

            <br />

            <p style={{ fontWeight: 700, textAlign: "center" }}>
              Happy 4th Anniversary, my love. ❤️ I love you always.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
