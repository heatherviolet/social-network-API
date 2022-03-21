const { Schema, model, Types } = require('mongoose');

const ThoughtSchema = new Schema(
{
   thoughtText: {
       type: String,
       required: 'Thought text is required!', 
        minLength: 1,
        maxLength: 280
   },
   createdAt: {
       type: Date,
       default: Date.now,
       get: createdAtVal => dateFormat(createdAtVal)
   },
   username: {
       type: String,
       required: 'Username is required!'
   },
   reactions: {
        ref: 'Reaction'
   }
},
   {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
}
);
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;