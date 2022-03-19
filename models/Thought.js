const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema(
{
   thoughtText: {
       type: String,
       required: 'Thought text is required!', 
   //    validate: [({ length }) => length >= 128, 'Must be between 1 and 128 characters long.']
   },
   createdAt: {
       type: Date,
       default: Date.now
   },
   username: {
       type: String,
       required: 'Username is required!'
   },
//    reactions: {

//    }
   
   //{
   // toJSON: {
   //   virtuals: true,
   //   getters: true
   // },
  //  id: false
}
);

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId() 
    },
    reactionBody: {
        type: String,
        required: 'Reaction is required!',
        validate: [({ length }) => length >= 280]
    },
    username: {
        type: String,
        required: 'Username is required!'
    },
    createdAt: {
        date: Date, 
       // default: Date.now
    }
});

reactionSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', reactionSchema);

module.exports = Thought;