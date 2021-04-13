import "./App.css";
import React from "react";
import MyDialog from "./Modal.js";
import {
    Typography,
    Divider,
    Card,
    CardHeader,
    CardContent,
} from "@material-ui/core";
import {
    makeStyles,
    ThemeProvider,
    createMuiTheme,
} from "@material-ui/core/styles";

import Notelist from "./Notelist";
import { NotesProvider } from "./NotesContext";
import NoteActions from "./NoteActions";
import { SearchAddNote } from "./SearchAddNote";

const theme = createMuiTheme({
    // typography: {
    //     h4: {
    //         fontSize: 24,
    //     },
    // },
    // palette: {
    //     accent1: {
    //         backgroundColor: purple[500],
    //         color: "white",
    //         marginBottom: 20,
    //     },
    // },
});

const useStyles = makeStyles((theme) => ({
    root: {
        position: "absolute",
        top: "4%",
        width: "100%",
        maxWidth: 768,
        backgroundColor: "#fff7ba",
        "@media (max-width:768px)": {
            top: 0,
        },
        boxShadow: "0px 2px 20px rgba(0,0,0,0.4)",
    },
    header: {
        backgroundColor: "white",
    },
    headerText: {
        fontWeight: 700,
        fontSize: 40,
        color: "#424242",
    },
}));

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <NotesProvider>
                    <MyCard />
                    <MyDialog />
                </NotesProvider>
            </div>
        </ThemeProvider>
    );
}

const MyCard = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                title={
                    <Typography variant="h4" className={classes.headerText}>
                        Notepad
                    </Typography>
                }
                className={classes.header}
            />
            <Divider />
            <CardContent>
                <NoteActions />
            </CardContent>
            <Divider />
            <CardContent>
                <SearchAddNote />
            </CardContent>
            <Divider />
            <CardContent>
                <Notelist />
            </CardContent>
        </Card>
    );
};

export default App;
