// This is a function that indicates to the user
// when the search button is pressed　that the operation completed successfully.
$("#searchBtn").on("click", function (e) {
  var subject = $("#subject").val();

  // Display an alert if the input value is blank
  if (subject === null) {
    alert("Please choose a subject");
    return;
  } else {
    console.log("submit button is clicked");
    e.preventDefault();
    $("#form-container").children().hide();

    const el = `<h1 class="message text-center">Thank you for using my search form!!</h1>\
                <div class="reload-btn text-center">\
                  <button onclick="reloadPage()">Reload page</button>\
                </div> `;

    $("#form-container").append(el);
  }
});
