import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import cruiseData from "../../data/cruise";
import isTextMatched from "../../utils/isTextMatched";

const Cruise3 = ({underEvents}) => {
  function getPreviousDay(dateString) {
    // Parse the input date string
    const date = new Date(dateString);
    
    // Subtract one day (24 hours)
    date.setDate(date.getDate() - 1);
    
    // Format the date to YYYY-MM-DD
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".js-popular-car-next",
          prevEl: ".js-popular-car-prev",
        }}
        pagination={{
          el: ".js-car-pag_active",
          clickable: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {underEvents?.map((item) => (
          <SwiperSlide key={item.Id}>
            <div
              key={item?.Id}
              data-aos="fade"
            >
              <Link
                href={`/event/tickets/${item.Text1}/${getPreviousDay(item?.ExpirationDate)}/${item?.Text2}`}
                className="cruiseCard -type-1 rounded-4 "
              >
                <div className="cruiseCard__image position-relative">
                  <div className="carCard__image">
                    <div className="cardImage ratio ratio-6:5">
                      <div className="cardImage__content custom_inside-slider">
                        <Swiper
                          className="mySwiper"
                          modules={[Pagination, Navigation]}
                          pagination={{
                            clickable: true,
                          }}
                          navigation={true}
                        >
                        
                            <SwiperSlide >
                              <Image
                                width={300}
                                height={300}
                                className="rounded-4 col-12 js-lazy"
                                src={item.ImageUrl}
                                alt="image"
                              />
                            </SwiperSlide>
                      
                        </Swiper>
                      </div>
                    </div>
                    {/* End cartImage */}

        

             
                  </div>

                </div>
                {/* End .tourCard__image */}

                <div className="cruiseCard__content mt-10">
            
                  <h4 className="cruiseCard__title text-dark-1 text-18 lh-16 fw-500">
                    <span>{item?.Name}</span>
                  </h4>
                  <p className="text-light-1 lh-14 text-14 mt-5" />
                  <div className="row y-gap-10 justify-between items-center">
                    <div className="col-auto">
                      <div className="text-14 text-dark-1 fw-500">
                        Date
                      </div>
                      <div className="text-14 text-light-1">
                      {getPreviousDay(item?.ExpirationDate)}
                        </div>
                    </div>
                    <div className="col-auto">
                      <div className="text-14 text-dark-1 fw-500">City</div>
                      <div className="text-14 text-light-1">{item.Text2}</div>
                    </div>
                 
                  </div>
                  {/* End .row */}

                  <div className="row y-gap-20 justify-between items-center pt-5">
                  
                    <div className="col-auto">
                      <div className="text-14 text-light-1">
                        From{" "}
                        <span className="text-16 fw-500 text-dark-1">
                          US${item?.Money2}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* End .row */}
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="d-flex x-gap-15 items-center justify-center pt-0 sm:pt-0">
        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-left-hover js-popular-car-prev">
            <i className="icon icon-arrow-left" />
          </button>
        </div>
        {/* End arrow prev */}

        <div className="col-auto">
          <div className="pagination -dots text-border js-car-pag_active" />
        </div>
        {/* End arrow pagination */}

        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-right-hover js-popular-car-next">
            <i className="icon icon-arrow-right" />
          </button>
        </div>
        {/* End arrow next */}
      </div>
    </>
  );
};

export default Cruise3;
