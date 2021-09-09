import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { goToHome } from '../../routes/Coordinator';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
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
const Header = (props) => { 
    
    const history = useHistory()

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aia-label="voltar" >
              <ArrowBackIosIcon
              onClick= {() => goToHome(history)}
                />
          </IconButton>
          <Typography variant="h6" align="center" >
            {props.nome}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header