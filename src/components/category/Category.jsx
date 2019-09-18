import React from 'react'

import { CategoryContainer } from './StyledCategory'

export default function Category(props) {
  let { data, defaultNav, onNavClick } = props
  let cateContent = (data && data[defaultNav]) || []

  return (
    <CategoryContainer>
      <div id="menu_left">
        <ul>
          {
            data && Object.keys(data).map((value, index) => {
              return (
                <li 
                  className={defaultNav === value ? 'active' : ''}
                  key={value}
                  onClick={() => onNavClick(value)}
                >
                  <span>
                    {value}
                  </span>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div id="menu_right">
        <ul>
          {
            cateContent.map((value, index) => {
              return (
                <li
                  key={value+index}
                >{value}</li>
              )
            })
          }
        </ul>
      </div>
    </CategoryContainer>
  )
}