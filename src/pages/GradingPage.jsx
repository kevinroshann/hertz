import { useState, useEffect } from "react";

export default function GradingPage() {
  const [isAllowed, setIsAllowed] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [locationName, setLocationName] = useState("Fetching location...");
  
  // Updated event location
  const eventLocation = { lat: 10.042589, lng: 76.328659 };
  const allowedRadius = 18; // Increased tolerance to 18 meters to reduce GPS drift issues

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });

          // Calculate distance
          const distance = getDistance(latitude, longitude, eventLocation.lat, eventLocation.lng);
          console.log(`User Location: ${latitude}, ${longitude}`);
          console.log(`Event Location: ${eventLocation.lat}, ${eventLocation.lng}`);
          console.log(`Calculated Distance: ${distance.toFixed(2)} meters`);

          setIsAllowed(distance <= allowedRadius);
          await fetchLocationName(latitude, longitude);
        },
        (error) => {
          console.error("Geolocation error:", error);
          setIsAllowed(false);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 } // Forces fresh GPS fetch
      );
    } else {
      console.error("Geolocation not supported.");
      setIsAllowed(false);
    }
  }, []);

  async function fetchLocationName(lat, lng) {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
      const data = await response.json();
      if (data && data.display_name) {
        setLocationName(data.display_name);
      } else {
        setLocationName("Unknown location");
      }
    } catch (error) {
      console.error("Error fetching location name:", error);
      setLocationName("Unknown location");
    }
  }

  function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // Earth radius in meters
    const toRad = (angle) => (angle * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full p-4 sm:p-6 text-center bg-gray-900 text-white">
      {isAllowed === null ? (
        <p className="text-lg sm:text-xl">Checking location...</p>
      ) : isAllowed ? (
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdUUC6MyohVllwpMJt8RlCJREGbLSlnhEfhbS5Iu4CIN0dOtw/viewform?embedded=true"
          width="100%"
          height="800px"
          className="border rounded-lg shadow-lg"
          title="Grading Form"
        ></iframe>
      ) : (
        <div className="w-full max-w-lg">
          <p className="text-xl sm:text-2xl font-bold mt-4 sm:mt-6 text-center">
            Grading Page is only available at the event location.
          </p>

          {userLocation && (
            <div className="mt-4">
              <p className="text-lg sm:text-xl break-words">
                You are currently at: <strong>{locationName}</strong>
              </p>
              <p className="text-lg sm:text-xl text-yellow-400 font-bold">
                If you are near the location but unable to access the page, please try refreshing or move slightly.
              </p>
              <p className="text-lg sm:text-xl">Ensure GPS is enabled and set to high accuracy.</p>

              <div className="w-full flex justify-center mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.54295155538557!2d76.328659!3d10.042589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c37738769d3%3A0x5ef54323a29bcbfb!2sCUSAT%20Student%20Amenity%20Centre!5e0!3m2!1sen!2sin!4v1740561740744!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          )}
          
          <p className="text-lg sm:text-xl mt-4">Contact organizers if this is a mistake.</p>
          
          <div className="w-full flex justify-center mt-4">
            <a
              href="tel:+919497049327"
              className="px-6 py-3 w-full sm:w-auto text-lg sm:text-xl font-bold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 text-center"
            >
              Contact Organizers
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

