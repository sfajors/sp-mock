document.addEventListener("DOMContentLoaded", function() {
  const containers = {
      aboutUs: document.getElementById("aboutUs"),
      teamMembers: document.getElementById("teamMembers"),
      tos: document.getElementById("tos"),
      pp: document.getElementById("pp")
  };

  const links = {
      navLink1: document.getElementById("navLink1"),
      navLink2: document.getElementById("navLink2"),
      navLink3: document.getElementById("navLink3"),
      legalContentTerms: document.getElementById("legalContentTerms"),
      legalContentPrivacy: document.getElementById("legalContentPrivacy")
  };

  const socialMediaLinks = document.getElementById("socialMediaLinks");

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  let activeContainer = null;

  function showContainer(container) {
      if (activeContainer) hideContainer(activeContainer);
      container.style.display = "block";
      overlay.style.display = "block";
      activeContainer = container;
  }

  function hideContainer(container) {
      container.style.display = "none";
      overlay.style.display = "none";
      activeContainer = null;
  }

  // Event listeners for pop-up containers
  links.navLink1.addEventListener("click", function(event) {
      event.stopPropagation();
      showContainer(containers.aboutUs);
  });

  links.navLink2.addEventListener("click", function(event) {
      event.stopPropagation();
      showContainer(containers.teamMembers);
  });

  links.legalContentTerms.addEventListener("click", function(event) {
    event.stopPropagation();
    showContainer(containers.tos);
});

links.legalContentPrivacy.addEventListener("click", function(event) {
  event.stopPropagation();
  showContainer(containers.pp);
});

  // Toggle dropdown for social media
  links.navLink3.addEventListener("click", function(event) {
      event.stopPropagation();
      socialMediaLinks.style.display = 
          socialMediaLinks.style.display === "block" ? "none" : "block";
  });

  // Close dropdown and pop-ups if clicking outside
  document.addEventListener("click", function() {
      if (socialMediaLinks.style.display === "block") {
          socialMediaLinks.style.display = "none";
      }
      if (activeContainer) hideContainer(activeContainer);
  });

  for (let key in containers) {
      let container = containers[key];
      let closeButton = document.createElement("span");
      closeButton.innerHTML = "&times;";
      closeButton.style.position = "absolute";
      closeButton.style.top = "10px";
      closeButton.style.right = "10px";
      closeButton.style.color = "white"
      closeButton.style.cursor = "pointer";
      closeButton.style.fontSize = "1.5em";

      closeButton.addEventListener("click", function() {
          hideContainer(container);
      });

      container.prepend(closeButton);
      hideContainer(container);
  }

  overlay.addEventListener("click", function() {
      if (activeContainer) hideContainer(activeContainer);
  });
});