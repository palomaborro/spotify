const User = require('../models/user');
const bcrypt = require('bcrypt');

const test = (req, res) => {
    res.status(200).send({ message: 'Test' });
}

const saveUser = (req, res) => {
    const user = new User();
    const params = req.body;

    user.name = params.name;
    user.surname = params.surname;
    user.email = params.email;
    user.role = 'ROLE_USER';
    user.image = null;

    if (params.password) {
        bcrypt.hash(params.password, 10, (err, hash) => {
            user.password = hash;
            if(user.name !== null && user.surname !== null && user.email !== null) {
                user.save((err, userStored) => {
                    if (err) {
                        res.status(500).send({ message: 'Error saving user' });
                    } else {
                        if (!userStored) {
                            res.status(404).send({ message: 'User not registered' });
                        } else {
                            res.status(200).send({ user: userStored });
                        }
                    }     
                });
            } else {
                res.status(200).send({ message: 'Fill all fields' });
            }
        });

    } else {
        res.status(200).send({ message: 'Introduce your password' });
    }
   }


module.exports = { test };