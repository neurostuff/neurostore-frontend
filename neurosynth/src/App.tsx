import { useEffect, useState } from "react";
import axios from "axios";
import classes from "./App.module.css";
import { IStudy } from "./models/study";
import TextField from "@material-ui/core/TextField";

function App() {
    const [studies, setStudies] = useState<IStudy[]>();

    const getStudies = () => {
        const url = "https://neurostore.org/api/studies";

        axios.get<IStudy[]>(url).then((res) => {
            setStudies(res.data);
            console.log(res.data);
        });
    };

    useEffect(() => {
        getStudies();
    }, []);

    return (
        <>
            <div className={classes["search-bar-container"]}>
                <TextField
                    placeholder="Search for your study"
                    variant="outlined"
                    id="outlined-basic"
                    className={classes["search-bar"]}
                ></TextField>
            </div>
            <p>
                {studies?.map((x) => (
                    <div>
                        <span>{x.name}</span>
                        <br />
                    </div>
                ))}
            </p>
        </>
    );
}

export default App;
