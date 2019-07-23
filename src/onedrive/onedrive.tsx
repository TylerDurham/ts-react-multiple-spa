import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from '../components/header'

const OneDrive = () => {
    return (
        <div className="container">
            <Header/>
            <h1>OneDrive</h1>
            <img src="images/onedrive.png" width="50"/>
        </div>
    )
}

const appRootEl = document.getElementById('app-root');
ReactDOM.render(<OneDrive/>, appRootEl);

export default OneDrive;