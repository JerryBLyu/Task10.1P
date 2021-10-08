const express = require("express");
const router = express.Router({ mergeParams: true });

function returnValue(err, res, data) {
    if (err) {
        res.status(200).json({ Success: false, err });
    } else {
        res.status(200).json({ Success: true, data: data });
    }
}


// GET, POST, PUT, PATCH and DELETE



router.post("/add_task", (req, res) => {

    const Model = require(`./Task`);

    Model.create(req.body, (err, data) => {
        returnValue(err, res, data);
    });

});



module.exports = router;
