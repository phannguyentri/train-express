let db = require('../db');
let listUsers = db.get('users').value();
const shortId = require('shortid');

module.exports.index =  (req, res) => {
    res.render('users/index', {
        users : db.get('users').value()
    });
};

module.exports.search = (req, res) => {
    let name = req.query.name;
    let matchUsers = listUsers.filter((val, index) => {
        return val.name.indexOf(name) !== -1;
    });

    console.log(matchUsers);
    res.render('users/search', {
        users : [
            { id : 1, name : 'Tri' },
            { id : 2, name : 'Doan Kim Phuong Anh' }
        ],
        valSearch : name
    });
};

module.exports.createGet = (req, res) => {
    res.render('users/create');
};

module.exports.createPost = (req, res) => {
    let newUsername = req.body.name;
    let id = shortId.generate();

    db.get('users')
        .push({ id : id, name : newUsername})
        .write();

    res.redirect('/users');
};

module.exports.view = (req, res) => {
    let id = req.params.id;
    let user = db.get('users').find({ id: id }).value();
    res.render('users/view', { user });
};