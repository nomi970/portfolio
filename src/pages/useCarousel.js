import React from 'react';
import Carousel from './Carousel';

const slides = [
    {
        image: 'https://raw.githubusercontent.com/HoanghoDev/slider_1/main/image/img1.jpg',
        title: 'Slide 1',
        description: 'Description of slide 1',
    },
    // Add more slides here
];

const App = () => {
    return (
        <div>
            <header>
                <nav>
                    {/* Add your navigation links here */}
                </nav>
            </header>
            <Carousel slides={slides} />
        </div>
    );
};

export default App;
