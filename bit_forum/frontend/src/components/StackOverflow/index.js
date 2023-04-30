import axios from 'axios';
import React, { useState } from "react";
import "./css/index.css";
import Main from "./Main";
import Sidebar from "./Sidebar";
function Index() {

    const [questions, setQuestions] = useState([]);

    React.useEffect(() => {
        async function getQuestion() {
            await axios.get("/api/question").then((res) => {
                
                console.log(res.data);
                setQuestions(res.data.reverse());
            }).catch((err) => {
                console.log(err);
            })
                ;
        }
        getQuestion();
    }, []);

    return (
        <div className="stack-index">
            <div className="stack-index-content">
                <Sidebar />
                <Main questions={questions}/>
            </div>
        </div>
    );
}

export default Index;
