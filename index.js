// Code your solution in this file!

function logDriverNames(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location){
  
  drivers.forEach(function(driver){
    if(driver.location === location){
      console.log(driver.name);
    }
  });
}