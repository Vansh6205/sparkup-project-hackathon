const Userdb = require('../models/model');

// Create and save new user
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content cannot be empty!" });
        return;
    }


    const user = new Userdb({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        mobileNo: req.body.mobileNo,
        otp: req.body.otp,
        password: req.body.password
    });

    user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        });
};
