import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Slider from "react-slick";
import { Container,Navbar,Nav } from 'react-bootstrap';
import Image from "next/image";
export function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img src="/images/next-icon.png" alt="" onClick={onClick} className={className} style={{ ...style, height: "87px", width: "65px",right: "-100px" }} />
    );
}
  
export function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img src="/images/prev-icon.png" alt="" onClick={onClick} className={className} style={{ ...style, height: "87px", width: "65px",left: "-100px" }} />
    );
}
export default class FullpageWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }
    
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    // onLeave(origin, destination, direction) {
    //     console.log("Leaving section " + origin.index);
    // }
    // afterLoad(origin, destination, direction) {
    //     console.log("After load: " + destination.index);
    // }
  
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
            asNavFor : this.state.nav1,
            ref : slider => (this.slider2 = slider),
            swipeToSlide : true,
            centerMode: true,
            centerPadding: '0px',
            arrows : true,
            infinite : true,
            initialSlide : 1, 
            slidesToShow: 5,
            focusOnSelect: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
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
        var settingSlide2 = {
            asNavFor : this.state.nav2,
            ref : slider => (this.slider1 = slider),
            arrows : false
        }
        return (
            <div id="fullpage-wrapper">
                <section className='section-hero section' id="home">
                    <video playsInline autoPlay loop muted>
                        <source type="video/webm" src="/videos/banner.webm" />
                    </video>
                    <Navbar expand="lg" fixed="top" className="main-header">
                        <Container>
                            <Navbar.Brand href="#">
                                <Image src='/images/logo.png' width={"189px"} height={"57px"} />
                            </Navbar.Brand>
                            <Nav className="me-auto main-nav">
                                <Nav.Link href="#home" className="item-nav">Home</Nav.Link>
                                <Nav.Link href="#gameplay" className="item-nav">Gameplay</Nav.Link>
                                <Nav.Link href="#tokenomics" className="item-nav">Tokenomics</Nav.Link>
                                <Nav.Link href="#token-allocation" className="item-nav">Token Allocation</Nav.Link>
                                <Nav.Link href="#team" className="item-nav">Team</Nav.Link>
                                <Nav.Link href="#roadmap" className="item-nav">Roadmap</Nav.Link>
                                <Nav.Link href="https://marketplace.aethr.world" className="item-nav">Marketplace</Nav.Link>
                                <Nav.Link href="https://docs.aethr.world" className="item-nav">Document</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </section>
                <section className="section-eco section fp-auto-height">
                    <div className='container have-cloud'>
                        <img src='/images/cloud1.png' className='cloud-top-left'></img>
                        <img src='/images/cloud1.png' className='cloud-top-right'></img>
                        <img src='/images/cloud1.png' className='cloud-top-center'></img>
                        <div className='row'>
                            <div className='col-md-4 z-index9'>
                                <div className='one-card-eco card-1'>
                                    <p className="title-card-eco">Build</p>
                                    <div className="wrap-image-card-eco">
                                        <img src="/images/build.png" alt="" />
                                    </div>
                                    <div className="content-card-eco">
                                        <p>Build your own team with your own strategy by using a wide range of NFT characters</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 z-index9'>
                                <div className='one-card-eco card-2'>
                                <p className="title-card-eco">Battle</p>
                                    <div className="wrap-image-card-eco">
                                        <img src="/images/battle.png" alt="" />
                                    </div>
                                    <div className="content-card-eco">
                                        <p>Travel through different planets, discover new lands and fight for valor</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 z-index9'>
                                <div className='one-card-eco card-3'>
                                    <p className="title-card-eco">Reward</p>
                                    <div className="wrap-image-card-eco">
                                        <img src="/images/reward.png" alt="" />
                                    </div>
                                    <div className="content-card-eco">
                                        <p>Win the battles and get different rewards including tokens & NFTs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section section-concept'>
                    <div className='container h-100 justify-content-center d-flex align-items-center'>
                        <div className='container-trailer-game'>
                            <div className='trailer-game'>
                                <img src="/images/pos2.png" alt="" className="img-trailer-left"/>
                                <img src="/images/pos3.png" alt="" className="img-trailer-right"/>
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
                            <Image src="/images/badge-character.png" alt="" width={530} height={156.65} />
                            <p className="badge-description cl-w description-character"> The continents were separated and aparted by a seal. The moment when the 8 planets lined up was the seal became the weakest. </p>
                        </div>
                        <Slider {...settings} className='slick-heros'>
                            {heros.map(function(hero, index){
                                return (
                                    <div className='wrapper-one-hero' key={index}> 
                                        <div className='one-hero'>
                                            <img src={hero['image-hero']} alt="" className='image-slick-hero'/>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                        <Slider {...settingSlide2}>
                            {heros.map(function(hero, index){
                                return (
                                    <div className="wrap-content-game-hero"  key={index}>
                                        <div className='container-concept-game'>
                                            <div className='concept-game'>
                                                <div className='show-concept'>
                                                    <div className='content-concept'>
                                                        <img src='/images/zeus1.png' alt="" className='img-concept1'></img>
                                                        <img src='/images/zues2.png' alt="" className='img-concept2'></img>
                                                        <img src='/images/zeus3.png' alt="" className='img-concept3'></img>
                                                    </div>
                                                    <span className='name-concept'>Zeus Concept</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="concept-hero">
                                            <img src={hero['image-hero']} alt="" className="detail-hero" />
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                        
                    </div>
                </section>
                <section className='section-gameplay section' id="gameplay">
                    <div className='container'>
                        <div className="wrap-badge-section mb-4">
                            <Image src="/images/badge-gameplay.png" alt="" width={342} height={111} />
                        </div>
                        <div className="wrap-badge-section">
                            <Image src="/images/badge-freeplay.png" alt="" width={290} height={93} />
                        </div>
                        <div>
                            <img src="/images/freeplay-map.png" alt="" className="w-100 mt-3 gameplay-map" />
                        </div>
                    </div>
                    <div className='container'>
                        <div className="wrap-badge-section mt-3">
                            <Image src="/images/badge-nftplay.png" alt="" width={281} height={111} />
                        </div>
                        <img src="/images/nftplay-map.png" alt="" className="w-100 mt-3 gameplay-map" />
                    </div>
                </section>
                <section className='section-roadmap section' id="roadmap">
                    <div className='container'>
                        <div className="wrap-badge-section mt-3">
                            <Image src="/images/badge-roadmap.png" alt="" width={500} height={448} />
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
                                    <p className="date-roadmap">January 2022</p>
                                    <div className="content-roadmap">
                                        <p>NFT Sale</p>
                                        <p>Game Alpha Test</p>
                                    </div>
                                    <img src="/images/end-road.png" alt="" />
                                </div>
                                <div className="item">
                                    <img src="/images/icrm3.png" alt="" />
                                    <p className="date-roadmap">March 2022</p>
                                    <div className="content-roadmap">
                                        <p>Game Release</p>
                                        <p>Staking</p>
                                    </div>
                                    <img src="/images/end-road.png" alt="" />
                                </div>
                                <div className="item">
                                    <img src="/images/icrm4.png" alt="" />
                                    <p className="date-roadmap">Q3/2022</p>
                                    <div className="content-roadmap">
                                        <p>Tournament Mode</p>
                                        <p>Special Events</p>
                                        <p></p>
                                    </div>
                                    <img src="/images/end-road.png" alt="" />
                                </div>
                                <div className="item">
                                    <img src="/images/icrm5.png" alt="" />
                                    <p className="date-roadmap">2023</p>
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
                                    <p className="date-roadmap">Q4/2021</p>
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
                                    <img src="/images/icrm7.png" alt="" />
                                    <p className="date-roadmap">February 2022</p>
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
                                    <img src="/images/icrm8.png" alt="" />
                                    <p className="date-roadmap">Q2/2022</p>
                                    <div className="content-roadmap">
                                        <p>PVP Mode </p>
                                        <p>World Chat</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="wrap-icon-end">
                                        <img src="/images/end-road.png" alt="" />
                                    </div>
                                    <img src="/images/icrm9.png" alt="" />
                                    <p className="date-roadmap">Q4/2022</p>
                                    <div className="content-roadmap">
                                        <p>Metaverse Land</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-tokenomics section" id="tokenomics">
                    <div className="container">
                        <div className="wrap-badge-section">
                            <Image src="/images/badge-tokenomic.png" alt="" width={345} height={130} />
                        </div>
                        <div className="wrap-tokenomic">
                            <div className="left-box">
                                <div className="item">
                                    <p className="title-item">BUY MYSTERY BOXES</p>
                                </div>
                                <div className="item">
                                    <p className="title-item">Marketplace Fees</p>
                                </div>
                                <div className="item">
                                    <p className="title-item">P2E Incentives</p>
                                </div>
                                <div className="item">
                                    <p className="title-item">Treasury Fund</p>
                                </div>
                                <div className="item">
                                    <p className="title-item">Staking</p>
                                </div>
                            </div>
                            <div className="wrap-center-box">
                                <img src="/images/arrowleft.png" alt="" className="arrowleft" />
                                <img src="/images/arrowcenter.png" alt="" className="arrowcenter" />
                                <div className="center-box">
                                    <div className="item-center">
                                        <p className="title-item">$ATH</p>
                                    </div>
                                    <div className="item-suply">
                                        <p className="title-item">BEP-20 TOKEN Limited Supply</p>
                                    </div>
                                </div>
                                <img src="/images/arrowcenter.png" alt="" className="arrowcenter" />
                                <img src="/images/arrowleft.png" alt="" className="arrowright" />
                            </div>
                            <div className="right-box">
                                <div className="item">
                                    <p className="title-item">Adventure</p>
                                </div>
                                <div className="item">
                                    <p className="title-item">PVP</p>
                                </div>
                                <div className="item">
                                    <p className="title-item">Upgrade</p>
                                </div>
                                <div className="item">
                                    <p className="title-item">Tournament</p>
                                </div>
                                <div className="item">
                                    <p className="title-item">Shop In-game</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-token-allocation section" id="token-allocation">
                    <div className="container">
                        <div className="wrap-badge-section">
                            <img src="/images/token-allocation.png" className="badge-w550" />
                        </div>
                        <div className="wrap-table">
                            <table>
                                <tr>
                                    <td className="title-table">Token name</td>
                                    <td className="title-table">$ATH</td>
                                    <td className="title-table">Total Supply</td>
                                    <td className="title-table">790,000,000</td>
                                    <td className="title-table">Initial Market Cap (Without Liquidity)</td>
                                    <td className="title-table">$1,058,600</td>
                                    <td className="vesting-table title-table"> </td>
                                </tr>
                                <tr>
                                    <td className="title-table"></td>
                                    <td className="title-table">Tokens</td>
                                    <td className="title-table">Token Price</td>
                                    <td className="title-table">Supply (%)</td>
                                    <td className="title-table">TGE Unlock</td>
                                    <td className="title-table">Token At TGE</td>
                                    <td className="vesting-table text-center">Vesting</td>
                                </tr>
                                <tr>
                                    <td className="title-table">Private Sale</td>
                                    <td>79,000,000</td>
                                    <td>$ 0.025</td>
                                    <td>10%</td>
                                    <td>6%</td>
                                    <td>4,740,000</td>
                                    <td className="vesting-table">TGE 6%, 2% at 4th week, 2% at 8th week then cliff for 1 month then vest linear daily in 12 months</td>
                                </tr>
                                <tr>
                                    <td className="title-table">IDO</td>
                                    <td>7,900,000</td>
                                    <td>$ 0.040</td>
                                    <td>1.0%</td>
                                    <td>25%</td>
                                    <td>1,975,000</td>
                                    <td className="vesting-table">TGE 25%, 1 months cliff, vest linear weekly in 3 months</td>
                                </tr>
                                <tr>
                                    <td className="title-table">Liquidity & Listing</td>
                                    <td>39,500,000</td>
                                    <td></td>
                                    <td>5.0%</td>
                                    <td>50%</td>
                                    <td>19,750,000</td>
                                    <td className="vesting-table">TGE 25%, 3 months cliff, 10% then 3 months cliff, vest linear in 12 months</td>
                                </tr>
                                <tr>
                                    <td className="title-table">Treasury Issuance</td>
                                    <td>150,100,000</td>
                                    <td></td>
                                    <td>19.0%</td>
                                    <td></td>
                                    <td></td>
                                    <td className="vesting-table">1 month cliff, Vest linear follow schedule in 36 months</td>
                                </tr>
                                <tr>
                                    <td className="title-table">P2E Incentives</td>
                                    <td>181,700,000</td>
                                    <td></td>
                                    <td>23.0%</td>
                                    <td></td>
                                    <td></td>
                                    <td className="vesting-table">Start vesting upon the game launch, 3% monthly</td>
                                </tr>
                                <tr>
                                    <td className="title-table">Advisors & Partners</td>
                                    <td>39,500,000</td>
                                    <td></td>
                                    <td>5.0%</td>
                                    <td></td>
                                    <td></td>
                                    <td className="vesting-table">12 months cliff, vest linear weekly in 24 months</td>
                                </tr>
                                <tr>
                                    <td className="title-table">Team</td>
                                    <td>158,000,000</td>
                                    <td></td>
                                    <td>20.0%</td>
                                    <td></td>
                                    <td></td>
                                    <td className="vesting-table">12 months cliff, vest linear weekly in 24 months</td>
                                </tr>
                                <tr>
                                    <td className="title-table">Marketing/Ecosystem Fund</td>
                                    <td>79,000,000</td>
                                    <td></td>
                                    <td>10.0%</td>
                                    <td></td>
                                    <td></td>
                                    <td className="vesting-table">1 month cliff,  15% then 3 months cliff, vest linear in 15 months</td>
                                </tr>
                                <tr>
                                    <td className="title-table">Development Fund</td>
                                    <td>55,300,000</td>
                                    <td></td>
                                    <td>7.0%</td>
                                    <td></td>
                                    <td></td>
                                    <td className="vesting-table">12 months cliff, vest linear weekly in 12 months</td>
                                </tr>
                                <tr className="last-row">
                                    <td className="title-table">TOTAL</td>
                                    <td className="title-table">790,000,000</td>
                                    <td></td>
                                    <td className="title-table">100%</td>
                                    <td></td>
                                    <td className="title-table">26,465,000</td>
                                    <td className="vesting-table"></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </section>
                <section className="section-core-team section" id="team">
                    <div className="container">
                        <div className="wrap-badge-section">
                            <img src="/images/badge-coreteam.png" className="badge-section badge-w550" />
                        </div>
                        <div className="wrap-core-team">
                            <div className="team-member">
                                <img src="/images/t1.png" alt="" />
                                <p className="name">Do Van Huy</p>
                                <p className="position">CEO</p>
                            </div>
                            <div className="team-member">
                                <img src="/images/t2.png" alt="" />
                                <p className="name">Nguyen Tuan Minh</p>
                                <p className="position">CTO</p>
                            </div>
                            <div className="team-member">
                                <img src="/images/t3.png" alt="" />
                                <p className="name">Vu Dinh Hung</p>
                                <p className="position">Data Analytics Lead</p>
                            </div>
                            <div className="team-member">
                                <img src="/images/t4.png" alt="" />
                                <p className="name">Tran Quang Tung</p>
                                <p className="position">Backend Developer Lead</p>
                            </div>
                            <div className="team-member">
                                <img src="/images/t5.png" alt="" />
                                <p className="name">Do Dinh Quang</p>
                                <p className="position"> Blockchain Developer Lead</p>
                            </div>
                            <div className="team-member">
                                <img src="/images/t6.png" alt="" />
                                <p className="name">Do Hai Ha</p>
                                <p className="position">Frontend Developer Lead</p>
                            </div>
                            <div className="team-member">
                                <img src="/images/t7.png" alt="" />
                                <p className="name">Khuat Minh Son</p>
                                <p className="position">3D Art Lead</p>
                            </div>
                            <div className="team-member">
                                <img src="/images/t8.png" alt="" />
                                <p className="name">Vu Thi Huyen</p>
                                <p className="position">2D Art Lead</p>
                            </div>
                            <div className="team-member">
                                <img src="/images/t9.png" alt="" />
                                <p className="name">Nguyen Xuan Minh</p>
                                <p className="position">Animation </p>
                            </div>
                            <div className="team-member">
                                <img src="/images/t10.png" alt="" />
                                <p className="name">Nguyen Nhon Duy</p>
                                <p className="position">Investor Relationship Director</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section fp-auto-height section-community">
                    <div className="badge-community-custom">
                        <p>Community</p>
                    </div>
                    <div className="container">
                        <div className="wrap-all-community">
                            <div className="one-item">
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/play.png" alt="" />
                                </a>
                            </div>
                            <div className="one-item">
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/tele.png" alt="" />
                                </a>
                            </div>
                            <div className="one-item">
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/flickr.png" alt="" />
                                </a>
                            </div>
                            <div className="one-item">
                                <a href="https://www.youtube.com/channel/UCchd1Wc4hj-njQBxeASTHvw" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/youtube.png" alt="" />
                                </a>
                            </div>
                            <div className="one-item">
                                <a href="https://twitter.com/AethrWorld" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/twitter.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>                           
                </section>
                <section className="footer section fp-auto-height">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 text-center wrap-logo-footer">
                                <img src="/images/logo.png" alt="Logo Aethr" className="logo-footer" />
                                <p>Copyright 2021 by Gapu Studio</p>
                            </div>
                            <div className="col-md-3">
                                <h3 className="title-footer">About</h3>
                                <img src="/images/3dot.png" alt="" />
                                <a className="link-footer" href="#">White Paper</a>
                                <a className="link-footer" href="#">News</a>
                                <a className="link-footer" href="https://docs.aethr.world">Document </a>
                                <a className="link-footer" href="#">Marketplace</a>

                            </div>
                            <div className="col-md-3">
                                <h3 className="title-footer">Info </h3>
                                <img src="/images/3dot.png" alt="" />
                                <a className="link-footer" href="https://docs.aethr.world/term-and-policy/terms-of-use">Terms of Use</a>
                                <a className="link-footer" href="https://docs.aethr.world/term-and-policy/privacy-policy">Privacy Policy</a>
                                <a className="link-footer" href="https://docs.aethr.world/term-and-policy/risk-disclosure-statement">Risk Disclosure</a>
                                <a className="link-footer" href="#">Coinmarketcap </a>
                                <a className="link-footer" href="#">Coingecko </a>
                            </div>
                            <div className="col-md-3">
                                <h3 className="title-footer">Social </h3>
                                <img src="/images/3dot.png" alt="" />
                                <div className="wrap-social">
                                    <a className="link-footer" href="#">
                                        <img src="/images/i-twitter.png" alt="" />
                                    </a>
                                    <a className="link-footer" href="#">
                                        <img src="/images/i-tele.png" alt="" />
                                    </a>
                                    <a className="link-footer" href="#">
                                        <img src="/images/i-discord.png" alt="" />
                                    </a>
                                    <a className="link-footer" href="#">
                                        <img src="/images/i-redit.png" alt="" />
                                    </a>
                                    <a className="link-footer" href="#">
                                        <img src="/images/i-youtube.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
};
