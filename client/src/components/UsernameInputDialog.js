import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";

export default function UsernameInputDialog(props) {
    // const [open, setOpen] = React.useState(props.open);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };
    //
    // const handleClose = (event) => {
    //     // if (event.target.value !== '') {
    //     //     username = event.target.value
    //         setOpen(false);
    //         // console.log(username)
    //     // }
    // };

    return (
        <Dialog open={props.open} onClose={props.closeHandler} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Input Username</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Which username do you want to track?
                </DialogContentText>
                <TextField
                    autoFocus
                    placeholder="Cannot be empty"
                    margin="dense"
                    id="name"
                    label="Username"
                    type="email"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.closeHandler} color="primary">
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    );
}