const express = require("express");
const {
    createEvent,
    getAllEvents,
    getEventById,
} = require("../controller/eventController");
const {
    createUser,
    getAllUsers,
    sendSMS,
} = require("../controller/userController");

const router = express.Router();

router.route("/events").post(createEvent).get(getAllEvents);
router.route("/events/:id").get(getEventById);
router.route("/users").post(createUser).get(getAllUsers);
router.route("/users/msg").post(sendSMS);

module.exports = router;