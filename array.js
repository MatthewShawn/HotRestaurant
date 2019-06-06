
$(document).ready(function () {

var reservationList  = [
  {
    1: "Ryan"
  },
  {
    2:"Stetson"
  },
  {
   3: "Matthew" 
  },
  {
    4: "Bryan"


  },
   { 5: "Evan"

}
];


var reservationlistInput = $("#name").val().trim();


$(".add-btn").on('click', function (event) {

    event.preventDefault();
    reservationList.push(reservationlistInput);

})

var waitingListInput = $("#waitingList").val().trim();

if(reservationlist.length>=5){
waitingList.push(waitingListInput); 
}

var waitingList = [];

})