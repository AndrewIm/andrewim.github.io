function printout() {
  
  document.getElementById("print").innerHTML = "CSV Format: "+
   document.getElementById('number').value + "," +
    document.getElementById('first').value + "," +
     document.getElementById('last').value + "," +
      document.getElementById('date').value + "," +
       document.getElementById('time').value;
          }

