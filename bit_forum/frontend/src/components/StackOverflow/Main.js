import React from 'react'
import { Link } from "react-router-dom";
import FilterListIcon from '@mui/icons-material/FilterList';
import AllQuestions from "./AllQuestions";
import "./css/Main.css";
import { useNavigate } from 'react-router-dom';
import Index from '.';

function Main({ questions }) {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2>All Questions</h2>
          {/* <Link to="/add-question"> */}

          <button
            onClick={() => {
              navigate("/add-question");
            }}>
            Ask Question</button>
          {/* </Link> */}
        </div>
        <div className="main-desc">
          <p>{questions && questions.length}  Questions</p>
          <div className="main-filter">
            <div className="main-tabs">
              <div className="main-tab">

                <Link >Newest</Link>
              </div>
              <div className="main-tab">
                <Link>Active</Link>


              </div>
              <div className="main-tab">

                <Link >More</Link>
              </div>
            </div>
            <div className="main-filter-item">
              <FilterListIcon />
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div className="questions">
          {questions?.map((_q,index) => (
            <>
              <div key={index} className="question">
                <AllQuestions question={_q} />
              </div>
            </>
          ))}
        </div>
      </div>
    </div >
  );
}

export default Main
