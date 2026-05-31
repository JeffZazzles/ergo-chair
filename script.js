const chairs = [
  {
    rank: 1,
    model: "Aeron Size A",
    maker: "Herman Miller",
    retailer: "Herman Miller Spain / official Aeron buying guide",
    price: "From €2,377",
    tier: "premium",
    fit: "Best overall petite fit",
    height: "40.1-50.7 cm",
    depth: "44.2 cm",
    lumbar: "PostureFit or optional lumbar",
    materials: "Full Pellicle mesh seat and back",
    capacity: "Up to 136 kg",
    rationale: "Explicitly recommended by Herman Miller for the 142-163 cm height band, with excellent airflow and a low enough seat-height range. Fixed depth is a little long for very short femurs."
  },
  {
    rank: 2,
    model: "Zody",
    maker: "Haworth",
    retailer: "Spacio Spain + Haworth official specs",
    price: "€1,050.97 IVA incl.",
    tier: "premium",
    fit: "Best lumbar tuning",
    height: "41.2-54.0 cm",
    depth: "40.0-45.5 cm",
    lumbar: "PAL pelvic and asymmetrical lumbar",
    materials: "Mesh back + upholstered seat",
    capacity: "145-150 kg",
    rationale: "One of the strongest premium fits because the seat can shorten to 40 cm and the PAL system gives unusually fine lower-back control."
  },
  {
    rank: 3,
    model: "Series 1",
    maker: "Steelcase",
    retailer: "Steelcase EU shop / Amazon.es",
    price: "€639 VAT incl.",
    tier: "value",
    fit: "Premium-value blend",
    height: "41.9-54.6 cm",
    depth: "40.0-45.7 cm functional",
    lumbar: "Integrated LiveBack support",
    materials: "3D knit / mesh-like back + upholstered seat",
    capacity: "Tested to 150 kg",
    rationale: "A strong balance of petite fit, lumbar support, and value. The functional 40 cm seat-depth floor is especially useful for short legs."
  },
  {
    rank: 4,
    model: "Sayl",
    maker: "Herman Miller",
    retailer: "Herman Miller Spain / official Sayl specs",
    price: "Unspecified in reviewed snippets",
    tier: "premium",
    fit: "Compact premium frame",
    height: "38.1-55.9 cm depending configuration",
    depth: "40.6-45.7 cm adjustable",
    lumbar: "PostureFit sacral support; optional adjustable lumbar",
    materials: "Elastomer suspension back + foam seat",
    capacity: "159 kg",
    rationale: "A compact design-forward chair with unusually low-height configurations and supportive suspension, making it better scaled to smaller users than many executive chairs."
  },
  {
    rank: 5,
    model: "Stay",
    maker: "ACTIU",
    retailer: "ACTIU Store / Amazon.es / ACTIU technical sheet",
    price: "€425 on official black-mesh listing",
    tier: "value",
    fit: "Best Spain-made value",
    height: "39-50 cm",
    depth: "39-46 cm",
    lumbar: "Lumbar support",
    materials: "Technical mesh back + upholstered seat",
    capacity: "Unspecified",
    rationale: "The standout Spain-made value option because public technical data show a rare low seat start and petite-friendly 39-46 cm depth range at a lower price."
  },
  {
    rank: 6,
    model: "Leap",
    maker: "Steelcase",
    retailer: "Amazon.es + Steelcase brochure/specs",
    price: "Unspecified",
    tier: "premium",
    fit: "Lower-back controls",
    height: "39.4-52.1 cm",
    depth: "40.0-47.6 cm",
    lumbar: "Adjustable lumbar height and lower-back firmness",
    materials: "Foam seat and back with slatted back airflow",
    capacity: "Up to 136 kg",
    rationale: "One of the strongest choices if lower-back tuning matters more than pure airflow, though it will generally feel warmer than the best mesh chairs."
  },
  {
    rank: 7,
    model: "Liberty",
    maker: "Humanscale",
    retailer: "Thomann Spain + Humanscale references",
    price: "€639 IVA incl.",
    tier: "value",
    fit: "Self-adjusting back",
    height: "42.0-53.0 cm",
    depth: "43.5-48.5 cm",
    lumbar: "Self-adjusting tri-panel mesh lumbar",
    materials: "Mesh back + upholstered seat",
    capacity: "136 kg",
    rationale: "Compelling if you want the back to self-adjust, but the seat can still feel a touch long unless the rest of the workstation is dialed in carefully."
  },
  {
    rank: 8,
    model: "Lively",
    maker: "Haworth",
    retailer: "Ergonaturewood EU + Haworth product info",
    price: "€569 taxes incl.",
    tier: "value",
    fit: "Quiet value pick",
    height: "39.4-51.8 cm",
    depth: "42.5-47.7 cm",
    lumbar: "Height-adjustable lumbar",
    materials: "Mesh back + comfort-foam seat",
    capacity: "110 kg",
    rationale: "A quietly strong petite-fit value because its minimum seat height starts under 40 cm and seat-depth adjustment is included."
  },
  {
    rank: 9,
    model: "Soji",
    maker: "Haworth",
    retailer: "Spacio Spain + Haworth EU specs",
    price: "€716.29 IVA incl.",
    tier: "value",
    fit: "Medium-premium choice",
    height: "40-52 cm",
    depth: "42.5 cm base plus 6.4 cm adjustment",
    lumbar: "Vertically adjustable lumbar",
    materials: "Mesh/plastic back + upholstered seat",
    capacity: "120 kg",
    rationale: "Low enough for many 158 cm users, with clear lumbar support and enough depth adjustment to tune the knee gap."
  },
  {
    rank: 10,
    model: "Verus",
    maker: "Herman Miller",
    retailer: "Herman Miller EU / Ciat Design Europe",
    price: "From €805",
    tier: "value",
    fit: "Compact depth range",
    height: "41.6-51.5 cm",
    depth: "39.7-45.3 cm",
    lumbar: "Built-in sacral support; optional adjustable lumbar",
    materials: "Triflex polymer or suspension back + upholstered seat",
    capacity: "Unspecified",
    rationale: "Better for this user than its lower profile suggests because the seat-depth range is compact and friendly to shorter femurs."
  },
  {
    rank: 11,
    model: "Fern",
    maker: "Haworth",
    retailer: "Spacio Spain + Haworth EU pages",
    price: "€1,486.29 IVA incl.",
    tier: "premium",
    fit: "Premium comfort",
    height: "42.0-54.0 cm",
    depth: "39.5-48.3 cm",
    lumbar: "Optional lumbar support",
    materials: "Mesh, digital knit, or leather back + upholstered seat",
    capacity: "145 kg",
    rationale: "Ergonomically excellent, but less naturally petite-scaled than Aeron A or Zody."
  },
  {
    rank: 12,
    model: "Capisco Puls 8020",
    maker: "HÅG",
    retailer: "HÅG Office Europe",
    price: "€497 taxes incl.",
    tier: "value",
    fit: "Movement-friendly alternative",
    height: "41-54 cm low lift; 46-64 cm standard",
    depth: "37-46 cm",
    lumbar: "Saddle geometry and back-height tuning",
    materials: "Plastic back + upholstered seat pad",
    capacity: "Unspecified",
    rationale: "Excellent lower-body dimensions for short legs, but a niche posture chair that some people love and others do not want for full-time keyboarding."
  },
  {
    rank: 13,
    model: "TNK Flex",
    maker: "ACTIU",
    retailer: "Spacio Spain / ACTIU technical sheet",
    price: "From €742.29 IVA incl.",
    tier: "value",
    fit: "Respectable dimensions",
    height: "42-53 cm",
    depth: "42 cm",
    lumbar: "Height-adjustable lumbar described in ACTIU sources",
    materials: "Upholstered task chair",
    capacity: "Unspecified",
    rationale: "Strong mechanism and respectable dimensions, but public specs suggest a less petite-friendly package and weaker airflow than Stay."
  },
  {
    rank: 14,
    model: "Trim",
    maker: "ACTIU",
    retailer: "Spacio Spain / ACTIU official sources",
    price: "From €395.69 IVA incl.",
    tier: "value",
    fit: "Spanish value",
    height: "42.5-52.5 cm",
    depth: "Unspecified",
    lumbar: "Back-height regulation on mesh versions",
    materials: "Mesh-back or upholstered variants",
    capacity: "Unspecified",
    rationale: "Good Spanish value with a sensible height floor, but public technical detail is thinner than for Stay, so fit confidence is lower."
  },
  {
    rank: 15,
    model: "LÅNGFJÄLL",
    maker: "IKEA",
    retailer: "IKEA Spain",
    price: "€169-€209",
    tier: "budget",
    fit: "Best low-cost dimensions",
    height: "43-53 cm",
    depth: "41 cm",
    lumbar: "Fixed visible lumbar support",
    materials: "Upholstered foam/fabric",
    capacity: "110 kg",
    rationale: "The best pure dimensions among lower-cost IKEA chairs. It lacks premium lumbar tuning and mesh breathability, but the 41 cm seat depth is genuinely useful."
  },
  {
    rank: 16,
    model: "ALEFJÄLL",
    maker: "IKEA",
    retailer: "IKEA Spain",
    price: "€369",
    tier: "budget",
    fit: "Good depth, taller start",
    height: "45-56 cm",
    depth: "42 cm adjustable",
    lumbar: "Not clearly specified",
    materials: "Leather/foam",
    capacity: "110 kg",
    rationale: "Seat depth is good, but the chair starts fairly high and runs warmer than mesh-backed rivals."
  },
  {
    rank: 17,
    model: "JÄRVFJÄLLET",
    maker: "IKEA",
    retailer: "IKEA Spain",
    price: "€249",
    tier: "risk",
    fit: "Airflow with fit caveats",
    height: "45-56 cm",
    depth: "46 cm",
    lumbar: "Adjustable lumbar support",
    materials: "Mesh back + upholstered/leather seat",
    capacity: "110 kg",
    rationale: "Better for back support and airflow than many budget chairs, but the 45 cm minimum height and 46 cm depth are tougher for short legs."
  },
  {
    rank: 18,
    model: "Lino",
    maker: "Herman Miller",
    retailer: "Herman Miller Spain",
    price: "From €725.25",
    tier: "risk",
    fit: "Strong back, high start",
    height: "47.0-57.2 cm",
    depth: "39.4-46.4 cm",
    lumbar: "Integrated thoracic, lumbar, and sacral support",
    materials: "Breathable Duo Suspension back + upholstered seat",
    capacity: "159 kg",
    rationale: "Excellent back design, but the published Spain seat-height range starts too high for many 158 cm users."
  },
  {
    rank: 19,
    model: "MARKUS",
    maker: "IKEA",
    retailer: "IKEA Spain",
    price: "€138.99 promo; regular €188.99",
    tier: "risk",
    fit: "Low height, long depth",
    height: "40-57 cm",
    depth: "47 cm",
    lumbar: "Integrated support",
    materials: "Mesh back + foam seat",
    capacity: "110 kg",
    rationale: "The low seat-height floor helps, but the long 47 cm seat depth is likely to bother a short-legged user."
  },
  {
    rank: 20,
    model: "GRÖNFJÄLL",
    maker: "IKEA",
    retailer: "IKEA Spain",
    price: "€329",
    tier: "risk",
    fit: "Weakest fit in top 20",
    height: "46-57 cm",
    depth: "46 cm",
    lumbar: "Adjustable lumbar support",
    materials: "Upholstered foam/fabric",
    capacity: "110 kg",
    rationale: "The weakest fit for the stated body type because it starts high and stays fairly deep, even though the lumbar system is stronger than MARKUS."
  }
];

