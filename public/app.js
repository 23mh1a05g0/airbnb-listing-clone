const D=window.LISTING;
let i=-1;
const root=document.getElementById("root");

function page(){
  root.innerHTML=`
    <header class="site-header">
      <b class="logo">airbnb</b>
      <div class="search">
        <span>⌂ Anywhere</span><span>Anytime</span><span>Add guests</span><button aria-label="Search">⌕</button>
      </div>
      <div class="header-actions">
        <button>Become a host</button>
        <button aria-label="Choose language and region">🌐</button>
        <button class="menu" aria-label="Open menu">☰ ◉</button>
      </div>
    </header>

    <main class="page">
      <div class="title-row">
        <h1>${D.title}</h1>
        <div class="title-actions"><button class="link-btn">↗ Share</button><button class="link-btn">♡ Save</button></div>
      </div>

      <div class="photo-grid" aria-label="Listing photos">
        ${D.photos.slice(0,5).map((p,n)=>`
          <button class="tile" data-i="${n}" aria-label="Open photo ${n+1}">
            <img src="${p.url}" alt="${p.caption}">
            ${n===4?'<span class="show-all">⊞ Show all photos</span>':""}
          </button>`).join("")}
      </div>

      <div class="content-layout">
        <div class="main-column">
          <nav class="tabs" aria-label="Listing sections">
            <button class="tab active" data-target="photos">Photos</button>
            <button class="tab" data-target="amenities">Amenities</button>
            <button class="tab" data-target="reviews">Reviews</button>
            <button class="tab" data-target="location">Location</button>
          </nav>

          <section class="section" id="photos">
            <h2>Entire serviced apartment in ${D.city}, ${D.country}</h2>
            <p class="sub">${D.guests} guests · ${D.bedrooms} bedrooms · ${D.beds} beds · ${D.bathrooms} bathrooms</p>
          </section>

          <section class="section favourite-section">
            <div class="favourite">
              <div>
                <h3><span class="laurel">❧</span> Guest favourite <span class="laurel">❧</span></h3>
                <p class="sub">One of the most loved homes on Airbnb, based on ratings, reviews, and reliability.</p>
              </div>
              <div class="fav-score"><strong>${D.rating}</strong><div>★★★★★</div><small>${D.reviews} Reviews</small></div>
            </div>
          </section>

          <section class="section">
            <div class="host">
              <img class="avatar" src="${D.hostAvatar}" alt="Host">
              <div><b>Hosted by ${D.host}</b><div class="sub">${D.yearsHosting} years hosting</div></div>
            </div>
          </section>

          <section class="section highlights-section">
            ${D.highlights.map(h=>`
              <div class="highlight">
                <div class="highlight-icon">${h.icon}</div>
                <div><b>${h.title}</b><div class="sub">${h.desc}</div></div>
              </div>`).join("")}
          </section>

          <section class="section">
            <div class="translation">Some info has been automatically translated. <u>Show original</u></div>
            <p class="description">${D.description}</p>
            <button class="show-more">Show more →</button>
          </section>

          <section class="section">
            <h2>Where you’ll sleep</h2>
            <div class="sleep-grid">
              ${D.sleeps.map(s=>`
                <div class="sleep-card">
                  <img src="${s.img}" alt="${s.name}">
                  <b>${s.name}</b><div class="sub">${s.detail}</div>
                </div>`).join("")}
            </div>
          </section>

          <section class="section" id="amenities">
            <h2>What this place offers</h2>
            <div class="amenities">
              ${D.amenities.map(a=>`
                <div class="amenity ${a[2]?"unavailable":""}">
                  <span class="amenity-icon">${a[0]}</span><span>${a[1]}</span>
                </div>`).join("")}
            </div>
            <button class="pill">Show all 50 amenities</button>
          </section>

          <section class="section calendar-section" id="calendar">
            <h2>5 nights in ${D.city}</h2>
            <p class="sub">18 Oct 2026 - 23 Oct 2026</p>
            <div class="calendar">
              <div class="calendar-nav"><button aria-label="Previous month">‹</button><div>October 2026</div><div>November 2026</div><button aria-label="Next month">›</button></div>
              <div class="cal-months">
                ${monthHtml("October 2026",31,4,true)}
                ${monthHtml("November 2026",30,0,false)}
              </div>
            </div>
            <div class="calendar-footer"><span>▱</span><button class="show-more">Clear dates</button></div>
          </section>
        </div>

        <aside class="booking-wrap">
          <div class="booking">
            <div class="discount discount-row">
              <b>🏷 Get 10% off your next stay.</b>
              <div class="discount-actions"><a class="terms-link" href="#terms">Terms apply</a><button class="claim-btn">Claim</button></div>
            </div>
            <div class="price">₹${D.price.toLocaleString()} <span>for 5 nights</span></div>
            <div class="date-box">
              <div class="date-cell"><span class="date-label">CHECK-IN</span>10/18/2026</div>
              <div class="date-cell"><span class="date-label">CHECKOUT</span>10/23/2026</div>
            </div>
            <div class="guest-box"><span>GUESTS · ${D.guests} guests</span><span class="chevron">⌄</span></div>
            <div class="discount cancellation">Free cancellation before 17 October</div>
            <button class="reserve">Reserve</button>
            <p class="charged">You won't be charged yet</p>
          </div>
          <div class="report">⚑ <u>Report this listing</u></div>
        </aside>

        <div class="wide-sections">
          <section class="section" id="reviews">
            <div class="review-top">
              <div class="review-score"><span class="laurel">❧</span> 4.95 <span class="laurel">❧</span></div>
              <h2>Guest favourite</h2>
              <p class="sub">This home is a guest favourite based on ratings, reviews, and reliability.</p>
              <a class="show-more" href="#reviews">How reviews work</a>
            </div>

            <div class="review-breakdown">
              <div class="overall-rating"><b>Overall rating</b><div class="rating-bars">${[5,4,3,2,1].map((v,n)=>`<span>${v}<i class="${n===0?"filled":""}"></i></span>`).join("")}</div></div>
              ${["Cleanliness","Accuracy","Check-in","Communication","Location","Value"].map((x,n)=>`
                <div class="rating-category"><b>${x}</b><strong>${n>3?"4.8":"5.0"}</strong><span class="rating-symbol">${["⌁","✓","⌕","▢","▤","◇"][n]}</span></div>`).join("")}
            </div>

            <div class="review-tags">${["Comfort 6","Accuracy 5","Hot tub 5","Condition 4","Hospitality 8","Cleanliness 4","Amenities 2"].map(x=>`<span>${x}</span>`).join("")}</div>

            <div class="reviews-grid">
              ${D.reviewsData.map(x=>`
                <article class="review">
                  <div class="review-head"><img src="${x.avatar}" alt=""><div><b>${x.name}</b><div class="sub">${x.duration}</div></div></div>
                  <p>★★★★★ · ${x.time}</p><p class="review-text">${x.text}</p>
                </article>`).join("")}
            </div>
            <button class="pill">Show all ${D.reviews} reviews</button>
          </section>

          <section class="section" id="location">
            <h2>Where you’ll be</h2>
            <p class="location-name">${D.city}, ${D.country}</p>
            <div class="location-map" role="img" aria-label="Static map placeholder showing the listing location">
              <span class="map-search">⌕</span><span class="map-zoom">＋<br><hr>−</span><span class="map-pin">⌂</span>
            </div>
            <p class="map-note">Exact location will be provided after booking.</p>
            <div class="neighbourhood">
              <h3>Neighbourhood highlights</h3>
              <p>Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.</p>
              <button class="show-more">Show more ›</button>
            </div>
          </section>

          <section class="section host-section">
            <h2>Meet your host</h2>
            <div class="host-detail-grid">
              <div class="host-card">
                <img class="host-brand" src="${D.hostAvatar}" alt="Host">
                <div class="host-name">${D.host}</div><div class="host-role">Host</div>
                <div class="host-stats"><b>1,463</b><span>Reviews</span><b>4.68★</b><span>Rating</span><b>2</b><span>Years hosting</span></div>
              </div>
              <div class="cohosts">
                <h3>Co-Hosts</h3>
                <div class="cohost-grid">${["Sharath","Aman Dev Pahwa","Maria Karen Priyanka","Simran","Pallavi","Sanyukta","Shruti","Amisha"].map(n=>`<div>● ${n}</div>`).join("")}</div>
                <h3>Host details</h3><p>Response rate: 100%<br>Responds within an hour</p><button class="message-host">Message host</button>
              </div>
            </div>
          </section>

          <section class="section policy-grid" id="terms">
            <div><h3>Cancellation policy</h3><p>Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.</p><button class="show-more">Learn more</button></div>
            <div><h3>House rules</h3><p>Check-in after 2:00 pm</p><p>Checkout before 11:00 am</p><p>3 guests maximum</p><button class="show-more">Learn more</button></div>
            <div><h3>Safety & property</h3><p>Carbon monoxide alarm not reported</p><p>Smoke alarm not reported</p><p>Exterior security cameras on property</p><button class="show-more">Learn more</button></div>
          </section>

          <section class="section nearby">
            <div class="nearby-head"><h2>More stays nearby</h2><span>1 / 2　◯ ❯</span></div>
            <div class="nearby-grid">
              ${D.photos.slice(0,5).map((p,n)=>`
                <article><img src="${p.url}" alt=""><b>${["Beautiful Studio with a view to die for","NAQAB - 1bhk with private pool","Greentique Luxury Flat with plunge pool, Calangute","The Tropical Studio | 5 mins to Beach","Luxury Casa Bella 1BHK with plunge pool, Calangute"][n]}</b><div>₹${[23600,42218,44506,22824,39942][n].toLocaleString()}　★ ${[4.91,4.95,4.94,4.96,4.95][n]}</div></article>`).join("")}
            </div>
          </section>
        </div>
      </div>
    </main>`;

  bindPage();
}

