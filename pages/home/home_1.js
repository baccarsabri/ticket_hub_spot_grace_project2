import dynamic from "next/dynamic";
import AddBanner from "../../components/add-banner/AddBanner";
import Seo from "../../components/common/Seo";
import PopularDestinations from "../../components/destinations/PopularDestinations";
import DefaultFooter from "../../components/footer/default";
import Header1 from "../../components/header/header-1";
import Hero1 from "../../components/hero/hero-1";
import BlockGuide from "../../components/block/BlockGuide";
import Blog from "../../components/blog/Blog3";
import CallToActions from "../../components/common/CallToActions";
import Destinations from "../../components/home/home-1/Destinations";
import Testimonial from "../../components/home/home-1/Testimonial";
import TestimonialLeftCol from "../../components/home/home-1/TestimonialLeftCol";
import Hotels from "../../components/hotels/Hotels";
import SelectFilter from "../../components/hotels/filter-tabs/SelectFilter";
import TopHeader from "../../components/header/header-9/top-header";
import Link from "next/link";
import Cruise3 from "../../components/cruise/Cruise3";
import { useEffect, useState } from "react";
import axios from "axios";

const Home_1 = () => {
  const [underEvents, setUnderEvents] = useState([]);
  function addTicketDetails(url) {
    // Define the new parameters to be added
    const newParams = '%26showDetails%3DVB9949937452%26groupId%3D%26qty%3D2';
  
    // Find the position of '&intsrc' in the URL
    const intsrcIndex = url.indexOf('&intsrc');
  
    if (intsrcIndex === -1) {
      throw new Error("'&intsrc' parameter not found in the URL.");
    }
  
    // Insert the new parameters before '&intsrc'
    const updatedUrl = url.slice(0, intsrcIndex) + newParams + url.slice(intsrcIndex);
  
    return updatedUrl;
  }
  
  // Example usage
  const originalUrl = "https://vivid-seats.pxf.io/c/4751942/1017970/12730?prodsku=4776051&u=https%3A%2F%2Fwww.vividseats.com%2Fthe-book-of-mormon-tickets-new-york-eugene-oneill-theatre-6-22-2024--theater-musical%2Fproduction%2F4776051%3Futm_term%3Dproduction-4776051&intsrc=APIG_7904";
  const updatedUrl = addTicketDetails(originalUrl);
  
  console.log(updatedUrl);

  useEffect(()=>{
    async function fetchData() {
      try {
        // Make your API call using Axios
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/getUnderoneoo`);
        const data = response.data;
        console.log(data);
        const now = new Date();
        const oneMonthFromNow = new Date();
        oneMonthFromNow.setMonth(now.getMonth() + 1);
        const filteredData = data.Items.filter(item => {
          const expirationDate = new Date(item.ExpirationDate);
          return expirationDate > now && expirationDate <= oneMonthFromNow;
        });
        console.log(filteredData);
        // Update data state with the fetched events
        setUnderEvents(filteredData);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        // Set loading to false after the API call is complete
      //  setLoading(false);
      }
    }
    fetchData();
  },[]);
  return (
    <>
      <Seo pageTitle="Buy and Sell Tickets: Concerts, Sports & Theater" />
      {/* End Page Title */}
      <TopHeader />

      <Header1 />
      {/* End Header 1 */}

      <Hero1 />
      {/* End Hero 1 */}

      <section className="layout-pt-lg layout-pb-md" data-aos="fade-up">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Categories</h2>
               
              </div>
            </div>
            {/* End col-auto */}

            <div className="col-auto md:d-none">
              <a
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                View All Categories
                <div className="icon-arrow-top-right ml-15" />
              </a>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}

          <div className="relative pt-40 sm:pt-20">
            <PopularDestinations />
          </div>
        </div>
        {/* End .container */}
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Events Under $100</h2>
             
              </div>
            </div>
            {/* End .col */}

         
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20">
            {underEvents.length>0 && (  <Cruise3 underEvents={underEvents}/>)}
          
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Popular Destinations */}

  
      {/* End AddBanner */}


      {/* Recommended Properties */}


      {/* Block Guide Section */}


      {/* End testimonial Section */}


      {/* End blog Section */}


      {/* End Destination we love Section */}

      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Home_1), { ssr: false });
