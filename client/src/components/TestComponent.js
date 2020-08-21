import React, {Component} from "react";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Sidebar from "./Sidebar";
import SidebarWithTutorial from "./SidebarWithTutorial";
import clsx from "clsx";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from '@material-ui/icons/Person';
import UsernameInputDialog from "./UsernameInputDialog";
import App from "../App";

// function HelpCard(props) {
//     if (props.visible) {
//         return (
//             <CardGuide
//                 nextHandler={props.nextHandler}
//                 prevHandler={props.prevHandler}
//                 guideStateIndex={props.guideStateIndex}
//             />
//         )
//     } else return null
// }
//
// function ExampleBoxes(props) {
//     if (props.visible) {
//         return (
//             <Box component="div" width="100%" display="block" className={useStyles().root}>
//                 <div>
//                     <Paper elevation={3} variant="outlined">Box 1</Paper>
//                     <HelpCard
//                         visible={props.guideStateIndex === 0}
//                         guideStateIndex={props.guideStateIndex}
//                         nextHandler={props.nextHandler}
//                         prevHandler={props.prevHandler}
//                     />
//                 </div>
//                 <div>
//                     <Paper elevation={3} variant="outlined">Box 2</Paper>
//                     <HelpCard
//                         visible={props.guideStateIndex === 1}
//                         guideStateIndex={props.guideStateIndex}
//                         nextHandler={props.nextHandler}
//                         prevHandler={props.prevHandler}
//                     />
//                 </div>
//                 <div>
//                     <Paper elevation={3} variant="outlined">Box 3</Paper>
//                     <HelpCard
//                         visible={props.guideStateIndex === 2}
//                         guideStateIndex={props.guideStateIndex}
//                         nextHandler={props.nextHandler}
//                         prevHandler={props.prevHandler}
//                     />
//                 </div>
//                 <div>
//                     <Paper elevation={3} variant="outlined">Box 4</Paper>
//                     <HelpCard
//                         visible={props.guideStateIndex === 3}
//                         guideStateIndex={props.guideStateIndex}
//                         nextHandler={props.nextHandler}
//                         prevHandler={props.prevHandler}
//                     />
//                 </div>
//
//             </Box>
//         )
//     } else return null
// }

class TestComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // visible: false,
            // guideStateIndex: 0,
            username: '',
            usernameInputDialogOpenStatus: false
        }

    }

    // guideStateIndexNextHandler() {
    //     const tmp = this.state.guideStateIndex + 1
    //     this.setState({
    //         guideStateIndex: (this.state.guideStateIndex + 1) % 4
    //     })
    // }
    //
    // guideStateIndexPrevHandler() {
    //     let tmp = this.state.guideStateIndex - 1
    //     if (tmp === -1) {
    //         tmp = 3
    //     }
    //
    //     this.setState({
    //         guideStateIndex: tmp
    //     })
    // }


    render() {
        function handleClickOpen() {

        }

        function handleClick() {

        }


        return (
            <Container>
                <UsernameInputDialog
                    open={this.state.usernameInputDialogOpenStatus}
                    closeHandler={() => this.setState({usernameInputDialogOpenStatus: false})}
                    openHandler={() => this.setState({usernameInputDialogOpenStatus: true})}
                    inputHandler={(username) => {
                        if (username !== '') {
                            this.setState({
                                username: username,
                                usernameInputDialogOpenStatus: true
                            })
                        }
                    }}
                />

                {/*<main*/}
                {/*    className={clsx(classes.content, {*/}
                {/*        [classes.contentShift]: open,*/}
                {/*    })}*/}
                {/*>*/}
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
                        <SidebarWithTutorial/>
                        <ListItem button onClick={() => this.setState({usernameInputDialogOpenStatus: true})}>
                            <ListItemIcon><PersonIcon/></ListItemIcon>
                            <ListItemText primary={'Input username to track'}/>
                        </ListItem>
                    </List>
                </Container>

                {/*<ExampleBoxes*/}
                {/*    visible={this.state.visible}*/}
                {/*    guideStateIndex={this.state.guideStateIndex}*/}
                {/*    nextHandler={this.guideStateIndexNextHandler}*/}
                {/*    prevHandler={this.guideStateIndexPrevHandler}*/}
                {/*/>*/}
                {/*</main>*/}
            </Container>
        )
    }
}

export default TestComponent;
