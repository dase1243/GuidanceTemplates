import React, {Component} from "react";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {makeStyles, useTheme} from '@material-ui/core/styles';
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
import Sidebar from "./Sidebar";
import {Box, Button} from "@material-ui/core";
import CardGuide from "./CardGuide";
import HelpInfo from "./HelpInfo";
import Paper from "@material-ui/core/Paper";


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
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }));

    const classes = useStyles();

    if (props.visible) {
        return (
            <Box component="div" width="100%" display="block" className={classes.root}>
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

export default class TestComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            guideStateIndex: 0
        }

        this.guideStateIndexNextHandler = this.guideStateIndexNextHandler.bind(this)
        this.guideStateIndexPrevHandler = this.guideStateIndexPrevHandler.bind(this)
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


    render() {
        return (
            <Container>
                <Container width='auto'>
                    <List>
                        <ListItem button key={'Pop-up guide'} onClick={() => {
                            this.setState({
                                visible: !this.state.visible
                            })
                        }}>
                            <ListItemIcon>{0 % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                            <ListItemText primary={'Pop-up guide'}/>
                            <HelpInfo text="Single pop-up guide"/>
                        </ListItem>
                        <Sidebar/>
                        <ListItem button key={'Sidebar guide with tutorials'}>
                            <ListItemIcon>{2 % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                            <ListItemText primary={'Sidebar guide with tutorials'}/>
                            <HelpInfo
                                text="Sidebar with tutorials which you can guide and see how functionality works"/>
                        </ListItem>
                    </List>

                </Container>
                {/*<HelpCard visible={this.state.visible}/>*/}

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