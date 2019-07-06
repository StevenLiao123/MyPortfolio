import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render () {
        return (
            <div style={{margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png"
                            alt="avatar"
                            className="avatar-img"
                            />

                        <div className="banner-text">
                            <h1>Front End Developer</h1>
                            <hr />
                        <p>HTML/CSS | JavaScript | ReactJS | BootStrap </p>

                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="http://linkedin.com" rel="noopener noreferrer"  target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            {/* Github */}
                            <a href="http://github.com" rel="noopener noreferrer"  target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                            {/* Facebook */}
                            <a href="http://facebook.com" rel="noopener noreferrer"  target="_blank">
                                <i className="fa fa-facebook-official" aria-hidden="true" />
                            </a>

                            {/* Wechat */}
                            <a href="http://wechat.com" rel="noopener noreferrer"  target="_blank">
                                <i className="fa fa-weixin" aria-hidden="true" />
                            </a>
                        </div>
                        </div>    
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;