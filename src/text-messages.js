const motivationalMessages = [
  "Team, remember: Together, we achieve more. Keep up the great work!",
  "Every sprint brings us closer to our goals. Stay focused and strong!",
  "Your dedication is the engine of our success. Let's keep moving forward!",
  "Think big, start small, learn fast. We're making progress every day!",
  "Innovation is a team sport. Your ideas matter. Keep them coming!",
  "Remember, challenges are just opportunities in disguise. You've got this!",
  "Great job last sprint! Let's carry that momentum forward!",
  "Your hard work is building something amazing. Be proud of your contributions!",
  "Stay curious, keep learning. Every step is progress!",
  "Collaboration is key, and you are all fantastic team players!",
  "Agility is our strength. Adapt and overcome. We can handle any change!",
  "Quality is not an act, it's a habit. You're doing an amazing job at it!",
  "Every day, you're turning vision into reality. That's incredible!",
  "Celebrate your wins, learn from your losses, and never stop improving.",
  "You are making a difference. Your efforts are truly appreciated.",
  "Remember, small daily improvements lead to stunning results.",
  "Stay positive, work hard, and make it happen!",
  "Your commitment to excellence inspires everyone around you.",
  "Trust the process. Our journey together is leading to great things.",
  "You're not just completing tasks; you're achieving milestones!",
  "Let's break barriers and set new benchmarks. We're a powerful team!",
  "Every code commit, every test, every meeting brings us closer to our goals.",
  "Your resilience in the face of challenges is admirable. Keep going!",
  "Together, we're writing a story of success. Proud to be part of this journey with you.",
  "Dedication and teamwork are our superpowers. Let's use them to their full potential.",
  "Your creativity and commitment are the sparks that drive our progress.",
  "Embrace change, welcome challenges, and celebrate growth!",
  "Every sprint review is a step forward. Thanks for your fantastic efforts!",
  "We are more than a team; we're a family. Together, we can achieve anything!",
  "Your ability to turn challenges into opportunities is what sets us apart.",
];

function generateMessage() {
  // const userId = "U05B03J5HQF"; // Replace with the actual user ID
  // <@${userId}>
  const standupQuestions = [
    "🌍 Hello team! It's time for our daily standup update.",
    "1. What did you accomplish since the last update?",
    "2. What are you planning to work on today?",
    "3. Do you have any blockers or need any help?",
  ].join("\n");

  const randomIndex = Math.floor(Math.random() * motivationalMessages.length);
  const motivationalMessage = motivationalMessages[randomIndex];

  return `${standupQuestions}\n\n*${motivationalMessage}*`;
}

module.exports = { generateMessage };
