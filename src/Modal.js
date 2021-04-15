import React, { useState, useEffect, useContext, useRef } from "react";
import NotesContext from "./NotesContext";
import { v4 as uuidv4 } from "uuid";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";

const SelectInput = withStyles(() => ({
    input: {
        height: "22px",
        boxShadow: "1px 2px 4px 0px rgba(0,0,0,.25)",
        borderRadius: 4,
        position: "relative",
        backgroundColor: "white",
        border: "3px solid transparent",
        fontSize: 16,
        padding: "10px 26px 10px 12px",
        "&:hover": {
            backgroundColor: "#e6f3ff",
        },
        "&:focus": {
            borderRadius: 4,
            backgroundColor: "#e6f3ff",
            border: "3px solid #80bdff",
        },
    },
}))(InputBase);

const useStyles = makeStyles(() => ({
    modalTitleTag: {
        marginTop: 0,
        marginBottom: 10,
        display: "flex",
        flexDirection: "row",
    },
    titleField: {
        "&::placeholder": {
            color: "black",
            opacity: 0.4,
        },
        height: "40px",
        fontSize: 20,
        textIndent: 10,
        outline: "none",
        borderRadius: "4px",
        border: "3px solid transparent",
        "&:hover": {
            backgroundColor: "#e6f3ff",
        },
        "&:focus": {
            borderColor: "#80bdff",
            backgroundColor: "#e6f3ff",
        },
        width: "60px",
        flex: "1 1 100%",
        boxShadow: "1px 2px 4px 0px rgba(0,0,0,.25)",
    },
    selectForm: {
        marginLeft: 10,
        flex: "1 1 100px",
    },
    tagSelect: {
        height: "45px",
    },
    contentContainer: {},
    contentArea: {
        height: "16em",
        boxSizing: "border-box",
        width: "100%",
        resize: "none",
        padding: "10px 10px",
        backgroundColor: "white",
        boxShadow: "1px 2px 4px 0px rgba(0,0,0,.25)",
        outline: "none",
        borderRadius: "4px",
        border: "3px solid transparent",
        "&:hover": {
            backgroundColor: "#e6f3ff",
        },
        "&:focus": {
            borderColor: "#80bdff",
            backgroundColor: "#e6f3ff",
        },
        "&::placeholder": {
            color: "rgba(0,0,0,.4)",
        },
    },
    headerFooter: {
        background:
            "linear-gradient(135deg, rgba(161,201,190,1) 0%, rgba(108,175,156,1) 100%)",
    },
    btnDialogContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    btnCancel: {
        backgroundColor: "rgba(255,255,255, 0.3)",
        flex: "1 1 50px",
        "&:hover": {
            backgroundColor: "#dbadad",
        },
    },
    btnDone: {
        backgroundColor: "rgba(255,255,255, 0.3)",
        flex: "1 1 50px",
        "&:hover": {
            backgroundColor: "#99d192",
        },
    },
}));

export const NoteDialog = () => {
    const classes = useStyles();
    const descriptionElementRef = useRef(null);
    const [title, setTitle] = useState(null);
    const [content, setContent] = useState(null);
    const [tag, setTag] = useState(0);
    const titleRef = useRef();
    const contentRef = useRef();
    const {
        notes,
        setNotes,
        setCheckedNotes,
        modal,
        setModal,
        taglist,
    } = useContext(NotesContext);

    useEffect(() => {
        if (modal.open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }

            if (modal.editNote) {
                setTitle(modal.editNote.title);
                setContent(modal.editNote.content);
                setTag(modal.editNote.tag);
            } else {
                setTag(0);
            }
        }
    }, [modal]);

    const handleClose = () => {
        setTitle(null);
        setContent(null);
        setModal({ open: false, editNote: modal.editNote });
    };

    const handleChange = (event) => {
        setTag(event.target.value);
    };

    function handleAddNote(e) {
        const id = uuidv4();
        setNotes((prevNotes) => {
            return [
                ...prevNotes,
                {
                    id: id,
                    title: titleRef.current.value.trim()
                        ? titleRef.current.value.trim()
                        : "(no title)",
                    content: contentRef.current.value.trim(),
                    date: Date.now(),
                    tag: tag,
                    bookmarked: false,
                },
            ];
        });
        setCheckedNotes((prev) => {
            return [...prev, { id: id, value: false }];
        });
        handleClose();
    }

    const handleEditNote = () => {
        const newNotes = notes.map((x) => {
            if (x.id === modal.editNote.id) {
                return {
                    id: x.id,
                    title: titleRef.current.value.trim()
                        ? titleRef.current.value.trim()
                        : "(no title)",
                    content: contentRef.current.value.trim(),
                    date: x.date,
                    tag: tag,
                    bookmarked: x.bookmarked,
                };
            }
            return x;
        });
        setNotes(newNotes);
        handleClose();
    };

    return (
        <div>
            <Dialog
                fullWidth={true}
                maxWidth="sm"
                className={classes.modal}
                open={modal.open}
                onClose={handleClose}
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
            >
                <DialogTitle
                    id="dialog-title"
                    style={{
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                    className={classes.headerFooter}
                >
                    <Typography
                        style={{
                            fontSize: "30px",
                            color: "#353138",
                            fontWeight: "600",
                        }}
                    >
                        {modal.editNote ? "Edit note" : "New note"}
                    </Typography>
                </DialogTitle>
                <DialogContent
                    style={{
                        backgroundColor: "#e9f2ef",
                    }}
                >
                    <div className={classes.modalTitleTag}>
                        <input
                            type="text"
                            autoFocus={!modal.editNote}
                            defaultValue={title}
                            ref={titleRef}
                            placeholder="Cookie recipe"
                            className={classes.titleField}
                        />
                        <FormControl className={classes.selectForm}>
                            <Select
                                labelId="select-tag"
                                id="select"
                                value={tag}
                                onChange={handleChange}
                                input={<SelectInput />}
                            >
                                {taglist.map((item, idx) => {
                                    return (
                                        <MenuItem key={uuidv4()} value={idx}>
                                            {item ? item : "None"}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="contentContainer">
                        <textarea
                            className={classes.contentArea}
                            ref={contentRef}
                            autoFocus={modal.editNote}
                            defaultValue={content}
                            placeholder="-Eggs
-Milk
-Baking soda
-Flour
-Butter
-Sugar
-Chocolate"
                        />
                    </div>
                </DialogContent>
                <DialogActions className={classes.headerFooter}>
                    <div className={classes.btnDialogContainer}>
                        <Button
                            className={classes.btnCancel}
                            onClick={handleClose}
                            color="primary"
                        >
                            <Typography
                                style={{
                                    fontSize: "16px",
                                    color: "#353138",
                                    fontWeight: "400",
                                }}
                            >
                                Cancel
                            </Typography>
                        </Button>
                        <div
                            style={{
                                width: "8px",
                                height: "100%",
                            }}
                        ></div>
                        <Button
                            className={classes.btnDone}
                            onClick={
                                modal.editNote ? handleEditNote : handleAddNote
                            }
                            color="primary"
                        >
                            <Typography
                                style={{
                                    fontSize: "16px",
                                    color: "#353138",
                                    fontWeight: "400",
                                }}
                            >
                                Done
                            </Typography>
                        </Button>
                    </div>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default NoteDialog;
