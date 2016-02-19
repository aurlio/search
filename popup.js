

function Message(type,value){
	this.type = type;
	this.value = value;
}

function update_index(response){
	// update current index and total number in popup.html
}

function key_change(event){
	//send key word as message to content script
	var key = event.currentTarget.value;
	var msg = new Message("key",key);
	
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, msg, update_index);
		console.log("sending message:" + msg);
	});
	
}


function search_click(event){
	
	//send message to current active tab
	var action = event.currentTarget.name;
	var msg = new Message("search_action",action);
	
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, msg, update_index);
		console.log("sending message:" + msg);
	});
	
	
	
}

function case_sensitive(event){
	
	var isChecked = event.currentTarget.checked;
	var msg = new Message("case_sensitive",isChecked);
	
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, msg, update_index);
		console.log("sending message:" + msg);
	});
	
	
}

function words_filter(event){
	var isChecked = event.currentTarget.checked;
	var msg = new Message("words",isChecked);
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, msg, update_index);
		console.log("sending message:" + msg);
	});	
	
}

document.addEventListener("DOMContentLoaded",function(){
	var key = document.getElementById("search-key");
	key.addEventListener("change",key_change);
	
	var up = document.getElementById("up-search");
	up.addEventListener("click",search_click);
	
	var down = document.getElementById("down-search");
	down.addEventListener("click",search_click);
	
	var casesen = document.getElementById("case-sensitive");
	casesen.addEventListener("click",case_sensitive);
	
	var words = document.getElementById("words");
	words.addEventListener("click",words_filter);
	
});
