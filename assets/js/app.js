window.addEventListener('load', function(){
	var arrayImages = document.getElementsByClassName("animal");
	var selector = document.getElementById("selectores");

	selector.addEventListener('change',function(){
		for(var i=0; i<arrayImages.length; i++){			
			if(selector.value=="original"){
				arrayImages[i].classList.remove("sepia");
				arrayImages[i].classList.remove("grayscale");
				arrayImages[i].classList.remove("invert");
			}

			if(selector.value=="grayscale"){
				arrayImages[i].classList.add("grayscale");
				arrayImages[i].classList.remove("invert");
				arrayImages[i].classList.remove("sepia");			
			}

			if(selector.value=="sepia"){
				arrayImages[i].classList.add("sepia");
				arrayImages[i].classList.remove("grayscale");
				arrayImages[i].classList.remove("invert");				
			}

			if(selector.value=="invert"){
				arrayImages[i].classList.add("invert");
				arrayImages[i].classList.remove("grayscale");
				arrayImages[i].classList.remove("sepia");				
			}

		}

	});
});