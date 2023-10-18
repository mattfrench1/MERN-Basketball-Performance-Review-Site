import React from 'react';

import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'images/curry11.jpg',
        thumbnail: 'images/curry11.jpg',
        description: 'Under Armour Curry 11',
        originalHeight: '450px',
    },
    {
        original: 'images/gtcut3.jpg',
        thumbnail: 'images/gtcut3.jpg',
        description: 'Nike GT Cut 3',
        originalHeight: '450px',
    },
    {
        original: 'images/kd16.jpg',
        thumbnail: 'images/kd16.jpg',
        description: 'Nike Kd 16',
        originalHeight: '450px',
    },
    {
        original: 'images/lebron21.jpg',
        thumbnail: 'images/lebron21.jpg',
        description: 'Nike LeBron 21',
        originalHeight: '450px',
    },
    {
        original: 'images/mb03.jpg',
        thumbnail: 'images/mb03.jpg',
        description: 'Puma MB.03',
        originalHeight: '450px',
    },
    {
        original: 'images/traeyoung3.jpg',
        thumbnail: 'images/traeyoung3.jpg',
        description: 'adidas Trae Young 3',
        originalHeight: '450px',
    }

]

function UpcomingPage() {
    return (
        <>
            <h2>Upcoming Releases</h2>
            <p>Here are some confirmed upcoming basketball shoes set to release in the coming months.</p>

            <article class="gallery">
                <ImageGallery items={images} />

            </article>


        </>
    );
}

export default UpcomingPage;