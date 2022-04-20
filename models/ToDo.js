const { Schema, model } = require('../config/database');


const toDoSchema = Schema(
    {
        title: {
            required: true,
            type: String
        },
        status: {
            type: Boolean,
            default: "To-Do",
            enum: ["To-Do", "Completed"]
        }
    }
);

module.exports = model('ToDo', toDoSchema);