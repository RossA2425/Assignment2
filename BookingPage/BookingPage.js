var buttons = document.getElementsByClassName('ticket-button');
for (var i = buttons.length - 1; i >= 0; i--) {
		var currentbutton;
		buttons[i].onclick=function(){
    	if(currentbutton){
    		currentbutton.classList.remove("highlight");
    	}
      this.classList.add("highlight");
      currentbutton=this;
    }
    
};
