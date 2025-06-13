import React, { useEffect, useState } from "react"
import styled from "styled-components";
import { FaSun } from "@react-icons/all-files/fa/FaSun";
import { FaMoon } from "@react-icons/all-files/fa/FaMoon";

import Device from "./sizing";

const ModeToggle = () => {
    const [theme, setTheme] = useState('');
    
    useEffect(() => {
        const darkModeMedia = window.matchMedia('(prefers-color-scheme: dark)');
        const themed = localStorage.getItem('theme');
        if (themed === 'dark' || ((themed === null && darkModeMedia.matches))) {
            document.documentElement.setAttribute('data-theme', 'dark');
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    function switchTheme() {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme); 
    }

    return (
        <ToggleContainer class="theme-switch-wrapper" >
            <ToggleLabel class="theme-switch" for="checkbox">
                <input type="checkbox" id="checkbox" checked={ theme === 'dark' } onChange={ switchTheme } hidden="true" />
                <FaSun className="icon" display={theme === 'light' ? "none" : "block"}/>
                <FaMoon className="icon" display={theme === 'dark' ? "none" : "block"}/>
             </ToggleLabel>
        </ToggleContainer>
    );
};

const ToggleContainer = styled.div`
    position: absolute;
    top: 60px;
    right: 60px;
    font-size: 1.4em;

    @media ${Device.tablet} {
        position: inherit;
        margin-left: 15px;
        margin-right: 15px;
    }
`;

const ToggleLabel = styled.label`
    display: flex;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`;

export default ModeToggle;

