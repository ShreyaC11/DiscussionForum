import React from 'react'
import { Link } from "react-router-dom";
import { FilterList } from "@mui/icons-material";
import AllQuestions from './AllQuestions';
// import AllQuestions1 from './AllQuestions1';
// import AllQuestions2 from './AllQuestions2';
// import AllQuestions3 from './AllQuestions3';
import "./css/Main.css";
import { useNavigate } from 'react-router-dom';

function Main({questions}) {
  const navigate = useNavigate()
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2>All Questions</h2>
         <button onClick={() => navigate('/add-question')}>Ask Question</button>
        </div> 
        <div className="main-desc">
          <p>{questions && questions.length} Questions</p>
          <div className="main-filter">
            <div className="main-tabs">
              <div className="main-tab">
                <Link>Newest</Link>
              </div>
              <div className="main-tab">
                <Link>Active</Link>
              </div>
              <div className="main-tab">
                <Link>More</Link>
              </div>
            </div>
            <div className="main-filter-item">
              <FilterList/>
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div className="questions">
          {
            questions?.map((_q, index) => (<><div key = {index} className="question">
            <AllQuestions question = {_q}/>
          </div></>))
          }
          
        </div>
      </div>
    </div>
  )
}

export default Main