const chartData = [
  { name: "Sayl", min: 38.1, max: 55.9 },
  { name: "Stay", min: 39.0, max: 50.0 },
  { name: "Leap", min: 39.4, max: 52.1 },
  { name: "Lively", min: 39.4, max: 51.8 },
  { name: "Aeron A", min: 40.1, max: 50.7 },
  { name: "Soji", min: 40.0, max: 52.0 },
  { name: "Zody", min: 41.2, max: 54.0 },
  { name: "Verus", min: 41.6, max: 51.5 },
  { name: "Series 1", min: 41.9, max: 54.6 },
  { name: "Liberty", min: 42.0, max: 53.0 }
];

const chairGrid = document.querySelector("#chairGrid");
const chairCount = document.querySelector("#chairCount");
const chairSearch = document.querySelector("#chairSearch");
const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
const heightChart = document.querySelector("#heightChart");
let activeFilter = "all";

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[character];
  });
}

function chairMatchesSearch(chair, query) {
  if (!query) {
    return true;
  }

  const haystack = [
    chair.model,
    chair.maker,
    chair.retailer,
    chair.price,
    chair.fit,
    chair.height,
    chair.depth,
    chair.lumbar,
    chair.materials,
    chair.capacity,
    chair.rationale
  ].join(" ").toLowerCase();

  return haystack.includes(query.toLowerCase());
}

