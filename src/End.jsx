import { useContext } from "react";
import { CSVLink } from "react-csv";
import react_context from "./context";

function toCSV(context) {
    const { name, age, prog } = context.userInfo;
    let body = [name, age, prog];
    let results = [...context.results];
    results.sort((a, b) => a._id - b._id);
    results.forEach(e => {
        body.push(e.success);
        body.push(e.phrase_length);
        body.push(e.time);
    });

    return [body];
}

export function End() {
    const context = useContext(react_context);
    const kebabData = toCSV({
        ...context,
        results: context.results.filter(e => e.type === "kebab"),
    });
    const camelData = toCSV({
        ...context,
        results: context.results.filter(e => e.type === "camel"),
    });
    return (
        <>
            <h1>Thank you for participating</h1>
            <p>We will take your results analyze them carefully</p>
            <CSVLink
                data={kebabData}
                filename={`${context.userInfo.name}-kebab.csv`}
            >
                Download kebab results
            </CSVLink>
            <br />
            <CSVLink
                data={camelData}
                filename={`${context.userInfo.name}-camel.csv`}
            >
                Download camel results
            </CSVLink>
        </>
    );
}
