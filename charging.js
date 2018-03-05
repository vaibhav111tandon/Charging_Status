navigator.getBattery().then(function(battery){
 function checkCharging() 
  {
   if(battery.charging==true)
     {
       $('p').html("YOUR DEVICE IS CHARGING");
       $('body').css("background-color","#46c43a");
       $('h2').hide();
     }
    else{
      $('p').html("YOUR DEVICE IS NOT CONNECTED TO THE CHARGER");
      $('h2').show();
      checkDischarge();
    }
  }
  checkCharging();
  function checkPercent()
  {
  $('h1').html(Math.round(battery.level*100)+"%");
  }
  checkPercent();
  function checkDischarge()
  {
  $('span').html(Math.round(battery.dischargingTime/60)+" minutes");
  }
});
