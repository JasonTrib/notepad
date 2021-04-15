import "./App.css";
import React from "react";
import { NotesProvider } from "./NotesContext";
import NoteDialog from "./Modal.js";
import Notelist from "./Notelist";
import NoteActions from "./NoteActions";
import SearchAddNote from "./SearchAddNote";

import { makeStyles } from "@material-ui/core/styles";
import {
    Typography,
    Divider,
    Card,
    CardHeader,
    CardContent,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
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
        <div className="App">
            <NotesProvider>
                <MyCard />
                <NoteDialog />
            </NotesProvider>
        </div>
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
