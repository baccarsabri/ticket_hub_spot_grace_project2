import { useState, useEffect } from 'react'

import CallToActions from "../../../components/common/CallToActions";
import Seo from "../../../components/common/Seo";
import Header11 from "../../../components/header/header-11";
import DefaultFooter from "../../../components/footer/default";
import MainFilterSearchBox from "../../../components/activity-list/activity-list-v1/MainFilterSearchBox";
import TopHeaderFilter from "../../../components/activity-list/activity-list-v1/TopHeaderFilter";
import ActivityProperties from "../../../components/activity-list/activity-list-v1/ActivityProperties";
import Pagination from "../../../components/activity-list/common/Pagination";
import Sidebar from "../../../components/activity-list/activity-list-v1/Sidebar";
import { useRouter } from 'next/router'
import axios from 'axios';
import LocationSearch from '../../../components/car-list/common/LocationSearch';
import DateSearch from '../../../components/activity-list/common/DateSearch';
import GuestSearch from '../../../components/car-list/common/GuestSearch';
import DatePicker, { DateObject } from "react-multi-date-picker";
import TopHeader from "../../../components/header/header-9/top-header";



const Index = () => {
    const router = useRouter()
    const { q } = router.query
    const [data, setData] = useState([]);
    const [events, setEvents] = useState([]);

    const [venueSearch, setVenueSearch] = useState("");
    const [citySearch, setCitySearch] = useState("");
    const [datesFilter, setDatesFilter] = useState([
      new DateObject(),
      new DateObject().add(3, "days"),
    ]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
      async function fetchData() {
        try {
          // Make your API call using Axios
          const response = await axios.get(`https://api.seatgeek.com/2/events/?q=${q}&client_id=Mzk1MDc3NTh8MTcwNTU5NjQ3Ny44MzQyOTg0&per_page=20`);
          const data = response.data;
          // Update data state with the fetched events
          setData(data);
          setEvents(data.events)
        } catch (error) {
          console.error('Error fetching search results:', error);
        } finally {
          // Set loading to false after the API call is complete
          setLoading(false);
        }
      }

      if(q){
        fetchData();
      }
    
      // Call the fetchData function immediately
    }, [q]); // Include q in the dependency array so useEffect runs when q changes

    useEffect(()=>{
      const formattedDates = datesFilter.map(date => date.format("YYYY-MM-DDTHH:mm:ss"));
        console.log(formattedDates);
      },[datesFilter]);



      const filterEvents = () => {

        const [startDate, endDate] = datesFilter.map(date => new Date(date.format("YYYY-MM-DDTHH:mm:ss")));
    
        const filteredByDates = data.events.filter(event => {
          const eventDate = new Date(event.datetime_local);
          console.log(eventDate);
          return eventDate >= startDate && eventDate <= endDate;
        });
        setEvents(filteredByDates);

        if(venueSearch != ""){
          const filteredByVenue = filteredByDates.filter(event => {
            const venueItem = event.venue.name.toLowerCase();
            return venueItem == venueSearch.toLowerCase();
          });
          console.log(filteredByVenue);
          setEvents(filteredByVenue);

        }
        if(citySearch != ""){
          const filteredByCity = filteredByDates.filter(event => {
            const CityItem = event.venue.city.toLowerCase();
            return CityItem == citySearch.toLowerCase();
          });
          setEvents(filteredByCity);
        }
        
      };
 
  return (
    <>
      <Seo pageTitle="Search page" />
      {/* End Page Title */}
      <TopHeader />

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header11 />
      {/* End Header 1 */}

      <section className="pt-40 pb-40 bg-light-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              
              {/* End text-center */}
              <MainFilterSearchBox />

              <div className="text-center">
                <h1 className="text-30 fw-600 mt-30">Search results for: {q}</h1>
              </div>
            </div>
            <div className="mainSearch -col-5 border-light bg-white px-10 py-10 lg:px-10 lg:pt-5 lg:pb-20 rounded-4 mt-30">
        <div className="button-grid items-center">
        <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">Date range</h4>
              <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker">
      <DatePicker
        inputClass="custom_input-picker"
        containerClassName="custom_container-picker"
        value={datesFilter}
        onChange={setDatesFilter}
        numberOfMonths={1}
        offsetY={10}
        range
        rangeHover
        format="MMMM DD"
      />
    </div>            
        </div>
          </div>


          <div className="searchMenu-loc px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch">

          <h4 className="text-15 fw-500 ls-2 lh-16">Venue</h4>
          <div className="text-15 text-light-1 ls-2 lh-16">
            <input
              autoComplete="off"
              type="search"
              placeholder="Stadium, Theatre"
              className="js-search js-dd-focus"
              value={venueSearch}
              onChange={(e) => setVenueSearch(e.target.value)}
            />
          </div>
      </div>

          {/* End Pickup Location */}

          <div className="searchMenu-loc px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch">

          <h4 className="text-15 fw-500 ls-2 lh-16">City</h4>
          <div className="text-15 text-light-1 ls-2 lh-16">
            <input
              autoComplete="off"
              type="search"
              placeholder="City"
              className="js-search js-dd-focus"
              value={citySearch}
              onChange={(e) => setCitySearch(e.target.value)}
            />
          </div>

      </div>          {/* End Drop off location  */}

 
          {/* End Pick Up Date */}

          {/* EndDrop off Date */}

          {/* End guest */}

          <div className="button-item">
            <button className="text-center mainSearch__submit button -dark-1 py-20 px-35 col-12 rounded-4 bg-yellow-1 text-dark-1"
            onClick={filterEvents}
            >
              <i className="icon-up-down text-20 mr-10" />
              Filter
            </button>
          </div>
          {/* End search button_item */}
        </div>
      </div>
            {/* End col-12 */}
          </div>
        </div>
      </section>
      {/* Top SearchBanner */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            
            {/* End col */}

            <div className="col-xl-9 ">
              <TopHeaderFilter numberoftk={events.length} page={"searchPage"}/>
              <div className="mt-20"></div>
              {/* End mt--30 */}
              <div className="row y-gap-2">
                {q && (
                  <ActivityProperties events={events} q={q}/>
                )
                  
                }
                
              </div>
              {/* End .row */}
       
            </div>
            {/* End .col for right content */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End layout for listing sidebar and content */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default Index;
