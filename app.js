var searchbtn = document.getElementById('search');
var result = document.getElementById('result');
var searchbar = document.getElementById('searchbar');

const xhttp = new XMLHttpRequest();
let phpurl = "http://localhost/info2180-lab4/superheroes.php";

if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}//Disables "confirm form resubmission" alert

searchbtn.addEventListener("click", function(e){
  e.preventDefault(); //stop reload
  var url = phpurl + "?query=" + searchbar.value;
  console.log(url)

  function doSomething() {
    if (xhttp.readyState === XMLHttpRequest.DONE) {
      if (xhttp.status === 200) {
        let response = xhttp.responseText;
        console.log(response)

        // alert(response);
        result.innerHTML = response;
      } else {
        // alert('There was a problem with the request.');
        result.innerHTML = 'There was a problem with the request.'
      }
    }
  }

  xhttp.onreadystatechange = doSomething;
  xhttp.open('GET', url);
  xhttp.send();

})
