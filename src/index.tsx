import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './components/header';

const Index = () => {
    return (
        <div className="container">
            <Header/>
            <h1>Welcome!</h1>            
        </div>
    )
}

const appRootEl = document.getElementById('app-root');
ReactDOM.render(<Index/>, appRootEl);

export default Index;