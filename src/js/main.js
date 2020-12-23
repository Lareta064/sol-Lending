$(document).ready(function () {
   const bodyEl = document.body;
	// SHOW MOB MENU
	const menuToggle = document.querySelector('.menu-toggle');
	const mobMenu = document.querySelector('#mobile-menu');
	const overlayBlock = document.querySelector('#overlay');
	const mobHeader = document.querySelector('.header');
	
	// if (menuToggle) {
	// 	menuToggle.addEventListener('click', function () {
	// 		if (this.classList.contains('active')) {
	// 			this.classList.remove('active');
	// 			mobMenu.classList.remove('active');
	// 			overlayBlock.classList.remove('active');
	// 			bodyEl.classList.remove('noscroll');
	// 			mobHeader.classList.remove('active');

	// 		} else {
	// 			this.classList.add('active');
	// 			mobMenu.classList.add('active');
	// 			overlayBlock.classList.add('active');
	// 			mobHeader.classList.add('active');
	// 			bodyEl.classList.add('noscroll');

	// 		}
	// 	});
	// 	window.addEventListener('resize', function () {
	// 		menuToggle.classList.remove('active');
	// 		overlayBlock.classList.remove('active');
	// 		bodyEl.classList.remove('noscroll');
	// 		mobMenu.classList.remove('active');
	// 		mobHeader.classList.remove('active');

	// 	});
	// 	mobMenu.addEventListener('click', function () {
	// 		this.classList.remove('active');
	// 		menuToggle.classList.remove('active');
	// 		overlayBlock.classList.remove('active');
	// 		mobHeader.classList.remove('active');
	// 		bodyEl.classList.remove('noscroll');

	// 	})
	// }



   
	//  show Reviews
	const reviewContent = document.getElementById('review-content');  
	const btnShowReviewContent = document.getElementById('showReview'); 
	if(reviewContent){
		btnShowReviewContent.addEventListener('click', function(){
			
		this.classList.add('hide');
		reviewContent.classList.remove('hide');
		let fullReviewHeight = document.querySelector('.review-wrapper').clientHeight;
		let heightValue = +fullReviewHeight+'px';
		reviewContent.setAttribute('style', `height: ${heightValue}`);

		});
	}
	// video review
	const videoContents = document.querySelectorAll('.video-wrapper');

	function stopAllVideos(){
		for(let vid of videoContents){
			vid.querySelector('video').pause();
			
			vid.querySelector('.btn-play').style.opacity = "1";
		}
	}

	if (videoContents) {
		for(let item of videoContents){
			item.addEventListener('click', function () {
				
			const videoBtn = item.querySelector('.btn-play');
			const bubbleBlock = item.querySelector('.bubble-block');
			const videoClip = item.querySelector('video');			
			
				if (videoClip.paused) {
					stopAllVideos();
					videoClip.play();
					videoBtn.style.opacity = "0";
					bubbleBlock.style.opacity = "0";
					
				} else {
					videoClip.pause();
					videoBtn.style.opacity = "1";
					bubbleBlock.style.opacity = "1";
					
				}
				
			// видео проигралось до конца
			videoClip.addEventListener("ended", function () {
				videoClip.pause();
				videoBtn.style.opacity = "1";
				bubbleBlock.style.opacity = "1";
			});	
		});
		}
	}
	

})