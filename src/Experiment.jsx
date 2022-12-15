import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Case } from "./Case";
import "./Experiment.css";

const CASES = [
    { _id: 0, phrase: "do drop", options: ["do drip", "dont drop"], type: "kebab", },
    { _id: 1, phrase: "log low", options: ["pog low", "log pow"], type: "camel", },
    { _id: 2, phrase: "fit fear", options: ["pit fear", "fit bear"], type: "kebab", },
    { _id: 3, phrase: "lay lift", options: ["lag lift", "lay litt"], type: "camel", },
    { _id: 4, phrase: "ciao mamma", options: ["miao mamma", "ciao nanna"], type: "kebab", },
    { _id: 5, phrase: "dress yoke", options: ["press yoke", "dress joke"], type: "camel", },
    { _id: 6, phrase: "game field", options: ["lame field", "game yield"], type: "kebab", },
    { _id: 7, phrase: "able anger", options: ["table anger", "able angler"], type: "camel", },
    { _id: 8, phrase: "hello world", options: ["hellu world", "hello wurld"], type: "kebab", },
    { _id: 9, phrase: "battle bike", options: ["cattle bike", "battle pike"], type: "camel", },
    { _id: 10, phrase: "plastic bone", options: ["balistic bone", "plastic phone"], type: "kebab", },
    { _id: 11, phrase: "meeting maid", options: ["melting maid", "meeting maiden"], type: "camel", },
    { _id: 12, phrase: "quicksand room", options: ["quickland room", "quicksand root"], type: "kebab", },
    { _id: 13, phrase: "wax grandmother", options: ["fax grandmother", "wax grandfather"], type: "camel", },
    { _id: 14, phrase: "tremendous lock", options: ["tremendous cock", "tremulous lock"], type: "kebab", },
    { _id: 15, phrase: "capricious cause", options: ["capricorn cause", "capricious pause"], type: "camel", },
    { _id: 16, phrase: "hospitable hammer", options: ["hospital hammer", "hospitable hummer"], type: "kebab", },
    { _id: 17, phrase: "unaccountable size", options: ["unacceptable size", "unaccountable prize"], type: "camel", },
    { _id: 18, phrase: "embrace the now", options: ["embrace the vow", "embroider the now"], type: "kebab", },
    { _id: 19, phrase: "change the world", options: ["change the word", "chain the world"], type: "camel", },
    { _id: 20, phrase: "life is beautiful", options: ["wife is beautiful", "life is dreadful"], type: "kebab", },
    { _id: 21, phrase: "always live loudly", options: ["always live proudly", "always love loudly"], type: "camel", },
];

const local_cases = [...CASES]
local_cases.sort(() => Math.random() - .5);

export function Experiment() {
    const navigate = useNavigate();
    const [started, setIsStarted] = useState(false);
    const [caseIndex, setCaseIndex] = useState(0);

    useEffect(() => {
        if (caseIndex >= CASES.length) 
            navigate("/end");
    }, [caseIndex]);

    function handleStart() {
        setIsStarted(true);
    }
    return (
        <>
            {started ? (
                <Case {...local_cases[caseIndex]} setCaseIndex={setCaseIndex} />
            ) : (
                <>
                    <h1>Experiment</h1>
                    <p>
                        Once you press the start button below, you will be
                        presented with a simple phrase of two or more words
                        sperated by spaces.
                    </p>
                    <p>
                        You will then have to find the same phrase among
                        multiple options written in camelCase or kebab-case.
                        <br />
                        Once you select your choice, you will have no option to
                        go back, so <i>be careful</i>.
                    </p>

                    <p>
                        Your performance will be timed to extract meaningful
                        data on the difference between speed and accuracy using
                        the two cases.
                    </p>
                    <h2>Example:</h2>
                    <div className="example">
                        <Case
                            phrase="move south"
                            options={["move source", "more south"]}
                            type="camel"
                            demo
                        />
                    </div>
                    <Button variant="contained" onClick={handleStart}>
                        Start
                    </Button>
                </>
            )}
        </>
    );
}
