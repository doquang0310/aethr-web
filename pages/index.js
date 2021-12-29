/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import Slider from "react-slick";
class FullpageWrapper extends React.Component {
    onLeave(origin, destination, direction) {
        console.log("Leaving section " + origin.index);
    }
    afterLoad(origin, destination, direction) {
        console.log("After load: " + destination.index);
    }
  
  render() {
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
        {
            'image-badge' : '/images/badge-hero.png',
            'name-hero' : 'Zeus',
            'desciption-hero' : 'The continents were separated and aparted by a seal. The moment when the 8 planets lined up was the seal became the weakest.',
            'image-hero' : '/images/pos5.png'
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
        arrows : true,
        infinite : true,
        initialSlide : 1, 
        slidesToShow: 5,
        focusOnSelect: true,
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
      <ReactFullpage
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        scrollOverflow={true}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
                <section className='section-hero section'>
                    <div className="container">
                        <div className='main-header'>
                            <div className="logo-pc">
                                <img src='/images/logo.png'></img>
                            </div>
                            <div className='main-nav'>
                                <span className='item-nav'>Home</span>
                                <span className='item-nav'>Gameplay</span>
                                <span className='item-nav'>Tokenomics</span>
                                <span className='item-nav'>Token Allocation</span>
                                <span className='item-nav'>Team</span>
                                <span className='item-nav'>Roadmap</span>
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
                <section className='section-eco section section-concept'>
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
                    <div className='container'>
                        <div className='container-trailer-game'>
                            <div className='trailer-game'>
                                <div className='show-trailer'>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/J7eYhM6wXPo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-hero-concept section section-concept'>
                    <div className='container'>
                        <div className="wrap-badge-section">
                            <img src="/images/badge-character.png" className="badge-section" />
                            <p className="badge-description cl-w"> The continents were separated and aparted by a seal. The moment when the 8 planets lined up was the seal became the weakest. </p>
                        </div>
                        <Slider {...settings} className='slick-heros'>
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
                        <div className="wrap-content-game-hero">
                            <div className='container-concept-game'>
                                <div className='concept-game'>
                                    <div className='show-concept'>
                                        <div className='content-concept'>
                                            <img src='/images/zeus1.png' className='img-concept1'></img>
                                            <img src='/images/zues2.png' className='img-concept2'></img>
                                            <img src='/images/zeus3.png' className='img-concept3'></img>
                                        </div>
                                        <span className='name-concept'>Zeus Concept</span>
                                    </div>
                                </div>
                            </div>
                            <div className="concept-hero">
                                <img src="/images/boss-human.png" className="detail-hero" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-gameplay section'>
                    <div className='container'>
                        <div className="wrap-badge-section mb-4">
                            <img src="/images/badge-gameplay.png" className="badge-section" />
                        </div>
                        <div className="wrap-badge-section">
                            <img src="/images/badge-freeplay.png" className="badge-section" />
                        </div>
                        <div>
                            <img src="/images/freeplay-map.png" alt="" className="w-100" />
                        </div>
                    </div>
                    <div className='container'>
                        <div className="wrap-badge-section mt-3">
                            <img src="/images/badge-nftplay.png" className="badge-section" />
                        </div>
                        <img src="/images/nftplay-map.png" alt="" className="w-100 mt-3" />
                    </div>
                </section>
                <section className='section-roadmap section'>
                    <div className='container'>
                        <div className="wrap-badge-section mt-3">
                            <img src="/images/badge-roadmap.png" className="badge-section" />
                        </div>
                        <div className="wrap-roadmap">
                            <div className="top-road">
                                <div className="item">
                                    <img src="/images/icrm1.png" alt="" />
                                    <p className="date-roadmap">Q3/2021</p>
                                    <div className="content-roadmap">
                                        <p>Game design</p>
                                        <p>Character Concept</p>
                                        <p>Business Model</p>
                                    </div>
                                    <img src="/images/end-road.png" alt="" />
                                </div>
                                <div className="item">
                                    <img src="/images/icrm2.png" alt="" />
                                    <p className="date-roadmap">Q3/2021</p>
                                    <div className="content-roadmap">
                                        <p>NFT Sale</p>
                                        <p>Game Alpha Test</p>
                                    </div>
                                    <img src="/images/end-road.png" alt="" />
                                </div>
                                <div className="item">
                                    <img src="/images/icrm3.png" alt="" />
                                    <p className="date-roadmap">Q3/2021</p>
                                    <div className="content-roadmap">
                                        <p>Game Release</p>
                                        <p>Staking</p>
                                    </div>
                                    <img src="/images/end-road.png" alt="" />
                                </div>
                                <div className="item">
                                    <img src="/images/icrm4.png" alt="" />
                                    <p className="date-roadmap">Q3/2021</p>
                                    <div className="content-roadmap">
                                        <p>Tournament Mode</p>
                                        <p>Special Events</p>
                                        <p></p>
                                    </div>
                                    <img src="/images/end-road.png" alt="" />
                                </div>
                                <div className="item">
                                    <img src="/images/icrm5.png" alt="" />
                                    <p className="date-roadmap">Q3/2021</p>
                                    <div className="content-roadmap">
                                        <p>Multi - chain</p>
                                        <p>NFT Crosschain</p>
                                        <p></p>
                                    </div>
                                    <img src="/images/end-road.png" alt="" />
                                </div>
                            </div>
                            <div className="mid-road">

                            </div>
                            <div className="bot-road">
                                <div className="item">
                                    <div className="wrap-icon-end">
                                        <img src="/images/end-road.png" alt="" />
                                    </div>
                                    <img src="/images/icrm6.png" alt="" />
                                    <p className="date-roadmap">Q3/2021</p>
                                    <div className="content-roadmap">
                                        <p>Private Sales & Partnerships NFT</p>
                                        <p>Development Smart Contract</p>
                                        <p>Development Social Channels</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="wrap-icon-end">
                                        <img src="/images/end-road.png" alt="" />
                                    </div>
                                    <img src="/images/icrm1.png" alt="" />
                                    <p className="date-roadmap">Q3/2021</p>
                                    <div className="content-roadmap">
                                        <p>$ATH IDO</p>
                                        <p>Game Public Testing</p>
                                        <p>DEX Listing</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="wrap-icon-end">
                                        <img src="/images/end-road.png" alt="" />
                                    </div>
                                    <img src="/images/icrm1.png" alt="" />
                                    <p className="date-roadmap">Q3/2021</p>
                                    <div className="content-roadmap">
                                        <p>PVP Mode </p>
                                        <p>World Chat</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="wrap-icon-end">
                                        <img src="/images/end-road.png" alt="" />
                                    </div>
                                    <img src="/images/icrm1.png" alt="" />
                                    <p className="date-roadmap">Q3/2021</p>
                                    <div className="content-roadmap">
                                        <p>Metaverse Land</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
          );
        }}
      />
    );
  }
}

export default FullpageWrapper;
