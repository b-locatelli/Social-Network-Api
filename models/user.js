const { Schema, model, Types } = require('mongoose');
const { Thought } = require('./thought');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

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
            validate: [validateEmail, 'Please fill a valid email address'],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought"
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
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

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });

const User = model('User', userSchema);
module.exports = User;