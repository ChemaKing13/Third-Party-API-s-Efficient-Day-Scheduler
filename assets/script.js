// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
var currentDayEl = $('#currentDay'); 


//here we add the specific classes and attr to the hourBox element by using JQuery
var hourBox = $('.hour-box').addClass('hour-box time-block row'); 
var timeText = $('.timeText').addClass('col-2 col-md-1 hour text-center py-3'); 
var textArea = $('.description').addClass('col-8 col-md-10 description').attr('rows', '3');
var saveBtn = $('.saveBtn').addClass('col-2 col-md-1'); 



//this function allow us to generate the date by using Dayjs 
function displayTime() {
  var rightNow = dayjs().format('dddd, MMMM D'); 
  currentDayEl.text(rightNow); 
}

//get the current hour and stored in a new varible 
var currentHour = dayjs().format('HH'); 
//console.log(currentHour); 



//with the variable "hourBox" we select all the elements on the html with the class hour-box
$('.hour-box').each(function() {
  var hourBox = $(this); 

  
 //here we are getting the id attribute from the element hourBox 
 var boxId = parseInt(hourBox.attr('id'));
  //console.log("The value of box ID is: " + boxId); 
  
  //with this conditonal stament it will aplly the correct class daccording to 
  //the moment of the day 
  //each class was defined in the starter code in the css file 
  if (boxId < currentHour) {
    hourBox.addClass("past")
  } else if (boxId > currentHour) {
    hourBox.addClass("future"); 
  } else {
    hourBox.addClass("present"); 
  }

}); 

//this is our event listener, whenever we hit 'click' on the saveBtn 
$('.saveBtn').on('click', function(event) {
  event.preventDefault(); 

  //'this' refers to the saveBtn 
  var userInput = $(this).siblings('.description').val();
  //the id will help us to identify the hour with the activity in the local storage
  var blockId = $(this).closest('.hour-box').attr('id'); 

  //here we are storaging the user input and the id of the hour box
  localStorage.setItem("Hour: " + blockId, "To do: " + userInput); 
  
});

  //finally with this function, we will retrieve the user input value from the local storage
  //according to its id 
  $('.hour-box').each(function() {
    //again we define the id attribute form each hour-box
  var blockId = $(this).attr('id');
  //here we are retrieving the value stored in the localStorage, being identified by its blockId
  var savedData = localStorage.getItem("Hour: " + blockId);

  //if data exist it will be set in the description class
  if (savedData) {
    //the split method will separate a string into an array, the [1] acces to the element index 1, wich is the user input 
    var userInput = savedData.split(": ")[1];
    //finally the user input value will be set in the corresponding child (description) of each hour-box
     $(this).find('.description').val(userInput);
  }
});


displayTime(); 



