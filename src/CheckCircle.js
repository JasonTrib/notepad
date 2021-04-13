import React, { useContext } from "react";
import { NotesContext } from "./NotesContext";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

const CheckCircle = ({ note, selected }) => {
    const { checkedNotes, setCheckedNotes } = useContext(NotesContext);

    const handleSelect = (e) => {
        const newCheckedNotes = checkedNotes.map((curr) => {
            if (curr.id === note.id) {
                return { id: curr.id, value: e.target.checked };
            }
            return curr;
        });
        setCheckedNotes(newCheckedNotes);
        // console.log("HANDLE SELECT: " + JSON.stringify(newCheckedNotes));
    };

    return (
        <>
            <FormControlLabel
                style={{ paddingLeft: "11px" }}
                control={
                    <Checkbox
                        onChange={handleSelect}
                        checked={selected}
                        name={note.id}
                        inputProps={{ "aria-label": "secondary checkbox" }}
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<RemoveCircleIcon />}
                    />
                }
            />
        </>
    );
};
export default CheckCircle;
