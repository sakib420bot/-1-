const fs = require("fs-extra");
const request = require("request");
const path = require("path");

module.exports = {
  config: {
    name: "『𝐒𝐀𝐊𝐈𝐁 𝐌𝐈𝐑𝐙𝐀』",
    version: "1.0.3",
    author: "sakib,
    role: 0,
    shortDescription: "Mamun Profile (No Prefix)",
    category: "Information",
    guide: {
      en: "type sakib"
    }
  },

  // 👇 এটা না থাকলে error দিবে
  onStart: async function () {},

  onChat: async function ({ api, event }) {
    const msg = event.body?.toLowerCase();
    if (!msg || msg !== "sakib") return;

    const profileText = 
`╔════════════════════════════════════════╗
║ 🌌✨ 𝗣𝗥𝗢𝗙𝗜𝗟𝗘 𝗖𝗔𝗥𝗗 ✨🌌 ║
╠════════════════════════════════════════╣
║
║[‎🤖] 𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍:-『𝐒𝐀𝐊𝐈𝐁 𝐌𝐈𝐑𝐙𝐀』
║
║[📝] 𝐁𝐈𝐎 𝐀𝐃𝐌𝐈𝐍 [👇]
║
║[মৃত্যুর আগে ও যদি তোমাকে পাওয়ার কোনো সুযোগ থাকে সেদিন ও আমি চিৎকার করে বলবো আজও আমি তোমাকে অসম্ভব ভালোবাসি।...!]
║
║[🏠] 𝐀𝐃𝐃𝐑𝐄𝐒𝐒 👉 :[𝙢𝙮𝙢𝙚𝙣𝙨𝙞𝙣𝙜𝙝]:[𝐁𝐀𝐍𝐆𝐋𝐀𝐃𝐄𝐒𝐇] 
║
║[🕋] 𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍 👉 :[𝐈𝐒𝐋𝐀𝐌]
║
║[🚻] 𝐆𝐄𝐍𝐃𝐄𝐑 👉 :[𝐌𝐀𝐋𝐄]
║
║[💞] 𝐑𝐄𝐋𝐀𝐓𝐈𝐎𝐍𝐒𝐇𝐈𝐏 👉 :[𝐒𝐈𝐍𝐆𝐋𝐄]
║
║[🧑‍🔧] 𝐖𝐎𝐑𝐊 👉 :[𝐉𝐎𝐁]
╚════════════════════════════════════════╝
║_____________🅲🅾🅽🆃🅰🅲🆃_____________
║[‎📞] 𝐖𝐇𝐀𝐓'𝐒 𝐀𝐏𝐏 👉:[https://wa.me/+8801790452366]
║
║
║[‎🌍] 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 (❶)💥 : https://m.me/Mir za
║
╠════════════════════════════════════════╣
║ 🎯 Game      : Free Fire 🔫
╚════════════════════════════════════════╝`;

    const cacheDir = path.join(__dirname, "cache");
    const imgPath = path.join(cacheDir, "mamun.jpg");

    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir);
    }

    const imgLink = "https://i.imgur.com/P0SDyl9.jpeg";

    const send = () => {
      api.sendMessage(
        {
          body: profileText,
          attachment: fs.createReadStream(imgPath)
        },
        event.threadID,
        () => fs.unlinkSync(imgPath),
        event.messageID
      );
    };

    request(encodeURI(imgLink))
      .pipe(fs.createWriteStream(imgPath))
      .on("close", send)
      .on("error", () => {
        api.sendMessage("❌ Image load failed!", event.threadID, event.messageID);
      });
  
