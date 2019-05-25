import React from 'react'
import loader from './loader.gif'

export default function Spinner() {
    return (
        <div>
            <img src={loader} alt="Loading" style={{width: '100px', margin: 'auto', display: 'block'}}/>
        </div>
    )
}
