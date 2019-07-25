import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from '../components/header'

const OneDrive = () => {
    return (
        <div className="container">
            <Header/>
            <h1>Single Page App #1</h1>
            <img src="images/spa1.png" width="100"/>

            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin orci sed ligula mollis, ut cursus ante volutpat. Suspendisse sollicitudin dolor a ligula tempus, non scelerisque ligula feugiat. Phasellus est lacus, elementum rhoncus imperdiet et, aliquet quis enim. Cras nec mauris quis magna bibendum fermentum. Mauris elementum, metus ut auctor condimentum, leo felis eleifend nibh, nec vulputate sapien augue ut arcu. Nam efficitur est sit amet tincidunt varius. Morbi vel nibh at enim suscipit suscipit. Cras nec rutrum justo. Etiam ut nibh finibus, sollicitudin augue quis, lacinia nunc. Aliquam ut mattis sem. In venenatis, massa a commodo ultricies, risus sapien sodales nibh, vitae egestas eros lectus sed ipsum. Nullam ut nunc quis diam mollis lobortis aliquet ut mi. Nullam malesuada tincidunt sapien, eu fringilla diam iaculis vitae.
                </p>
                <p>
                    Pellentesque id risus justo. Phasellus ac augue ex. Integer vel malesuada massa, sit amet porta dui. Phasellus semper fermentum fermentum. Sed posuere sem ut sapien tristique varius. Vestibulum at felis at magna ultrices viverra quis eu enim. Etiam lobortis, lorem quis ultricies vehicula, ligula purus consequat velit, id faucibus orci augue maximus libero. Nulla volutpat semper congue. Nullam luctus dolor sem, vel commodo nulla accumsan ut. Nulla facilisi.
                </p>
            </div>
        </div>
    )
}

const appRootEl = document.getElementById('app-root');
ReactDOM.render(<OneDrive/>, appRootEl);

export default OneDrive;