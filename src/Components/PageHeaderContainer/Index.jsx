import React from 'react'
import { renderIntoDocument } from 'react-dom/test-utils'
import './Styles.scss';

const PageHeaderContent = (props) => {
    const {headerText,icon} = props
  return (
    <div className='wrapper'>
        <h2>
            {headerText}
        </h2>
        <span>{icon}</span>
      
    </div>
  )
}

export default PageHeaderContent
