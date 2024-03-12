import React, { useEffect, useState } from 'react'

const ThemeToggler = () => {
    const[themeMode, setThemeMode] = useState<string|undefined>(typeof window !== 'undefined' ? localStorage.getItem("themeMode") || undefined: null)
    const[theme, setTheme] = React.useState(themeMode)
    const[toggle, setToggle] = useState(false)

    const toggleTheme =(event) =>{
        setTheme(toggle === false ? 'dark' : 'light' );
        setThemeMode(event.target.value)
        window.localStorage.setItem("themeMode", theme);
        setToggle(!toggle)
    };

    useEffect(() =>{
        document.querySelector('html').setAttribute('data-theme',themeMode);

    }, [theme])

  return (
    <div className={'flex flex-col justify-right align-middle'}>
        <label className='swap swap-rotate'>
            <input className={'toggle'}
                onChange={toggleTheme}
                value={toggle === false ? 'dark' : 'light'}
                type='checkbox'
                checked={toggle}
                />
                {/* sun icon */}
     
        
        </label>
      
    </div>
  )
}

export default ThemeToggler
