import { useState, useEffect } from "react";
import LISTING from "./data/listingData";
import Header from "./components/Header";
import TitleRow from "./components/TitleRow";
import PhotoGrid from "./components/PhotoGrid";
import NavigationTabs from "./components/NavigationTabs";
import ListingOverview from "./components/ListingOverview";
import SleepingArrangements from "./components/SleepingArrangements";
import Amenities from "./components/Amenities";
import CalendarSection from "./components/CalendarSection";
import BookingWidget from "./components/BookingWidget";
import ReviewsSection from "./components/ReviewsSection";
import LocationSection from "./components/LocationSection";
import HostDetails from "./components/HostDetails";
import Policies from "./components/Policies";
import NearbyStays from "./components/NearbyStays";
import PhotoTourModal from "./components/PhotoTourModal";
import LightboxModal from "./components/LightboxModal";

export default function App() {
  const [viewMode, setViewMode] = useState("main"); // "main" | "tour" | "lightbox"
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const handleOpenTour = (index = 0) => {
    setActivePhotoIndex(index);
    setViewMode("tour");
  };

  const handleOpenLightbox = (index = 0) => {
    setActivePhotoIndex(index);
    setViewMode("lightbox");
  };

  const handleClose = () => {
    setViewMode("main");
  };

  const handlePrevPhoto = () => {
    setActivePhotoIndex(
      (prev) => (prev + LISTING.photos.length - 1) % LISTING.photos.length
    );
  };

  const handleNextPhoto = () => {
    setActivePhotoIndex((prev) => (prev + 1) % LISTING.photos.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (viewMode === "lightbox") {
        if (e.key === "Escape") {
          setViewMode("tour");
        } else if (e.key === "ArrowLeft") {
          handlePrevPhoto();
        } else if (e.key === "ArrowRight") {
          handleNextPhoto();
        }
      } else if (viewMode === "tour") {
        if (e.key === "Escape") {
          setViewMode("main");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [viewMode]);

  return (
    <>
      <Header />
      <main className="page">
        <TitleRow />
        <PhotoGrid onOpenTour={handleOpenTour} />

        <div className="content-layout">
          <div className="main-column">
            <NavigationTabs />
            <ListingOverview />
            <SleepingArrangements />
            <Amenities />
            <CalendarSection />
          </div>

          <BookingWidget />

          <div className="wide-sections">
            <ReviewsSection />
            <LocationSection />
            <HostDetails />
            <Policies />
            <NearbyStays />
          </div>
        </div>
      </main>

      {viewMode === "tour" && (
        <PhotoTourModal
          initialIndex={activePhotoIndex}
          onClose={handleClose}
          onOpenLightbox={handleOpenLightbox}
        />
      )}

      {viewMode === "lightbox" && (
        <LightboxModal
          photoIndex={activePhotoIndex}
          onClose={handleClose}
          onOpenTour={() => setViewMode("tour")}
          onPrev={handlePrevPhoto}
          onNext={handleNextPhoto}
        />
      )}
    </>
  );
}
