const { User } = require('../models');

const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
        .populate({ 
            path: 'users',
            select: '-__v'
        })
        .select('__v')
        .sort({ _id: -1 })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
          });
    }, 
    // get one user by id and populated friend and thought data
    getOneUser({ params }, res) {
        User.findOne
    },
    // post
};

module.exports = userController;