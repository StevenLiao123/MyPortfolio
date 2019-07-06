import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education'; 
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render () {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src="https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-33-512.png"
                                alt="avatar"
                                style={{height: '200px'}}
                                />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Steven Liao</h2>
                        <h4 style={{color: 'grey'}}>Software Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p> A graduate with a Bachelor of Information System from the University of Technology, 
                            Sydney seeking an entry-level or junior general Front-End Developer position, 
                            where I can use my knowledge and experience to ensure all coding deliverables
                            are achieved. I would like to apply my excellent coding and 
                            problem-solving skills to create web applications based on 
                            the client’s technical and design specifications. </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>Sydney, NSW AU</p>
                        <h5>Phone</h5>
                        <p>(61) 433 863 228</p>
                        <h5>Email</h5>
                        <p>stevenliao19900326@gmail.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                    </Cell>
                    <Cell className="resume-right" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2013}
                            endYear={2017}
                            schoolName="University of Technology Sydney"
                            schoolDegree="Information Technology - Enterprise Software Development"
                            />
                        <hr style={{borderTop: '3px, solid #e22947'}}/>

                        <h2>Experience</h2>
                        <Experience 
                            startYear={2018}
                            endYear="Present"
                            jobName="B2B Lead Generation Specialist"
                            jobCompany="CBS Interactive"
                            jobDescription="•	Generation of quality leads by calling IT and Business decision makers subscribed to CBS Interactive’s technology properties to promote complimentary content offers on a range of IT Companies and Solutions 
                            •	Performing calls, maintaining database contact records, and collecting information on current and upcoming IT projects. 
                            •	Able to work under stress and understand how to handle objections under different situations"
                            />
                            <Experience 
                            startYear={2017}
                            endYear="Present"
                            jobName="Front End Developer"
                            jobCompany="GIQCI"
                            jobDescription="Cross platform HTML and CSS development
                            - Responsive web design using Bootstrap library
                            - Email Direct Marketing (EDMs; HTML emails)
                            - Javascript ECMA6 development
                            - ReactJS Framework-based development (Redux, Axios, etc)"
                            />
                            <hr style={{borderTop: '3px, solid #e22947'}}/>
                        
                        <h2>Skills</h2>
                        <Skills 
                            skill="HTML"
                            progress={80}
                            />
                        <Skills 
                            skill="CSS"
                            progress={75}
                            />
                        <Skills 
                            skill="JavaScript"
                            progress={80}
                            />
                        <Skills 
                            skill="ReactJS"
                            progress={75}
                            />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;