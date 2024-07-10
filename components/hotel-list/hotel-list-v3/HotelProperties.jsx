import { hotelsData } from "../../../data/hotels";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";

const HotelProperties = ({data , urlStubhub , urlVividseats , urlGameTimes , quantity , mapVivid , urlPartnerize}) => {
  function addTicketDetails(ticketId) {
    console.log(urlPartnerize);
    // Define the new parameters to be added
    const newParams = `%26showDetails%3D${ticketId}%26groupId%3D%26qty%3D${quantity}`;
  
    // Find the position of '&intsrc' in the URL
    const intsrcIndex = urlPartnerize.indexOf('&intsrc');
  

  
    // Insert the new parameters before '&intsrc'
    const updatedUrl = urlPartnerize.slice(0, intsrcIndex) + newParams + urlPartnerize.slice(intsrcIndex);
  
    return updatedUrl;
  }
  
  // Example usage
  const originalUrl = "https://vivid-seats.pxf.io/c/4751942/1017970/12730?prodsku=4776051&u=https%3A%2F%2Fwww.vividseats.com%2Fthe-book-of-mormon-tickets-new-york-eugene-oneill-theatre-6-22-2024--theater-musical%2Fproduction%2F4776051%3Futm_term%3Dproduction-4776051&intsrc=APIG_7904";
  const updatedUrl = addTicketDetails(originalUrl);
  const handlePriceVividseat = (value) =>{
    // Convert the value to a floating-point number
    const floatValue = parseFloat(value);
    
    // Check if the value is a valid number
    if (!isNaN(floatValue)) {
      // Convert the float to a string without the decimal part
      return floatValue.toFixed(0);
    } else {
      // If the value is not a valid number, return the original value
      return value;
    }
  }

  console.log(data);
  return (
    <>
      {data.map((item,index) => (

        <div className="col-12" key={index}>
          <div className="border-top-light pt-20">

            {
              item.delivery_type && (
                <div className="row x-gap-20 y-gap-20">
                <div className="col-md-auto">
                  <div className="cardImage ratio ratio-2:1 w-230  md:w-1/1">
                    <div className="cardImage__content custom_inside-slider">
                     
                 
                            <Image
                              width={200}
                              height={200}
                              src={item?.view_url}
                              alt="image"
                              className="w-100"
                            />
                         
                      
                    
                    </div>
                    {/* End image */}
  
                 
                  </div>
                </div>
                {/* End .col */}
  
                <div className="col-md">
                  <h3 className="text-16 lh-17 fw-500">
                  Section {item?.section}, Row {item.row}
                
                  </h3>
  
  
                 
                </div>
                {/* End .col-md */}
  
                <div className="col-md-auto text-right md:text-left">
                  <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                    <div className="col-auto">
                      <div className="text-14 lh-14 fw-500">Gametime.co</div>
                    
                    </div>
                  
                  </div>
                  {/* End .row */}
  
                  <div className="text-14 text-light-1 mt-20 lg:mt-50 md:mt-24">
                  
                    <span className="text-22 lh-12 fw-600 text-dark-1 ml-5">
                      US${item?.price.prefee/100}
                    </span>
                    <br/>
                    <span className="text-14 lh-12 fw-300 text-dark-1 ml-5">
                      (Fees not included)
                    </span>
                  </div>
  
                  <Link
                    href={`${urlGameTimes}/listings/${item.id}?zoom=9`}
                    className="button py-10 px-20 -dark-1 bg-blue-1 text-white mt-10" target="_blank"
                  >
                    See Availability{" "}
                    <div className="icon-arrow-top-right ml-15"></div>
                  </Link>
                </div>
                {/* End .col */}
              </div>
              )
            }

            {
              item.r && (
                <div className="row x-gap-20 y-gap-20">
                <div className="col-md-auto">
                  <div className="cardImage ratio ratio-1:2 w-210  md:w-1/1 rounded-5">
                    <div className="cardImage__content custom_inside-slider">
                     
                        
                        
                            <Image
                              width={200}
                              height={200}
                              src={mapVivid}
                              alt="image"
                              className="w-100"
                            />
                        
                      
                    
                    </div>
                    {/* End image */}
  
                    <div className="cardImage__wishlist">
                      <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                        <i className="icon-heart text-12"></i>
                      </button>
                    </div>
                  </div>
                </div>
                {/* End .col */}
  
                <div className="col-md">
                  <h3 className="text-16 lh-17 fw-500">
               {item?.l}, Row {item.r}
                
                  </h3>
  
  
                 
                </div>
                {/* End .col-md */}
  
                <div className="col-md-auto text-right md:text-left">
                  <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                    <div className="col-auto">
                      <div className="text-14 lh-14 fw-500">Vividseats.com</div>
                    
                    </div>
                  
                  </div>
                  {/* End .row */}
  
                  <div className="text-14 text-light-1 mt-20 lg:mt-50 md:mt-24">
                  
                    <span className="text-22 lh-12 fw-600 text-dark-1 ml-5">
                      US${handlePriceVividseat(item.p)}
                    </span>
                    <br/>
                    <span className="text-14 lh-12 fw-300 text-dark-1 ml-5">
                      (Fees not included)
                    </span>
                  </div>
  
                  <Link
                    href={addTicketDetails(item.i)}
                    className="button py-10 px-20 -dark-1 bg-blue-1 text-white mt-10" target="_blank"
                  >
                    See Availability{" "}
                    <div className="icon-arrow-top-right ml-15"></div>
                  </Link>
                </div>
                {/* End .col */}
              </div>
              )
            }

{
              item.EventId && (
                <div className="row x-gap-20 y-gap-20">
                <div className="col-md-auto">
                  <div className="cardImage ratio ratio-1:2 w-180 md:w-1/1 rounded-5">
                    <div className="cardImage__content custom_inside-slider">
                     
                        
                      {item?.SvgMapPngUrl ? (
                          <Image
                          width={200}
                          height={200}
                          src={item?.SvgMapPngUrl}
                          alt="image"
                          className="w-100"
                          />
                      ):(
                        <Image
                          width={200}
                          height={200}
                          src={"/img/general/stub.png"}
                          alt="image"
                          className="w-100"
                          />
                      )

                      }
                           
                    
                      
                    
                    </div>
                    {/* End image */}
  
                    <div className="cardImage__wishlist">
                      <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                        <i className="icon-heart text-12"></i>
                      </button>
                    </div>
                  </div>
                </div>
                {/* End .col */}
  
                <div className="col-md">
                  <h3 className="text-16 lh-17 fw-500">
                  Section {item?.Section}, Row {item.Row}
                
                  </h3>
  
  
                 
                </div>
                {/* End .col-md */}
  
                <div className="col-md-auto text-right md:text-left">
                  <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                    <div className="col-auto">
                      <div className="text-14 lh-14 fw-500">Stubhub.com</div>
                    
                    </div>
                  
                  </div>
                  {/* End .row */}
  
                  <div className="text-14 text-light-1 mt-20 lg:mt-50 md:mt-24">
                  
                    <span className="text-22 lh-12 fw-600 text-dark-1 ml-5">
                      US{item.Price}
                    </span>
                    <br/>
                    <span className="text-14 lh-12 fw-300 text-dark-1 ml-5">
                      (Fees not included)
                    </span>
                  </div>
  
                  <Link
                    href={`${urlStubhub}?quantity=${quantity}&listingId=${item.Id}&clickref=1011lyDMBA34&utm_source=partnerize_tickethubspot&utm_medium=publisher_program&utm_sub_medium=Comparison%2FReview&utm_campaign=1101l799&utm_content=0&PCID=partnerize_all`}
                    className="button py-10 px-20 -dark-1 bg-blue-1 text-white mt-10" target="_blank"
                  >
                    See Availability{" "}
                    <div className="icon-arrow-top-right ml-15"></div>
                  </Link>
                </div>
                {/* End .col */}
              </div>
              )
            }
           
            {/* End .row */}
          </div>
          {/* End broder-top-light */}
        </div>
        // End .col-12


      ))}
    </>
  );
};

export default HotelProperties;
