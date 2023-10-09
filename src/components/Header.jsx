import { ThemeContext } from './ThemeContext'
import {useContext} from 'react'

function Header() {
  const theme = useContext(ThemeContext)
  return (
    <>
        <header>
            <div className={theme ? "dark__header content" : "header content"}>
                <h1>Welcome to the page</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem assumenda quidem, sunt in odio distinctio aspernatur tempore id ab voluptatibus sequi ipsa ipsam maiores dolorum possimus cumque culpa suscipit qui?</p>
            </div>
        </header>
    </>
  )
}

export default Header