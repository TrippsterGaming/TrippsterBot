const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'rip') {
    msg.reply('Take the L');
  }
});

client.on('message', msg => {
  if (msg.content === '~~sponsor') {
    msg.reply('Wanna support Tripp!?! Well for just **$5** you can do that! Get partied EVERY STREAM, friended by Trippster, invited to the guild, AND THE **SICK YOUTUBE SPONSOR ROLE!** Click the link to sponsor now!

https://gaming.youtube.com/c/Trippster?action=sponsor');
  }
});

client.on('message', msg => {
  if (msg.content === '~~sponser') {
    msg.reply('Wanna support Tripp!?! Well for just **$5** you can do that! Get partied EVERY STREAM, friended by Trippster, invited to the guild, AND THE **SICK YOUTUBE SPONSOR ROLE!** Click the link to sponsor now!

https://gaming.youtube.com/c/Trippster?action=sponsor');
  }
});

client.on('message', msg => {
  if (msg.content === 'oof') {
    msg.reply('OOF');
  }
});

client.on('message', msg => {
  if (msg.content === 'OOF') {
    msg.reply('OOF');
  }
});

client.on('message', msg => {
  if (msg.content === 'L') {
    msg.reply('L');
  }
});

client.on('message', msg => {
  if (msg.content === 'l') {
    msg.reply('L');
  }
});

client.on('message', msg => {
  if (msg.content === 'f') {
    msg.reply('F');
  }
});

client.on('message', msg => {
  if (msg.content === 'F') {
    msg.reply('F');
  }
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('~~kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('Optional reason that will display in the audit logs').then(() => {
          // We let the message author know we were able to kick the person
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.reply('I was unable to kick the member');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    // Otherwise, if no user was mentioned
    } else {
      message.reply('You didn\'t mention the user to kick!');
    }
  }
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('~~ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          // We let the message author know we were able to ban the person
          message.reply(`Successfully banned ${user.tag}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to ban the member,
          // either due to missing permissions or role hierarchy
          message.reply('I was unable to ban the member');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    } else {
    // Otherwise, if no user was mentioned
      message.reply('You didn\'t mention the user to ban!');
    }
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
