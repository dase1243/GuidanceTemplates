import React from 'react';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import BackupIcon from '@material-ui/icons/Backup';
import CachedIcon from '@material-ui/icons/Cached';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import useTheme from "@material-ui/core/styles/useTheme";
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    button: {
        margin: 80,
    },
    box: {
        alignItems: 'center',
        display: 'flex',
        paddingLeft: theme.spacing(4),
        backgroundColor: '#ffffff',
    },
    popover: {
        pointerEvents: 'none',
        padding: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(1),
    },
    typography: {
        padding: theme.spacing(2),
    },
    box_example: {
        position: "absolute",
    },
    root_stepper: {
        maxWidth: 250,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 60,
        padding: theme.spacing(4),
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        height: 40,
        padding: theme.spacing(4),
    },
}));

const tutorialSteps = [
    {
        label: 'Attach button',
        description: "Attach all required files",
    },
    {
        label: 'Upload',
        description: "Upload all necessary datasets",
    },
    {
        label: 'Refresh',
        description: "Refresh model, datasets and remove cache",
    },
    {
        label: 'Apply',
        description: "Apply all unsaved settings",
    },
];

export default function PopUpGuide(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    const classes = useStyles();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        if (activeStep === 0) {
            document.getElementById("btn.upload").click()
            document.getElementById("btn.upload").click()
        }

        if (activeStep === 1) {
            document.getElementById("btn.refresh").click()
            document.getElementById("btn.refresh").click()
        }

        if (activeStep === 2) {
            document.getElementById("btn.apply").click()
            document.getElementById("btn.apply").click()
        }

        if (activeStep === 3) {
            document.getElementById("btn.attach").click()
            document.getElementById("btn.attach").click()
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        if (activeStep === 0) {
            document.getElementById("btn.apply").click()
            document.getElementById("btn.apply").click()
        }

        if (activeStep === 1) {
            document.getElementById("btn.attach").click()
            document.getElementById("btn.attach").click()
        }

        if (activeStep === 2) {
            document.getElementById("btn.upload").click()
            document.getElementById("btn.upload").click()
        }

        if (activeStep === 3) {
            document.getElementById("btn.refresh").click()
            document.getElementById("btn.refresh").click()
        }

        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <ListItem>
            {props.visible ?
                <div>
                    <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                        {({TransitionProps}) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Paper>
                                    <ClearIcon onClick={() => document.getElementById("btn.upload").click()}/>
                                    <div className={classes.root_stepper}>
                                        <ListItemText className={classes.header}
                                                      primary={tutorialSteps[activeStep].label}>
                                        </ListItemText>

                                        <Paper square elevation={0} className={classes.content}>
                                            <Typography>{tutorialSteps[activeStep].description}</Typography>
                                        </Paper>

                                        <MobileStepper
                                            steps={maxSteps}
                                            position="static"
                                            variant="text"
                                            activeStep={activeStep}
                                            nextButton={
                                                <Button size="small" onClick={handleNext}
                                                        disabled={activeStep === maxSteps - 1}>
                                                    Next
                                                    {theme.direction === 'rtl' ? <KeyboardArrowLeft/> :
                                                        <KeyboardArrowRight/>}
                                                </Button>
                                            }
                                            backButton={
                                                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                                    {theme.direction === 'rtl' ? <KeyboardArrowRight/> :
                                                        <KeyboardArrowLeft/>}
                                                    Back
                                                </Button>
                                            }
                                        />
                                    </div>
                                </Paper>
                            </Fade>
                        )}
                    </Popper>
                    <Box component="div" display="block">
                        <Button onClick={() => {
                            setActiveStep(0)
                            document.getElementById("btn.attach").click()
                        }
                        }>Start PopUp guide</Button>
                    </Box>
                    <Box component="div" display="inline">
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                            <Button id='btn.attach' onClick={handleClick('bottom')}
                                    className={classes.button}
                                    startIcon={<AttachFileIcon/>}>Attach</Button>
                        </ButtonGroup>
                    </Box>
                    <Box component="div" display="inline">
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                            <Button id='btn.upload' onClick={handleClick('bottom')}
                                    className={classes.button}
                                    startIcon={<BackupIcon/>}>Upload</Button>
                        </ButtonGroup>
                    </Box>
                    <Box component="div" display="inline">
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                            <Button id='btn.refresh' onClick={handleClick('bottom')}
                                    className={classes.button}
                                    startIcon={<CachedIcon/>}>Refresh</Button>
                        </ButtonGroup>
                    </Box>
                    <Box component="div" display="inline">
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                            <Button id='btn.apply' onClick={handleClick('bottom')}
                                    className={classes.button}
                                    startIcon={<BookmarkIcon/>}>Apply</Button>
                        </ButtonGroup>
                    </Box>
                </div>
                : null
            }
        </ListItem>
    );
}
