	 function changeText(text) {
	   document.getElementById('region-text').innerText = text;
	 
	   const hideableElements = document.getElementsByClassName('hideable');
	   const newElements = document.getElementById('new-elements');
	   const signElements = document.getElementById('sign-elements');
	 
	   if (text === 'CHARACTER') {
	     for(let i = 0; i < hideableElements.length; i++) {
	       hideableElements[i].style.display = 'none';
	     }
	     newElements.style.display = 'initial';
	     signElements.style.display = 'none';
	     document.body.style.overflowY = 'hidden';
	   } else if (text === 'SIGN') {
	     for(let i = 0; i < hideableElements.length; i++) {
	       hideableElements[i].style.display = 'none';
	     }
	     newElements.style.display = 'none';
	     signElements.style.display = 'initial';
	     document.body.style.overflowY = 'visible';
		 document.body.style.overflowX = 'hidden';
	   } else if (text === 'REGION') {
	     for(let i = 0; i < hideableElements.length; i++) {
	       hideableElements[i].style.display = 'initial';
	     }
	     newElements.style.display = 'none';
	     signElements.style.display = 'none';
	     // Add this line to make overflow content invisible
	     document.body.style.overflowY = 'hidden';
	   }
	 }



	function relationshipText() {
		const elementsToHide = document.querySelectorAll('.hideable');
		
		elementsToHide.forEach((element) => {
      element.style.display = 'none';
   });
		const otherContent = document.getElementById('otherContent');
   otherContent.style.display = 'block';

	}
	