function monthHtml(name,total,start,selected){
  const cells=[];
  for(let n=0;n<start;n++)cells.push('<span class="date empty"></span>');
  for(let d=1;d<=total;d++){
    const active=selected&&(d===18||d===23);
    const range=selected&&d>=18&&d<=23;
    cells.push(`<span class="date ${active?"selected":""} ${range?"in-range":""}">${d}</span>`);
  }
  return `<div class="month"><h3>${name}</h3><div class="week"><span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span></div><div class="dates">${cells.join("")}</div></div>`;
}

function bindPage(){
  root.querySelectorAll("[data-i]").forEach(el=>el.onclick=()=>{i=+el.dataset.i;tour()});

  const tabs=[...root.querySelectorAll(".tab[data-target]")];
  const sections=tabs.map(t=>document.getElementById(t.dataset.target)).filter(Boolean);

  tabs.forEach(tab=>tab.onclick=()=>{
    tabs.forEach(t=>t.classList.toggle("active",t===tab));
    document.getElementById(tab.dataset.target)?.scrollIntoView({behavior:"smooth",block:"start"});
  });

  const io=new IntersectionObserver(entries=>{
    const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(visible)tabs.forEach(t=>t.classList.toggle("active",t.dataset.target===visible.target.id));
  },{rootMargin:"-110px 0px -58% 0px",threshold:[.05,.2,.5]});
  sections.forEach(s=>io.observe(s));

  const bookingWrap=root.querySelector(".booking-wrap");
  const booking=root.querySelector(".booking");
  const reviews=document.getElementById("reviews");
  const layout=root.querySelector(".content-layout");
  const pageEl=root.querySelector(".page");

  if(bookingWrap&&booking&&reviews&&layout&&pageEl){
    const bookingStartY=bookingWrap.getBoundingClientRect().top+window.scrollY-18;

    const syncBooking=()=>{
      const pageRect=pageEl.getBoundingClientRect();
      const wrapRect=bookingWrap.getBoundingClientRect();
      const bookingHeight=booking.offsetHeight;
      const scrollY=window.scrollY;
      const startY=bookingStartY;
      const reviewsTop=reviews.getBoundingClientRect().top+scrollY;
      const stopDocY=reviewsTop-bookingHeight-24;

      if(scrollY<=startY){
        bookingWrap.classList.remove("booking-wrap-floating","booking-wrap-stopped");
        booking.classList.remove("booking-floating","booking-stopped");
        bookingWrap.style.cssText="";
        booking.style.cssText="";
      }else if(scrollY<stopDocY){
        bookingWrap.classList.remove("booking-wrap-stopped");
        bookingWrap.classList.add("booking-wrap-floating");
        booking.classList.remove("booking-stopped");
        booking.classList.add("booking-floating");
        bookingWrap.style.top="18px";
        bookingWrap.style.right=Math.max(0,window.innerWidth-pageRect.right)+"px";
        bookingWrap.style.width=wrapRect.width+"px";
        booking.style.top="0";
        booking.style.width="100%";
      }else{
        bookingWrap.classList.remove("booking-wrap-floating");
        bookingWrap.classList.add("booking-wrap-stopped");
        booking.classList.remove("booking-floating");
        booking.classList.add("booking-stopped");
        bookingWrap.style.top=(reviews.offsetTop-bookingHeight-58)+"px";
        bookingWrap.style.right="0";
        bookingWrap.style.width=wrapRect.width+"px";
        booking.style.top="0";
        booking.style.width="100%";
      }
    };

    addEventListener("scroll",syncBooking,{passive:true});
    addEventListener("resize",syncBooking);
    requestAnimationFrame(syncBooking);
  }
}

