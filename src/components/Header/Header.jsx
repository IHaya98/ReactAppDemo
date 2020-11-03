import React ,{useCallback,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getIsSignedIn} from '../../reducks/users/selections'
import AppBar from '@material-ui/core/AppBar';
import {makeStyles} from '@material-ui/styles';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../assets/logo.png';
import {push} from 'connected-react-router';
import { HeaderMenus,ClosableDrawer} from './index';


const useStyles = makeStyles({
    root:{
        flexGrow:1
    },
    menuBar:{
        backgroundColor:"#fff",
        color:"#444"
    },
    toolBar:{
        margin: '0 auto',
        maxWidth:1024,
        width: '100%',
        height: '90px'
    },
    iconButtons:{
        margin: ' 0 0 0 auto'
    }
})

const Header = (props) => {

    const classes = useStyles();
    const selector = useSelector((state) => state);
    const isSignedIn = getIsSignedIn(selector);
    const dispatch = useDispatch();

    const [open,setOpen] = useState(false);

    const handleDrawerToggle = useCallback((event) => {
        if(event.type ==='keydown' || (event.key ==='Tab' || event.key ==='Shift')){
            return;
        }
        setOpen(!open)
    } ,[setOpen,open]);

    return(
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.menuBar}>
                <Toolbar className={classes.toolBar}>
                    <img
                        src={logo} alt="shopping" width="128px"
                        onClick={() => dispatch(push('/'))}
                    />
                    {isSignedIn && (
                        <div className={classes.iconButtons}>
                            <HeaderMenus handleDrawerToggle={handleDrawerToggle} />
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <ClosableDrawer open={open} onClose={handleDrawerToggle} />
        </div>

    )

};

export default Header