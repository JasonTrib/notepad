import React, { useContext } from "react";
import Note from "./Note";
import { NotesContext } from "./NotesContext";
import { Divider } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

const Notelist = () => {
    const { checkedNotes, notesFiltered, searchTerm } = useContext(
        NotesContext
    );

    const listedNotes = notesFiltered
        .filter((val) => {
            if (searchTerm === "") {
                return val;
            } else if (
                val.title.includes(searchTerm.toLowerCase()) ||
                val.content.includes(searchTerm.toLowerCase())
            ) {
                return val;
            }
            return null;
        })
        .map((note) => {
            return (
                <React.Fragment key={uuidv4()}>
                    <Note
                        key={note.id}
                        note={note}
                        selected={
                            checkedNotes
                                .filter((x) => x.id === note.id)
                                .map((y) => y.value)[0]
                                ? true
                                : false
                        }
                    />
                    <Divider />
                </React.Fragment>
            );
        });

    return (
        <>
            <div className="notes-container">
                {listedNotes.length !== 0 ? (
                    listedNotes
                ) : (
                    <i className="note-container">No notes found</i>
                )}
            </div>
        </>
    );
};

export default Notelist;
