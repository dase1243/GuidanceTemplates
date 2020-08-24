import Button from "@material-ui/core/Button";
import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import makeStyles from "@material-ui/core/styles/makeStyles";

export default function UsernameInputDialog(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }));

    const classes = useStyles();

    return (
        <Dialog open={props.open} onClose={props.closeHandler} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Input Username</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Which username do you want to track?
                </DialogContentText>

            </DialogContent>
            <DialogActions>
                <div className={classes.root}>
                    <Button variant="outlined" color="primary" onClick={() => {
                        props.closeHandler()
                        props.inputHandler('Konrad')
                    }}>
                        Konrad
                    </Button>
                    <Button variant="outlined" color="primary" onClick={() => {
                        props.closeHandler()
                        props.inputHandler('Henry')
                    }}>
                        Henry
                    </Button>
                    <Button variant="outlined" color="primary" onClick={() => {
                        props.closeHandler()
                        props.inputHandler('Andrei')
                    }}>
                        Andrei
                    </Button>
                </div>
            </DialogActions>
        </Dialog>
    );
}