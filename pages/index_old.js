
import React from 'react';
import Slider from "react-slick";

export default function Home() {
    const slider = React.useRef(null);
    var heros = [
        {
            'image-badge' : '/images/badge-hero.png',
            'name-hero' : 'Zeus',
            'desciption-hero' : '1 The continents were separated and aparted by a seal. The moment when the 8 planets lined up was the seal became the weakest.',
            'image-hero' : '/images/pos1.png'
        },
        {
            'image-badge' : '/images/badge-hero.png',
            'name-hero' : 'Zeus',
            'desciption-hero' : 'The continents were separated and aparted by a seal. The moment when the 8 planets lined up was the seal became the weakest.',
            'image-hero' : '/images/pos2.png'
        },
        {
            'image-badge' : '/images/badge-hero.png',
            'name-hero' : 'Zeus',
            'desciption-hero' : 'The continents were separated and aparted by a seal. The moment when the 8 planets lined up was the seal became the weakest.',
            'image-hero' : '/images/pos3.png'
        },
        {
            'image-badge' : '/images/badge-hero.png',
            'name-hero' : 'Zeus',
            'desciption-hero' : 'The continents were separated and aparted by a seal. The moment when the 8 planets lined up was the seal became the weakest.',
            'image-hero' : '/images/pos4.png'
        },
        {
            'image-badge' : '/images/badge-hero.png',
            'name-hero' : 'Zeus',
            'desciption-hero' : 'The continents were separated and aparted by a seal. The moment when the 8 planets lined up was the seal became the weakest.',
            'image-hero' : '/images/pos5.png'
        },
    ];
    var settings = {
        centerMode: true,
        centerPadding: '0px',
        arrows : false,
        infinite : true,
        initialSlide : 1, 
        slidesToShow: 3,
        focusOnSelect: true,
        nextArrow: <renderArrows />,
        prevArrow: <prevArrow />,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]
    };
    return (
        <section className='main-index'>
            <section className='section-hero'>
                <div className="container">
                    <div className='main-header'>
                        <div className="logo-pc">
                            <img src='/images/logo.png'></img>
                        </div>
                        <div className='main-nav'>
                            <span className='item-nav'>Home</span>
                            <span className='item-nav'>Marketplace</span>
                            <span className='item-nav'>Document</span>
                        </div>
                    </div>
                    <div className='hero-show'>
                        <img src='/images/logo-banner.png' className='hero-center hero-section'></img>
                        <img src='/images/pos1.png' className='hero-p1 hero-section'></img>
                        <img src='/images/pos2.png' className='hero-p2 hero-section'></img>
                        <img src='/images/pos3.png' className='hero-p3 hero-section'></img>
                        <img src='/images/pos4.png' className='hero-p4 hero-section'></img>
                        <img src='/images/pos5.png' className='hero-p5 hero-section'></img>
                        
                    </div>
                </div>
            </section>
            <section className='section-eco'>
                <div className='container have-cloud'>
                    <img src='/images/cloud1.png' className='cloud-top-left'></img>
                    <img src='/images/cloud1.png' className='cloud-top-right'></img>
                    <img src='/images/cloud1.png' className='cloud-top-center'></img>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='one-card-eco card-1'></div>
                        </div>
                        <div className='col-md-4'>
                            <div className='one-card-eco card-2'></div>
                        </div>
                        <div className='col-md-4'>
                            <div className='one-card-eco card-3'></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-concept'>
                <div className='container'>
                    <div className='container-trailer-game'>
                        <div className='trailer-game'>
                            <div className='show-trailer'>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/J7eYhM6wXPo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className='container-concept-game'>
                        <div className='concept-game'>
                            <div className='show-concept'>
                                <div className="badge-concept">
                                    <h2>
                                        CHARACTER DESIGN CONCEPT
                                    </h2>
                                    <p>
                                        The continents were separated and aparted by a seal. The moment when the 8 planets lined up was the seal became the weakest. 
                                    </p>
                                </div>
                                <div className='content-concept'>
                                    <img src='/images/zeus1.png' className='img-concept1'></img>
                                    <img src='/images/zues2.png' className='img-concept2'></img>
                                    <img src='/images/zeus3.png' className='img-concept3'></img>
                                </div>
                                <span className='name-concept'>Zeus Concept</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-hero-concept'>
                <div className='container'>
                    <div className="info-hero-concept">
                        <img src="/images/badge-hero.png" alt="badge-hero" id="hero-badge" />
                    </div>
                    <Slider ref={slider} {...settings} className='slick-heros'>
                        {heros.map(function(hero, index){
                            return (
                                <div className='wrapper-one-hero'>
                                    <div className='one-hero'>
                                        <img src={hero['image-hero']} alt="" className='image-slick-hero'/>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>

                </div>
            </section>
        </section>
    )
}
