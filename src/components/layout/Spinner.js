import React from 'react'
import spinner from './spinner.gif'

export default function Spinner() {
    return (
        <div>
          <img src={spinner} alt="loading..." style={{width:'200px' , margin: '70px', display:'block'}} />  
        </div>
    )
}
