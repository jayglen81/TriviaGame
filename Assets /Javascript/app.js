var counter = 15;
var interval = setInterval(function() {
    counter--;
    // Display 'counter' wherever you want to display it.
    if (counter <= 0) {
     		clearInterval(interval);
      	$('#timer').html("<h3>Count down complete</h3>");  
        return;
    }else{
    	$('#time').text(counter);
        document.getElementById("timer").innerHTML = counter;
    }
}, 1000);