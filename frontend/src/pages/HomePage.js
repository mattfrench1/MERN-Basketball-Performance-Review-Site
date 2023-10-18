import React from 'react';

function HomePage() {
    return (
        <>
            <h1>Welcome to my Basketball Shoe Performance Site!</h1>

            <article id="technology">
                
                <p>
                    Here, I will be providing performance reviews of every basketball shoe in my collection. I will be grading the performance of a shoe based on: traction, materials,
                    fit, and weight. Each of these metrics will be graded on a scale of 1-5, with '1' being the worst rating and '5' being the best. I have played basketball since elementary school,
                    and I currently play pickup basketball at the gym and in basketball leagues such as intramural basketball and adult leagues. My ratings are strictly preference, so a shoe that may 
                    be great for me can be unsatisfactory for you. I am using MongoDB to store each shoe and their associated rating. I hope you enjoy my site, and find a basketball shoe that suites you
                    best!
                </p>
                
            </article>
        </>
    );
}

export default HomePage;