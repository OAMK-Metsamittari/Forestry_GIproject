import React, { Component } from 'react'
import S_Region from './S_Region';
import S_SeranioCollection from './S_SeranioCollection';
import S_RegionLevel from './S_RegionLevel';
import S_Seranio from './S_Seranio';
import S_Years from './S_Years';



class S_SelectSeranio extends Component {
    
    render () {
        return (
            <div className="col-sm-12 well well-sm indicator">              
              
                <S_RegionLevel/>                
                <S_Region />
                <S_SeranioCollection />               
                <S_Seranio />
                <S_Years />
            </div>
        )
    }
}

export default S_SelectSeranio