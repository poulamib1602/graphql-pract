const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todoSchema = new Schema({
  title: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});
module.exports = mongoose.model('Todo', todoSchema);
