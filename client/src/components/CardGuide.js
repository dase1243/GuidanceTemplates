import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import HelpInfo from "./HelpInfo";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";

const tutorialSteps = [
    {
        label: 'What is a Pod?',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
        text: 'Pods are the smallest, most basic deployable objects in Kubernetes. A Pod represents a single instance of a running process in your cluster. Pods contain one or more containers, such as Docker containers.',
        helpInfoText: 'Help info'
    },
    {
        label: 'Pod lifecycle',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
        text: 'Pods are ephemeral. They are not designed to run forever, and when a Pod is terminated it cannot be brought back. In general, Pods do not disappear until they are deleted by a user or by a controller. Pods do not "heal" or repair themselves. For example, if a Pod is scheduled on a node which later fails, the Pod is deleted. Similarly, if a Pod is evicted from a node for any reason, the Pod does not replace itself.',
        helpInfoText: ''
    },
    {
        label: 'Creating Pods',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
        text: 'Pods that run a single container. The simplest and most common Pod pattern is a single container per pod, where the single container represents an entire application. In this case, you can think of a Pod as a wrapper. Pods that run multiple containers that need to work together. Pods with multiple containers are primarily used to support colocated, co-managed programs that need to share resources.',
        helpInfoText: 'Help info 3'
    },
    {
        label: 'Pod usage patterns',
        imgPath:
            'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
        text: 'Write down your variable expenses. Variable expenses are the ones where the monetary amounts might change from month to month. These are usually the areas that are easy to cut back on if you’re trying to save money. Add these labels underneath your fixed expenses, then add them for every month that you can. ',
        helpInfoText: ''
    },
    {
        label: 'Controlling which nodes a Pod runs on',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
        text: 'By default, Pods run on nodes in the default node pool for the cluster. You can configure the node pool a Pod selects explicitly or implicitly: You can explicitly force a Pod to deploy to a specific node pool by setting a nodeSelector in the Pod manifest. This forces a Pod to run only on Nodes in that node pool.',
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
                            title={tutorialSteps[props.guideStateIndex].label}
                            subheader="September 14, 2016"
                        />
                    </Box>
                </Box>

                {/*<CardMedia*/}
                {/*    className={classes.media}*/}
                {/*    // image='https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'*/}
                {/*    title={tutorialSteps[props.guideStateIndex].label}*/}
                {/*/>*/}
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
