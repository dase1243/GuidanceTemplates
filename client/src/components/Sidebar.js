import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';
import Tutorial from "./Tutorial";
import HelpInfo from "./HelpInfo";


import AssessmentIcon from '@material-ui/icons/Assessment'
import AssignmentIcon from '@material-ui/icons/Assignment'
import AutorenewIcon from '@material-ui/icons/Autorenew'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import BuildIcon from '@material-ui/icons/Build'
import CloudOffIcon from '@material-ui/icons/CloudOff'
import BookmarksIcon from '@material-ui/icons/Bookmarks'
import PowerOffIcon from '@material-ui/icons/PowerOff';

const useStyles = makeStyles((theme) => ({
    list: {
        width: 400,
    },
    fullList: {
        width: 'auto',
    },
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function Sidebar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const longText = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`;

    const list = (
        <div
            className={clsx(classes.list)}
            role="presentation"
            onKeyDown={toggleDrawer('right', false)}
        >
            <List>
                <ListItem button key={"Upload new data"}>
                    <ListItemIcon><AssessmentIcon/></ListItemIcon>
                    <ListItemText primary={"Upload new data"}/>
                </ListItem>
                <ListItem button key={"Prepare datasets for a new training"}>
                    <ListItemIcon><AssignmentIcon/></ListItemIcon>
                    <ListItemText primary={"Prepare datasets for a new training"}/>
                </ListItem>
                <ListItem button key={"Refresh model statistics and reset cache"}>
                    <ListItemIcon><AutorenewIcon/></ListItemIcon>
                    <ListItemText primary={"Refresh model statistics and reset cache"}/>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListItem button key={"Upload new datasets"}>
                    <ListItemIcon><AttachFileIcon/></ListItemIcon>
                    <ListItemText primary={"Upload new datasets"}/>
                </ListItem>
                <ListItem button key={"Change to night mode"}>
                    <ListItemIcon><Brightness4Icon/></ListItemIcon>
                    <ListItemText primary={"Change to night mode"}/>
                </ListItem>

                <Tutorial/>

                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <BuildIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Report a problem"/>
                    {open ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <CloudOffIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Dataset is not uploading"/>
                            <HelpInfo text={"When you are trying to upload a dataset, it's not visible on the page"}/>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <PowerOffIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Server disconnect"/>
                            <HelpInfo text={"When trying to get a data from the server, connection failure happens"}/>
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </div>
    );

    return (
        <div>
            <React.Fragment key={'right'}>
                <ListItem
                    button
                    key={'Sidebar guide'}
                    onClick={toggleDrawer('right', true)}
                >
                    <ListItemIcon>{1 % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                    <ListItemText primary={'Sidebar guide'}/>
                </ListItem>

                {/*<Button onClick=>{'Sidebar guide'}</Button>*/}
                <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
                    {list}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
