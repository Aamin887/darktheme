function Nav({theme, setTheme}) {
    // const myTheme = useContext(ThemeContext)

    const handleTheme = () => {
        setTheme(!theme)
    }

  return (
    <>
        <nav className={theme ? 'dark__nav': 'nav'}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Call action</li>
                <li onClick={handleTheme}>
                    <button className={theme ? 'btn dark__btn' : 'btn'}  >{theme? 'Dark Theme' : 'Light Theme'}</button>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Nav