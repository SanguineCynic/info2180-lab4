searchbtn = document.getElementById('search')



searchbtn.addEventListener("click", function(){

  const xhttp = new XMLHttpRequest();

  let phpurl = "http://localhost/info2180-lab4/superheroes.php";

  function doSomething() {
    if (xhttp.readyState === XMLHttpRequest.DONE) {
      if (xhttp.status === 200) {
        let response = xhttp.responseText;
        console.log(response)

        alert(response);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }

  xhttp.onreadystatechange = doSomething;

  xhttp.open('GET', phpurl);

  xhttp.send();

})