function getFilteredChairs() {
  const query = chairSearch.value.trim();
  return chairs.filter((chair) => {
    const filterMatch = activeFilter === "all" || chair.tier === activeFilter;
    return filterMatch && chairMatchesSearch(chair, query);
  });
}

function renderChairs() {
  const filtered = getFilteredChairs();
  chairCount.textContent = `${filtered.length} of ${chairs.length} chairs shown`;

  chairGrid.innerHTML = filtered.map((chair) => {
    return `
      <article class="chair-card" data-tier="${chair.tier}">
        <div class="chair-rank">#${chair.rank}</div>
        <div class="chair-title">
          <h3>${escapeHtml(chair.model)}</h3>
          <span class="maker">${escapeHtml(chair.maker)}</span>
        </div>
        <div class="tag-row">
          <span class="tag">${escapeHtml(chair.fit)}</span>
          <span class="tag price">${escapeHtml(chair.price)}</span>
        </div>
        <dl class="spec-grid">
          <div>
            <dt>Seat height</dt>
            <dd>${escapeHtml(chair.height)}</dd>
          </div>
          <div>
            <dt>Seat depth</dt>
            <dd>${escapeHtml(chair.depth)}</dd>
          </div>
          <div>
            <dt>Lumbar</dt>
            <dd>${escapeHtml(chair.lumbar)}</dd>
          </div>
          <div>
            <dt>Capacity</dt>
            <dd>${escapeHtml(chair.capacity)}</dd>
          </div>
        </dl>
        <p class="rationale">${escapeHtml(chair.rationale)}</p>
        <p class="retailer">${escapeHtml(chair.retailer)}</p>
      </article>
    `;
  }).join("");
}

function renderHeightChart() {
  const chartMin = 38;
  const chartMax = 56;
  const span = chartMax - chartMin;

  heightChart.innerHTML = chartData.map((item) => {
    const left = ((item.min - chartMin) / span) * 100;
    const width = ((item.max - item.min) / span) * 100;

    return `
      <div class="range-row">
        <div class="range-name">${escapeHtml(item.name)}</div>
        <div class="range-track">
          <div class="range-bar" style="--left: ${left.toFixed(2)}%; --width: ${width.toFixed(2)}%;">
            <span class="range-value min">${item.min.toFixed(1)}</span>
            <span class="range-value max">${item.max.toFixed(1)}</span>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });
    renderChairs();
  });
});

chairSearch.addEventListener("input", renderChairs);

renderChairs();
renderHeightChart();
