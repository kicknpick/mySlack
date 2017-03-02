$(document).ready(function() {
  
  var myslacksContainer = $(".myslacks-container");

  // Our initial todos array
  var myslacks = [];

  // Getting todos from database when page loads
  getMySlacks();

  // This function resets the todos displayed with new todos from the database
  function initializeRows() {
    myslacksContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < myslacks.length; i++) {
      rowsToAdd.push(createNewRow(myslacks[i]));
    }
    myslacksContainer.prepend(rowsToAdd);
  }

  // This function grabs todos from the database and updates the view
  function getMySlacks() {
    $.get("/api/myslacks", function(data) {
      myslacks = data;
      initializeRows();
    });
  }

});
