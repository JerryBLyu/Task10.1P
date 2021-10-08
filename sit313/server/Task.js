const mongoose = require("mongoose");

const schema = mongoose.Schema({
    task_type: {
        type: String
    },
    budget_type: {
        type: String
    },
    budget: {
        type: Number
    },
    title: {
        type: String
    },

    description: {
        type: String
    },

    date: {
        type: String
    },

    suburb: {
        type: String
    },
});
const Task = mongoose.model("Task", schema);
module.exports = Task;
