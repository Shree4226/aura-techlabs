import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
gsap.registerPlugin(ScrollToPlugin);

const Hero = () => {

    const scrollToProducts = ()=>{
        gsap.to(window,{
            duration:1,
            scrollTo:'#products',
            ease:"power2.out"
        });
    };

    const contentRef = useRef(null);
    const taglineRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const btnRef = useRef(null);

    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        if (!videoLoaded) return;

        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                defaults: { ease: "power3.out", duration: 1 }
            });

            tl.from(taglineRef.current, {
                y: 30,
                opacity: 0,
                duration: 0.8
            })
                .from(titleRef.current, {
                    y: 40,
                    opacity: 0,
                    duration: 0.8
                }, "-=0.5")
                .from(btnRef.current, {
                    scale: 0.9,
                    opacity: 1,
                    duration: 0.3
                }, "-=0.4");

        });

        return () => ctx.revert();   // ✅ important cleanup

    }, [videoLoaded]);

    return (
        <section id='hero' className='hero'>
            <div >
                <div className="video-container">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        onLoadedData={() => setVideoLoaded(true)}>
                        <source src="/videos/HeroVdo.mp4" type="video/mp4" />
                    </video>
                </div>

            </div>

            <div className='hero-content' ref={contentRef}>
                <p className='tagline' ref={taglineRef}>Smart Living. Reimagined.</p>
                <h1 ref={titleRef}>
                    Aura<span>Tech</span>Labs
                </h1>
                <h3 ref={subtitleRef}>Consumer Electronics & Smart Lifestyle Products</h3>

                <p className='description'>

                </p>

                <button className='cta-btn' ref={btnRef} onClick={scrollToProducts}>Explore the experience</button>
            </div>
        </section>

    )
}

export default Hero