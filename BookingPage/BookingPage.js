var buttons = document.getElementsByClassName('ticket-button');
for (var i = buttons.length - 1; i >= 0; i--) {
		var currentbtn;
		buttons[i].onclick=function(){
    	if(currentbtn){
    		currentbtn.classList.remove("highlight");
    	}
      this.classList.add("highlight");
      currentbtn=this;
    }
    
};