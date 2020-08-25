import React, {Component} from 'react';
import './App.css';
import TestComponent from "./components/TestComponent";
import Container from "@material-ui/core/Container";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@material-ui/icons";
import DialogActions from "@material-ui/core/DialogActions";
import ListItem from "@material-ui/core/ListItem";

const tutorialSteps = [
    {
        label: 'Welcome to our Guidance system. Please click Next',
    },
    {
        label: 'We will help you to learn main features of the system',
    },
    {
        label: 'Show which possible variants of guidance exist',
    },
    {
        label: 'This was the first variant',
    },
];

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            apiResponse: '',
            dialogFirstGuideOpenStatus: true,
            firstGuideActiveStep: 0
        }
    }

    getAll() {
        try {
            fetch('http://localhost:5000/', {})
                .then(res => res.text())
                .then(res => this.setState({apiResponse: res}));
        } catch (e) {
            console.log('Error inside fetch')
            console.log(e)
        }
    }

    handleFirstGuideActiveStepNext = () => {
        this.setState({
            firstGuideActiveStep: this.state.firstGuideActiveStep + 1
        })
    };

    handleFirstGuideActiveStepBack = () => {
        this.setState({
            firstGuideActiveStep: this.state.firstGuideActiveStep - 1
        })
    };


    componentWillMount() {
        this.getAll()
    }

    render() {
        return (
            <Container>
                <Dialog
                    open={this.state.dialogFirstGuideOpenStatus}
                    keepMounted
                    onClose={() => this.setState({dialogFirstGuideOpenStatus: false})}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"First Guidance for you"}</DialogTitle>
                    <DialogContent>
                        <Paper square elevation={0}>
                            <Typography>{tutorialSteps[this.state.firstGuideActiveStep].label}</Typography>
                        </Paper>

                        <MobileStepper
                            steps={4}
                            position="static"
                            variant="text"
                            activeStep={this.state.firstGuideActiveStep}
                            nextButton={
                                <Button size="small" onClick={this.handleFirstGuideActiveStepNext}
                                        disabled={this.state.firstGuideActiveStep === 4 - 1}>
                                    Next
                                    <KeyboardArrowRight/>
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={this.handleFirstGuideActiveStepBack}
                                        disabled={this.state.firstGuideActiveStep === 0}>
                                    <KeyboardArrowLeft/>
                                    Back
                                </Button>
                            }
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.setState({dialogFirstGuideOpenStatus: false})} color="primary">
                            Skip guide
                        </Button>
                    </DialogActions>
                </Dialog>

                <TestComponent/>

                {/*<p>{this.state.apiResponse}</p>*/}
            </Container>
        );
    }
}

export default App;
