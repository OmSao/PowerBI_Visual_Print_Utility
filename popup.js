// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let popupBody_element = document.getElementById('popupBody');
let choice_button_yes_no = null;
let choice_timestamp_yes_no = null;
let choice_pagetitle_yes_no = null;
let choice_header_text = "";

document.getElementById("saveButton").onclick = function()
{
	document.getElementById("saveButton").style.backgroundColor = "#ccc";
}
//chrome.storage.sync.set({"choice_button_yes_no": false, "choice_timestamp_yes_no": true, "choice_pagetitle_yes_no": true, "choice_header_text": ""}, function(){ }  );

//let toggleSelection = document.getElementsByClassName("switch-input")[0].checked ? 'yes' : 'no'
//chrome.storage.sync.get('color', function(data) {
chrome.storage.sync.get(null, function(data) {   //if instead of a key, null is given, then it will provide whole object containing all the stored keys:values pair with name data.
  popupBody_element.style.backgroundColor = "#3B3A39";//data.color;
  //popupBody_element.setAttribute('value', data.color);
  
  popupBody_element.onclick = function(element) {
	  choice_button_yes_no = document.getElementById("button_yes_no_switch").checked;
	  choice_timestamp_yes_no = document.getElementById("timestamp_yes_no_switch").checked;
	  choice_pagetitle_yes_no = document.getElementById("page_title_yes_no_switch").checked;
	  choice_header_text = document.getElementById("message_input").value;
	  
	  document.getElementById("saveButton").style.backgroundColor = "#2196F3";
	  
	  //chrome.storage.sync.clear();
	  //chrome.storage.sync.remove(["choice_button_yes_no", "choice_timestamp_yes_no", "choice_timestamp_yes_no", "choice_header_text", "chrome_choice_button_yes_no", "chrome_choice_timestamp_yes_no", "chrome_choice_pagetitle_yes_no", "chrome_choice_header_text"]);
	  
	  /*chrome.storage.sync.set({chrome_choice_button_yes_no: choice_button_yes_no});
	  chrome.storage.sync.set({chrome_choice_timestamp_yes_no: choice_timestamp_yes_no});
	  chrome.storage.sync.set({chrome_choice_pagetitle_yes_no: choice_pagetitle_yes_no});
	  chrome.storage.sync.set({chrome_choice_header_text: choice_header_text});*/
	  //console.log("DATA(popup.js):==>", data);
	  /*localStorage.setItem("a", "Apple");
	  localStorage.setItem("b", "Boy");
	  localStorage.setItem("lastname", "Smith");
	  console.log("===>"+localStorage.getItem("lastname"));
	  */
	  /*chrome.storage.sync.get("choice_button_yes_no", function (obj) {
		//console.log(obj);
		console.log("Chrome storage inside", obj.choice_button_yes_no);
	   });
	  //console.log("Chrome storage outside", );
	  */
	  console.log("popup.js==>"+choice_button_yes_no, choice_timestamp_yes_no, choice_pagetitle_yes_no, choice_header_text);
	  
	  if(document.getElementById("button_yes_no_switch").checked){
		//let color = element.target.value;
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		  chrome.tabs.executeScript(
			  tabs[0].id,
			  //allFrames: true,
			  //{code: 'document.body.style.backgroundColor = "' + color + '";'});
			  //{code: 'document.getElementsByTagName("visual-modern")[1].style.background = "' + color + '";'});
			  //{	code: 'for(i=0; i<document.getElementsByTagName("visual-modern").length;i++) {		document.getElementsByTagName("visual-modern")[i].style.background = "' + color + '";}'	  });
			  /*{code: ' console.log("CLICKED");  console.log(document.querySelector("li.divider") );   document.querySelector("li.visualLastRefreshTime")[0];  var newWindowContent = document.getElementsByTagName("visual-modern")[1].parentElement.innerHTML;  var newWindow = window.open("", "", "width=500,height=400");  newWindow.document.write(newWindowContent); '});*/
			 //{code: ' var newLI = document.createElement('li'); newLI.innerHTML = "Click to Print";  var targetElm =  document.querySelector("li.divider")[0]; console.log(document.querySelector("li.divider") );  '});  //targetElm.parentNode.insertBefore(newLI, targetElm);
				//SAFE:  {code: '  var newLI = document.createElement('button'); newLI.innerHTML = "Click to Print";  newLI.setAttribute("_ngcontent-bmb-c45",""); newLI.setAttribute("style", "background-color: #3B3A39; border-radius: 5px; margin-right: 20px; color: #FAF9F8; font-weight: 400; font-size: 16px; padding: 0px 10px;");   document.getElementsByTagName("li")[2].insertBefore(newLI, document.getElementsByTagName("li")[2].childNodes[0]); '}); 
			  //{code: ' var newWindowContent = document.getElementsByTagName("visual-container-modern")[1].parentElement.innerHTML;  var newWindow = window.open("", "", "width=500,height=400");  newWindow.document.write(newWindowContent); '});
			  {code: '  if(document.getElementById("clickToPrintButton")) { document.querySelectorAll("[name=\'printIframe\']").forEach(e => e.parentNode.removeChild(e)); document.getElementById("clickToPrintButton").remove(); console.log("Print button removed for inserting again."); }  var newLI = null; newLI = document.createElement("button"); newLI.setAttribute("id", "clickToPrintButton"); newLI.setAttribute("onclick", "clickEvent()"); newLI.innerHTML = "Click to Print";  newLI.setAttribute("_ngcontent-bmb-c45",""); newLI.setAttribute("style", "background-color: #3B3A39; border-radius: 5px; margin-left: 20px; margin-right: 20px; color: #FAF9F8; font-weight: 400; font-size: 16px; padding: 0px 10px;");   /*document.getElementsByTagName("li")[2].insertBefore(newLI, document.getElementsByTagName("li")[2].childNodes[0]);    */  /*document.getElementById("clickToPrintButton").removeAttribute("onclick");*/ if(!document.getElementById("clickToPrintButton")) { document.getElementsByClassName("popOutBar")[0].appendChild(newLI);  document.getElementById("clickToPrintButton").onclick = function(){ alert("Choose Save as PDF in Destination for Exporting as PDF. Try changing Layout to Portrait or Landscape mode to check which suits better."); printUtility('+choice_button_yes_no+','+ choice_timestamp_yes_no+','+ choice_pagetitle_yes_no+',"'+ choice_header_text+'");}    } else{console.log("clickToPrintButton already present");}  '});
		});
	  }
	  
	if(!document.getElementById("button_yes_no_switch").checked){
		//let color = element.target.value;
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		  chrome.tabs.executeScript(
			  tabs[0].id,
			  {code: 'if(document.getElementById("clickToPrintButton")) {document.getElementById("clickToPrintButton").remove(); console.log("print button removed."); } '});
		});
	  }
	}

  
});