window.addEventListener('load', function(){
	var arrayImages = document.getElementsByClassName("animal");
	var selector = document.getElementById("selectores");

	selector.addEventListener('change',function(){
		for(var i=0; i<arrayImages.length; i++){
			arrayImages[i].classList.add(selector.value);
			
			if(selector.value=="original"){
				arrayImages[i].classList.remove("sepia");
				arrayImages[i].classList.remove("brightness");
				arrayImages[i].classList.remove("contrast");
				arrayImages[i].classList.remove("grayscale");
				arrayImages[i].classList.remove("invert");
			}
		}

	});
});