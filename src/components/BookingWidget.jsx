import { useEffect, useRef } from "react";
import LISTING from "../data/listingData";
import { PriceTagIcon, ChevronDownIcon, FlagIcon } from "./Icons";

export default function BookingWidget() {
  const wrapRef = useRef(null);
  const bookingRef = useRef(null);

  useEffect(() => {
    const bookingWrap = wrapRef.current;
    const booking = bookingRef.current;
    const reviews = document.getElementById("reviews");
    const pageEl = document.querySelector(".page");

    if (!bookingWrap || !booking || !reviews || !pageEl) return;

    const bookingStartY =
      bookingWrap.getBoundingClientRect().top + window.scrollY - 18;

    const syncBooking = () => {
      if (window.innerWidth <= 800) return;

      const pageRect = pageEl.getBoundingClientRect();
      const wrapRect = bookingWrap.getBoundingClientRect();
      const bookingHeight = booking.offsetHeight;
      const scrollY = window.scrollY;
      const startY = bookingStartY;
      const reviewsTop = reviews.getBoundingClientRect().top + scrollY;
      const stopDocY = reviewsTop - bookingHeight - 24;

      if (scrollY <= startY) {
        bookingWrap.classList.remove(
          "booking-wrap-floating",
          "booking-wrap-stopped"
        );
        booking.classList.remove("booking-floating", "booking-stopped");
        bookingWrap.style.cssText = "";
        booking.style.cssText = "";
      } else if (scrollY < stopDocY) {
        bookingWrap.classList.remove("booking-wrap-stopped");
        bookingWrap.classList.add("booking-wrap-floating");
        booking.classList.remove("booking-stopped");
        booking.classList.add("booking-floating");
        bookingWrap.style.top = "18px";
        bookingWrap.style.right =
          Math.max(0, window.innerWidth - pageRect.right) + "px";
        bookingWrap.style.width = wrapRect.width + "px";
        booking.style.top = "0";
        booking.style.width = "100%";
      } else {
        bookingWrap.classList.remove("booking-wrap-floating");
        bookingWrap.classList.add("booking-wrap-stopped");
        booking.classList.remove("booking-floating");
        booking.classList.add("booking-stopped");
        bookingWrap.style.top =
          reviews.offsetTop - bookingHeight - 58 + "px";
        bookingWrap.style.right = "0";
        bookingWrap.style.width = wrapRect.width + "px";
        booking.style.top = "0";
        booking.style.width = "100%";
      }
    };

    window.addEventListener("scroll", syncBooking, { passive: true });
    window.addEventListener("resize", syncBooking);
    requestAnimationFrame(syncBooking);

    return () => {
      window.removeEventListener("scroll", syncBooking);
      window.removeEventListener("resize", syncBooking);
    };
  }, []);

  return (
    <aside className="booking-wrap" ref={wrapRef}>
      <div className="booking" ref={bookingRef}>
        <div className="discount discount-row">
          <div className="discount-badge-text">
            <PriceTagIcon size={16} />
            <b>Get 10% off your next stay.</b>
          </div>
          <div className="discount-actions">
            <a className="terms-link" href="#terms">
              Terms apply
            </a>
            <button className="claim-btn">Claim</button>
          </div>
        </div>
        <div className="price">
          ₹{LISTING.price.toLocaleString()} <span>for 5 nights</span>
        </div>
        <div className="date-box">
          <div className="date-cell">
            <span className="date-label">CHECK-IN</span>10/18/2026
          </div>
          <div className="date-cell">
            <span className="date-label">CHECKOUT</span>10/23/2026
          </div>
        </div>
        <div className="guest-box">
          <span>GUESTS · {LISTING.guests} guests</span>
          <span className="chevron">
            <ChevronDownIcon size={16} />
          </span>
        </div>
        <div className="discount cancellation">
          Free cancellation before 17 October
        </div>
        <button className="reserve">Reserve</button>
        <p className="charged">You won't be charged yet</p>
      </div>
      <div className="report">
        <FlagIcon size={14} /> <u>Report this listing</u>
      </div>
    </aside>
  );
}
