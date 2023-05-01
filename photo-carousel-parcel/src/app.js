import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from './Carousel';

import beach from 'url:./assets/beach.jpg';
import drinks from 'url:./assets/drinks.jpg';
import ocean from 'url:./assets/ocean.jpg';
import pool from 'url:./assets/pool.jpg';
import van from 'url:./assets/van.jpg';

const PATHS = [
    beach,
    drinks,
    ocean,
    pool,
    van
];

const CarouselContainer = () => {
    const [currentImg, setCurrentImg] = React.useState(0);
    const nextImg = () => setCurrentImg(current => ++current % PATHS.length);

    React.useEffect(() => {
        const interval = setInterval(nextImg, 2000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return <Carousel src={PATHS[currentImg]} />;
}

ReactDOM.render(
    <CarouselContainer />,
    document.getElementById('app')
);