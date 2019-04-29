import React from 'react'
import './ClearButton.css'

const ClearButton = props => {
    return( <div className="clear-btn" onClick={props.handleClear}> Clear</div>
        )
}
export default ClearButton