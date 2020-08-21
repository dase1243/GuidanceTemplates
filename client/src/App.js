import React, {Component} from 'react';
import './App.css';
import TestComponent from "./components/TestComponent";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MobileStepper from "@material-ui/core/MobileStepper";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@material-ui/icons";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";


const tutorialSteps = [
    {
        label: 'This is the first guide for this page',
    },
    {
        label: 'This is the second guide for this page',
    },
    {
        label: 'This is the third guide for this page',
    },
    {
        label: 'This is the forth guide for this page',
    },
];



class App extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            apiResponse: '',
            currentUser: '',
            currentUserOnChange: '',
            dialogUsernameSubmitOpenStatus: false,
            dialogFirstGuideOpenStatus: false,
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

    changeStates() {
        try {
            fetch('http://localhost:5000/createUser', {method: 'POST'})
        } catch (e) {
            console.log('Error inside fetch')
            console.log(e)
        }
    }

    handleChange(event) {
    }

    handleSubmit(event) {
        event.preventDefault()

        const delta = () => {
            this.setState({
                currentUser: this.state.currentUserOnChange,
                dialogUsernameSubmitOpenStatus: true,
            });
        }
    }

    handleClose() {
        const delta = () => {

        }
    };

    render() {
        return (
            <Container>
                {/*<Dialog*/}
                {/*    open={(() => {*/}
                {/*        if (this.state.currentUser === '') {*/}
                {/*            return false*/}
                {/*        } else {*/}
                {/*            // nc1v2q3n82r1evd934yc6e*/}
                {/*            console.log(this.state.apiResponse)*/}
                {/*            // return this.state.apiResponse['pages']['/'].firstTimeVisit*/}
                {/*            return true*/}
                {/*        }*/}
                {/*    })()}*/}
                {/*    keepMounted*/}
                {/*    onClose={this.handleClose}*/}
                {/*    aria-labelledby="alert-dialog-slide-title"*/}
                {/*    aria-describedby="alert-dialog-slide-description"*/}
                {/*>*/}
                {/*    <DialogTitle id="alert-dialog-slide-title">{"First Guidance for you"}</DialogTitle>*/}
                {/*    <DialogContent>*/}
                {/*        <Paper square elevation={0}>*/}
                {/*            <Typography>{tutorialSteps[this.state.firstGuideActiveStep].label}</Typography>*/}
                {/*        </Paper>*/}

                {/*        <MobileStepper*/}
                {/*            steps={4}*/}
                {/*            position="static"*/}
                {/*            variant="text"*/}
                {/*            activeStep={this.state.firstGuideActiveStep}*/}
                {/*            nextButton={*/}
                {/*                <Button size="small" onClick={this.handleFirstGuideActiveStepNext}*/}
                {/*                        disabled={this.state.firstGuideActiveStep === 4 - 1}>*/}
                {/*                    Next*/}
                {/*                    <KeyboardArrowRight/>*/}
                {/*                </Button>*/}
                {/*            }*/}
                {/*            backButton={*/}
                {/*                <Button size="small" onClick={this.handleFirstGuideActiveStepBack}*/}
                {/*                        disabled={this.state.firstGuideActiveStep === 0}>*/}
                {/*                    <KeyboardArrowLeft/>*/}
                {/*                    Back*/}
                {/*                </Button>*/}
                {/*            }*/}
                {/*        />*/}
                {/*    </DialogContent>*/}
                {/*    <DialogActions>*/}
                {/*        <Button onClick={this.handleClose} color="primary">*/}
                {/*            Skip guide*/}
                {/*        </Button>*/}
                {/*    </DialogActions>*/}
                {/*</Dialog>*/}

                <TestComponent/>

                <p>{this.state.apiResponse}</p>
            </Container>
        );
    }
}

export default App;
