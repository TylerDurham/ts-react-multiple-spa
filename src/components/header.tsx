import * as React from 'react'

export default function Header() {
    return (
        <div>
            
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
            
            <nav className="grey darken-3" style={{ height: '80px'}}>                
                <div className="nav-wrapper">
                    <a href="/" title="Home"><img src="images/react.png" width="100" alt="Home"/></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="spa1.html" title="Single Page Application #1">App 1</a></li>
                        <li><a href="spa2.html" title="Single Page Application #2">App 2</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