function tour(){
  root.innerHTML=`
    <div class="overlay" role="dialog" aria-modal="true">
      <div class="overlay-top"><button class="pill" id="back">‹ Back</button><strong>Photo tour</strong><div>↗ Share &nbsp; ♡ Save</div></div>
      <div class="tour-inner">
        <div class="thumb-grid">${D.photos.map((p,n)=>`<button class="thumb" data-scroll-index="${n}"><img src="${p.url}" alt="${p.caption}"><figcaption>${p.caption}</figcaption></button>`).join("")}</div>
        ${D.photos.map((p,n)=>`<section class="room-block" id="tour-photo-${n}"><div><h2>${p.room}</h2><p class="sub">${p.amenities}</p></div><button class="photo-large-button" data-i="${n}"><img class="room-photo" src="${p.url}" alt="${p.caption}"></button></section>`).join("")}
      </div>
    </div>`;
  root.querySelector("#back").onclick=page;

  root.querySelectorAll("[data-scroll-index]").forEach(el=>{
    el.onclick=()=>{
      const index=+el.dataset.scrollIndex;
      document.getElementById("tour-photo-"+index)?.scrollIntoView({
        behavior:"smooth",
        block:"center"
      });
    };
  });

  root.querySelectorAll(".photo-large-button[data-i]").forEach(el=>{
    el.onclick=()=>{
      i=+el.dataset.i;
      light();
    };
  });
}

