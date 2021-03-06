const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            trim: true,
            unique: true,
            required: 'Username is required!'
        },
        email: {
            type: String,
            unique: true,
            required: 'Email is required!',
            match: [/.+@.+\..+/]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [{
                type: Schema.Types.ObjectId,
                ref: 'User'
        }]
    },
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
        id: false
    }
);

UserSchema.virtual('friendCount').get(function () {
  //  return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;