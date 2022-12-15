import { Link } from "react-router-dom";

export function FrontPage() {
    return (
        <>
            <h1>Expermentation & Evaluation</h1>
            <h2>camelCase vs. kebab-case</h2>
            <div className="card">
                The aim of this experiment is to check how fast and accurate you
                can be
                <br /> at discerning a simple phrase written in camelCase and
                kebab-case.
            </div>
            <Link to="/demographic">Let's get started</Link>
        </>
    );
}
