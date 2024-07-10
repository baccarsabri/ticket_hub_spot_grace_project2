import Link from "next/link";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="row x-gap-15 y-gap-15 items-center justify-center">
      <div className="col-auto md:d-none text-white text-14 text-center">
        We're upfront about it: This website features affiliate links. Clicking and purchasing through these links supports our efforts.&nbsp;  
        <Link
          href={`/others-pages/terms`}
          className="text-14 text-white text-decoration-underline"
        >
          Learn more.
        </Link> 
      </div>
    </div>
  );
};

export default ContactInfo;
