import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from "@material-ui/icons/Info";


export default function HelpInfo(props) {
    if (props.text === '') return null

    return (
        <div>
            <Tooltip title={props.text}>
                <InfoIcon/>
            </Tooltip>
        </div>
    );
}

