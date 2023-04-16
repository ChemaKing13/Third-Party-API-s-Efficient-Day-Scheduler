// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
var currentDayEl = $('#currentDay'); 

//here we add the specific classes to the hourBox element by using JQuery
var hourBox = $('.hour-box').addClass('hour-box time-block row'); 

// the code isn't run until the browser has finished rendering all the elements
// in the html.
function displayTime() {
  var rightNow = dayjs().format('dddd, MMMM D'); 
  currentDayEl.text(rightNow); 
}

//get the current hour and stored in a new varible 
var currentHour = dayjs().format('HH'); 


$('.hour-box').each(function() {
  var hourBox = $(this); 

  //here we are getting the id attribute from the element hourBox 
  var boxId = parseInt(hourBox.attr('id'));
  //console.log("The value of box ID is: " + boxId); 
  
  //with this conditonal stament it will aplly the correct class daccording to 
  //the moment of the day 

  if (boxId < currentHour) {
    $('.hour-box').addClass("past")
  } else if (boxId > currentHour) {
    $('.hour-box').addClass("future"); 
  } else {
    $('.hour-box').addClass("present"); 
  }

}); 



$(function () {

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
  
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    
    
  });



  displayTime(); 

