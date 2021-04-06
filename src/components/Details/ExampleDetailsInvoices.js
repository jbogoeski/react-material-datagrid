import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PublishIcon from '@material-ui/icons/Publish';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import PictureAsPdfOutlinedIcon from '@material-ui/icons/PictureAsPdfOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: 0,
        margin: 0,
    },
    paper: {
        padding: 20,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        display: 'flex'

    },
    firstPaper: {
        width: '125px',
        height: '45px',
        border: '2px solid #F6F6F6',
        backgroundColor: 'white',
        color: 'gray',
        display: 'inline',
        marginRight: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        justify: 'start',
        fontSize: 'xx-large',


    },

    button: {
        margin: theme.spacing(1),
    },
    absolute: {
        height: '35px',
        width: '35px',
        backgroundColor: 'green',
        marginLeft: '10px',

    },
    absolute2: {
        height: '35px',
        width: '35px',
        marginLeft: '10px',
        color: 'black'

    },
    fab: {
        margin: theme.spacing(2),
    },

});

class ExampleDetailsInvoices extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { classes } = this.props;

            return (
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        {/*//invoice*/}

                        {/*//status*/}
                        {/*//publisch cancel*/}

                        {/*Draft invoice -- invoice- draft*/}
                        <Grid item xs={9}>
                            <Paper className={classes.paper}>
                                <Paper elevation={0} className={classes.firstPaper}>
                                    Invoice
                                </Paper>
                                <Paper elevation={0} >
                                    <Button
                                        variant="contained"
                                        disabled
                                        color="secondary"
                                        className={classes.button}
                                        // startIcon={<KeyboardVoiceIcon />}
                                    >
                                        Draft
                                    </Button>

                                    <Tooltip title="Publish" aria-label="Publish" className={classes.absolute}>
                                        <Fab color="secondary" >
                                            <PublishIcon />
                                        </Fab>
                                    </Tooltip>
                                    <Tooltip title="Cancel Invoice" aria-label="Cancel" className={classes.absolute2}>
                                        <Fab color="secondary" >
                                            <CloseOutlinedIcon />
                                        </Fab>
                                    </Tooltip>
                                </Paper>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>

                                <Paper elevation={0} >
                                    <Button
                                        variant="contained"
                                        disabled
                                        color="secondary"
                                        className={classes.button}
                                        // startIcon={<KeyboardVoiceIcon />}
                                    >
                                        Back
                                    </Button>

                                    <Tooltip title="Publish" aria-label="Publish" className={classes.absolute}>
                                        <Fab color="secondary" >
                                            <PictureAsPdfOutlinedIcon />
                                        </Fab>
                                    </Tooltip>
                                    <Tooltip title="Cancel Invoice" aria-label="Cancel" className={classes.absolute2}>
                                        <Fab color="secondary" >
                                            <DeleteOutlinedIcon />
                                        </Fab>
                                    </Tooltip>
                                </Paper>
                            </Paper>                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>xs=6</Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>xs=6</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>xs=3</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>xs=3</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>xs=3</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>xs=3</Paper>
                        </Grid>
                    </Grid>
                </div>
            );
    }
}

ExampleDetailsInvoices.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExampleDetailsInvoices);

