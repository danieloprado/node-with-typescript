var userRepository = require('../repositories/user');
async function list(req, res) {
    var users = await userRepository.list();
    res.json(users);
}
module.exports = list;
