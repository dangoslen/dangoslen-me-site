import React from "react"

const ModeToggle = () => {

    const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
    const darkModeEnabled = darkMode.matches || localStorage.getItem('theme') === 'dark'

    if (darkModeEnabled) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }    
    }

    return (
        <div class="theme-switch-wrapper" >
            <label class="theme-switch" for="checkbox">
                <input type="checkbox" id="checkbox" defaultChecked={ darkModeEnabled } onChange={ switchTheme }/>
                <div class="slider round"></div>
             </label>
        </div>
    );
};

export default ModeToggle;

