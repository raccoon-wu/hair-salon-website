"use client"; 

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow
} from "@vis.gl/react-google-maps"

export default function Footer() {
  const salonPosition = { lat: -37.83516, lng:145.16608}
  const footerText = {
    className: "text-white my-2",
  };

  const footerTitle = {
    className: "text-2xl"
  }

    return (
      <>
      <div className="self-center h-1.5 w-[calc(100vw-6rem)] ml-10 mr-10 bg-dark-gold"></div>
        <div className="h-[400px] flex flex-row justify-evenly items-center">
            <div>
              {/* ! is added as a non-null assertion operator since I'm confident that the variable will always be set in environment */}
              <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
                <div className="h-[300px] w-[300px] border-4 border-yellow-50">
                  <Map defaultZoom={15} defaultCenter={salonPosition} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
                    <AdvancedMarker position={salonPosition}></AdvancedMarker>
                  </Map>
                </div>
              </APIProvider>
            </div>
            <div>
              <h1 {...footerTitle}>OPENING HOURS:</h1>
              <p {...footerText}>Monday</p>
              <p {...footerText}>CLOSED</p>

              <br/>

              <p {...footerText}>Tuesday - Saturday</p>
              <p {...footerText}>9.00am - 5.30pm</p>

              <br/>
              
              <p {...footerText}>Sunday</p>
              <p {...footerText}>9.00am - 5.00pm</p>
            </div>
            <div>
              <h1 {...footerTitle}>CONTACT US:</h1>
              <p {...footerText}>Phone: (03) 9877 3322</p>

              <br/>

              <h1 {...footerTitle}>ADDRESS:</h1>
              <p {...footerText}>40 Mahoneys Rd, Forest Hill VIC 3131</p>
              <button className="mt-4 w-full h-12 rounded-2xl bg-gray-700 drop-shadow-lg text-lighter-gold hover:border-2 border-yellow-50">Find us on Google</button>
            </div>
        </div>
      </>
    );
  }