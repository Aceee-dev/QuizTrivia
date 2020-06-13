var request = new XMLHttpRequest();

request.open('GET', 'https://opentdb.com/api.php?amount=5', true);

request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
   
}

request.send();