module.exports = {
  name: "react",
  description: "add reactions to all",
  async execute(message) {
    const channel = message.guild.channels.cache.find((c) => c.name === "sorular");

    if (!channel) {
      return message.reply("channel doesn't exist.");
    }

    if (message.channel === channel) {
      await message.channel.messages.fetch()
        .then((messages) => {
          const messagesArr = messages.array();

          for (const msg of messagesArr) {
            msg.react("🇦");
            msg.react("🇧");
            msg.react("🇨");
            msg.react("🇩");
            msg.react("🇪");
          }
        });
    } else {
      message.reply("Wrong channel. Try again.");
      return;
    }
  }
};