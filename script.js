const schedule = require("node-schedule");

const {
  checkUsersResponse,
  sendStandupMessage,
} = require("./src/tasks/sendStandupMessage.js");

if (!process.env.SLACK_BOT_TOKEN) {
  console.log("Error: Specify token in environment");
  process.exit(1);
}

if (!process.env.SLACK_CHANNEL_ID) {
  console.log("Error: Specify channel in environment");
  process.exit(1);
}

if (!process.env.SLACK_USERS) {
  console.log("Error: Specify users list in environment");
  process.exit(1);
}

const RUN_STANDUP = "0 15 * * 1-5";
const RUN_STANDUP_REMINDER = "0 16 * * 1-5";

schedule.scheduleJob(RUN_STANDUP, sendStandupMessage);

schedule.scheduleJob(RUN_STANDUP_REMINDER, checkUsersResponse);

console.log("Scheduled task created!");
console.log(RUN_STANDUP);
console.log(RUN_STANDUP_REMINDER);
