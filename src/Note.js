import React, { useContext } from "react";
import "./App.css";
import { NotesContext } from "./NotesContext";
import CheckCircle from "./CheckCircle";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

const useStyles = makeStyles((theme) => ({
    btnNote2: {
        border: 0,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
        textTransform: "none",
        flex: "1 1 50px",
        "&:hover": {
            backgroundColor: "#cce7ff",
        },
    },
    btnBM: {
        color: "#424242",
        backgroundColor: "white",
        borderRadius: "19px",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        "&:hover": {
            backgroundColor: "#cce7ff",
        },
        borderStyle: "solid",
        borderColor: "rgba(0,0,0,0.25)",
        borderLeftWidth: 1,
        paddingLeft: 4,
        maxWidth: 50,
        // "& .MuiButton-label": {
        //     maxWidth: 24,
        // },
    },
}));

// const taglist = [
//     null,
//     <MyPersonIcon />,
//     <MyHomeIcon />,
//     <MySchoolIcon />,
//     <MyWorkIcon />,
// ];

const Note = ({ note, selected }) => {
    const classes = useStyles();
    const { notes, setNotes, setOpen, setModalEditNote, taglist } = useContext(
        NotesContext
    );

    // React.useEffect(() => {
    //     console.log("selected? " + note.id.slice(0, 8) + " " + selected);
    // }, [selected]);

    const handleClickOpen = () => {
        setModalEditNote(note);
        setOpen(true);
    };

    const handleBookmark = () => {
        // console.log("bookmark");
        const newNotes = notes.map((currNote) => {
            if (currNote === note) {
                currNote.bookmarked = !note.bookmarked;
            }
            return currNote;
        });
        setNotes(newNotes);
        // console.log(newNotes);
    };

    return (
        <>
            <div className="note-container">
                <CheckCircle note={note} selected={selected} />
                <div className="note-btn-wrapper">
                    <Button
                        className={classes.btnNote2}
                        onClick={handleClickOpen}
                    >
                        <Typography
                            style={{
                                position: "absolute",
                                left: 14,
                            }}
                        >
                            {note.title}
                        </Typography>
                        <div
                            style={{
                                position: "absolute",
                                right: 0,
                                marginRight: 20,
                                maxHeight: 24,
                            }}
                        >
                            {taglist[note.tag]}
                        </div>
                    </Button>
                    <Button className={classes.btnBM} onClick={handleBookmark}>
                        {note.bookmarked ? (
                            <BookmarkIcon />
                        ) : (
                            <BookmarkBorderIcon />
                        )}
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Note;
