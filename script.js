/* =========================================================
   Venus Elitee Spa — vanilla interactions
   ========================================================= */
(function () {
  "use strict";

  /* ---------- business config (mirrors src/lib/spa.ts) ---------- */
  var SPA = {
    name: "Venus Elitee Spa",
    phone: "+91 87939 69830",
    tel: "tel:+918793969830",
    hours: {
      open: "10:30",
      close: "21:00",
      label: "10:30 AM – 9:00 PM",
    },
    rating: 4.4,
    reviewCount: 9,
    maps:
      "https://www.google.com/maps/search/?api=1&query=Venus+Elitee+Spa+Glen+Avenue+Vantmure+Corner+Sangli+Miraj+Rd+Miraj+Maharashtra+416410",
  };

  function wa(message) {
    return "https://wa.me/918793969830?text=" + encodeURIComponent(message);
  }
  var WA_DEFAULT = wa(
    "Hello Venus Elitee Spa, I would like to know more about your spa services and availability."
  );

  /* ---------- data (mirrors components) ---------- */
  var SERVICES = [
    {
      icon: "leaf",
      img: "assets/s1.jpeg",
      title: "Jacuzzi Massage",
      description: "Indulge in the ultimate spa experience with warm bubbling water, soothing aromatherapy and expert touch to melt away stress and refresh your body & mind.",
      durations: [
        { minutes: 60, price: 8000 },
        { minutes: 90, price: 10000 }
      ],
      highlights: ["Warm Jacuzzi Therapy", "Aromatherapy", "Expert Massage", "Romantic Ambiance"],
      tags: ["Couple Experience", "Calming Ambience", "Premium Comfort"]
    },
    {
      icon: "sparkles",
      img: "assets/s3.jpeg",
      title: "Thai Massage",
      description: "Traditional Thai therapy combining stretching and pressure techniques to improve flexibility, relieve tension and increase energy flow.",
      durations: [
        { minutes: 60, price: 3000 },
        { minutes: 90, price: 4500 }
      ],
      tags: ["Traditional Thai", "Stretching", "Flexibility"]
    },
    {
      icon: "heart",
      img: "assets/s4.jpeg",
      title: "Deep Tissue Massage",
      description: "A focused, therapeutic massage that targets deep muscle tension, chronic pain & stiffness.",
      durations: [
        { minutes: 60, price: 3000 },
        { minutes: 90, price: 4000 }
      ],
      tags: ["Therapeutic", "Deep Muscle", "Pain Relief"]
    },
    {
      icon: "leaf",
      img: "assets/s5.jpeg",
      title: "Balinese Massage",
      description: "A traditional Balinese massage that combines gentle stretches, acupressure, and aromatherapy to relieve tension, improve circulation, and restore balance.",
      durations: [
        { minutes: 60, price: 2500 },
        { minutes: 90, price: 3000 }
      ],
      tags: ["Aromatherapy Oils", "Relax & Unwind", "Rejuvenate"]
    },
    {
      icon: "flower2",
      img: "assets/s6.jpeg",
      title: "Swedish Massage",
      description: "A classic relaxation therapy using long, smooth strokes, kneading, and circular movements to ease muscle tension, improve blood flow, and promote full-body wellness.",
      durations: [
        { minutes: 60, price: 2000 },
        { minutes: 90, price: 3000 }
      ],
      tags: ["Classic Therapy", "Full Body", "Relaxation"]
    },
    {
      icon: "waves",
      img: "assets/s7.jpeg",
      title: "Couple Massage",
      description: "Enjoy a relaxing massage together in a serene spa setting.",
      durations: [
        { minutes: 60, price: 3000 },
        { minutes: 120, price: 5000 }
      ],
      tags: ["Couple Experience", "Serene Setting"]
    },
    {
      icon: "flower2",
      img: "assets/s8.jpeg",
      title: "Relaxing Aroma Massage",
      description: "A soothing full-body massage using aromatic essential oils to calm the mind and rejuvenate the body.",
      durations: [
        { minutes: 60, price: 2000 },
        { minutes: 90, price: 3000 }
      ],
      tags: ["Aroma Therapy", "Full Body", "Relaxation"]
    }
  ];

  var WHY = [
    { icon: "leaf", title: "Peaceful Ambience", text: "Soft lighting, calm music and a hushed, unhurried atmosphere." },
    { icon: "shield", title: "Private Treatment Rooms", text: "Discreet, enclosed rooms for individuals and couples." },
    { icon: "sparkles", title: "Comfortable Environment", text: "Freshly prepared linen and tidy, well-kept spaces." },
    { icon: "heart", title: "Wellness Focused", text: "Sessions designed around relaxation and everyday recovery." },
    { icon: "users", title: "Professional Service", text: "Trained therapists, courteous staff, respectful care." },
    { icon: "pin", title: "Convenient Miraj Location", text: "Glen Avenue, Vantmure Corner — easy to reach and park." },
  ];

  var PHOTOS = [
    { src: "assets/v6.jpeg", alt: "Couples treatment room with chandelier, paisley mural and jacuzzi tub", span: "span-2x2" },
    { src: "assets/v2.jpeg", alt: "Twin massage room with swan towel art, glass shower and mood lighting", span: "" },
    { src: "assets/v7.jpeg", alt: "Golden Thai massage room with floor mattress and herbal compress balls", span: "" },
    { src: "assets/v3.jpeg", alt: "Reception lounge with paisley mural, velvet sofas and floral carpet", span: "" },
    { src: "assets/v5.jpeg", alt: "Marble shower area with botanical wallpaper and copper accents", span: "" },
        { src: "assets/v8.jpeg", alt: "Venus Elitee Spa exterior signage on the building facade", span: "" },
  ];

  var SERVICE_OPTIONS = [
    "Jacuzzi Massage",
    "Thai Massage",
    "Deep Tissue Massage",
    "Balinese Massage",
    "Swedish Massage",
    "Couple Massage",
    "Relaxing Aroma Massage",
    "Not sure yet",
  ];

  /* ---------- inline icon paths (lucide) ---------- */
  var ICONS = {
    flower2: '<path d="M11 3a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0z"/><path d="M3 11a1 1 0 0 1 0 2h3a1 1 0 0 1 0-2z"/><path d="M21 11a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2z"/><path d="M11 18a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0z"/><path d="M5 6l1.5 1.5M18 18l-1.5-1.5M5 18l1.5-1.5M18 6l-1.5 1.5"/><circle cx="12" cy="12" r="3"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>',
    sparkles: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    waves: '<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',
    gem: '<path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    chat: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/>',
  };

  function svg(name, cls) {
    return (
      '<svg viewBox="0 0 24 24" class="' + (cls || "ico") + '" aria-hidden="true">' +
      (ICONS[name] || "") +
      "</svg>"
    );
  }

  /* ---------- render service cards ---------- */
  function renderServices() {
    var grid = document.getElementById("services-grid");
    if (!grid) return;
    SERVICES.forEach(function (s) {
      var a = document.createElement("a");
      a.href = wa("Hello Venus Elitee Spa, I would like to enquire about the " + s.title + ".");
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.className = "reveal";
      a.setAttribute("data-reveal", "");

      var durationHtml = s.durations.map(function (d) {
        return (
          '<div class="service-duration">' +
            '<span class="duration-time">' + d.minutes + " Minutes</span>" +
            '<span class="duration-price">₹' + d.price.toLocaleString("en-IN") + "</span>" +
          "</div>"
        );
      }).join("");

      var tagsHtml = (s.tags || []).map(function (t) {
        return '<span class="service-tag">' + t + "</span>";
      }).join("");

      var highlightsHtml = (s.highlights || []).map(function (h) {
        return '<span class="service-highlight">' + h + "</span>";
      }).join("");

      var card = document.createElement("article");
      card.className = "service-card";
      card.innerHTML =
        '<div class="service-media">' +
          '<img src="' + s.img + '" alt="' + s.title + '" class="service-img" loading="lazy" />' +
        "</div>" +
        '<div class="service-icon">' + svg(s.icon, "ico") + "</div>" +
        '<h3 class="service-title">' + s.title + "</h3>" +
        '<p class="service-text">' + s.description + "</p>" +
        (s.highlights && s.highlights.length ? '<div class="service-highlights">' + highlightsHtml + "</div>" : "") +
        '<div class="service-durations">' + durationHtml + "</div>" +
        '<div class="service-tags">' + tagsHtml + "</div>" +
        '<span class="service-enquire">' + svg("chat", "ico") + " Enquire on WhatsApp</span>";
      a.appendChild(card);
      grid.appendChild(a);
    });
  }

  /* ---------- render why cards ---------- */
  function renderWhy() {
    var grid = document.getElementById("why-grid");
    if (!grid) return;
    WHY.forEach(function (w) {
      var card = document.createElement("div");
      card.className = "reveal";
      card.setAttribute("data-reveal", "");
      card.innerHTML =
        '<div class="why-card">' +
        svg(w.icon, "ico") +
        '<h3 class="why-title">' + w.title + "</h3>" +
        '<p class="why-text">' + w.text + "</p>" +
        "</div>";
      grid.appendChild(card);
    });
  }

  /* ---------- render gallery ---------- */
  function renderGallery() {
    var grid = document.getElementById("gallery-grid");
    if (!grid) return;
    PHOTOS.forEach(function (p, i) {
      var cell = document.createElement("div");
      cell.className = "gallery-cell reveal " + p.span;
      cell.setAttribute("data-reveal", "");
      var btn = document.createElement("button");
      btn.className = "gallery-btn";
      btn.setAttribute("data-index", String(i));
      btn.setAttribute("aria-label", "Open image: " + p.alt);
      btn.innerHTML =
        '<img src="' + p.src + '" alt="' + p.alt + '" loading="lazy" />' +
        '<span class="gallery-grad"></span>' +
        '<span class="gallery-view">View</span>';
      cell.appendChild(btn);
      grid.appendChild(cell);
    });
  }

  /* ---------- render review stars ---------- */
  function renderStars() {
    var el = document.getElementById("review-stars");
    if (!el) return;
    var full = Math.floor(SPA.rating);
    for (var i = 0; i < 5; i++) {
      el.insertAdjacentHTML(
        "beforeend",
        svg(i < full ? "star" : "star", i < full ? "ico filled" : "ico empty")
      );
    }
  }

  /* ---------- scroll reveal ---------- */
  function initReveal() {
    var els = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("visible"); });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach(function (el) {
      var d = el.getAttribute("data-delay");
      if (d) el.style.transitionDelay = d + "ms";
      io.observe(el);
    });
  }

  /* ---------- sticky nav solid state ---------- */
  function initNav() {
    var header = document.getElementById("site-header");
    if (header) {
      var onScroll = function () {
        if (window.scrollY > 24) header.classList.add("solid");
        else header.classList.remove("solid");
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    var toggle = document.getElementById("menu-toggle");
    var menu = document.getElementById("mobile-menu");
    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        var open = menu.classList.toggle("open");
        toggle.classList.toggle("open", open);
      });
      menu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          menu.classList.remove("open");
          toggle.classList.remove("open");
        });
      });
    }
  }

  /* ---------- gallery lightbox ---------- */
  function initLightbox() {
    var box = document.getElementById("lightbox");
    var img = document.getElementById("lightbox-img");
    var closeBtn = box ? box.querySelector(".lightbox-close") : null;
    if (!box || !img) return;

    document.addEventListener("click", function (e) {
      var btn = e.target.closest && e.target.closest(".gallery-btn");
      if (btn) {
        var idx = parseInt(btn.getAttribute("data-index"), 10);
        var p = PHOTOS[idx];
        if (p) {
          img.src = p.src;
          img.alt = p.alt;
          box.classList.add("open");
          document.body.style.overflow = "hidden";
        }
        return;
      }
      if (e.target === box) close();
    });
    if (closeBtn) closeBtn.addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });

    function close() {
      box.classList.remove("open");
      document.body.style.overflow = "";
    }
  }

  /* ---------- booking form -> WhatsApp ---------- */
  function initBooking() {
    var select = document.getElementById("service");
    if (select) {
      SERVICE_OPTIONS.forEach(function (s) {
        var opt = document.createElement("option");
        opt.value = s;
        opt.textContent = s;
        select.appendChild(opt);
      });
    }

    var form = document.getElementById("booking-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = form.elements;
      var name = f["name"].value;
      var phone = f["phone"].value;
      var date = f["date"].value;
      var time = f["time"].value;
      var service = f["service"].value;
      var guests = f["guests"].value;
      var message = f["message"].value;

      var lines = [
        "Hello Venus Elitee Spa, I would like to book an appointment.",
        "",
        "Name: " + (name || "-"),
        "Phone: " + (phone || "-"),
        "Preferred date: " + (date || "-"),
        "Preferred time: " + (time || "-"),
        "Service: " + service,
        "Guests: " + guests,
      ];
      if (message) lines.push("Message: " + message);

      window.open(wa(lines.join("\n")), "_blank", "noopener,noreferrer");
    });
  }

  /* ---------- boot ---------- */
  function init() {
    renderServices();
    renderWhy();
    renderGallery();
    renderStars();
    initReveal();
    initNav();
    initLightbox();
    initBooking();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
