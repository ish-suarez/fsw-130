import React from "react"
import PropTypes from "prop-types"
import { ThemeContextConsumer } from "./ThemeContext"

export default function Button(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>
            )}
        </ThemeContextConsumer>
    )
}

// function Button(props) {
//     return (
//         <ThemeContext.Consumer>
//             {theme => (
//                 <button className={`${theme}-theme`}>Switch Theme</button>
//             )}
//         </ThemeContext.Consumer>
//     )    
// }

// export default Button