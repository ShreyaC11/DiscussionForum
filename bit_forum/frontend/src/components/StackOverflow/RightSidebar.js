import { Mode, Stars } from '@mui/icons-material';
import React from 'react'
import { Link } from "react-router-dom";
import "./css/RightSidebar.css"

function RightSidebar() {
    return (
        <div className="RightSidebar">
            <div className='RightSidebar-containers'>
                <div className="RightSidebar-container-top">
                    <div className='RightSidebar-blogs'>
                        <p> Blogs </p>
                    </div>

                    <div className='RightSidebar-blog'>
                        <p>
                            <Mode /> Self learning material for TOC:<a href="https://www.youtube.com/watch?v=XslI8h7cGDs&list=PLxCzCOWd7aiFM9Lj5G9G_76adtyb4ef7i"> https://www.youtube.com/watch?v=XslI8h7cGDs&list=
                                PLxCzCOWd7aiFM9Lj5G9G_76adtyb4ef7i</a><br /><br />

                            <Mode /> For Travelling salesman's notes <a href="https://www.geeksforgeeks.org/travelling-salesman-problem-using-dynamic-programming/">click here</a><br /><br />

                            <Mode /> Important topics you should know for placement<br /><br />

                            <Mode /> Tips for Hackathon</p>
                    </div>
                </div>

                <div className="RightSidebar-container-middle">
                    <div className='RightSidebar-events'>
                        <p> Upcoming events </p>
                    </div>
                    <div className='RightSidebar-event'>
                        <Stars /> BIT Hackathon <br /><br />
                        <Stars /> STTP on IOT & it’s applications <br /><br />
                        <Stars /> Starup competition <br /><br />

                    </div>
                </div>

                <div className="RightSidebar-container-down">
                    <div className='RightSidebar-tags'>
                        <p> Trending Tags </p>
                    </div>
                    <div className='RightSidebar-tag'>
                        
                        <span className="question-tag">#react</span>
                        <span className="question-tag">#sql</span>
                        <span className="question-tag">#java</span><br /><br />
                        <span className="question-tag">#C</span>
                        <span className="question-tag">#frontend</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSidebar