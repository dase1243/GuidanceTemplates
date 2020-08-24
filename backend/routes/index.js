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

router.post('/createUser/:username', async (req, res) => {
    const user = new User({
        username: req.params.username,
        pages: [{
            "path": "/",
            "firstTimeVisit": true,
            "tutorials": [
                {
                    "label": "Tutorial 1",
                    "currentStep": 0,
                    "numberOfSteps": 6,
                    "labels": [
                        "Identify your personal goals and values.",
                        "Pursue your hobbies and interests to make yourself more interesting.",
                        "Challenge the beliefs that you learned from others to find your truth.",
                        "Embrace your flaws because they make you who your are.",
                        "Silence your inner critic.",
                        "Try new things to get more experiences."
                    ],
                    "descriptions": [
                        "Make a list of the things that are really important to you. Next, consider the things you most want to achieve in your lifetime. Review these lists to figure out what you most value. Then, choose 1-3 personal goals that are important to you.",
                        "Think about the things you enjoy doing most, then figure out how you can include them in your life more.",
                        "You’ve probably absorbed a lot of rules about life from the people around you, like your parents, teachers, or religious leaders. Some of the beliefs will feel true for you, but others may not. Think about the beliefs you learned from others, then question whether or not they feel true for you. In some cases, you may want to talk to other people or do some research to learn more about the topic. Finally, adopt beliefs that fit with your personal values.",
                        "No one is perfect, and it’s okay to have flaws! Instead of looking at your flaws as a bad thing, view them as a balance that helps you recognize your best qualities. Then, try to stop criticizing yourself and focus on being your best self.",
                        "It’s likely that your inner critic is worried that people are going to judge you. That’s probably because you felt judged in the past. To quiet this voice, figure out what you’re afraid will happen if you just be yourself. Then, challenge those thoughts by focusing on what could go right and thinking about your strengths.",
                        "Your experiences make you more unique, so be open to trying new things. Attend local events and festivals, try out new hobbies, and sample new foods."
                    ]
                },
                {
                    "label": "Tutorial 2",
                    "currentStep": 0,
                    "numberOfSteps": 5,
                    "labels": [
                        "Tutorial 2, Step 1",
                        "Tutorial 2, Step 2",
                        "Tutorial 2, Step 3",
                        "Tutorial 2, Step 4",
                        "Tutorial 2, Step 5",
                    ],
                    "descriptions": [
                        "Tutorial 2, Step 1 Description",
                        "Tutorial 2, Step 2 Description",
                        "Tutorial 2, Step 3 Description",
                        "Tutorial 2, Step 4 Description",
                        "Tutorial 2, Step 5 Description",
                    ]
                },
                {
                    "label": "Tutorial 3",
                    "currentStep": 0,
                    "numberOfSteps": 4,
                    "labels": [
                        "Tutorial 3, Step 1",
                        "Tutorial 3, Step 2",
                        "Tutorial 3, Step 3",
                        "Tutorial 3, Step 4",
                    ],
                    "descriptions": [
                        "Tutorial 3, Step 1 Description",
                        "Tutorial 3, Step 2 Description",
                        "Tutorial 3, Step 3 Description",
                        "Tutorial 3, Step 4 Description",
                    ]
                },
                {
                    "label": "Tutorial 4",
                    "currentStep": 0,
                    "numberOfSteps": 3,
                    "labels": [
                        "Tutorial 4, Step 1",
                        "Tutorial 4, Step 2",
                        "Tutorial 4, Step 3",
                    ],
                    "descriptions": [
                        "Tutorial 4, Step 1 Description",
                        "Tutorial 4, Step 2 Description",
                        "Tutorial 4, Step 3 Description",
                    ]
                }]
        },
            {
                "path": '/home_check1',
                "firstTimeVisit": true,
                "tutorials": [
                    {
                        "label": "Tutorial 1",
                        "currentStep": 0,
                        "numberOfSteps": 6,
                        "labels": [
                            "Identify your personal goals and values.",
                            "Pursue your hobbies and interests to make yourself more interesting.",
                            "Challenge the beliefs that you learned from others to find your truth.",
                            "Embrace your flaws because they make you who your are.",
                            "Silence your inner critic.",
                            "Try new things to get more experiences."
                        ],
                        "descriptions": [
                            "Make a list of the things that are really important to you. Next, consider the things you most want to achieve in your lifetime. Review these lists to figure out what you most value. Then, choose 1-3 personal goals that are important to you.",
                            "Think about the things you enjoy doing most, then figure out how you can include them in your life more.",
                            "You’ve probably absorbed a lot of rules about life from the people around you, like your parents, teachers, or religious leaders. Some of the beliefs will feel true for you, but others may not. Think about the beliefs you learned from others, then question whether or not they feel true for you. In some cases, you may want to talk to other people or do some research to learn more about the topic. Finally, adopt beliefs that fit with your personal values.",
                            "No one is perfect, and it’s okay to have flaws! Instead of looking at your flaws as a bad thing, view them as a balance that helps you recognize your best qualities. Then, try to stop criticizing yourself and focus on being your best self.",
                            "It’s likely that your inner critic is worried that people are going to judge you. That’s probably because you felt judged in the past. To quiet this voice, figure out what you’re afraid will happen if you just be yourself. Then, challenge those thoughts by focusing on what could go right and thinking about your strengths.",
                            "Your experiences make you more unique, so be open to trying new things. Attend local events and festivals, try out new hobbies, and sample new foods."
                        ]
                    },
                    {
                        "label": "Tutorial 2",
                        "currentStep": 0,
                        "numberOfSteps": 5,
                        "labels": [
                            "Tutorial 2, Step 1",
                            "Tutorial 2, Step 2",
                            "Tutorial 2, Step 3",
                            "Tutorial 2, Step 4",
                            "Tutorial 2, Step 5",
                        ],
                        "descriptions": [
                            "Tutorial 2, Step 1 Description",
                            "Tutorial 2, Step 2 Description",
                            "Tutorial 2, Step 3 Description",
                            "Tutorial 2, Step 4 Description",
                            "Tutorial 2, Step 5 Description",
                        ]
                    },
                    {
                        "label": "Tutorial 3",
                        "currentStep": 0,
                        "numberOfSteps": 4,
                        "labels": [
                            "Tutorial 3, Step 1",
                            "Tutorial 3, Step 2",
                            "Tutorial 3, Step 3",
                            "Tutorial 3, Step 4",
                        ],
                        "descriptions": [
                            "Tutorial 3, Step 1 Description",
                            "Tutorial 3, Step 2 Description",
                            "Tutorial 3, Step 3 Description",
                            "Tutorial 3, Step 4 Description",
                        ]
                    },
                    {
                        "label": "Tutorial 4",
                        "currentStep": 0,
                        "numberOfSteps": 3,
                        "labels": [
                            "Tutorial 4, Step 1",
                            "Tutorial 4, Step 2",
                            "Tutorial 4, Step 3",
                        ],
                        "descriptions": [
                            "Tutorial 4, Step 1 Description",
                            "Tutorial 4, Step 2 Description",
                            "Tutorial 4, Step 3 Description",
                        ]
                    }]
            },
            {
                "path": '/home_check2',
                "firstTimeVisit": true,
                "tutorials": [
                    {
                        "label": "Tutorial 1",
                        "currentStep": 0,
                        "numberOfSteps": 6,
                        "labels": [
                            "Identify your personal goals and values.",
                            "Pursue your hobbies and interests to make yourself more interesting.",
                            "Challenge the beliefs that you learned from others to find your truth.",
                            "Embrace your flaws because they make you who your are.",
                            "Silence your inner critic.",
                            "Try new things to get more experiences."
                        ],
                        "descriptions": [
                            "Make a list of the things that are really important to you. Next, consider the things you most want to achieve in your lifetime. Review these lists to figure out what you most value. Then, choose 1-3 personal goals that are important to you.",
                            "Think about the things you enjoy doing most, then figure out how you can include them in your life more.",
                            "You’ve probably absorbed a lot of rules about life from the people around you, like your parents, teachers, or religious leaders. Some of the beliefs will feel true for you, but others may not. Think about the beliefs you learned from others, then question whether or not they feel true for you. In some cases, you may want to talk to other people or do some research to learn more about the topic. Finally, adopt beliefs that fit with your personal values.",
                            "No one is perfect, and it’s okay to have flaws! Instead of looking at your flaws as a bad thing, view them as a balance that helps you recognize your best qualities. Then, try to stop criticizing yourself and focus on being your best self.",
                            "It’s likely that your inner critic is worried that people are going to judge you. That’s probably because you felt judged in the past. To quiet this voice, figure out what you’re afraid will happen if you just be yourself. Then, challenge those thoughts by focusing on what could go right and thinking about your strengths.",
                            "Your experiences make you more unique, so be open to trying new things. Attend local events and festivals, try out new hobbies, and sample new foods."
                        ]
                    },
                    {
                        "label": "Tutorial 2",
                        "currentStep": 0,
                        "numberOfSteps": 5,
                        "labels": [
                            "Tutorial 2, Step 1",
                            "Tutorial 2, Step 2",
                            "Tutorial 2, Step 3",
                            "Tutorial 2, Step 4",
                            "Tutorial 2, Step 5",
                        ],
                        "descriptions": [
                            "Tutorial 2, Step 1 Description",
                            "Tutorial 2, Step 2 Description",
                            "Tutorial 2, Step 3 Description",
                            "Tutorial 2, Step 4 Description",
                            "Tutorial 2, Step 5 Description",
                        ]
                    },
                    {
                        "label": "Tutorial 3",
                        "currentStep": 0,
                        "numberOfSteps": 4,
                        "labels": [
                            "Tutorial 3, Step 1",
                            "Tutorial 3, Step 2",
                            "Tutorial 3, Step 3",
                            "Tutorial 3, Step 4",
                        ],
                        "descriptions": [
                            "Tutorial 3, Step 1 Description",
                            "Tutorial 3, Step 2 Description",
                            "Tutorial 3, Step 3 Description",
                            "Tutorial 3, Step 4 Description",
                        ]
                    },
                    {
                        "label": "Tutorial 4",
                        "currentStep": 0,
                        "numberOfSteps": 3,
                        "labels": [
                            "Tutorial 4, Step 1",
                            "Tutorial 4, Step 2",
                            "Tutorial 4, Step 3",
                        ],
                        "descriptions": [
                            "Tutorial 4, Step 1 Description",
                            "Tutorial 4, Step 2 Description",
                            "Tutorial 4, Step 3 Description",
                        ]
                    }]
            }]
    })

    await user.save()
    res.end()
})

router.get('/getUserByUsername/:username', async (req, res) => {
    const user = await User.findOne({
        username: req.params.username
    })

    res.end(JSON.stringify({
        user: user
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
