import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
    MyPersonIcon,
    MyHomeIcon,
    MySchoolIcon,
    MyWorkIcon,
} from "./CustomIcons";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FlightIcon from "@material-ui/icons/Flight";

export const NotesContext = createContext();

export const NotesProvider = (props) => {
    const LOCAL_STORAGE_KEY = "notebookApp.notes";
    const [notes, setNotes] = useState([]);
    const [notesFiltered, setNotesFiltered] = useState(notes);
    const [checkedNotes, setCheckedNotes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [open, setOpen] = useState(false);
    const [modalEditNote, setModalEditNote] = useState(null);
    const taglist = [
        null,
        <MyPersonIcon />,
        <MyHomeIcon />,
        <MySchoolIcon />,
        <MyWorkIcon />,
        <ShoppingCartIcon />,
        <FlightIcon />,
    ];

    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        let newCheckedNotes;
        if (storedNotes) {
            setNotes(storedNotes);

            newCheckedNotes = storedNotes.map((note) => {
                return { id: note.id, value: false };
            });
        } else {
            const demoNotes = [
                {
                    id: uuidv4(),
                    title: "lorem ipsum meaning",
                    content:
                        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called "greeking", which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.',
                    date: Date.now(),
                    tag: 0,
                    bookmarked: false,
                },
                {
                    id: uuidv4(),
                    title: "dog breeds",
                    content:
                        "Labrador Retriever\nGerman Shepherd\nGolden Retriever\nBulldog\nGreyhound\nRottweiler\nSiberian Husky\nBoxer\nShiba Inu\nBeagle\nPoodle\nGreat Dane\nDoberman Pinscher",
                    date: Date.now(),
                    tag: 0,
                    bookmarked: false,
                },
                {
                    id: uuidv4(),
                    title: "preparations",
                    content:
                        "-pack clothes\n-water garden plants\n-wash dishes\n-vacuum clean house\n-seal windows\n-spray insecticide\n-pay house rent\n",
                    date: Date.now(),
                    tag: 2,
                    bookmarked: false,
                },
                {
                    id: uuidv4(),
                    title: "grocery list",
                    content:
                        "Fruit/Veg:\n\tlemons, lettuce, garlic, onions, cucumbers, potatoes\nDaisy:\n\tmilk, eggs, cheese\nMeat:\n\tsalmon, beef, bacon\nCondiments:\n\toil, vinegar, jam, ketchup\nOther:\n\tbeans, tomato soup, pasta, yeast, bread buns, sugar, cereal\nBeverages:\n\tcoffee, fruit juice, beer\nHouse:\n\thand soap, shampoo, toothpaste, toilet paper\nMiscellaneous:\n\tplastic wrap, tissues, batteries",
                    date: Date.now(),
                    tag: 5,
                    bookmarked: false,
                },
            ];
            setNotes(demoNotes);

            newCheckedNotes = demoNotes.map((note) => {
                return { id: note.id, value: false };
            });
            // console.log("the demoNotes: " + JSON.stringify(newCheckedNotes));
        }

        setCheckedNotes(newCheckedNotes);
        // console.log("CHECKED NOTES: " + JSON.stringify(newCheckedNotes));
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
    }, [notes]);

    return (
        <NotesContext.Provider
            value={{
                notes,
                setNotes,
                notesFiltered,
                setNotesFiltered,
                checkedNotes,
                setCheckedNotes,
                searchTerm,
                setSearchTerm,
                open,
                setOpen,
                modalEditNote,
                setModalEditNote,
                taglist,
            }}
        >
            {props.children}
        </NotesContext.Provider>
    );
};
