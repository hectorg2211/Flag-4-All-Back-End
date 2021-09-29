const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  currentSchedule: { type: Boolean, default: false },
  date: { type: Date, default: Date.now() }, //TODO: Change to use a formated date
  schedule: [
    {
      hour: { type: String },
      games: [
        {
          team1: { type: String },
          team2: { type: String },
          team1Points: { type: Number, default: 0 },
          team2Points: { type: Number, default: 0 },
          category: { type: String, required: true },
        },
      ],
    },
  ],
});

const Schedule = mongoose.model('Schedule', scheduleSchema);
module.exports = Schedule;
