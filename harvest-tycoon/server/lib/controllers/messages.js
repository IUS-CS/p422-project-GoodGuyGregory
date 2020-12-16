const Message = require('../models/message');
const User = require('../models/user');

module.exports = {
    byUser: function (req, res) {
        // return all possible assignments from the model
        const user = req.params.username;
        User.findOne().byName(user).exec((err, user) => {
            if (err) {
                res.status(500);
                res.json(err);
                return;
            }
            if (!user) {
                res.status(404);
                res.json({ 'err': 'user not found' });
                return;
            }
            console.log(`retreiving ${user.username}'s messages: `)
            res.json(user.inbox.messages);
        })
    },
    sendMessage: function (req, res) {
        const sendingUser = req.params.username;
        const newMessage = new Message(req.body);
        const receivingUser = newMessage.to;

        User.findOne().byName(sendingUser).exec((err, sendingUser) => {
            if (err) {
                res.status(500);
                res.json(err);
                return;
            }
            if (!sendingUser) {
                res.status(404);
                res.json({ 'err': 'user not found' });
                return;
            }
            console.log(`sending ${newMessage.subject} to ${newMessage.to}'s inbox: `)
            sendingUser.inbox.messages.push(newMessage);
            sendingUser.save()
                .then(() => {
                    res.sendStatus(204);
                })
                .catch(err => {
                    res.status(400);
                    res.json(err);
                });

        })
        User.findOne().byName(receivingUser).exec((err, receivingUser) => {
            if (err) {
                res.status(500);
                res.json(err);
                return;
            }
            if (!receivingUser) {
                res.status(404);
                res.json({ 'err': 'user not found' });
                return;
            }
            console.log(`sending ${newMessage.subject} to ${newMessage.to}'s inbox: `)
            receivingUser.inbox.messages.push(newMessage);
            receivingUser.save()
                .then(() => {
                    res.sendStatus(204);
                })
                .catch(err => {
                    res.status(400);
                    res.json(err);
                });

        })
        res.json(newMessage);
    }
}
