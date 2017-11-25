import React, { Component } from 'react'
import Region from './Region';
import SeranioCollection from './SeranioCollection';
import RegionLevel from './RegionLevel';
import Seranio from './Seranio';
import Years from './Years';


class SelectSeranio extends Component {
    render () {
        return (
            <div class="col-sm-12 well well-sm indicator">
                <Region />
                <RegionLevel />
                <SeranioCollection />               
                <Seranio />
                <Years />
            </div>
        )
    }
}

export default SelectSeranio