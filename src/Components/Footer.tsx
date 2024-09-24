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
    return (
      <>
      <div className="self-center h-1.5 w-[calc(100vw-6rem)] ml-10 mr-10 bg-dark-gold"></div>
        <div className="h-[400px] flex flex-row justify-evenly items-center">
        {/* ! is added as a non-null assertion operator since I'm confident that the variable will always be set in environment */}
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
          <div className="h-[300px] w-[300px] border-4 border-yellow-50">
            <Map defaultZoom={15} defaultCenter={salonPosition} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
              <AdvancedMarker position={salonPosition}></AdvancedMarker>
            </Map>
          </div>
        </APIProvider>
        </div>
      </>
    );
  }