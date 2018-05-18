//business logic
function Bookhotel(hotel,room,checkin,checkout,email){
  this.Hotel=hotel;
  this.Room=room;
  this.Checkin=checkin;
  this.Email=email;

};
var things= "yes"

//userinterface
$(document).ready(function() {
  $("#booknow").click(function() {

    var inputtedhotel = $("input#hotel").val();
    var inputtedroom = $("input#room").val();
    var inputtedcheckout =$("input#checkout");
    var inputtedcheckin =$("input#checkin");
    var inputtedemail =$("input#email");
    var confirm= prompt("Are you sure you want to book the room?")
    if(confirm === things) {
      alert("conngratulations, you have booked the room");
      alert("Hotel:"+inputtedhotel+","+"Checkin:"+inputtedcheckin+"Checkout:"+inputtedcheckout+","+"Rooms:"+inputtedroom+","+"Email"+inputtedeail);
    } else {
      alert("booking cancelled!");
}
});
});
