import { ThemeContext } from './ThemeContext'
import {useContext} from 'react'

function About() {
  const theme = useContext(ThemeContext)
  return (
    <>
        <section className={theme ? 'dark__about content':'about content'}>
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit et voluptas reprehenderit praesentium impedit cupiditate voluptatibus sint qui earum hic nobis illum aut fugit modi, ab quidem, excepturi nisi.</p>
        </section>
    </>
  )
}

export default About