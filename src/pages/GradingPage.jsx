import { useState, useEffect } from "react";

export default function GradingPage() {
  const [isAllowed, setIsAllowed] = useState(null);
  const eventLocation = { lat: 10.042778, lng: 76.328611 }; // 10°02'34.0"N 76°19'43.0"E
  const allowedRadius = 20; // meters

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const distance = getDistance(latitude, longitude, eventLocation.lat, eventLocation.lng);
          setIsAllowed(distance <= allowedRadius);
        },
        (error) => {
          console.error("Geolocation error:", error);
          setIsAllowed(false);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      setIsAllowed(false);
    }
  }, []);

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
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-6 text-center">
      {isAllowed === null ? (
        <p>Checking location...</p>
      ) : isAllowed ? (
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfvbL6-mycjewhlAuwte3lLaUAiUXZ0WTxHA8MgHL2TCtEaVQ/viewform?embedded=true"
          width="100%"
          height="800px"
          className="border rounded-lg shadow-lg"
          title="Grading Form"
        ></iframe>
      ) : (
        <p className="text-2xl font-bold">Grading Page is only available at the event location.<br/>Contact organizers if this is a mistake.</p>
      )}
    </div>
  );
}
