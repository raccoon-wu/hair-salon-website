export default function M_Footer() {
    const footerText = {
        className: "text-sm text-white",
      };
    
      const footerTitle = {
        className: "text-sm text-lighter-gold"
      }

    return (
        <>
        <div id="m-contact-section" className="my-12 flex flex-col justify-center items-center">
              <h1 {...footerTitle}>OPENING HOURS:</h1>
              <p {...footerText}>Monday</p>
              <p {...footerText}>CLOSED</p>

              <br/>

              <p {...footerText}>Tuesday - Saturday</p>
              <p {...footerText}>9.00am - 5.30pm</p>

              <br/>
              
              <p {...footerText}>Sunday</p>
              <p {...footerText}>9.00am - 5.00pm</p>

              <br/>

              <h1 {...footerTitle}>CONTACT US:</h1>
              <p {...footerText}>Phone: (03) 9877 3322</p>

              <br/>

              <h1 {...footerTitle}>ADDRESS:</h1>
              <p {...footerText}>40 Mahoneys Rd, Forest Hill VIC 3131</p>
            </div>
        </>
    )
}