import React from 'react'
import { Public } from '@mui/icons-material';
import { Stars } from '@mui/icons-material';
import { Work } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './css/Sidebar.css';
function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="sidebar-options">
                    <div className="sidebar-option">
                        <Link>Home</Link>
                    </div>
                    <div className="sidebar-option">
                        <Link>PUBLIC</Link>
                        <div className="link">
                            <div className="link-tag">
                                <Public />
                                <Link>Question</Link>
                            </div>
                            <div className="tags">
                                <p>Tags</p>
                                <p>Users</p>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-option">
                        <p>SUBJECTS</p>
                        <div className="link">
                            <div className="link-tag">
                                <Stars />
                                <Link>DBMS</Link>
                            </div>
                            <div className="link-tag">
                                <Stars />
                                <Link>TOC</Link>
                            </div>
                            <div className="link-tag">
                                <Stars />
                                <Link>DATA STRUCTURE</Link>
                            </div>
                            <div className="link-tag">
                                <Stars />
                                <Link>OPEARTING SYSTEMS</Link>
                            </div>


                        </div>
                    </div>
                    {/* <div className="sidebar-option">
                        <p>FIND A JOB</p>
                        <div className="link">
                            <div className="link-tag">
                                <Link>Question</Link>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="sidebar-option">
                        <p>TEAMS</p>
                        <div className="link-tag">
                            <Work />
                            <Link>Compaines</Link>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    );
}

export default sidebar
