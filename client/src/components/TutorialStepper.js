import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 60,
        padding: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        height: 220,
        padding: theme.spacing(4),
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

export default function TutorialStepper(props) {
    const tutorial = props.tutorial
    const classes = useStyles();
    const theme = useTheme();
    console.log("props.tutorial: ", props.tutorial)
    const [activeStep, setActiveStep] = React.useState(props.tutorial.currentStep);
    // const tutorial = props.tutorial
    const maxSteps = tutorial.numberOfSteps

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <ListItem>
            <div className={classes.root}>

                <ListItemText primary={tutorial.label}/>

                <Paper square elevation={0} className={classes.header}>
                    <Typography>{tutorial.labels[activeStep]}</Typography>
                </Paper>

                <Paper square elevation={0} className={classes.content}>
                    <Typography>{tutorial.descriptions[activeStep]}</Typography>
                </Paper>

                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    variant="text"
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
        </ListItem>
    );
}
