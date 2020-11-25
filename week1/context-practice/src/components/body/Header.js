import React from 'react'
import ThemeContext from '../../themeContext'

const Header = (props) =>  
    <div className='header'>
        <ThemeContext.Consumer>
        {theme => 
            <header className={`${theme}-theme header`}>
                <h1 className='header'>{`${theme} Theme`}</h1>
            </header>}
        </ThemeContext.Consumer>
    </div>
    

export default Header