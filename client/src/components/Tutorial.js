import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Drawer from "@material-ui/core/Drawer";
import Container from '@material-ui/core/Container';
import 'materialize-css'
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";

const tutorialSteps = [
    {
        label: '1) Go to a project where you want to upload a new dataset',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
        text: 'In the list of the projects, choose which you want to use.'
    },
    {
        label: '2) File the model which is a target for the dataset',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
        text: 'Under the project find the desired model, where you want to apply the dataset which yoiu are going to upload'
    },
    {
        label: '3) Click upload button on the right side of the desired model',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
        text: 'One the right side, click "Upload a new dataset" button and choose the dataset file'
    },
    {
        label: '4) Wait until the dataset is uploaded',
        imgPath:
            'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
        text: 'The weight of the dataset usually takes some time to be uploaded. Please wait until the upload in done.'
    },
    {
        label: '5) Apply the changes',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
        text: 'When the dataset is uploaded, click "Apply the changes" button to apply new dataset to a chosen model'
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
    content: {
        maxWidth: 400,
        flexGrow: 1,
        height: 120,
        alignItems: 'center',
        display: 'flex',
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    stepper: {
        maxWidth: 400,
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 80,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 255,
        maxWidth: 400,
        overflow: 'hidden',
        display: 'block',
        width: '100%',
    },
}));

export default function TextMobileStepper() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, ['right']: open});
    };

    return (
        <div>
            <ListItem
                button
                onClick={toggleDrawer('right', true)}
            >
                <ListItemIcon>{3 % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                <ListItemText primary='Guide: How to upload a dataset'/>
            </ListItem>

            <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer(false)}>
                <div className={classes.root}>
                    <Paper square elevation={0} className={classes.header}>
                        <Typography>{tutorialSteps[activeStep].label}</Typography>
                    </Paper>
                    <Container>
                        <span className={classes.stepper}>
                            {tutorialSteps[activeStep].text}
                        </span>
                    </Container>
                    <MobileStepper
                        className={classes.stepper}
                        steps={maxSteps}
                        position="static"
                        variant="progress"
                        activeStep={activeStep}
                        nextButton={
                            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                Next
                                {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
                                Back
                            </Button>
                        }
                    />
                </div>
            </Drawer>
        </div>
    );
}
