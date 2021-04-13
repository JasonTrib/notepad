import "./App.css";
import React, { useContext } from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { NotesContext } from "./NotesContext";

const useStyles = makeStyles((theme) => ({
    searchField: {
        verticalAlign: "middle",
        lineHeight: "48px",
        flex: " 1 1 75%",
        backgroundColor: "#ffffff",
        borderRadius: 0,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        textIndent: 48,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "transparent",
        minWidth: 50,
        height: 48,
        fontSize: 20,
        paddingRight: "5%",
        maxLength: 10,
        boxShadow: "1px 2px 10px rgba(0,0,0,0.25)",
        "&:hover": {
            backgroundColor: "#e3eeff",
        },
        "&:focus": {
            backgroundColor: "#e3eeff",
            borderColor: "transparent",
            outline: "none",
        },
    },
    btnAdd: {
        backgroundColor: "#1d8b8b",
        color: "white",
        borderRadius: "0px",
        minWidth: "80px",
        flex: " 1 1 25%",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.25)",
        "&:hover": {
            backgroundColor: "#006969",
        },
    },
}));

export const SearchAddNote = () => {
    const classes = useStyles();
    const { setSearchTerm, setOpen, setModalEditNote } = useContext(
        NotesContext
    );

    const handleClickOpen = () => {
        setModalEditNote(null);
        setOpen(true);
    };

    return (
        <>
            <div className="search-add-container">
                <div
                    style={{
                        position: "absolute",
                        left: 30,
                        maxHeight: 24,
                        textAlign: "center",
                        verticalAlign: "middle",
                        lineHeight: "48px",
                        fontSize: 20,
                        pointerEvents: "none",
                    }}
                >
                    🔍
                </div>
                <input
                    className={classes.searchField}
                    type="search"
                    placeholder="Search notes"
                    onChange={(e) => {
                        setSearchTerm(e.target.value.trim());
                    }}
                />
                <Button className={classes.btnAdd} onClick={handleClickOpen}>
                    <AddIcon />
                    <Typography>Note</Typography>
                </Button>
            </div>
        </>
    );
};
