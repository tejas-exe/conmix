import React from 'react';
import { Fade, Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import s from "./style.module.css"

export function Home() {
    const images = [
        "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661913209349-eca68a68dee2?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    return (
        <Fade easing={'linear'} duration={2000} arrows={false}>
            <div className="each-slide-effect">
                <div style={{ height: 600, background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.35)), url(${images[0]})no-repeat center / cover` }}>
                    <div className={s.parent}>
                        <span className={s.sliderBtn}>Commix</span>
                        <h2 className={s.sliderHeading}>Unbreakable and long lasting</h2>
                        <h1 className={s.sliderHeading2}>Trust of Experts</h1>
                        <p className={s.sliderContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum facere ipsa numquam non dignissimos quidem veritatis nobis molestias at, labore nam nesciunt vero id aspernatur dicta assumenda amet. Qui.</p>
                    </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ height: 600, background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.35)), url(${images[1]})no-repeat center / cover` }}>
                    <div className={s.parent}>
                        <span className={s.sliderBtn}>Commix</span>
                        <h2 className={s.sliderHeading}>Best ready mix concrete for</h2>
                        <h1 className={s.sliderHeading2}>Strong construction</h1>
                        <p className={s.sliderContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum facere ipsa numquam non dignissimos quidem veritatis nobis molestias at, labore nam nesciunt vero id aspernatur dicta assumenda amet. Qui.</p>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

