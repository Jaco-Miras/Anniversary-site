import React, { useState } from "react";

const Hero = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <section className="hero">
      <h1>❤️ Happy 4th Anniversary ❤️</h1>
      <h2>To My Forever MAHAL</h2>

      <p>
        Every moment with you has been the most beautiful chapter of my life.
        Thank you for making every day feel special.
      </p>

      <button type="button" onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? "💌 Close My Gift" : "🎁 Open My Gift"}
      </button>

      {showMessage && (
        <div className="gift-card animate-in">
          <h3>💌 A Letter For You</h3>
          <p>
            Four amazing years have passed, and every single day with you has
            been a beautiful chapter of our story. Through every laugh, every
            challenge, every adventure, and every quiet moment, you've made my
            life brighter than I ever imagined. Thank you for loving me,
            believing in me, and standing by my side through it all. Looking
            back at everything we've shared makes me grateful, and looking ahead
            fills me with excitement for all the memories we'll continue to
            create together. They say the fourth anniversary symbolizes strength
            and growth, and that's exactly what we've built together—a love that
            continues to grow deeper with each passing day. No matter where life
            takes us, I promise to keep choosing you, supporting you, and loving
            you with all my heart.
            <br />
            <br />
          </p>

          <p style={{ fontWeight: 700, textAlign: "center" }}>
            Happy 4th Anniversary, my forever favorite person. Here's to us, and
            to a lifetime of love, laughter, and countless more anniversaries. I
            love you always. ❤️
          </p>
        </div>
      )}
    </section>
  );
};

export default Hero;
