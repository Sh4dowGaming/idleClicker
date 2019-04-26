var cookies = 0;
function cookieClick(number) {
  cookies = cookies + number;
  document.getElementById("cookies").innerHTML = cookies;
};
var grannies = 0;
function buyGranny() { 
  var grannyCost = Math.floor(10 * Math.pow(1.1,grannies)); 
      if(cookies >= grannyCost) {
      grannies = grannies + 1; 
            cookies = cookies - grannyCost; 
                  document.getElementById('grannies').innerHTML = grannies; 
      document.getElementById('cookies').innerHTML = cookies; 
    };
      var nextCost = Math.floor(10 * Math.pow(1.1,grannies)); 
        document.getElementById('grannyCost').innerHTML = nextCost; 
  };
  window.setInterval(function(){ cookieClick(grannies); }, 1000);
