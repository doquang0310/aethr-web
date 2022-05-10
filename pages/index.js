import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Slider from "react-slick";
import { Container, Navbar, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import Image from "next/image";
export function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img src="/images/next-icon.png" alt="" onClick={onClick} className={className} style={{ ...style, height: "87px", width: "65px", right: "-100px" }} />
    );
}

export function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img src="/images/prev-icon.png" alt="" onClick={onClick} className={className} style={{ ...style, height: "87px", width: "65px", left: "-100px" }} />
    );
}
export function NextArrowMobile(props) {
    const { className, style, onClick } = props;
    return (
        <img src="/images/next-icon.png" alt="" onClick={onClick} className={className} style={{ ...style, height: "87px", width: "65px", right: "-10px" }} />
    );
}

export function PrevArrowMobile(props) {
    const { className, style, onClick } = props;
    return (
        <img src="/images/prev-icon.png" alt="" onClick={onClick} className={className} style={{ ...style, height: "87px", width: "65px", left: "-10px" }} />
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
                'name-hero': 'God',
                'image-hero': '/images/character/zues_img.png',
                'video-hero': '/images/character/zues.webm',
                'banner-hero': '/images/character/zues_concept.PNG'
            },
            {
                'name-hero': 'Human',
                'image-hero': '/images/character/super_img.png',
                'video-hero': '/images/character/super.webm',
                'banner-hero': '/images/character/super_concept.PNG'
            },
            {
                'name-hero': 'Machine',
                'image-hero': '/images/character/robot_img.png',
                'video-hero': '/images/character/robot.webm',
                'banner-hero': '/images/character/robot_concept.PNG'
            },
            {
                'name-hero': 'Dragon',
                'image-hero': '/images/character/dragon_img.png',
                'video-hero': '/images/character/dragon.webm',
                'banner-hero': '/images/character/dragon_concept.png'
            },
            {
                'name-hero': 'Alien',
                'image-hero': '/images/character/alien_img.png',
                'video-hero': '/images/character/alien.webm',
                'banner-hero': '/images/character/alien_concept.png'
            },
        ];
        var settingsMobile = {
            nextArrow: <NextArrowMobile />,
            prevArrow: <PrevArrowMobile />,
        };
        var settings = {
            asNavFor: this.state.nav1,
            ref: slider => (this.slider2 = slider),
            swipeToSlide: true,
            centerMode: true,
            centerPadding: '0px',
            arrows: true,
            infinite: true,
            initialSlide: 0,
            slidesToShow: 5,
            focusOnSelect: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        arrows: true,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        slidesToShow: 1
                    }
                }
            ]
        };
        var settingSlide2 = {
            asNavFor: this.state.nav2,
            ref: slider => (this.slider1 = slider),
            arrows: false
        }
        return (
            <div id="fullpage-wrapper">
                <section className='section-hero section' id="home">
                    <video playsInline autoPlay loop muted className="video-banner">
                        <source type="video/webm" src="/videos/banner.webm" />
                    </video>
                    <img src='/images/cloud5.png' className='cloud-banner'></img>
                    <Navbar expand={false} fixed="top" className="nav-mobile">
                        <Container fluid>
                            <Navbar.Brand href="#">
                                <video playsInline autoPlay loop muted width={165}>
                                    <source type="video/webm" src="/images/logo.webm" />
                                </video>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="offcanvasNavbar" />
                            <Navbar.Offcanvas
                                id="offcanvasNavbar"
                                aria-labelledby="offcanvasNavbarLabel"
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body className="nav-mobie-body">
                                    <Nav className="justify-content-end flex-grow-1 pe-3 main-nav">
                                        <Nav.Link href="#home" className="item-nav shadow-custom">Home</Nav.Link>
                                        <Nav.Link href="#gameplay" className="item-nav shadow-custom">Gameplay</Nav.Link>
                                        <Nav.Link href="#tokenomics" className="item-nav shadow-custom">Tokenomics</Nav.Link>
                                        <Nav.Link href="#token-allocation" className="item-nav shadow-custom">Token Allocation</Nav.Link>
                                        <Nav.Link href="#team" className="item-nav shadow-custom">Team</Nav.Link>
                                        <Nav.Link href="#roadmap" className="item-nav shadow-custom">Roadmap</Nav.Link>
                                        <Nav.Link href="https://marketplace.aethr.world" className="item-nav shadow-custom">Marketplace</Nav.Link>
                                        <Nav.Link href="https://docs.aethr.world" className="item-nav shadow-custom">Document</Nav.Link>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                    <Navbar fixed="top" className="nav-pc">
                        <Container>
                            <div className="main-header">
                                <Navbar.Brand href="#">
                                    <video playsInline autoPlay loop muted width={165}>
                                        <source type="video/webm" src="/images/logo.webm" />
                                    </video>
                                </Navbar.Brand>

                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto main-nav">
                                        <Nav.Link href="#home" className="item-nav shadow-custom">Home</Nav.Link>
                                        <Nav.Link href="#gameplay" className="item-nav shadow-custom">Gameplay</Nav.Link>
                                        <Nav.Link href="#tokenomics" className="item-nav shadow-custom">Tokenomics</Nav.Link>
                                        <Nav.Link href="#token-allocation" className="item-nav shadow-custom">Token Allocation</Nav.Link>
                                        <Nav.Link href="#team" className="item-nav shadow-custom">Team</Nav.Link>
                                        <Nav.Link href="#roadmap" className="item-nav shadow-custom">Roadmap</Nav.Link>
                                        <Nav.Link href="https://marketplace.aethr.world" className="item-nav shadow-custom">Marketplace</Nav.Link>
                                        <Nav.Link href="https://docs.aethr.world" className="item-nav shadow-custom">Document</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            </div>
                        </Container>
                    </Navbar>
                </section>
                <section className="section-eco section fp-auto-height">
                    <div className='container have-cloud'>
                        <Slider  {...settingsMobile} className="show-mobile z-index9">
                            <div className='col-md-6 col-12 col-lg-4 z-index9'>
                                <div className='one-card-eco card-1'>
                                    <p className="title-card-eco shadow-custom">Build</p>
                                    <div className="wrap-image-card-eco">
                                        <img src="/images/build.png" alt="" />
                                    </div>
                                    <div className="content-card-eco">
                                        <p>Build your own team with your own strategy by using a wide range of NFT characters</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-12 col-lg-4 z-index9'>
                                <div className='one-card-eco card-2'>
                                    <p className="title-card-eco shadow-custom">Battle</p>
                                    <div className="wrap-image-card-eco">
                                        <img src="/images/battle.png" alt="" />
                                    </div>
                                    <div className="content-card-eco">
                                        <p>Travel through different planets, discover new lands and fight for valor</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-12 col-lg-4 z-index9'>
                                <div className='one-card-eco card-3'>
                                    <p className="title-card-eco shadow-custom">Reward</p>
                                    <div className="wrap-image-card-eco">
                                        <img src="/images/reward.png" alt="" />
                                    </div>
                                    <div className="content-card-eco">
                                        <p>Win the battles and get different rewards including tokens & NFTs</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                        <div className="show-md">
                            <div className='row mobile-center'>
                                <div className='col-md-6 col-12 col-lg-4 z-index9'>
                                    <div className='one-card-eco card-1'>
                                        <p className="title-card-eco shadow-custom">Build</p>
                                        <div className="wrap-image-card-eco">
                                            <img src="/images/build.png" alt="" />
                                        </div>
                                        <div className="content-card-eco">
                                            <p>Build your own team with your own strategy by using a wide range of NFT characters</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 col-12 col-lg-4 z-index9'>
                                    <div className='one-card-eco card-2'>
                                        <p className="title-card-eco shadow-custom">Battle</p>
                                        <div className="wrap-image-card-eco">
                                            <img src="/images/battle.png" alt="" />
                                        </div>
                                        <div className="content-card-eco">
                                            <p>Travel through different planets, discover new lands and fight for valor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 col-12 col-lg-4 z-index9'>
                                    <div className='one-card-eco card-3'>
                                        <p className="title-card-eco shadow-custom">Reward</p>
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
                    </div>
                </section>
                <section className='section section-concept'>
                    <div className='container h-100 justify-content-center d-flex align-items-center'>
                        <div className='container-trailer-game'>
                            <div className='trailer-game'>
                                <video playsInline autoPlay loop muted width={400} className="img-trailer-left">
                                    <source type="video/webm" src="/images/character/zues.webm" />
                                </video>
                                <video playsInline autoPlay loop muted width={250} className="img-trailer-right">
                                    <source type="video/webm" src="/images/character/robot.webm" />
                                </video>
                                {/* <img src="/images/pos2.png" alt="" className="img-trailer-left"/> */}
                                {/* <img src="/images/pos3.png" alt="" className="img-trailer-right"/> */}
                                <div className='show-trailer'>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/YTSWRuAN5BU" title="AETHR Official Trailer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                            {heros.map(function (hero, index) {
                                return (
                                    <div className='wrapper-one-hero' key={index}>
                                        <div className='one-hero'>
                                            <img src={hero['image-hero']} alt="" className='image-slick-hero' />
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                        <Slider {...settingSlide2}>
                            {heros.map(function (hero, index) {
                                return (
                                    <div className="wrap-content-game-hero" key={index}>
                                        <div className='concept-game'>
                                            <img src={hero['banner-hero']} />
                                        </div>
                                        <div className="concept-hero">
                                            <video playsInline autoPlay loop muted className="detail-hero" >
                                                <source type="video/webm" src={hero['video-hero']} />
                                            </video>
                                            <div className="name-hero">
                                                <p>{hero['name-hero']}</p>
                                            </div>
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
                        <Slider  {...settingsMobile} className="show-mobile z-index9 roadmap-mobile">
                            <div className="item">
                                <img src="/images/icrm1.png" alt="" />
                                <p className="date-roadmap shadow-custom">Q3/2021</p>
                                <div className="content-roadmap">
                                    <p className="shadow-custom">Game design</p>
                                    <p className="shadow-custom">Character Concept</p>
                                    <p className="shadow-custom">Business Model</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src="/images/icrm6.png" alt="" />
                                <p className="date-roadmap">Q4/2021</p>
                                <div className="content-roadmap">
                                    <p className="shadow-custom">Private Sales & Partnerships NFT</p>
                                    <p className="shadow-custom">Development Smart Contract</p>
                                    <p className="shadow-custom">Development Social Channels</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src="/images/icrm2.png" alt="" />
                                <p className="date-roadmap">Q1/2022</p>
                                <div className="content-roadmap">
                                    <p className="shadow-custom">Q1/22: Alpha testing</p>
                                    <p className="shadow-custom">Q2/22: Public testing</p>
                                    <p className="shadow-custom">Q3/22: Guild Dashboard, Starter Pack Sale</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src="/images/icrm7.png" alt="" />
                                <p className="date-roadmap">Q2/2022</p>
                                <div className="content-roadmap">
                                    <p className="shadow-custom">Token Launch</p>
                                    <p className="shadow-custom">Game Release</p>
                                    <p className="shadow-custom">Season 1</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src="/images/icrm3.png" alt="" />
                                <p className="date-roadmap">Q3/2022</p>
                                <div className="content-roadmap">
                                    <p className="shadow-custom">New NFT heroes</p>
                                    <p className="shadow-custom">Season2</p>
                                    <p className="shadow-custom">PVP Mode</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src="/images/icrm8.png" alt="" />
                                <p className="date-roadmap">Q4/2022</p>
                                <div className="content-roadmap">
                                    <p className="shadow-custom">Tournament Mode </p>
                                </div>
                            </div>
                            <div className="item">
                                <img src="/images/icrm5.png" alt="" />
                                <p className="date-roadmap">2023</p>
                                <div className="content-roadmap">
                                    <p className="shadow-custom">Multi - chain</p>
                                    <p className="shadow-custom">NFT Crosschain</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src="/images/icrm9.png" alt="" />
                                <p className="date-roadmap">2024</p>
                                <div className="content-roadmap">
                                    <p className="shadow-custom">Metaverse</p>
                                </div>
                            </div>

                        </Slider>
                        <div className="show-md">
                            <div className="wrap-roadmap">
                                <img src="/images/roadmap.png" alt="" className="w-100" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-tokenomics section-token-allocation section" id="tokenomics">
                    <img src="/images/cloud1.png" alt="" className="cloud-animation cloud-pos1" />
                    <img src="/images/cloud1.png" alt="" className="cloud-animation cloud-pos2" />

                    <img src="/images/cloud1.png" alt="" className="cloud-animation cloud-pos3" />

                    <div className="container">
                        <div className="wrap-badge-section">
                            <Image src="/images/badge-tokenomic.png" alt="" width={345} height={130} />
                        </div>
                        <div className="wrap-tokenomic">
                            <div className="left-box">
                                <div className="item">
                                    <p className="title-item shadow-custom">BUY MYSTERY BOXES</p>
                                </div>
                                <div className="item">
                                    <p className="title-item shadow-custom">Marketplace Fees</p>
                                </div>
                                <div className="item">
                                    <p className="title-item shadow-custom">P2E Incentives</p>
                                </div>
                                <div className="item">
                                    <p className="title-item shadow-custom">Treasury Fund</p>
                                </div>
                                <div className="item">
                                    <p className="title-item shadow-custom">Staking</p>
                                </div>
                            </div>
                            <div className="wrap-center-box">
                                <img src="/images/arrowleft.png" alt="" className="arrowleft" />
                                <img src="/images/arrowcenter.png" alt="" className="arrowcenter" />
                                <div className="center-box">
                                    <div className="item-center">
                                        <p className="title-item shadow-custom">$ATH</p>
                                    </div>
                                    <div className="item-suply">
                                        <p className="title-item shadow-custom">BEP-20 TOKEN Limited Supply</p>
                                    </div>
                                </div>
                                <img src="/images/arrowcenter.png" alt="" className="arrowcenter" />
                                <img src="/images/arrowleft.png" alt="" className="arrowright" />
                            </div>
                            <div className="right-box">
                                <div className="item">
                                    <p className="title-item shadow-custom">Adventure</p>
                                </div>
                                <div className="item">
                                    <p className="title-item shadow-custom">PVP</p>
                                </div>
                                <div className="item">
                                    <p className="title-item shadow-custom">Upgrade</p>
                                </div>
                                <div className="item">
                                    <p className="title-item shadow-custom">Tournament</p>
                                </div>
                                <div className="item">
                                    <p className="title-item shadow-custom">Shop In-game</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container" id="token-allocation">
                        <div className="wrap-badge-section">
                            <Image src="/images/token-allocation.png" alt="" width={550} height={144} />

                        </div>
                        <div className="show-mobile">
                            <Image src='/images/token-allocation-map.png' width={1120} height={761} />
                        </div>
                        <div className="show-md">
                            <div className="wrap-table">
                                <table>
                                    <tr>
                                        <td className="title-table">Token name</td>
                                        <td className="title-table">$ATH</td>
                                        <td className="title-table">Total Supply</td>
                                        <td className="title-table">790,000,000</td>
                                        <td className="title-table">Initial Market Cap (Without Liquidity)</td>
                                        <td className="title-table">$610,800</td>
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
                                        <td className="title-table">Angel Investors</td>
                                        <td>39,500,000</td>
                                        <td>$ 0.025</td>
                                        <td>5%</td>
                                        <td>6%</td>
                                        <td>2,370,000</td>
                                        <td className="vesting-table">TGE 6%, 2% at 4th week, 2% at 8th week then vest linear weekly in 12 months</td>
                                    </tr>
                                    <tr>
                                        <td className="title-table">Fair Launch</td>
                                        <td>5,000,000</td>
                                        <td>$ 0.04</td>
                                        <td>0.6%</td>
                                        <td>100%</td>
                                        <td>5,000,000</td>
                                        <td className="vesting-table">TGE 100%</td>
                                    </tr>
                                    <tr>
                                        <td className="title-table">Liquidity & Listing</td>
                                        <td>39,500,000</td>
                                        <td></td>
                                        <td>5%</td>
                                        <td>20%</td>
                                        <td>7,900,000</td>
                                        <td className="vesting-table">TGE 20%, 3 months cliff, 10% then 3 months cliff, vest linear in 12 months</td>
                                    </tr>
                                    <tr>
                                        <td className="title-table">Gaming Issuance</td>
                                        <td>181,700,000</td>
                                        <td></td>
                                        <td>25%</td>
                                        <td></td>
                                        <td></td>
                                        <td className="vesting-table">Vest after launching, follow schedule in 36 months</td>
                                    </tr>
                                    <tr>
                                        <td className="title-table">Staking Issuance</td>
                                        <td>150,100,000</td>
                                        <td></td>
                                        <td>21%</td>
                                        <td></td>
                                        <td></td>
                                        <td className="vesting-table">6 months cliff, vest follow schedule in 36 months</td>
                                    </tr>
                                    <tr>
                                        <td className="title-table">Advisors & Partners</td>
                                        <td>39,500,000</td>
                                        <td></td>
                                        <td>5%</td>
                                        <td></td>
                                        <td></td>
                                        <td className="vesting-table">12 months cliff, vest linear weekly in 24 months</td>
                                    </tr>
                                    <tr>
                                        <td className="title-table">Team</td>
                                        <td>158,000,000</td>
                                        <td></td>
                                        <td>20%</td>
                                        <td></td>
                                        <td></td>
                                        <td className="vesting-table">12 months cliff, vest linear weekly in 24 months</td>
                                    </tr>
                                    <tr>
                                        <td className="title-table">Marketing/Ecosystem Fund</td>
                                        <td>79,000,000</td>
                                        <td></td>
                                        <td>10%</td>
                                        <td></td>
                                        <td></td>
                                        <td className="vesting-table">  01 month cliff,  then unlock 30%, then 1.25% each month</td>
                                    </tr>
                                    <tr>
                                        <td className="title-table">Development Fund</td>
                                        <td>55,300,000</td>
                                        <td></td>
                                        <td>8.4%</td>
                                        <td></td>
                                        <td></td>
                                        <td className="vesting-table">03 months cliff, then vest linear monthly in 36 months</td>
                                    </tr>
                                    <tr className="last-row">
                                        <td className="title-table">TOTAL</td>
                                        <td className="title-table">790,000,000</td>
                                        <td></td>
                                        <td className="title-table">100%</td>
                                        <td></td>
                                        <td className="title-table">15,270,000</td>
                                        <td className="vesting-table"></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-core-team section" id="team">
                    <div className="container">
                        <div className="wrap-badge-section">
                            <img src="/images/badge-coreteam.png" className="badge-section badge-w550" alt="" />
                        </div>
                        <Slider  {...settingsMobile} className="show-mobile z-index9 wrap-core-team">
                            <div className="team-member">
                                <img src="/images/t1.png" alt="" />
                                <p className="name shadow-custom">Do Van Huy</p>
                                <p className="position shadow-custom">CEO</p>
                            </div>
                            <div className="team-member">
                                <img src="/images/t2.png" alt="" />
                                <p className="name shadow-custom">Nguyen Tuan Minh</p>
                                <p className="position shadow-custom">CTO</p>
                            </div>
                            <div className="team-member">
                                <img src="/images/t3.png" alt="" />
                                <p className="name shadow-custom">Vu Dinh Hung</p>
                                <p className="position shadow-custom">Data Analytics Lead</p>
                            </div>
                            <div className="team-member">
                                <img src="/images/t4.png" alt="" />
                                <p className="name shadow-custom">Pham Thanh Tung</p>
                                <p className="position shadow-custom">Backend Developer Lead</p>
                            </div>
                            <div className="team-member">
                                <img src="/images/t5.png" alt="" />
                                <p className="name shadow-custom">Do Dinh Quang</p>
                                <p className="position shadow-custom"> Blockchain Developer Lead</p>
                            </div>
                            <div className="team-member">
                                <img src="/images/t6.png" alt="" />
                                <p className="name shadow-custom">Do Hai Ha</p>
                                <p className="position shadow-custom">Frontend Developer Lead</p>
                            </div>
                            <div className="team-member">
                                <img src="/images/t7.png" alt="" />
                                <p className="name shadow-custom">Khuat Minh Son</p>
                                <p className="position shadow-custom">3D Art Lead</p>
                            </div>
                            <div className="team-member">
                                <img src="/images/t8.png" alt="" />
                                <p className="name shadow-custom">Vu Thi Huyen</p>
                                <p className="position shadow-custom">2D Art Lead</p>
                            </div>
                            <div className="team-member">
                                <img src="/images/t9.png" alt="" />
                                <p className="name shadow-custom">Nguyen Xuan Minh</p>
                                <p className="position shadow-custom">Animation Lead</p>
                            </div>
                            <div className="team-member">
                                <img src="/images/t10.png" alt="" />
                                <p className="name shadow-custom">Nguyen Nhon Duy</p>
                                <p className="position shadow-custom">Investor Relationship Director</p>
                            </div>
                        </Slider>
                        <div className="show-md">
                            <div className="wrap-core-team">
                                <div className="team-member">
                                    <img src="/images/t1.png" alt="" />
                                    <p className="name shadow-custom">Do Van Huy</p>
                                    <p className="position shadow-custom">CEO</p>
                                </div>
                                <div className="team-member">
                                    <img src="/images/t2.png" alt="" />
                                    <p className="name shadow-custom">Nguyen Tuan Minh</p>
                                    <p className="position shadow-custom">CTO</p>
                                </div>
                                <div className="team-member">
                                    <img src="/images/t5.png" alt="" />
                                    <p className="name shadow-custom">Do Dinh Quang</p>
                                    <p className="position shadow-custom"> Blockchain Developer Lead</p>
                                </div>
                                <div className="team-member">
                                    <img src="/images/t6.png" alt="" />
                                    <p className="name shadow-custom">Do Hai Ha</p>
                                    <p className="position shadow-custom">Frontend Developer Lead</p>
                                </div>
                                <div className="team-member">
                                    <img src="/images/t7.png" alt="" />
                                    <p className="name shadow-custom">Khuat Minh Son</p>
                                    <p className="position shadow-custom">3D Art Lead</p>
                                </div>
                                <div className="team-member">
                                    <img src="/images/t8.png" alt="" />
                                    <p className="name shadow-custom">Vu Thi Huyen</p>
                                    <p className="position shadow-custom">2D Art Lead</p>
                                </div>
                                <div className="team-member">
                                    <img src="/images/t9.png" alt="" />
                                    <p className="name shadow-custom">Nguyen Xuan Minh</p>
                                    <p className="position shadow-custom">Animation Lead</p>
                                </div>
                                <div className="team-member">
                                    <img src="/images/t10.png" alt="" />
                                    <p className="name shadow-custom">Nguyen Nhon Duy</p>
                                    <p className="position shadow-custom">Investor Relationship Director</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section fp-auto-height section-community">
                    <div className="badge-community-custom">
                        <p className="shadow-custom">Community</p>
                    </div>
                    <div className="container">
                        <div className="wrap-all-community">
                            <div className="one-item">
                                <a href="https://discord.io/aethrworld" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/play.png" alt="Discord" />
                                </a>
                            </div>
                            <div className="one-item">
                                <a href="https://t.me/aethrworld" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/tele.png" alt="Telegram" />
                                </a>
                            </div>
                            <div className="one-item">
                                <a href="https://medium.com/aethr-world/" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/flickr.png" alt="Medium" />
                                </a>
                            </div>
                            <div className="one-item">
                                <a href="https://www.youtube.com/channel/UCchd1Wc4hj-njQBxeASTHvw" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/youtube.png" alt="Youtube" />
                                </a>
                            </div>
                            <div className="one-item">
                                <a href="https://twitter.com/AethrWorld" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/twitter.png" alt="Twitter" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="footer section fp-auto-height">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-12 col-lg-3 text-center wrap-logo-footer">
                                <video playsInline autoPlay loop muted width={287}>
                                    <source type="video/webm" src="/images/logo.webm" />
                                </video>
                                <p className="shadow-custom">Copyright @2021 by AETHR WORLD</p>
                            </div>
                            <div className="col-md-6 col-12 col-sm-6 col-lg-3 one-col-footer">
                                <h3 className="title-footer">About</h3>
                                <img src="/images/3dot.png" alt="" />
                                <a className="link-footer" rel="noopener noreferrer" target="_blank" href="https://medium.com/aethr-world/">News</a>
                                <a className="link-footer" rel="noopener noreferrer" target="_blank" href="https://docs.aethr.world">Document </a>
                                <a className="link-footer" href="#">Marketplace</a>

                            </div>
                            <div className="col-md-6 col-12 col-sm-6 col-lg-3 one-col-footer">
                                <h3 className="title-footer">Info </h3>
                                <img src="/images/3dot.png" alt="" />
                                <a className="link-footer" rel="noopener noreferrer" target="_blank" href="https://docs.aethr.world/term-and-policy/terms-of-use">Terms of Use</a>
                                <a className="link-footer" rel="noopener noreferrer" target="_blank" href="https://docs.aethr.world/term-and-policy/privacy-policy">Privacy Policy</a>
                                <a className="link-footer" rel="noopener noreferrer" target="_blank" href="https://docs.aethr.world/term-and-policy/risk-disclosure-statement">Risk Disclosure</a>
                            </div>
                            <div className="col-md-6 col-12 col-lg-3 one-col-footer">
                                <h3 className="title-footer">Social </h3>
                                <img src="/images/3dot.png" alt="" />
                                <div className="wrap-social">
                                    <a className="link-footer" href="https://twitter.com/AethrWorld" rel="noopener noreferrer" target="_blank">
                                        <img src="/images/i-twitter.png" alt="" />
                                    </a>
                                    <a className="link-footer" href="https://t.me/aethrworld" rel="noopener noreferrer" target="_blank">
                                        <img src="/images/i-tele.png" alt="" />
                                    </a>
                                    <a className="link-footer" href="https://discord.io/aethrworld" rel="noopener noreferrer" target="_blank">
                                        <img src="/images/i-discord.png" alt="" />
                                    </a>
                                    <a className="link-footer" href="https://www.youtube.com/channel/UCchd1Wc4hj-njQBxeASTHvw" rel="noopener noreferrer" target="_blank">
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
