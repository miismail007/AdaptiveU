import React from 'react'

function Header(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <a class="navbar-brand" href="#">{props.brand}</a>
            </nav>
        </div>
    )
}

export default Header
