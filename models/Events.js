'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const itemsSchema = new Schema({
  name: {
    type: String
  },
  quantity: {
    type: Number
  },
  status: {
    type: String
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

const Items = mongoose.model('Items', itemsSchema);

const eventsSchema = new Schema({
  owner: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  attendees: [{
    type: ObjectId,
    ref: 'User'
  }],
  items: [{ type: Schema.ObjectId, ref: 'Items' }]
});

const Events = mongoose.model('Events', eventsSchema);

module.exports = Events;

// items: [{
//   name: {
//     type: String
//   },
//   quantity: {
//     type: Number
//   },
//   status: {
//     enum: ['taken', 'available']
//   }
// }]
