import { useState } from "react";
import "./app.css"
import ReviewCard from "./assets/Components/ReviewCard";
import LSRLogo from "./assets/Images/LSRLogo.png";
import TripAdvisorQR from "./assets/Images/TripAdvisorQR.jpeg";
import TripAdvisorLogo from "./assets/Images/TripAdvisorLogo.png";

function App() {
  return (
    <div>
      <div
        style={{
          background: "#f0f0f0",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ReviewCard
          logo={LSRLogo}
          qr={TripAdvisorQR}
          hotelName="By IME Hospitality"
          tagline="Scan here to leave us a quick review"
          platformLogo={TripAdvisorLogo}
        />
      </div>
    </div>
  );
}

export default App;
