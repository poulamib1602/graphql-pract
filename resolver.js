const User = require('./models/User');
const Todo = require('./models/Todo');

const resolvers = {
  Query: {
    getUser: async (parent, { id }) => {
      return await User.findById(id).populate('todos');
    },
  },
  User: {
    todos: async (user) => {
      return await Todo.find({ userId: user.id });
    },
  },
};
module.exports = resolvers;