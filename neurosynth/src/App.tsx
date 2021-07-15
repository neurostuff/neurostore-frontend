import { useEffect, useState } from "react";
import classes from "./App.module.scss";
import TextField from "@material-ui/core/TextField";
// import { studiesApi } from "./api";
import { IStudy } from "./models/study";

import logo from "./assets/images/logo.png"

import Navbar from "./Navbar/Navbar";
import { StudiesService } from "./api";

function App() {
    const [studies, setStudies] = useState<IStudy[]>();

    useEffect(() => {
        StudiesService.studiesGet().then(x => {
            console.log(x);
            
        }).catch(err => {
            console.log(err);
            
        })
    }, []);

    return (
        <div className={classes["neurosynth-background"]}>
            <Navbar></Navbar>
            <div></div>
            <div className={classes["top-container"]}>
                <h1 className={classes.title}>welcome to neurosynth</h1>
                <div>
                    <img className={classes.logo} src={logo} alt="Logo"/>
                </div>
            </div>
            <div>
                Neurosynth is a platform for large-scale, automated synthesis of functional magnetic resonance imaging (fMRI) data.
            </div>
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
        </div>
    );
}

export default App;