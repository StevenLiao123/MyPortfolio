import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class NewTech extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div><h1>[LeetCode Online Judge] (https://leetcode.com/) is a website 
                    containing many algorithm questions. Most of them are real interview 
                    questions of Google, Facebook, LinkedIn, Apple, etc. 
                    This repo shows my solutions by Go with the code style 
                    strictly follows the Google Golang Style Guide. 
                    Please feel free to reference and STAR to support this repo, 
                    thank you!</h1></div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'
                        }}> Burger
                    </CardTitle>
                        <CardText>
                            The burger project built by using HTML, CSS, JavaScript ES6, ReactJS, Firebase
                    </CardText>
                        <CardActions border>
                            <Button colored> GitHub </Button>
                            <Button colored> Demo </Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'
                        }}> Hotel
                    </CardTitle>
                        <CardText>
                            The burger project built by using HTML, CSS, JavaScript ES6, ReactJS, Firebase
                    </CardText>
                        <CardActions border>
                            <Button colored> GitHub </Button>
                            <Button colored> Demo </Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'
                        }}> Movie
                    </CardTitle>
                        <CardText>
                            The burger project built by using HTML, CSS, JavaScript ES6, ReactJS, Firebase
                    </CardText>
                        <CardActions border>
                            <Button colored> GitHub </Button>
                            <Button colored> Demo </Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } 
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Data Structure</Tab>
                    <Tab>Algorithms</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default NewTech;