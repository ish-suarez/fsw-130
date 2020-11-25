import React, {Component} from "react"
import { ThemeContextConsumer } from './ThemeContext'

export default function Header(props){
    return (
        <ThemeContextConsumer>
            {context => (
                <header className={`${context.theme}-theme`}>
                    <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
                </header>
            )}
        </ThemeContextConsumer>
    )
}

// function Header(props) {
//     return (
//         <ThemeContext.Consumer>
//             {theme => (
//                 <header className={`${theme}-theme`}>
//                     <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
//                 </header>
//             )}
//         </ThemeContext.Consumer>
//     )    
// }

// export default Header