import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class newTech extends Component {
    render() {
        return (
            <div style={{width: '80%', margin: 'auto'}}>
                <Grid className="newTech-grid">
                    <Cell col={6}> Data Structure</Cell>
                    <Cell col={6}> Algorithms </Cell>
                </Grid>
            </div>
        )
    }
}

export default newTech;