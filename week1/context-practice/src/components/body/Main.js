import React from 'react'
import Button from './Button'
import ThemeContext from '../../themeContext'

const Main = () =>
    <main className='main'>
        <h2>Main Content</h2>

        <ThemeContext.Consumer>
            { theme => <Button theme={theme} /> }
        </ThemeContext.Consumer>

        <Button theme='light' />
    </main>
    
export default Main