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
            No matter where life takes us, I promise to keep choosing you every
            single day. Thank you for your love, patience, laughter, and for
            making my life complete.
            <br />
            <br />
            Happy Anniversary, my love. ❤️
          </p>
        </div>
      )}
    </section>
  );
};

export default Hero;
