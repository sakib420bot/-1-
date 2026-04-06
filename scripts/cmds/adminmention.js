module.exports = {
  config: {
    name: "adminmention",
    version: "1.3.2",
    author: "『𝐒𝐀𝐊𝐈𝐁 𝐌𝐈𝐑𝐙𝐀』",
    countDown: 0,
    role: 0,
    shortDescription: "Replies angrily when someone tags admins",
    longDescription: "If anyone mentions an admin, bot will angrily reply with random messages.",
    category: "system"
  },

  onStart: async function () {},

  onChat: async function ({ event, message }) {
    const adminIDs = ["61586259527420", "61586795594349", "61586795594349"].map(String);

    // Skip if sender is admin
    if (adminIDs.includes(String(event.senderID))) return;

    // যদি কেউ মেনশন দেয়
    const mentionedIDs = event.mentions ? Object.keys(event.mentions).map(String) : [];
    const isMentioningAdmin = adminIDs.some(id => mentionedIDs.includes(id));

    if (!isMentioningAdmin) return;

    // র‍্যান্ডম রাগী রিপ্লাই
    const REPLIES = [
      " বস কে মেনশন দিলে তোর নানির খালি ঘর 😩🐸",
      "আমার বস সাকিব এখন ব্যস্ত আছে যা বলার আমাকে বলেন আমি বলতেছি ",
      " বুকাচুদা তুই মেনশন দিবি না আমার বস রে 🥹",
      "মেনশন দিছস আর বেচে যাবি? দারা বলতাছি 😠",
      "বস সাকিব এখন ঘুমায় ডিস্টার্ব করিস না বলে দিলাম 😩🐸"
    ];

    const randomReply = REPLIES[Math.floor(Math.random() * REPLIES.length)];
    return message.reply(randomReply);
  }
};
