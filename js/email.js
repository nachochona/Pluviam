document.getElementById("email").addEventListener("click", function() {
    var defaultSubject = "";
    var defaultBody = "";
  
    var mailtoLink = "mailto:pluviambanda@gmail.com?subject=" +
                     encodeURIComponent(defaultSubject) +
                     "&body=" + encodeURIComponent(defaultBody);
  
    window.location.href = mailtoLink;
  });
  