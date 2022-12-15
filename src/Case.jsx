import { Button } from "@mui/material";
import react_context from "./context";
import "./Case.css";
import { useContext } from "react";

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function Case({ _id, phrase, options, type, setCaseIndex, demo }) {
    const context = useContext(react_context);
    const start = Date.now();
    if (options == undefined)
        return <h1>The end</h1>;
    const actualOptions = [phrase, ...options].map(e => {
        if (type == "camel") {
            var transformed = e
                .split(" ")
                .map((e, i) => {
                    if (i == 0) return e;
                    return capitalize(e);
                })
                .join("");
        } else var transformed = e.split(" ").join("-");

        return { original: e, transformed };
    });
    actualOptions.sort(() => Math.random() - 0.5); // shuffle the options randomly;

    function handleButton(option) {
        if (demo) return;
        const result = {
            _id,
            phrase_length: phrase.length,
            success: option == phrase,
            type,
            time: Date.now() - start,
        };
        console.table({chosen: option, original: phrase, success: result.success})

        setCaseIndex((oldIndex) => oldIndex + 1);
        context.setResults(oldResults => {
            return [...oldResults, result];
        });
    }

    return (
        <>
            <h1 className="phrase">{phrase}</h1>
            <div className="options">
                {actualOptions.map((e) => (
                    <Button
                        key={e.original}
                        className="option"
                        variant="outlined"
                        style={{ textTransform: "none" }}
                        onClick={() => {
                            handleButton(e.original);
                        }}
                    >
                        {e.transformed}
                    </Button>
                ))}
            </div>
        </>
    );
}
