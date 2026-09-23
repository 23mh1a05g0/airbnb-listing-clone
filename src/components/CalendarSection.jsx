import LISTING from "../data/listingData";
import { ChevronLeftIcon, ChevronRightIcon, KeyboardIcon } from "./Icons";

function MonthGrid({ name, total, start, selected }) {
  const cells = [];
  for (let n = 0; n < start; n++) {
    cells.push(<span className="date empty" key={`e${n}`} />);
  }
  for (let d = 1; d <= total; d++) {
    const active = selected && (d === 18 || d === 23);
    const range = selected && d >= 18 && d <= 23;
    cells.push(
      <span
        className={`date ${active ? "selected" : ""} ${range ? "in-range" : ""}`}
        key={d}
      >
        {d}
      </span>
    );
  }

  return (
    <div className="month">
      <h3>{name}</h3>
      <div className="week">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>
      <div className="dates">{cells}</div>
    </div>
  );
}

export default function CalendarSection() {
  return (
    <section className="section calendar-section" id="calendar">
      <h2>5 nights in {LISTING.city}</h2>
      <p className="sub">18 Oct 2026 - 23 Oct 2026</p>
      <div className="calendar">
        <div className="calendar-nav">
          <button className="cal-arrow-btn" aria-label="Previous month">
            <ChevronLeftIcon size={16} />
          </button>
          <div>October 2026</div>
          <div>November 2026</div>
          <button className="cal-arrow-btn" aria-label="Next month">
            <ChevronRightIcon size={16} />
          </button>
        </div>
        <div className="cal-months">
          <MonthGrid name="October 2026" total={31} start={4} selected={true} />
          <MonthGrid
            name="November 2026"
            total={30}
            start={0}
            selected={false}
          />
        </div>
      </div>
      <div className="calendar-footer">
        <button className="keyboard-btn" aria-label="Keyboard shortcuts">
          <KeyboardIcon size={20} />
        </button>
        <button className="show-more">Clear dates</button>
      </div>
    </section>
  );
}
