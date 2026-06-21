// Sample data for the MVP. In a real project, this might come from a database.
const listings = [
  {
    name: "Old Town Drawing Studio",
    category: "Art Classes",
    area: "Old Town",
    description: "Beginner-friendly drawing and sketchbook classes for adults.",
    website: "https://example.com/old-town-drawing"
  },
  {
    name: "Leith Pottery Evenings",
    category: "Art Classes",
    area: "Leith",
    description: "Small group pottery sessions with hand-building and glazing.",
    website: "https://example.com/leith-pottery"
  },
  {
    name: "New Town Gallery Space",
    category: "Exhibitions",
    area: "New Town",
    description: "Changing exhibitions from emerging Scottish artists.",
    website: "https://example.com/new-town-gallery"
  },
  {
    name: "Meadows Summer Show",
    category: "Exhibitions",
    area: "Marchmont",
    description: "Seasonal exhibition of painting, print, and mixed media work.",
    website: "https://example.com/meadows-show"
  },
  {
    name: "Tollcross Art Supplies",
    category: "Art Shops",
    area: "Tollcross",
    description: "Paints, brushes, sketchbooks, inks, and student materials.",
    website: "https://example.com/tollcross-art"
  },
  {
    name: "Stockbridge Paper and Ink",
    category: "Art Shops",
    area: "Stockbridge",
    description: "Specialist paper, pens, inks, and printmaking supplies.",
    website: "https://example.com/paper-ink"
  },
  {
    name: "Portobello Print Studio",
    category: "Printmakers",
    area: "Portobello",
    description: "Risograph, screen printing, and short-run artist editions.",
    website: "https://example.com/portobello-print"
  },
  {
    name: "Canonmills Print Workshop",
    category: "Printmakers",
    area: "Canonmills",
    description: "Open access printmaking facilities and technical support.",
    website: "https://example.com/canonmills-print"
  },
  {
    name: "Morningside Frame House",
    category: "Framing",
    area: "Morningside",
    description: "Custom picture framing for artworks, posters, and textiles.",
    website: "https://example.com/frame-house"
  },
  {
    name: "Bruntsfield Creative Studio",
    category: "Creative Services",
    area: "Bruntsfield",
    description: "Design, illustration, photography, and creative project support.",
    website: "https://example.com/bruntsfield-creative"
  }
];

// Get the important page elements once so we can reuse them.
const searchInput = document.querySelector("#searchInput");
const categoryFilter = document.querySelector("#categoryFilter");
const listingsGrid = document.querySelector("#listingsGrid");
const resultsCount = document.querySelector("#resultsCount");
const submitForm = document.querySelector("#submitForm");
const formMessage = document.querySelector("#formMessage");

function showListings(itemsToShow) {
  // Clear the grid before adding the current search/filter results.
  listingsGrid.innerHTML = "";

  if (itemsToShow.length === 0) {
    listingsGrid.innerHTML = '<p class="empty-message">No listings found.</p>';
  }

  itemsToShow.forEach(function (listing) {
    const card = document.createElement("article");
    card.className = "listing-card";

    card.innerHTML = `
      <span class="category-pill">${listing.category}</span>
      <h3>${listing.name}</h3>
      <p class="listing-meta">${listing.area}</p>
      <p>${listing.description}</p>
      <a href="${listing.website}" target="_blank" rel="noopener">Visit website</a>
    `;

    listingsGrid.appendChild(card);
  });

  resultsCount.textContent = `Showing ${itemsToShow.length} listing${itemsToShow.length === 1 ? "" : "s"}`;
}

function filterListings() {
  const searchText = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filteredListings = listings.filter(function (listing) {
    // Search checks several fields so visitors can find listings easily.
    const searchableText = `
      ${listing.name}
      ${listing.category}
      ${listing.area}
      ${listing.description}
    `.toLowerCase();

    const matchesSearch = searchableText.includes(searchText);
    const matchesCategory =
      selectedCategory === "All" || listing.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  showListings(filteredListings);
}

// Run the filter whenever the visitor types or changes category.
searchInput.addEventListener("input", filterListings);
categoryFilter.addEventListener("change", filterListings);

// The form is UI only, so this prevents a page refresh and shows a message.
submitForm.addEventListener("submit", function (event) {
  event.preventDefault();
  formMessage.textContent = "Thanks! This demo form does not save listings yet.";
  submitForm.reset();
});

// Show all listings when the page first loads.
showListings(listings);
