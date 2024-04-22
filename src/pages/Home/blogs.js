import React, { useState, useEffect } from 'react';

function Carousel() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const mockSliderItems = [
        {
            id: 1,
            imageUrl: 'https://raw.githubusercontent.com/HoanghoDev/slider_1/main/image/img1.jpg',
            author: 'GiorgioGT',
            title: 'DESIGN SLIDER',
            topic: 'ANIMAL',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
        },
        {
            id: 2,
            imageUrl: 'https://raw.githubusercontent.com/HoanghoDev/slider_1/main/image/img2.jpg',
            author: 'giorgioGT',
            title: 'DESIGN SLIDER',
            topic: 'ANIMAL',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
        },
        {
            id: 3,
            imageUrl: 'https://raw.githubusercontent.com/HoanghoDev/slider_1/main/image/img3.jpg',
            author: 'giorgioGT',
            title: 'DESIGN SLIDER',
            topic: 'ANIMAL',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
        },
        {
            id: 4,
            imageUrl: 'https://raw.githubusercontent.com/HoanghoDev/slider_1/main/image/img4.jpg',
            author: 'giorgioGT',
            title: 'DESIGN SLIDER',
            topic: 'ANIMAL',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
        },
    ];

    useEffect(() => {
        const timeAutoNext = setInterval(() => {
            if (!isTransitioning) {
                showNextSlide();
            }
        }, 7000);

        return () => clearInterval(timeAutoNext);
    }, [isTransitioning]);

    const showNextSlide = () => {
        setIsTransitioning(true);
        setCurrentSlideIndex((prevIndex) => (prevIndex === mockSliderItems.length - 1 ? 0 : prevIndex + 1));
        setTimeout(() => setIsTransitioning(false), 500); // Transition duration
    };

    const showPrevSlide = () => {
        setIsTransitioning(true);
        setCurrentSlideIndex((prevIndex) => (prevIndex === 0 ? mockSliderItems.length - 1 : prevIndex - 1));
        setTimeout(() => setIsTransitioning(false), 500); // Transition duration
    };
     const handleThumbnailClick = (index) => {
        setCurrentSlideIndex(index);
    };

    return (
        <div className="carousel">
            <div className="list">
                {mockSliderItems.map((item, index) => (
                    <div
                        key={item.id}
                        className={`item ${index === currentSlideIndex ? 'active' : ''}`}
                        style={{ opacity: index === currentSlideIndex || isTransitioning ? 1 : 0 }}
                    >
                        <img src={item.imageUrl} alt={`Slide ${index + 1}`} />
                        <div className="content">
                            <div className="author">{item.author}</div>
                            <div className="title">{item.title}</div>
                            <div className="topic">{item.topic}</div>
                            <div className="des">{item.description}</div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="thumbnail">
                {mockSliderItems.map((item, index) => (
                    <div
                        className={`item ${index === currentSlideIndex ? 'active' : ''}`}
                        key={item.id}
                        onClick={() => setCurrentSlideIndex(index)}
                    >
                        <img src={item.imageUrl} alt={`Thumbnail ${index + 1}`} />
                        <div className="content">
                            <div className="title">Name Slider</div>
                            <div className="description">Description</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="arrows">
                <button id="prev" onClick={showPrevSlide}>{'<'}</button>
                <button id="next" onClick={showNextSlide}>{'>'}</button>
            </div>
            <div className="time"></div>
        </div>
    );
}

export default Carousel;
