import React, { useEffect, useState } from 'react';
import Crad from '../../component/UI/Card/Card';
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

function Review(props) {
    const [rData, setRData] = useState([]);

    const getReviewData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments")
        const data = await response.json();

        setRData(data);

    }
    useEffect(() => {
        getReviewData();
    }, [])

    // console.log(data);

    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <div className="section-title"><h2>Reviews</h2></div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Navigation]}
                    navigation={true}
                    className="mySwiper"
                >
                    {
                        rData.map((v, i) => {
                            return (
                                <SwiperSlide>
                                    <Link to={"/reviewlink/" + v.id}>
                                    <Crad
                                        id={v.id}
                                        title={v.name.substring(0,30)}
                                        subtitle={v.body.substring(0,150)}
                                    />
                                    </Link>
                                </SwiperSlide>

                            )
                        })
                    }
                </Swiper>

            </div>
        </section>
    );
}

export default Review;