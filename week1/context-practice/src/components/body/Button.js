import React from 'react'
import PropTypes from 'prop-types'
import ThemeContext from '../../themeContext'


const Button = (props) => {
    return (
        <button className={`${props.theme}-theme`}>Switch Theme</button>
    )
}

Button.propTypes= {
    theme: PropTypes.oneOf(['light', 'dark'])
}

Button.defaultProps = {
    theme: 'dark'
}

export default Button


    // <ThemeContext.Consumer>
    //     { theme => <button className={`${theme}-theme`}>Change Theme</button> }
    // </ThemeContext.Consumer>