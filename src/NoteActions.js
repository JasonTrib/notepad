import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import { NotesContext } from "./NotesContext";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import EventIcon from "@material-ui/icons/Event";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import TitleIcon from "@material-ui/icons/Title";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
    btn: {
        backgroundColor: "#424242",
        color: "white",
        height: "50px",
        borderRadius: 0,
        "&:hover": {
            backgroundColor: "#000000",
        },
        flex: " 1 1 80px",
        borderTop: "5px solid transparent",
        borderBottom: "5px solid transparent",
        transitionDuration: "0.1s",
    },
    // btnDel: {
    //     backgroundColor: "#ff5252",
    //     color: "white",
    //     height: "50px",
    //     borderRadius: 0,
    //     "&:hover": {
    //         backgroundColor: "#d11313",
    //     },
    //     flex: " 1 1 80px",
    // },
    btnDel: {
        backgroundColor: "#ff2b2b",
        color: "white",
        height: "50px",
        borderRadius: 0,
        "&:hover": {
            backgroundColor: "#d11313",
        },
        flex: " 1 1 80px",
    },
    btnDel2: {
        backgroundColor: "#ff8080",
        color: "white",

        "&:hover": {
            backgroundColor: "#ff8080",
            color: "white",
        },
    },
}));

const NoteActions = () => {
    const classes = useStyles();
    const [notesOrdered, setNotesOrdered] = useState(null);
    const [ordering, setOrdering] = useState(null);
    const [bookmarked, setBookmarked] = useState(false);
    const [notesSelected, areNotesSelected] = useState(false);
    const {
        notes,
        setNotes,
        setNotesFiltered,
        checkedNotes,
        setCheckedNotes,
    } = useContext(NotesContext);

    useEffect(() => {
        // console.log("> areNotesSelected useEffect");
        const res = checkedNotes.filter((x) => x.value).length !== 0;
        areNotesSelected(res);
    }, [checkedNotes]);

    const handleNoteDeletion = () => {
        const deletionIDs = checkedNotes
            .map((curr) => {
                return curr.value ? curr.id : null;
            })
            .filter((x) => x);

        const newNotes = notes.filter((note) => !deletionIDs.includes(note.id));
        // console.log("HANDLE DELETION: " + JSON.stringify(deletionIDs));
        // console.log("HANDLE DELETION 2: " + JSON.stringify(newNotes));

        const newCheckedNotes = newNotes.map((note) => {
            return { id: note.id, value: false };
        });
        setNotes(newNotes);
        setCheckedNotes(newCheckedNotes);
    };

    const handleBookmarked = () => {
        // console.log(bookmarked);
        setBookmarked(!bookmarked);
    };

    const handleOrdering = (orderType) => {
        if (orderType === "text") {
            if (!ordering || ordering !== "asc") {
                setOrdering("asc");
            } else {
                setOrdering("desc");
            }
        } else if (orderType === "date") {
            if (!ordering || ordering !== "new") {
                setOrdering("new");
            } else {
                setOrdering("old");
            }
        }
        // console.log("in handleOrdering " + orderType);
    };

    useEffect(() => {
        orderNotes();
        // console.log(">>> orderNotes useEffect " + ordering);
    }, [notes, ordering]);

    useEffect(() => {
        filterBookmarked();
        // console.log(">>> filterBookmarked useEffect " + bookmarked);
    }, [notesOrdered, bookmarked]);

    const orderNotes = () => {
        let orderedNotes = [...notes];
        orderedNotes.sort((a, b) => {
            if (ordering === "asc") return a.title.localeCompare(b.title);
            else if (ordering === "desc")
                return -1 * a.title.localeCompare(b.title);
            else if (ordering === "new") return a.date <= b.date ? 1 : -1;
            else return a.date <= b.date ? -1 : 1;
        });
        setNotesOrdered(orderedNotes);
        // console.log(">>>" + JSON.stringify(notesSorted));
    };

    const filterBookmarked = () => {
        // console.log("inside filter bookmarked");
        const newNotes = notesOrdered
            ? notesOrdered.filter((note) => {
                  if (bookmarked) return note.bookmarked;
                  return true;
              })
            : notes;

        setNotesFiltered(newNotes);
        // console.log("bookmarked: " + bookmarked);
        // console.log(newNotes);
    };

    return (
        <>
            <div className="toolbar-container">
                <Button
                    className={classes.btn}
                    onClick={() => handleOrdering("text")}
                    style={
                        ordering === "asc" || ordering === "desc"
                            ? { borderBottom: "5px solid #d900ff" }
                            : null
                    }
                >
                    {ordering === "asc" || ordering === "desc" ? (
                        ordering === "asc" ? (
                            <>
                                <TitleIcon />
                                <KeyboardArrowDownIcon />
                            </>
                        ) : (
                            <>
                                <TitleIcon />
                                <KeyboardArrowUpIcon />
                            </>
                        )
                    ) : (
                        <TitleIcon />
                    )}
                </Button>
                <Button
                    className={classes.btn}
                    onClick={() => handleOrdering("date")}
                    style={
                        ordering === "new" || ordering === "old"
                            ? { borderBottom: "5px solid #d900ff" }
                            : null
                    }
                >
                    {ordering === "new" || ordering === "old" ? (
                        ordering === "new" ? (
                            <>
                                <EventIcon />
                                <KeyboardArrowDownIcon />
                            </>
                        ) : (
                            <>
                                <EventIcon />
                                <KeyboardArrowUpIcon />
                            </>
                        )
                    ) : (
                        <EventIcon />
                    )}
                </Button>
                <Button
                    className={classes.btn}
                    onClick={handleBookmarked}
                    style={
                        bookmarked === true
                            ? { borderBottom: "5px solid #ffc800" }
                            : null
                    }
                >
                    <BookmarksIcon />
                </Button>
                <Button
                    disableRipple={!notesSelected}
                    className={classNames(
                        classes.btnDel,
                        notesSelected ? null : classes.btnDel2
                    )}
                    onClick={handleNoteDeletion}
                >
                    <DeleteIcon />
                </Button>
            </div>
        </>
    );
};

export default NoteActions;
