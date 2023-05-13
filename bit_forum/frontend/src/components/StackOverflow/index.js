import React, { useState } from 'react'
import './css/index.css'
import Main from './Main';
// import Header from '../Header/Header';
import Sidebar from './Sidebar'
import RightSidebar from './RightSidebar';
import axios from 'axios';

function Index() {

    const [questions, setQuestions] = useState([]);

    React.useEffect(() => {
        async function getQuestion() {
            await axios.get("/api/question").then((res) => {

                console.log(res.data);
                setQuestions(res.data.reverse());
            }).catch((err) => {
                console.log(err);
            });
        }
        getQuestion();
    }, []);

    return (

        <div className="stack-index">
          
            <div className="stack-index-content">

                <Sidebar />
                <Main questions={questions} />
                <RightSidebar />

            </div>

        </div>
    );
}

export default Index;
