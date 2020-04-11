/* let page = document.getElementById('buttonDiv');
  const kButtonColors = ['#3b3a39', '#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
  function constructOptions(kButtonColors) {
    for (let item of kButtonColors) {
      let button = document.createElement('button');
      button.style.backgroundColor = item;
      button.addEventListener('click', function() {
        chrome.storage.sync.set({color: item}, function() {
          console.log('color is ' + item);
		  //console.log("options.js==>", );
        })
      });
      page.appendChild(button);
    }
  }
  constructOptions(kButtonColors);
  */
  