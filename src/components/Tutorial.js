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
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";

const tutorialSteps = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
        text: 'Create a budgeting spreadsheet. You can create a simple spreadsheet using Google Sheets or Excel. Your goal is to chart all your expenses and income during the course of a year, so make a spreadsheet that shows all your information clearly, allowing you to quickly identify any areas where you can spend smarter.'
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
        text: 'Find your monthly income after taxes. Your net income, or the income that is yours to spend, is your monthly income after taxes are deducted. If you are on a salary, this will be a fixed amount each month, which you can find on your paystub. If you work an hourly position, your income may vary from month to month, but you can find an average amount by looking at your last 3 to 4 paystubs.'
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
        text: 'List all of your fixed expenses. Fixed expenses are the things that you pay the same price for every single month. This may include your rent, mortgage, some utilities, student loan payments, or a car payment. Add a label for each expense on the column at the very left of your spreadsheet, then write down the monetary amount you spend in each box underneath its corresponding month.'
    },
    {
        label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
        imgPath:
            'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
        text: 'Write down your variable expenses. Variable expenses are the ones where the monetary amounts might change from month to month. These are usually the areas that are easy to cut back on if you’re trying to save money. Add these labels underneath your fixed expenses, then add them for every month that you can. '
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
        text: 'Compare your expenses to your income. To make your monthly budget, add up the total amount of money you spend every month from fixed and variable expenses. Then, subtract that amount from your monthly income. Whatever you have left over is your disposable income, or money that you have left at the end of the month. If you don’t have any money left or the number is negative, you’re probably spending more than you make each month.'
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
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
                <ListItemText primary='Get tutorial'/>
            </ListItem>

            <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer(false)}>
                <div className={classes.root}>
                    <Paper square elevation={0} className={classes.header}>
                        <Typography>{tutorialSteps[activeStep].label}</Typography>
                    </Paper>
                    <Container>
                        <span>
                            {tutorialSteps[activeStep].text}
                        </span>
                    </Container>
                    <MobileStepper
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
