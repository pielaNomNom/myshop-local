import { BrowserRouter as Router } from "react-router-dom";

import styles from "./App.scss"

export function App() {
    return (
        <Router>
            <div>Header</div>
            <main className={styles.container}></main>
        </Router>
    );
}
