const express = require('express');
const scheduleController = require('../controllers/scheduleController');

const router = express.Router();

router
  .route('/')
  .post(scheduleController.createSchedule)
  .get(scheduleController.getAllSchedules);

router
  .route('/:id')
  .patch(scheduleController.updateSchedule)
  .delete(scheduleController.deleteSchedule);

module.exports = router;
