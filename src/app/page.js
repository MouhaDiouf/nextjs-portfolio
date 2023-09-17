"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import Hero from "./components/Hero/Hero";
import CTA from "./components/CTA/CTA";
import About from "./components/About/About";
import MoreProjects from "./components/MoreProjects/MoreProjects";
import Layout from "./components/Layout";
import FadeIn from "./components/FadeIn";
import Portfolio from "./components/Portfolio/Portfolio";
import balls from "./Images/balls.gif";

import { useState, useEffect } from "react";

export default function Home() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    if (loading) {
        return (
            <div className={styles.ballsContainer}>
                <Image src={balls} alt="balls" className={styles.balls} />
            </div>
        );
    }

    return (
        <>
            <FadeIn>
                <Layout>
                    <meta charSet="utf-8" />
                    <title> Mo Diouf | Full-Stack Developer</title>
                    <div className="app">
                        <div className="app-container">
                            <Hero />
                            <About />
                            <Portfolio />
                            <MoreProjects />
                            <CTA />
                        </div>
                    </div>
                </Layout>
            </FadeIn>
        </>
    );
}
