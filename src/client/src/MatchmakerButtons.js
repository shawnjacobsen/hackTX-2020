import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

export default function MatchmakerButtons() {
    class Buttons extends React.Component {
        render() {
            return (
                <div>
        <IconButton 
            size="large" 
            aria-label="no"
            onClick={() => {}}>
                <ClearIcon />
        </IconButton>

        <IconButton 
            size="large" 
            aria-label="yes">
                <CheckIcon />
        </IconButton>
        </div>
        )
        }
    }
}