import React, { Component } from 'react'
import Calculations from './Calculations';
import Catagory from './Catagory';
import ForestRegion from './ForestRegion';
import Variables from './Variables';

import Years from './Years';
import 'bootstrap/dist/css/bootstrap.min.css';
class SelectSeranio extends Component {
    render () {
        return (
            <div class="col-sm-3 sidenav">

                <Calculations />
                <Catagory />
                <ForestRegion />
                <Calculations />
                <Variables />
                <Years />
            </div>
        )
    }
}

export default SelectSeranio