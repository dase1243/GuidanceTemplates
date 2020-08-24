import React, {Component} from "react";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Sidebar from "./Sidebar";
import SidebarWithTutorial from "./SidebarWithTutorial";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from '@material-ui/icons/Person';
import UsernameInputDialog from "./UsernameInputDialog";
import Paper from "@material-ui/core/Paper";
import CardGuide from "./CardGuide";
import Box from "@material-ui/core/Box";
import HelpInfo from "./HelpInfo";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";


function HelpCard(props) {
    if (props.visible) {
        return (
            <CardGuide
                nextHandler={props.nextHandler}
                prevHandler={props.prevHandler}
                guideStateIndex={props.guideStateIndex}
            />
        )
    } else return null
}

function ExampleBoxes(props) {
    if (props.visible) {
        return (
            <Box component="div" width="100%" display="block"
                // className={useStyles().root}
            >
                <div>
                    <Paper elevation={3} variant="outlined">Box 1</Paper>
                    <HelpCard
                        visible={props.guideStateIndex === 0}
                        guideStateIndex={props.guideStateIndex}
                        nextHandler={props.nextHandler}
                        prevHandler={props.prevHandler}
                    />
                </div>
                <div>
                    <Paper elevation={3} variant="outlined">Box 2</Paper>
                    <HelpCard
                        visible={props.guideStateIndex === 1}
                        guideStateIndex={props.guideStateIndex}
                        nextHandler={props.nextHandler}
                        prevHandler={props.prevHandler}
                    />
                </div>
                <div>
                    <Paper elevation={3} variant="outlined">Box 3</Paper>
                    <HelpCard
                        visible={props.guideStateIndex === 2}
                        guideStateIndex={props.guideStateIndex}
                        nextHandler={props.nextHandler}
                        prevHandler={props.prevHandler}
                    />
                </div>
                <div>
                    <Paper elevation={3} variant="outlined">Box 4</Paper>
                    <HelpCard
                        visible={props.guideStateIndex === 3}
                        guideStateIndex={props.guideStateIndex}
                        nextHandler={props.nextHandler}
                        prevHandler={props.prevHandler}
                    />
                </div>

            </Box>
        )
    } else return null
}


class TestComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            guideStateIndex: 0,
            username: '',
            usernameInputDialogOpenStatus: false,
            firstGuideActiveStep: 0,
            userDataFromServer: null
        }
    }

    guideStateIndexNextHandler() {
        const tmp = this.state.guideStateIndex + 1
        this.setState({
            guideStateIndex: (this.state.guideStateIndex + 1) % 4
        })
    }

    guideStateIndexPrevHandler() {
        let tmp = this.state.guideStateIndex - 1
        if (tmp === -1) {
            tmp = 3
        }

        this.setState({
            guideStateIndex: tmp
        })
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


    render() {
        return (
            <Container>
                <UsernameInputDialog
                    open={this.state.usernameInputDialogOpenStatus}
                    closeHandler={() => this.setState({usernameInputDialogOpenStatus: false})}
                    openHandler={() => this.setState({usernameInputDialogOpenStatus: true})}
                    inputHandler={(username) => {
                        if (username !== '') {
                            this.setState({
                                username: username
                            })

                            try {
                                // fetch(`http://localhost:5000/getUserByUsername/${username}`, {})
                                fetch(`http://localhost:5000/`, {})
                                    .then(res => res.text())
                                    .then(res => this.setState({userDataFromServer: res}));
                            } catch (e) {
                                console.log('Error inside fetch')
                                console.log(e)
                            }
                        }
                    }}
                />

                <Container width='auto'>
                    <List>
                        {/*<ListItem button key={'Pop-up guide'} onClick={() => {*/}
                        {/*    this.setState({*/}
                        {/*        visible: !this.state.visible*/}
                        {/*    })*/}
                        {/*}}>*/}
                        {/*    <ListItemIcon>{0 % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>*/}
                        {/*    <ListItemText primary={'Pop-up guide'}/>*/}
                        {/*    <HelpInfo text="Single pop-up guide"/>*/}
                        {/*</ListItem>*/}
                        <Sidebar/>
                        <SidebarWithTutorial user={this.state.userDataFromServer}/>
                        <ListItem button onClick={() => this.setState({usernameInputDialogOpenStatus: true})}>
                            <ListItemIcon><PersonIcon/></ListItemIcon>
                            <ListItemText primary={'Input username to track'}/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><PersonIcon/></ListItemIcon>
                            <ListItemText primary={`Current username: ${this.state.username}`}/>
                        </ListItem>
                    </List>
                </Container>

                <ExampleBoxes
                    visible={this.state.visible}
                    guideStateIndex={this.state.guideStateIndex}
                    nextHandler={this.guideStateIndexNextHandler}
                    prevHandler={this.guideStateIndexPrevHandler}
                />
            </Container>
        )
    }
}

export default TestComponent;
