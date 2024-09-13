var arr = [
  "https://umd-today.files.svdcdn.com/production/gifs/Hiphop_collage2_copy.gif?dm=1693231608",
  "./images/Free PSD _ Prime Friday Night Club Party Flyer Design PSD _ PSDFreebies_com.jpg",
  "./images/Party Flyer Graphic Design __ selling PSD on instagram.jpg",
  "./images/party flyers.jpg",
];

let i = 0;

function showSlides() {
  let img = $("#first");

  function x() {
    if (i >= arr.length) {
      i = 0;
    }

    img.attr("src", arr[i]);

    i++;
  }
  setInterval(x, 2000);
}

showSlides();

function MakeDetailes(title, name, date, image, category) {
  var obj = {};
  (obj.title = title), (obj.name = name), (obj.date = date);
  (obj.image = image), (obj.category = category);
  return obj;
}

var p1 = MakeDetailes(
  "African Vibes",
  "Fiero",
  "12/09/2024",
  "./images/African Vibes Party Flyer Template - Freebie PSD Download.jpg",
  "camping",
  "Party"
);
var p2 = MakeDetailes(
  "Triad",
  "Fiero",
  "20/09/2024",
  "./images/Business Flyer Design.jpg",
  "Party"
);
var p3 = MakeDetailes(
  "Flayer Templates",
  "Reuis",
  "03/10/2024",
  "./images/Download PSD Flyer Templates, Photoshop Invites - Creativeflyers.jpg",
  "Party"
);
var p4 = MakeDetailes(
  "Urbain",
  "Mark B",
  "19/09/2024",
  "./images/Download the Urban Beats Party Flyer Template - PSD - FFFLYER.jpg",
  "Festival"
);
var p5 = MakeDetailes(
  "Birthday Flayer",
  "BB Band",
  "12/09/2024",
  "./images/Flyer Design Event flyer or poster Birthday Flyer.jpg",
  "Festival"
);
var p6 = MakeDetailes(
  "Nigth Club Party",
  "Vipa",
  "05/10/2024",
  "./images/Free PSD _ Prime Friday Night Club Party Flyer Design PSD _ PSDFreebies_com.jpg",
  "Event"
);
var p7 = MakeDetailes(
  "Jacob",
  "Jacob",
  "27/09/2024",
  "./images/Party Flyer Graphic Design __ selling PSD on instagram.jpg",
  "Festival"
);
var p8 = MakeDetailes(
  "Tusday Party",
  "Marchmello",
  "12/11/2024",
  "./images/party flyers.jpg",
  "Event"
);
var p9 = MakeDetailes(
  "Neon",
  "Jank-zee",
  "15/11/2024",
  "./images/Neon Party.jpg",
  "Event"
);
var p10 = MakeDetailes(
  "Capital Derby",
  "Rades",
  "04/10/2024",
  "./images/derby.jpg",
  "FootBall"
);

var detailesArray = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

// Function to filter events based on category
function filterByCategory(array, category) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].category === category) {
      result.push(array[i]);
    }
  }
  return result;
}

var filteredByParty = filterByCategory(detailesArray, "party");
var filteredByFestival = filterByCategory(detailesArray, "festival");
var filteredByEvent = filterByCategory(detailesArray, "event");
var filteredByFootball = filterByCategory(detailesArray, "football");

function displayByCategorie(selectedCategory) {
  var filtered = filterByCategory(detailesArray, selectedCategory);
  $("main").empty();
  displayAll(filtered);
}

$("#categoryFilter").on("change", function () {
  const selectedCategory = $("#categoryFilter").val();

  displayByCategorie(selectedCategory);
});

// Function to filter events based on event
function filterEvents() {
  const searchValue = $("#searchBar").val().toLowerCase();

  $(".event").each(function () {
    const title = $(this).find("h1").text().toLowerCase();

    const matchesSearch = title.includes(searchValue);

    if (matchesSearch) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
}

function displayOne(event) {
  $("main").append(`
    <div class="event" data-category="${event.category || ""}">
      <h1>Title: ${event.title}</h1>
      <h2>Artist Name: ${event.name}</h2>
      <h2>Date: ${event.date}</h2>
      <img src="${
        event.image
      }" class="img" alt="Event Image" style="width: 200px; height: 200px;" />
    </div>
  `);
}

function displayAll(detailesArray) {
  $.each(detailesArray, function (i, element) {
    displayOne(element);
  });

  filterEvents();
}

displayAll(detailesArray);

$("#searchBar").on("input", filterEvents);

let f;
$(".img").click(function () {
  let selected = $(this).parent();
  f = selected;
  localStorage.setItem("data", f.prop("outerHTML"));

  window.location.href = "details.html";
});
