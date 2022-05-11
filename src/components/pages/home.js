import React, { useState } from "react";
import SliderMain from "../components/SliderMain";
import FeatureBox from "../components/FeatureBox";
import CarouselCollection from "../components/carousel/CarouselCollection";
import Catgor from "../components/carousel/Catgor";

import DashboardTable from "../components/dashboard";
// import Partner from "../components/partner";

const Home = () => {
    const [viewstyle, setViewStyle] = useState({ display: "none" });

    const allview = () => {
        setViewStyle({ display: "inline-block" });
    };

    return (
        <div className="dashboard">
            <section className="jumbotron breadcumb no-bg h-vh">
                <SliderMain />
            </section>

            <div
                data-aos="zoom-in"
                data-aos-anchor-placement="top-center"
                data-aos-once={true}
            >
                <section className="container no-top no-bottom">
                    <FeatureBox />
                </section>
            </div>

            <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-once={true}
            >
                <section className="no-bottom" style={{ textAlign: "center" }}>
                    <h1 className="black">Built On Astarcasino</h1>
                    <div className="row">
                        <div className="col-lg-12">
                            <CarouselCollection />
                        </div>
                    </div>
                </section>
            </div>


            <div className="background-2">
                <div
                    data-aos="fade-left"
                    data-aos-anchor-placement="top-center"
                    data-aos-once={true}
                >
                    <section className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <h6 className="">
                                    <span className="h1 black">Astra Casino</span>
                                </h6>
                                <h1 className="text-uppercase black">Play Now</h1>
                                <div className="spacer-10" />
                                <span
                                    className="btn-main lead"
                                    onClick={() => allview()}
                                >
                                    <span>All Games</span>&nbsp;&nbsp;
                                    <i className="arrow_right_alt" />
                                </span>
                                <div className="spacer-20" />
                            </div>
                            <div className="col-lg-7">
                                <Catgor viewstyle={viewstyle} />
                            </div>
                        </div>
                    </section>
                </div>

                <div
                    data-aos="fade-right"
                    data-aos-anchor-placement="top-center"
                    data-aos-once={true}
                >
                    <section className="container no-bottom">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <img
                                    src="./assets/coin.png"
                                    alt=""
                                    style={{ width: "100%" }}
                                />
                            </div>
                            <div className="col-md-6">
                                <h6 className="">
                                    <span className="text-uppercase h1 black">
                                        Astar Casino
                                    </span>
                                </h6>
                                <h1 className="black">Powerful Token</h1>
                                <p className="black">
                                    We are building the token that will power the
                                    future of the interactive entertainment industry
                                </p>
                            </div>

                        </div>
                    </section>
                </div>
            </div>

            <section className="container no-bottom">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="text-center">
                            <div
                                data-aos="fade-down"
                                data-aos-anchor-placement="top-center"
                                data-aos-once={true}
                            >
                                <h2 className="black">Dashboard</h2>
                                <div className="small-border"></div>
                                <DashboardTable />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer-padding"></div>


            {/* <Partner /> */}
        </div>
    );
};

export default Home;