function light(){
  const p=D.photos[i];
  root.innerHTML=`
    <div class="overlay lightbox" role="dialog" aria-modal="true" tabindex="-1">
      <div class="overlay-top"><button class="pill" id="tour">▦</button><strong>${p.caption}</strong><div class="counter">${i+1} of ${D.photos.length} <button class="pill" id="close">×</button></div></div>
      <button class="nav-arrow prev" id="prev" aria-label="Previous photo">‹</button>
      <div class="lightbox-center"><img class="lightbox-img" src="${p.url}" alt="${p.caption}"></div>
      <button class="nav-arrow next" id="next" aria-label="Next photo">›</button>
    </div>`;
  root.querySelector("#close").onclick=page;
  root.querySelector("#tour").onclick=tour;
  root.querySelector("#prev").onclick=()=>{i=(i+D.photos.length-1)%D.photos.length;light()};
  root.querySelector("#next").onclick=()=>{i=(i+1)%D.photos.length;light()};
  root.querySelector(".lightbox").focus();
}

addEventListener("keydown",e=>{
  if(i<0)return;
  if(e.key==="Escape")tour();
  if(e.key==="ArrowLeft"){i=(i+D.photos.length-1)%D.photos.length;light()}
  if(e.key==="ArrowRight"){i=(i+1)%D.photos.length;light()}
});
page();