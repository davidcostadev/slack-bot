const { WebClient } = require("@slack/web-api");

const { formatDate } = require("../utils/formatDate.js");
const { generateMessage } = require("../text-messages.js");
const { getReminderMessage } = require("../reminder-messages.js");

let lastThreadTs = null;

const token = process.env.SLACK_BOT_TOKEN;
const CHANNEL_ID = process.env.SLACK_CHANNEL_ID;
const web = new WebClient(token);

// slack methods

async function checkUserResponseInThread(userId, threadTs) {
  try {
    const responses = await web.conversations.replies({
      channel: process.env.SLACK_CHANNEL_ID,
      ts: threadTs,
    });

    const userHasResponded = responses.messages.some(
      (message) => message.user === userId,
    );

    if (!userHasResponded) {
      console.log(new Date(), "User has not responded yet: ", userId);
      await sendDirectMessage(userId, getReminderMessage());
    }
  } catch (error) {
    console.error(error);
  }
}

async function postMessage(messageText, threadTs = null) {
  try {
    const res = await web.chat.postMessage({
      channel: CHANNEL_ID,
      text: messageText,
      thread_ts: threadTs ? threadTs : undefined,
    });

    console.log(new Date(), "Message sent: ", res.ts);
    return String(res.ts); // Return the timestamp for threading purposes
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function sendDirectMessage(userId, messageText) {
  try {
    // Send a message to the conversation
    await web.chat.postMessage({
      channel: userId,
      text: messageText,
    });
  } catch (error) {
    console.error(error);
  }
}

// tasks

async function sendStandupMessage() {
  console.log(new Date(), "Running scheduled task for daily standup update!");

  const formattedDate = formatDate(new Date());
  const introMessage = `*Daily Standup Update for ${formattedDate}* `;
  lastThreadTs = await postMessage(introMessage);
  console.log(new Date(), "lastThreadTs: ", lastThreadTs);

  if (lastThreadTs) {
    const standupMessage = generateMessage();
    await postMessage(standupMessage, lastThreadTs);
  }
}

async function checkUsersResponse() {
  if (lastThreadTs) {
    const userIds = process.env.SLACK_USERS.split(",");

    for (const userId of userIds) {
      await checkUserResponseInThread(userId.trim(), lastThreadTs);
    }
  }
}

module.exports = { sendStandupMessage, checkUsersResponse };
