import React from 'react'

const Scroll = (props) =>{
    return (
        <div style={{overflowY:'scroll', border:'5px sold black', height:
        '1200px'}}>
            {props.children}
        </div>
    )
}

export default Scroll