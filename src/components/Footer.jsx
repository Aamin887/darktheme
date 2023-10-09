import {useContext} from 'react'
import { ThemeContext } from './ThemeContext'

function Footer() {
  const theme = useContext(ThemeContext)
  return (
    <>
        <footer className={theme?"dark__footer content" :'footer content '}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Call to action</li>
                <li>Section</li>
            </ul>
        </footer>
    </>
  )
}

export default Footer