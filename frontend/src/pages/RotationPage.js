import React from 'react';


function RotationPage() {
    return (
        <>
            <h2>My go to basketball shoes in my rotation</h2>
            <nav class="main-nav">
                <a href="#lebron20">LeBron 20</a>
                <a href="#kyrie7">Kyrie 7</a>
                <a href="#gtcut1">GT Cut 1</a>
                <a href="#kobe6">Kobe 6</a>
                <a href="#kd12">Kd 12</a>
            </nav>

            <article id="lebron20">
                <h3>Nike LeBron 20</h3>
                <p>I got these shoes on sale for $120 back in March of 2023. I found the shoe to have minimal break in time, and they felt perfect on my feet by the 3rd game of the day.
                    These are my current go to shoes whenever I play pickup basketball, or even play in basketball leagues. Nike found the perfect mix of cushion and height off the ground
                    for this shoe. I always avoided LeBron's due to the shoe being high off the ground and the air bubble cushion, which I am also not a fan of. The traction of this shoe
                    is perfect, and I have yet to experience any slippage on the court with these shoes on. There are two versions of this shoe, a leather version and a knit version. I 
                    have the knit version, and the materials are lightweight and the breath-ability in the shoe is good. I would recommend to avoid the leather version, as the material is 
                    too thick and will cause your feet to 'heat up' rather quickly.
                </p>
                <p>
                    <img src='images/lebron20.jpeg'style={{width: '1000px', height: '1000px'}}/>
                </p>
            </article>

            <article id="kyrie7">
                <h3>Nike Kyrie 7</h3>
                <p>I have had the Kyrie 7s for about a year and a half, and they have held up well despite heavy usage. These are my go to shoes when I go to my other gym, which has a more dirty/dusty 
                    court than my main gym. These hold up very well on dirty courts, and despite the court being slippery for everyone else, the Kyrie 7s are able to grip the floor nearly perfectly. 
                    The worse part of this shoe is the break in period, it took me several weeks and games to finally feel comfortable in these shoes. The stability is good in this shoe, although 
                    my left ankle feels more sore in this shoe than other shoes after a day of basketball. Although these shoes don't excel in any attribute, they do everything good, which 
                    results in a well balanced shoe.
                </p>
                <p>
                    <img src='images/kyrie7.jpeg'style={{width: '1000px', height: '1000px'}}/>
                </p>
            </article>

            <article id="gtcut1">
                <h3>Nike GT Cut 1</h3>
                <p>This shoe is the newest addition to my collection. I love how low to the ground this shoe feels, while maintaining a cushion that bounces all your energy right 
                    back to you. When getting these shoes, I was concerned about the weight, but while playing in them I did not notice the shoe's weight. The shoe has a translucent 
                    outsole, so I have not attempted to bring them to my other gym's dusty court. Something that surprised me a lot was the shoe's break in time. When I first wore these 
                    I was expecting an unpleasant experience, but these already felt perfect. I'm looking forward to playing in them more, and these have a chance to be my go to shoes.
                </p>
                <p>
                    <img src='images/gtcut1.jpeg'style={{width: '1000px', height: '1000px'}}/>
                </p>
            </article>

            <article id="kobe6">
                <h3>Nike Kobe 6 Protro</h3>
                <p>The Kobe 6s are my 'luxury' basketball shoe, and I am very selective when I bring these out to hoop in. Everything about this shoe is great, from the traction, to 
                    the materials, and the cushion. The version I bought were the 'Protro' version from 2021, not the originals from 2011. The only issue I have with this shoe is due 
                    to them being low-cut shoes and not having not much ankle support, I can feel vulnerable when driving to the hoop in competitive games. I had two unlucky ankle injuries 
                    in the past year, so I have been more timid on the shoe I bring out to play in. My only complaint about this shoe is they are too hard to find, and I wish Nike would 
                    produce more of them so everyone could get a pair.
                </p>
                <p>
                    <img src='images/kobe6.jpeg'style={{width: '1000px', height: '1000px'}}/>
                </p>
            </article>

            <article id="kd12">
                <h3>Nike Kd 12</h3>
                <p>Although these shoes are hardly in my rotation, they are too good to not talk about. I got these shoes back in 2020 but wasn't able to play in them for 6 months due 
                    to Covid-19 shutting down all the gyms by me. When I first wore them, they felt too narrow and were painful for the first month or so. But after breaking them in, 
                    they felt perfect. The cushion is still the best cushion I have played in, and the materials and traction are both perfect. I love everything about this shoe, and can 
                    confidently say they are the best shoe I have ever played in. I rarely wear them so I can preserve them, and only use them for bigger games. Highly recommend getting 
                    a pair, and fighting through the initial break in time. After breaking them in, you wouldn't want to take them off.
                </p>
                <p>
                    <img src='images/kd12.jpeg'style={{width: '1000px', height: '1000px'}}/>
                </p>
            </article>
        </>
    );
}

export default RotationPage;