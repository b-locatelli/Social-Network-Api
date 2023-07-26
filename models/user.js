const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trimmed: true,
        },
        email: {
            type: String, 
            required: true,
            unique: true,
            // "valid adress"
        },
        thoughts: [
            {
                reference: "Thought"
            }
        ],
        friends: [
            {
                reference: "User"
            }
        ],
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
    }
)

const { User } = require('user', userSchema);
module.exports = User;