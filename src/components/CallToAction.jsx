import { ThemeContext } from './ThemeContext'
import {useContext}from 'react'


function CallToAction() {
    const theme = useContext(ThemeContext)
  return (
    <>
        <section className={theme? 'dark__cta content' : "call-to-action content"}>
            <h4>Call to action</h4>
            <div className='actions'>
                <article>
                    <div className='img'>
                    </div>
                    <h6>Name</h6>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </article>
                <article>
                    <div className='img'>
                    </div>
                    <h6>Name</h6>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </article>
                <article>
                    <div className='img'>
                    </div>
                    <h6>Name</h6>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </article>
            </div>
        </section>
    </>
  )
}

export default CallToAction