import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TennisLogo from '../../public/tennis_logo.svg';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  
export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            
        <AppBar position="static" color="default">
            <Toolbar>
                <Link to="/">
                    <img src={TennisLogo} width = {90} style = {{margin: "5px"}}/>
                </Link>  
            <Typography className={classes.title}>
                <Link to="/players">
                    <Button size="large" style ={{color:"Grey", fontSize: "15px"}}>Players</Button>
                </Link>
                <Button size="large" style ={{color:"Grey", fontSize: "15px"}}>Coaches</Button>
                <Button size="large" style ={{color:"Grey", fontSize: "15px"}}>Courts</Button>
                <Button size="large" style ={{color:"Grey", fontSize: "15px"}}>Tournaments</Button>
                

            </Typography>

            <IconButton
                aria-label="Account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                href="/login"
                >
                <AccountCircle style={{width: 30, height: 30, fill: "grey"}}/>
                </IconButton>
            </Toolbar>
        </AppBar>
        </div>
    );
}