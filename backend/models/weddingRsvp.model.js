const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const rsvpSchema = new Schema({
  name: { type: String, required: true },
  response: { type: String, required: true },
  starter: { type: String, required: false },
  main: { type: String, required: false },
  dessert: { type: String, required: false },
  comments: { type: String, required: true }
}, {
  timestamps: true
})

const WeddingRSVP = mongoose.model('WeddingRSVP', rsvpSchema)

module.exports = WeddingRSVP