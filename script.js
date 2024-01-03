const schedule = require("node-schedule");

const {
  checkUsersResponse,
  sendStandupMessage,
} = require("./src/tasks/sendStandupMessage.js");

if (!process.env.SLACK_BOT_TOKEN) {
  console.log(new Date(), "Error: Specify token in environment");
  process.exit(1);
}

if (!process.env.SLACK_CHANNEL_ID) {
  console.log(new Date(), "Error: Specify channel in environment");
  process.exit(1);
}

if (!process.env.SLACK_USERS) {
  console.log(new Date(), "Error: Specify users list in environment");
  process.exit(1);
}

const ruleStandup = new schedule.RecurrenceRule();

// monday to friday
ruleStandup.dayOfWeek = new schedule.Range(1, 5);
ruleStandup.hour = 17;
ruleStandup.minute = 23;
ruleStandup.second = 0;
ruleStandup.tz = "America/Recife";

const ruleReminder = new schedule.RecurrenceRule();

ruleReminder.dayOfWeek = new schedule.Range(1, 5);
ruleReminder.hour = 17;
ruleReminder.minute = 30;
ruleReminder.second = 0;
ruleReminder.tz = "America/Recife";

schedule.scheduleJob(ruleStandup, sendStandupMessage);

schedule.scheduleJob(ruleReminder, checkUsersResponse);

console.log(new Date(), "Scheduled task created!");
