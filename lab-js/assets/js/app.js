// function 
//alert('hello js');

//variables
var animal = "cat";
var age = 8;
var clothing = ["shirts", "socks", "pants"];
var winner = false;
var checking_account = 1000;

console.log(winner);


//functions
function print_text() {
	$('.value').html();
}

function charge_cc(item_value, brand_name) {
	alert('You will be charged ' + item_value + ' for this ' + brand_name + ' item');
	alert('your checking account balance is ' + checking_account); 

	if (checking_account < item_value) {
	if (checking_account < 1) {
		alert('you dont have any money');
	}	else {
		alert('You dont have enough money to purchase this item');
    }

	} else {
	checking_account = checking_account - item_value;
	alert('charge successful');
	display_checking_balance();
	alert('checking balance is ' + checking_account);
     }
 }

 function display_checking_balance() {
 	$('.value').html(checking_account);
 }


 $('.item').click(function() {
 	var item = $(this).data('value');
 	charge_cc(item_value);


 });


 


	//the value of the thing we're buying
	//checking account balance




//if (age > 12) {
	//alert('enjoy the movie');
	//} else if (age > 14) {
	 // alert('spotlight');
	//} else {
	//  alert('you are cute');
//	}


