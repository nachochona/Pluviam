document.getElementById("email").addEventListener("click", function() {
    var defaultSubject = "";
    var defaultBody = "";
  
    var mailtoLink = "mailto:ignagab@gmail.com?subject=" +
                     encodeURIComponent(defaultSubject) +
                     "&body=" + encodeURIComponent(defaultBody);
  
    window.location.href = mailtoLink;
  });
  