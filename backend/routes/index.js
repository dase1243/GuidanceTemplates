const express = require('express');
const router = express.Router();
const User = require('../models/User')

/* GET home page. */
router.get('/', async (req, res, next) => {
    const users = await User.find({})

    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
        users: users
    }))
});

router.post('/createUser', async (req, res) => {
    const user = new User({
        username: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        pages: {
            '/': {
                firstTimeVisit: true,
                tutorials: {
                    "tutorial1": {
                        step: 0,
                        numberOfSteps: 6
                    },
                    "tutorial2": {
                        step: 0,
                        numberOfSteps: 5
                    },
                    "tutorial3": {
                        step: 0,
                        numberOfSteps: 4
                    },
                    "tutorial4": {
                        step: 0,
                        numberOfSteps: 3
                    },
                }
            },
            '/home_check1': {
                firstTimeVisit: true,
                tutorials: {
                    "tutorial1": {
                        step: 0,
                        numberOfSteps: 6
                    },
                    "tutorial2": {
                        step: 0,
                        numberOfSteps: 5
                    },
                    "tutorial3": {
                        step: 0,
                        numberOfSteps: 4
                    },
                    "tutorial4": {
                        step: 0,
                        numberOfSteps: 3
                    },
                }
            },
            '/home_check2': {
                firstTimeVisit: true,
                tutorials: {
                    "tutorial1": {
                        step: 0,
                        numberOfSteps: 6
                    },
                    "tutorial2": {
                        step: 0,
                        numberOfSteps: 5
                    },
                    "tutorial3": {
                        step: 0,
                        numberOfSteps: 4
                    },
                    "tutorial4": {
                        step: 0,
                        numberOfSteps: 3
                    },
                }
            }
        }
    })

    await user.save()
    res.end()
})

router.get('/getUserByUsername/:username', async (req, res) => {
    const user = await User.findOne({
        username: req.params.username
    })

    res.end(JSON.stringify({
        user
    }))
})

router.post('/update/:username', async (req, res) => {
    console.log('post in update\n')
    console.log('username', req.params.username)
    const user = await User.findOne({
        username: req.params.username
    })

    console.log(user)
    user.pages.set('/', true)
    user.pages.set('/create', true)
    user.pages.set('/generate', true)

    console.log('user updated\n')
    console.log(user)

    await user.save()
    res.end()
})


router.post('/deleteAll', async (req, res) => {
    const user = await User.remove({})

    console.log('All documents are removed from mongo DB')
    res.send()
})


module.exports = router;
