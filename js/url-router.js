document.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches("div a")) {
    return;
  }
  e.preventDefault();
  route(target.href); // Pass the target href to the route function
});

const routes = {
  "/": {
    template: "/index.html",
  },
  "/contact": {
    template: "/contact.html",
  },
  "/work": {
    template: "/work.html", // Added route for /work
  },
};

const route = (href) => {
  // window.history.pushState(state, unused, target link);
  window.history.pushState({}, "", href);
  locationHandler();
};

const locationHandler = async () => {
  const location = window.location.pathname; // get the url path
  // if the path length is 0, set it to primary page route
  if (location.length == 0) {
    location = "/";
  }
  // get the route object from the routes object
  const route = routes[location] || routes["404"];
  // get the html from the template
  const html = await fetch(route.template).then((response) => response.text());
};

// add an event listener to the window that watches for url changes
window.onpopstate = locationHandler;
// call the locationHandler function to handle the initial url
locationHandler();
