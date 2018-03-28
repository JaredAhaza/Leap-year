$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leap year(year);
    $("#result").text(result);
  });
});
//$(document).ready(function() {
  //  $("form#leap-year").submit(function(event) {
    //  event.preventDefault();
      //var year = parseInt($("input#year").val());
//      var result = leapYear(year);
  //    $("#result").text(result);
    //});
//  });
