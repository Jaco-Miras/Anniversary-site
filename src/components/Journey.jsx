import React from "react";

const Journey = () => {
  const milestones = [
    {
      year: "2022",
      title: "The Day We Met",
      emoji: "💕",
      description:
        "The day everything changed. I still remember that moment like it was yesterday.",
    },

    {
      year: "2023",
      title: "First Year Anniversary",
      emoji: "🎂",
      description:
        "Celebrating our first year together. It felt like we'd known each other forever.",
    },
    {
      year: "",
      title: "The Proposal",
      emoji: "💍",
      description:
        "I don't know when or how it happened, but I knew I wanted to spend the rest of my life with you.",
    },
    {
      year: "2029-2031",
      title: "The Wedding",
      emoji: "💒",
      description:
        "The day we promised to love each other forever. My heart is full of joy and gratitude.",
    },
  ];

  return (
    <section className="section journey-section">
      <h2>⏳ Our Journey Together</h2>
      <p className="section-subtitle">A timeline of our love story</p>

      <div className="timeline-container">
        {milestones.map((milestone, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot">{milestone.emoji}</div>
            <div className="timeline-content">
              <div className="timeline-year">{milestone.year}</div>
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
