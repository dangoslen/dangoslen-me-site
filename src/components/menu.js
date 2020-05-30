import React from "react"
import { Link } from "gatsby"
import { scale } from "../utils/typography"

import NavLink from "./nav-link"

const Menu = props => {
    const { title } = props;

    return (
        <nav 
            style={{
                display: `flex`,
                width: `100%`,
                justifyContent: `space-between`,
                alignItems: `center`
            }}>
            <Link style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`
                }}
                to="/"
                >
                <h1
                    style={{
                        ...scale(1.0),
                        marginBottom: 0,
                        marginTop: 0,
                    }}>
                    Dan{" { "}Goslen{" }"}
                </h1>
            </Link>
            <div 
                style={{
                    display: `flex`,
                    justifyContent: `space-evenly`
                }}
                >
                <NavLink to='/' text="About" />
                <NavLink to='/blog' text="Blog" />
                <NavLink to='/talks' text="Talks" />
            </div>
        </nav>
        )
    }

export default Menu 
