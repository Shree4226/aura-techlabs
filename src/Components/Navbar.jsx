import React, { useEffect, useRef } from 'react'
import { navLinks } from '../../constants'
import gsap from 'gsap'

const Navbar = () => {

    const compRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {

        const ctx = gsap.context(() => {
            // Timeline for smooth staggered animation
            const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });
            tl.from(".content h6", {
                y: 20,      // start 20px below
                opacity: 0, // start invisible
            })
                .from(".content p", {
                    y: 20,
                    opacity: 0,
                }, "-=0.5"); // overlap slightly for smoother flow
        }, contentRef);

        return () => ctx.revert();
    }, [])


    return (

        <nav className='upper fixed top-0 left-0 w-full z-50'>

            <div className='navbar'>
                <p
                    ref={compRef}
                    className="text-white text-3xl font-bold tracking-wide glow-text glow-once">Aura Techlabs</p>

                <ul className='flex gap-8 text-white/70 font-xl'>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='content' ref={contentRef}>
                <h6>
                    Consumer Electronics / Smart Lifestyle Products
                </h6>
                <p>
                    Designing cutting-edge electronics and smart devices that simplify everyday life while delivering exceptional quality and innovation.
                </p>
            </div>
        </nav>
    )
}

export default Navbar