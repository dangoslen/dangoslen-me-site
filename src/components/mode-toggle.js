import React, { useState } from "react"
import styled from "styled-components";
import { FaSun } from "@react-icons/all-files/fa/FaSun";
import { FaMoon } from "@react-icons/all-files/fa/FaMoon";

import Device from "./sizing";

const ModeToggle = () => {
    let themed = localStorage.getItem('theme');
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
    if (localStorage.getItem('theme') === null && darkMode.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themed = 'dark';
    }

    const darkModeEnabled = themed === 'dark';

    const [theme, setTheme] = useState(darkModeEnabled ? 'dark' : 'light');

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            setTheme('light')
        }    
    }

    return (
        <ToggleContainer class="theme-switch-wrapper" >
            <label class="theme-switch" for="checkbox">
                <input type="checkbox" id="checkbox" defaultChecked={ theme === 'dark' } onChange={ switchTheme } hidden="true" />
                <FaSun className="icon" display={theme === 'light' ? "none" : "block"}/>
                <FaMoon className="icon" display={theme === 'dark' ? "none" : "block"}/>
             </label>
        </ToggleContainer>
    );
};

const ToggleContainer = styled.div`
    position: absolute;
    top: 60px;
    right: 60px;
    font-size: 1.2em;

    @media ${Device.tablet} {
        position: inherit;
        margin-left: 15px;
        margin-right: 10px;
        padding: 6px;
    }
`;

export default ModeToggle;

