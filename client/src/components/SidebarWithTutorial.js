import React from "react";
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import HelpInfo from "./HelpInfo";
import TutorialStepper from "./TutorialStepper";

const users = [
    {
        "_id": "5f3ef6f3c190683b70d9d0c9",
        "username": "nc1v2q3n82r1evd934yc6e",
        "pages": {
            "/": {
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
                    }, {
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
            "/home_check1": {
                "firstTimeVisit": false,
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
                    }, {
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
            "/home_check2": {
                "firstTimeVisit": false,
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
                    }, {
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
            }
        },
        "__v": 0
    },
    {
        "_id": "5f3ef758c190683b70d9d0ca",
        "username": "btwud4sz3zj4rzxbb3p5sh",
        "pages": {
            "/": {
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
                    }, {
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
            "/home_check1": {
                "firstTimeVisit": false,
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
                    }, {
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
            "/home_check2": {
                "firstTimeVisit": false,
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
                    }, {
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
            }
        },
        "__v": 0
    }
]

const drawerWidth = 460;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
}));


export default function SidebarWithTutorial(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    // const tutorials = users[0]['pages']['/']['tutorials']

    // let serializedMap = JSON.stringify(props.user);
    // console.log(JSON.parse(JSON.stringify(props.user)))
    // console.log(props.user)

    // const tutorials = props.user == null ? [] : props.user.pages['/'].tutorials
    const tutorials = users[0]['pages']['/']['tutorials']
    // const tutorials = null

    return (
        <div>
            <ListItem
                button
                key={'Sidebar guide'}
                onClick={open ? handleDrawerClose : handleDrawerOpen}
            >
                <ListItemIcon>
                    <InboxIcon/>
                </ListItemIcon>
                <ListItemText primary={'Sidebar guide with tutorials'}/>
                <HelpInfo
                    text="Sidebar with tutorials which you can guide and see how functionality works"/>
            </ListItem>

            <div className={classes.root}>
                <CssBaseline/>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="right"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                        </IconButton>
                    </div>
                    <List>
                        {tutorials.map(tutorial => (<TutorialStepper tutorial={tutorial}/>))}
                        <Divider/>
                    </List>
                </Drawer>
            </div>
        </div>
    );
}