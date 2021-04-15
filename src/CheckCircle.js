import React, { useContext } from "react";
import NotesContext from "./NotesContext";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

export const CheckCircle = ({ note, selected }) => {
    const { checkedNotes, setCheckedNotes } = useContext(NotesContext);

    const handleSelect = (e) => {
        const newCheckedNotes = checkedNotes.map((curr) => {
            if (curr.id === note.id) {
                return { id: curr.id, value: e.target.checked };
            }
            return curr;
        });
        setCheckedNotes(newCheckedNotes);
    };

    return (
        <>
            <FormControlLabel
                style={{
                    marginLeft: "4px",
                }}
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
