import React from 'react'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
import classes from './Header.module.css'

function Header(props) {
  return (
      <React.Fragment>
          <header className={classes.header}>
              <h1> Elysium</h1>
        <HeaderCartButton onClick={props.onShowCart } />
          </header>
          <div className={classes['main-image']}><img src={ mealsImage}  alt= "table full of delicious dishes"/></div>
    </React.Fragment>
  )
}

export default Header