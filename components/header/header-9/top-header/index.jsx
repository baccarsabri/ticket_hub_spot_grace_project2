import Link from "next/link";
import CurrenctyMegaMenu from "../../CurrenctyMegaMenu";
import ContactInfo from "./ContactInfo";
import LanguageMegaMenu from "../../LanguageMegaMenu";

const HeaderBanner = () => {
  return (
    <section className="header-banner py-5 bg-blue-1">
    <div className="container">
      <div className="row items-center justify-between">
        <div className="col-auto">
          <ContactInfo />
          {/* End .row */}
        </div>
        {/* End .col */}

  
        {/* End .col-auto */}
      </div>
      {/* End .row */}
    </div>
    {/* End .container */}
  </section>
  );
};

export default HeaderBanner;
