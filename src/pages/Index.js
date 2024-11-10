import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from "react-router-dom";

const Index = () => {
    // Create a reference to the swiper instance
    const swiperRef = useRef(null);

    useEffect(() => {
        // Initialize AOS animation library
        AOS.init();

        // Initialize Swiper and store the instance in the ref
        swiperRef.current = new Swiper('.onboarding', {
            spaceBetween: 10,
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        // Handle Onboarding Loader (like a splash screen)
        const loader = document.getElementById('onboardingLoader');
        if (loader) {
            setTimeout(() => {
                loader.style.display = 'none';
            }, 2000); // Hide the loader after 2 seconds
        }
    }, []);

    // Event handler to navigate to the next slide
    const goToNextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext(); // Navigate to the next slide
        }
    };

    // Event handler to navigate to the previous slide
    const goToPreviousSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev(); // Navigate to the previous slide
        }
    };

    return (
        <div>
            {/* Loading Section */}
            <div className="onboarding-loader" id="onboardingLoader">
                <div className="rocket-img">
                    <img
                        className="rocket"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="500"
                        src="assets/images/svg/rocket.svg"
                        alt="rocket"
                    />
                </div>
                <div className="flash-img">
                    <img
                        className="flash"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="800"
                        src="assets/images/svg/flash.svg"
                        alt="flash"
                    />
                </div>
                <div className="logo-img">
                    <img
                        className="img-fluid"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-delay="1000"
                        src="assets/images/logo/logo-white.png"
                        alt="logo"
                    />
                </div>
            </div>

            {/* Onboarding Section */}
            <section className="onboarding-section highlight se" id="onboardingBody">
                <div className="swiper onboarding">
                    <div className="swiper-wrapper">
                        {/* Slide 1 */}
                        <div className="swiper-slide">
                            <div className="poster-wapper">
                                <div
                                    className="poster-box-chain"
                                    data-aos="fade-down"
                                    data-aos-duration="1000"
                                    data-aos-delay="1700"
                                >
                                    <span className="left-chain"></span>
                                    <span className="right-chain"></span>
                                </div>
                                <div
                                    className="poster-box color1 box1"
                                    data-aos="fade-down"
                                    data-aos-duration="1000"
                                    data-aos-delay="1700"
                                >
                                    <h2>MANAGE</h2>
                                    <img
                                        className="img-fluid top-line"
                                        src="assets/images/svg/lines.svg"
                                        alt="lines"
                                    />
                                </div>
                                <div
                                    className="poster-box color2 box2"
                                    data-aos="fade-right"
                                    data-aos-duration="2000"
                                    data-aos-delay="2000"
                                >
                                    <h2>YOUR</h2>
                                </div>
                                <div
                                    className="poster-box color1 box3"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                    data-aos-delay="2500"
                                >
                                    <h2>FINANCE</h2>
                                </div>
                                <div
                                    className="poster-box color2 box4"
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                    data-aos-delay="3000"
                                >
                                    <h2>WISELY</h2>
                                    <img
                                        className="img-fluid bottom-line"
                                        src="assets/images/svg/lines-fill.svg"
                                        alt="lines"
                                    />
                                </div>
                            </div>

                            <div className="custom-container">
                                <p>
                                    The best payment method connects your money to friends, family, brands, and experiences.
                                </p>
                                <div className="d-flex justify-content-between align-items-center pb-3">
                                    <a href="#" className="btn btn-link mt-0 p-0">
                                        Skip
                                    </a>

                                    <div className="onboarding-next" onClick={goToNextSlide}>
                                        <img
                                            className="img-fluid arrow"
                                            src="assets/images/svg/arrow-white.svg"
                                            alt="arrow"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 2 */}
                        <div className="swiper-slide">
                            <div className="poster-wapper">
                                <div
                                    className="poster-box-chain poster-box-chain1"
                                    data-aos="fade-down"
                                    data-aos-duration="1000"
                                    data-aos-delay="500"
                                >
                                    <span className="left-chain"></span>
                                    <span className="right-chain"></span>
                                </div>
                                <div
                                    className="poster-box poster-box1 color1 box1"
                                    data-aos="fade-down"
                                    data-aos-duration="1000"
                                    data-aos-delay="500"
                                >
                                    <h3>Add your all account and manage</h3>
                                </div>
                                <div className="custom-container">
                                    <ul className="card-list">
                                        <li>
                                            <img
                                                className="img-fluid card-img card5"
                                                src="assets/images/card/card5.png"
                                                alt="card"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className="img-fluid card-img card4"
                                                src="assets/images/card/card4.png"
                                                alt="card"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className="img-fluid card-img card3"
                                                src="assets/images/card/card3.png"
                                                alt="card"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className="img-fluid card-img card2"
                                                src="assets/images/card/card2.png"
                                                alt="card"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className="img-fluid card-img card1"
                                                src="assets/images/card/card1.png"
                                                alt="card"
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p>Manage your finance in the app. Your money will be safe here.</p>
                            <div className="custom-container button-group">
                                <Link to="/login" className="btn theme-btn w-100">
                                    Sign in
                                </Link>
                                <Link to="/register" className="btn btn-link mt-3 pb-3">
                                    Sign up
                                </Link>
                            </div>

                            {/* Left Arrow to go back to the previous slide */}
                            <div className="onboarding-prev" onClick={goToPreviousSlide}>
                                <i className="back-btn" data-feather="arrow-left"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Index;
