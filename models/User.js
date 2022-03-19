const { Schema, model, Types } = require('mongoose');

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
    thoughts: { 
        type: Schema.Types.ObjectId,
        ref: 'Thought'
        
    }
});

const User = model('User', UserSchema);

module.exports = User;