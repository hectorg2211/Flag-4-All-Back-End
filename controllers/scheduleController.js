const Schedule = require('../models/scheduleModel');
const catchAsync = require('../utils/catchAsync');

exports.createSchedule = catchAsync(async (req, res, next) => {
  const newSchedule = await Schedule.create(req.body);
  console.log(req.body);

  res.status(200).json({
    status: 'success',
    data: {
      newSchedule,
    },
  });
});

exports.getAllSchedules = catchAsync(async (req, res, next) => {
  const schedules = await Schedule.find();

  res.set('Access-Control-Allow-Origin', '*').status(200).json({
    status: 'success',
    data: {
      schedules,
    },
  });
});

exports.updateSchedule = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const schedule = await Schedule.findByIdAndUpdate(id, req.body, {
    new: true, // Returns the modified document rather than the original
    runValidators: true,
  });

  if (!schedule) {
    console.log('💔 No document found with that ID 💔');
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: schedule,
    },
  });
});

exports.deleteSchedule = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const schedule = await Schedule.findByIdAndDelete(id);

  if (!schedule) {
    console.log('💔 No document found with that ID 💔');
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
