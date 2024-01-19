

  document.addEventListener("DOMContentLoaded", function () {
    var popup = document.getElementById("imagePopup");
    var popupImage = document.getElementById("popupImage");
    var closePopup = document.getElementById("closePopup");

    // Get all player links
    var playerLinks = document.querySelectorAll("#table tr[id^='column'] td.one a");
   
   

    // Add click event listeners to each player link
    playerLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        var imagePath = link.getAttribute("href");
        popupImage.src = imagePath;
        popup.style.display = "flex";
      });
    });



     // Handle "Did not bat" section
     var didNotBatLinks = document.querySelectorAll("#column11 a");

     didNotBatLinks.forEach(function (link) {
       link.addEventListener("click", function (event) {
         event.preventDefault();
         var imagePath = link.getAttribute("href");
         popupImage.src = imagePath;
         popup.style.display = "flex";
       });
     });

    // Close the popup when the close button is clicked
    closePopup.addEventListener("click", function () {
      popup.style.display = "none";
    });

    // Close the popup when clicking outside the popup
    window.addEventListener("click", function (event) {
      if (event.target === popup) {
        popup.style.display = "none";
      }
    });
  });

