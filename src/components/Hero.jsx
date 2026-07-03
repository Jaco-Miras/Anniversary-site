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
          <p style={{ textAlign: "left" }}>
            Four years of loving each other across the distance, and every
            single day has proven that love isn't measured by miles—it's
            measured by commitment, trust, and the choice to keep choosing each
            other.
          </p>
          <br />
          <p style={{ textAlign: "left" }}>
            Being apart hasn't been easy. We've missed birthdays, celebrations,
            simple hugs, and countless moments we wished we could spend side by
            side. But through every video call, every late-night conversation,
            every "I miss you," and every "Good morning" and "Good night," we've
            continued to build something real.
          </p>
          <br />
          <p style={{ textAlign: "left" }}>
            Thank you for staying, for believing in us, and for making this
            distance feel worth it. You've been my comfort, my safe place, and
            my favorite person, even from miles away. I'm so proud of how far
            we've come together. Four years of love, patience, growth, and
            countless memories—and this is only the beginning. One day, the
            distance will just be part of our story, and we'll look back knowing
            we made it through because we never gave up on each other.
          </p>

          <br />
          <p style={{ fontWeight: 700, textAlign: "center" }}>
            Happy 4th Anniversary, my love. Thank you for loving me from afar
            and reminding me every day that true love knows no distance. Here's
            to us, to forever, and to the day we no longer have to say goodbye
            after every call. ❤️ I love you always.
          </p>
        </div>
      )}
    </section>
  );
};

export default Hero;
