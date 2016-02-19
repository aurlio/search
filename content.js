
(function(){
		
	//handle received messsage
	chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
		//console.log(request);
		var type = request.type;
		var value = request.value;
		switch(type){
			case "key":
				//update search result
				break;
			case "search_action":
				if(value == "up"){
					//move cursor to previous key word
				}else if (value == "donw"){
					//move cursor to next key word
				}
				break;
			case "case_sensitive":
				// update search result
				break;
			case "words":
				// update search result
				break;
			default:
				console.log("invalid message :" + request);
				break;
		}
		
		result = update_search(key);
		//send current index and total number back
		sendResponse(result);
		
		
	});	
	
	
	function update_search(key){
		
		var current_index = 0;
		var total_number = 0;
		
		//update index
		
		return {
			current:current_index;
			total:total_number;
		}
	}
	
	function render(){
		// change background color of key words
	}
	
	//(recursion) traverse nodes
	function traverse_nodes(root){
		var children = root.children;
		if(children){
			for(var i = 0; i < children.length; i++){
				var child = children[i];
				traverse_nodes(child);
			}
		}else{//leaf node
			//find key in text, and append node in list
		}
	}
	
	
})();
