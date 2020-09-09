import React, {useContext} from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import styles from "./styles/NavBarStyles";
import { ThemeContext } from "./contexts/ThemeContext";
import { LanguageContext } from "./contexts/LanguageContext";

const wordsNav = {
    english: {
        flag: "🇬🇧",
        search: "Search"
    },
    french: {
        flag:"🇫🇷",
        search: "Rechercher"
    },
    spanish: {
        flag:"🇪🇸",
        search: "Buscar",
    }
}

function NavBar(props) {
    console.log(LanguageContext)
    const {classes} = props;
    const {isDarkTheme, toggleTheme} = useContext(ThemeContext);
    const {language} = useContext(LanguageContext);
    const {flag, search} = wordsNav[language];

    return(
    <div className={classes.root}>
        <AppBar position= "static" color= { isDarkTheme ? "default" : "primary"}>
            <Toolbar>
                <IconButton className={classes.menuButton} color="inherit">
                    <span role="img" aria-labelledby="French">{flag}</span>
                </IconButton>
                <Typography 
                className={classes.title}
                variant="h6"
                color="inherit">
                    Context App
                </Typography>
                <Switch onChange = {toggleTheme}/>
                <div className={classes.grow}/>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder={`${search}...`}
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        />
                </div>
            </Toolbar>
        </AppBar>
    </div>
    )
}

export default withStyles(styles)(NavBar);