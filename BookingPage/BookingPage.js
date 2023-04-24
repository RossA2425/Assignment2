var buttons = document.getElementsByClassName("ticket-button");

for (var i = buttons.length - 1; i >= 0; i--) {
		var selectedButton;
		buttons[i].onclick=function(){
    	if(selectedButton){
    		selectedButton.classList.remove("selection");
    	}
      this.classList.add("selection");
      selectedButton=this;
    }
    
};