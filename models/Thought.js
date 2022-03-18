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
   
   //{
   // toJSON: {
   //   virtuals: true,
   //   getters: true
   // },
  //  id: false
}
);