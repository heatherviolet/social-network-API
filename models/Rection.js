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