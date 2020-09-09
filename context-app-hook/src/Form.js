import React, {useContext} from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockedOutLinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles";
import { LanguageContext } from "./contexts/LanguageContext";

const words = {
    english: {
        email: "Email",
        password: "Password",
        rememberMe: "Remember Me",
        signin: "Sign In"
    },
    french: {
        email: "Email",
        password: "Mot de passe",
        rememberMe: "Se souvenir de moi",
        signin: "Se Connecter"    
    },
    spanish: {
        email: "Correo electrónico",
        password: "Contraseña",
        rememberMe: "Recuérdame",
        signin: "Registrar"
    }
}

function Form(props) {
    const {language, changeLanguage} = useContext(LanguageContext);
    const { classes } = props;
    const { email, password, rememberMe, signin } = words[language];
    return(
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockedOutLinedIcon />
                </Avatar>
                <Typography variant="h5">
                    {signin}
                </Typography>
                <Select value={language} onChange={changeLanguage}>
                    <MenuItem value="english">English</MenuItem>
                    <MenuItem value="french">French</MenuItem>
                    <MenuItem value="spanish">Spanish</MenuItem>
                </Select>
                <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">{email}</InputLabel>
                        <Input id="email" name="email" autofocus></Input>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">{password}</InputLabel>
                        <Input id="password" name="password" autofocus></Input>
                    </FormControl>
                    <FormControlLabel 
                    label={rememberMe}
                    control={<Checkbox color="primary"/>}/>
                    <Button variant="contained" type="submit" color="primary" fullWidth className={classes.submit}>{signin}</Button>
                </form>
            </Paper>
        </main>
    )
}

export default withStyles(styles)(Form);