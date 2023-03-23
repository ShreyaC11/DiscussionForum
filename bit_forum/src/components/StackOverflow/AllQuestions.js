import { Avatar } from '@mui/material'
import React from 'react'
import {Link} from "react-router-dom";
import "./css/AllQuestions.css";
function AllQuestions() {
  return (
    <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>votes</span>
            </div>
            <div className="all-option">
              <p>0</p>
              <span>answers</span>
            </div>
            <div className="all-option">
              <p>2</p>
              <span>Views</span>
            </div>
          </div>
        </div>
        <div className="question-answer">
          <Link >What is Dbms and its real life applications</Link>

          {/* <a href=>{data.title}</a> */}

          <div
            style={{
              maxWidth: "90%",
            }}>
            <div>this is answer.................</div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <span className="question-tags">react</span>
            <span className="question-tags">antd</span>
            <span className="question-tags">frontend</span>
          </div>
          <div className="author">
            <small>Timestamp</small>
            <div className="author-details">
              <Avatar/>
              <p>user name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllQuestions
