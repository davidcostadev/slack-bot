const reminderMessages = [
  "🕵️‍♂️ Alert! Your standup update is missing. Please send an update to restore balance to the universe.",
  "🌟 Breaking News: Your update has been voted the most awaited update of the day. Please grace us with it.",
  "🚀 Houston, we have a problem. We can't find your update. Over.",
  "🎣 Just fishing for your update. Any bites?",
  "🤖 Beep boop! I'm a bot missing your update. Please comply or I will start learning sad songs.",
  "🔍 Looking for this? 👀 Your update! It seems to have gone on a little adventure.",
  "🌈 Somewhere over the rainbow, updates fly high. Yours is still on the ground, though.",
  "⏰ It's that magical time again to share what you're up to. Abracadabra, send your update!",
  "🦸‍♂️ Calling all superheroes! Your update is the only thing that can save the day!",
  "🚨 Red alert! Your standup update is still at large. Please report it immediately.",
  "📡 Satellite just in: your update is currently orbiting Mars. Time to beam it back!",
  "🕒 Remember, time flies, and so should your update. Right into this thread.",
  "🧙‍♂️ By the power of updates, I summon thee to this thread!",
  "🧐 A wild update is expected! Stay alert and watch this thread closely.",
  "🌪️ A whirlwind of activity, yet your update is like the calm eye of a storm. Too calm.",
  "🚦Green light for all updates! Yours is still at red. Time to go!",
  "🐢 Slow and steady wins the race, but let's not be the turtle with updates.",
  "🧭 Lost your way to the update thread? This message is your compass!",
  "🚀 Mission Control ready for your update. Countdown initiated!",
  "👻 A ghostly silence where your update should be. Spooky!",
  "🕵️‍♀️ In today's episode of 'Where in the World Is Your Update?'...",
  "🏝️ Looks like your update is on a desert island. Time to send a rescue boat!",
  "🎭 And now, the moment we've all been waiting for: your daily update!",
  "🚂 All aboard the Update Express! Next stop: this thread.",
  "👑 Your update is like royalty - eagerly awaited and highly revered!",
  "🌚 Even the moon is high up in the sky. How about your update?",
  "🌵 It's a dry day in the desert of updates. Quench our thirst, please.",
  "👀 Eyes on the thread! A wild update from you is about to appear... right?",
  "🎉 Surprise! It's time for your daily update. Let's make it a party in this thread.",
  "🧩 You're the missing piece in today's update puzzle. Complete us!",
];

const getReminderMessage = () => {
  const randomIndex = Math.floor(Math.random() * reminderMessages.length);
  return reminderMessages[randomIndex];
};

module.exports = { getReminderMessage };
