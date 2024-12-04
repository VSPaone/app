const express = require("express");
const router = express.Router();
const Event = require("./models/Event");
// Get all events
router.get("/events", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Get event by ID
router.get("/events/:id", async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      res.json(event);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
// Create a new event
router.post("/events", async (req, res) => {
  try {
    console.log(req.body);
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
// Update a event
router.put("/events/:id", async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
// Delete a event
router.delete("/events/:id", async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: "Event deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;