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

const Home_1 = () => {
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
  return (
    <>
      <Seo pageTitle="Buy and Sell Tickets: Concerts, Sports & Theater" />
      {/* End Page Title */}

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
      {/* End Popular Destinations */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20">

             {/*  <AddBanner /> */}

          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End AddBanner */}


      {/* Recommended Properties */}


      {/* Block Guide Section */}


      {/* End testimonial Section */}


      {/* End blog Section */}


      {/* End Destination we love Section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Home_1), { ssr: false });
