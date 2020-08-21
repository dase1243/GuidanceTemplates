import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import HelpInfo from "./HelpInfo";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";

const tutorialSteps = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
        text: 'Create a budgeting spreadsheet. You can create a simple spreadsheet using Google Sheets or Excel. Your goal is to chart all your expenses and income during the course of a year, so make a spreadsheet that shows all your information clearly, allowing you to quickly identify any areas where you can spend smarter.',
        helpInfoText: 'Help info'
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
        text: 'Find your monthly income after taxes. Your net income, or the income that is yours to spend, is your monthly income after taxes are deducted. If you are on a salary, this will be a fixed amount each month, which you can find on your paystub. If you work an hourly position, your income may vary from month to month, but you can find an average amount by looking at your last 3 to 4 paystubs.',
        helpInfoText: ''
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
        text: 'List all of your fixed expenses. Fixed expenses are the things that you pay the same price for every single month. This may include your rent, mortgage, some utilities, student loan payments, or a car payment. Add a label for each expense on the column at the very left of your spreadsheet, then write down the monetary amount you spend in each box underneath its corresponding month.',
        helpInfoText: 'Help info 3'
    },
    {
        label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
        imgPath:
            'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
        text: 'Write down your variable expenses. Variable expenses are the ones where the monetary amounts might change from month to month. These are usually the areas that are easy to cut back on if you’re trying to save money. Add these labels underneath your fixed expenses, then add them for every month that you can. ',
        helpInfoText: ''
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
        text: 'Compare your expenses to your income. To make your monthly budget, add up the total amount of money you spend every month from fixed and variable expenses. Then, subtract that amount from your monthly income. Whatever you have left over is your disposable income, or money that you have left at the end of the month. If you don’t have any money left or the number is negative, you’re probably spending more than you make each month.',
        helpInfoText: 'Help info 5'
    },
];


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function CardGuide(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleNext = () => {
        props.nextHandler()
        setActiveStep(() => props.guideStateIndex + 1);
    };

    const handleBack = () => {
        props.prevHandler()
        setActiveStep(() => props.guideStateIndex - 1);
    };


    const [activeStep, setActiveStep] = React.useState(0);

    return (
        <Container>
            <Card
                className={classes.root}
                anchor={'right'}
            >
                <Box component='div'>
                    <Box component='div'>
                        <CardHeader
                            action={
                                <IconButton>
                                    <HelpInfo
                                        aria-label="settings"
                                        text={tutorialSteps[props.guideStateIndex].helpInfoText}
                                    />
                                </IconButton>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                    </Box>
                </Box>

                <CardMedia
                    className={classes.media}
                    // image='https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
                    image={tutorialSteps[props.guideStateIndex].imgPath}
                    title={tutorialSteps[props.guideStateIndex].label}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {tutorialSteps[props.guideStateIndex].text}
                    </Typography>
                </CardContent>
                <MobileStepper
                    steps={4}
                    position="static"
                    variant="text"
                    activeStep={props.guideStateIndex}
                    nextButton={
                        <Button size="small" onClick={handleNext} disabled={props.guideStateIndex === 4 - 1}>
                            Next
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={props.guideStateIndex === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
                            Back
                        </Button>
                    }
                />
            </Card>
        </Container>
    );
}
